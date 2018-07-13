const fs = require("fs");
var sp = require("serialport");
const path = require('path');
const os = require('os');
var exec = require('child_process').exec;
var $ = window.jQuery = require('jquery');
const app = require('electron').remote.app;

var basepath = app.getAppPath();

refresh_ports();

console.log('platform is ' + process.platform);

var arduino_path = '';
var avrdude_path = '';
var avrdudeconf_path = '';

if (process.platform == 'linux') {
    arduino_path = path.join(basepath, '/arduino-1.8.5/arduino');
    avrdude_path = path.join(basepath, '/arduino-1.8.5/hardware/tools/avr/bin/avrdude');
    avrdudeconf_path = path.join(basepath, '/arduino-1.8.5/hardware/tools/avr/etc/avrdude.conf');
} else {
    arduino_path = path.join(basepath, '/arduino-1.8.5-win/arduino_debug.exe');
    avrdude_path = path.join(basepath, '/arduino-1.8.5-win/hardware/tools/avr/bin/avrdude.exe');
    avrdudeconf_path = path.join(basepath, '/arduino-1.8.5-win/hardware/tools/avr/etc/avrdude.conf');
}

console.log('arduino_path is ' + arduino_path);
console.log('avrdude_path is ' + avrdude_path);

var port = '';
var monitorport = null;

const MONITOR_MAX_SIZE = 256;

document.addEventListener('keydown', function (e) {
    if (e.which === 123) {
        require('electron').remote.getCurrentWindow().toggleDevTools();
    }
});

$(document).ready(function(){
    upload_init();
});

function saveTempCode (code) {
    ino_path = path.join(os.tmpdir(), 'tempcode.ino');
    fs.writeFileSync(ino_path, code);
    console.log('saved ' + ino_path + ' ' + code);
}

function loadTempCode() {
    ino_path = path.join(os.tmpdir(), 'tempcode.ino');
    return fs.readFileSync(ino_path).toString();
}

function upload_init() {
    $('#messages').val(' **** Cargando herramientas... ');
    var code = "void setup(){}\nvoid loop(){}";
    fs.mkdtemp(path.join(os.tmpdir(), 'eb_build_'), function (err, folder) {
        if (err) throw err;
        ino_path = path.join(folder, 'code.ino');
        fs.writeFileSync(ino_path, code);
        console.log(ino_path);
        var command = '\"' + arduino_path + '\" --verify \"' + ino_path + '\" --board arduino:avr:uno --pref build.path=\"' + folder + '_build\"';
        exec(command, { maxBuffer: 20000 * 1024 },
            function (error, stdout, stderr) {
                console.log('stdout: ' + stdout);
                console.log('stderr: ' + stderr);
                console.log('error: ' + error);
                $('#messages').val($('#messages').val() + 'Listo para trabajar :-)\n');
            });
    });
}

function upload() {
    if (port == '') {
        alert('No detectamos una placa conectada.');
        return;
    }

    $('#messagesModal').modal('show');
    $('#messages_modal').html('<h3>Compilando...</h3>Por favor espera mientras compilamos tu programa.');
    $('#image_modal').html('<div class="h-150 vertical-align text-center"><div class="loader vertical-align-middle loader-ellipsis"></div>');

    $('#messages').val(' **** Compilando...\n');

    var code = '';
    try {
        code = Blockly.Arduino.workspaceToCode();
    } catch (error) {
        console.log('upload error:' + error);
        code = editor.getValue();
    }

    fs.mkdtemp(path.join(os.tmpdir(), 'eb_build_'), function (err, folder) {
        if (err) throw err;
        ino_path = path.join(folder, 'code.ino');
        fs.writeFileSync(ino_path, code);
        console.log(ino_path);
        var command = '\"' + arduino_path + '\" --verify \"' + ino_path + '\" --board arduino:avr:uno --pref build.path=\"' + folder + '_build\"';
        var next = false;
        console.log("exec: " + command);
        exec(command, { maxBuffer: 20000 * 1024 },
            function (error, stdout, stderr) {
                console.log('stdout: ' + stdout);
                console.log('stderr: ' + stderr);
                console.log('error: ' + error);
                $('#messages').val($('#messages').val() + stdout);
                $('#messages').val($('#messages').val() + stderr);
                if (stderr.includes('error')) {
                    $('#messages').val($('#messages').val() + error);
                    $('#messages_modal').html('<h3>Hubo un error en tu código.</h3>Verifica los mensajes de la consola.');
                    $('#messages').val($('#messages').val() + '\n **** Errores al compilar. Por favor verifica tu código.');
                    $('#image_modal').html('<img src="images/error.png">');
                } else {
                    $('#messages').val($('#messages').val() + '\n **** Compilación finalizada correctamente.');
                    next = true;
                }
                var textarea = document.getElementById('messages');
                textarea.scrollTop = textarea.scrollHeight;
                if (next) {
                    hex_path = folder + '_build/code.ino.hex';
                    command = '\"' + avrdude_path + '\" -C\"' + avrdudeconf_path + '\" -v -patmega328p -carduino -P' + port + ' -b115200 -D -Uflash:w:\"' + hex_path + '\":i';
                    console.log("exec: " + command);
                    $('#messages').val($('#messages').val() + '\n **** Cargando programa en la placa...\n');
                    $('#messages_modal').html('<h3>Programando...</h3>Por favor espera mientras cargamos tu programa en la placa.');
                    exec(command, { maxBuffer: 20000 * 1024 },
                        function (error, stdout, stderr) {
                            console.log('stdout: ' + stdout);
                            console.log('stderr: ' + stderr);
                            console.log('error: ' + error);
                            $('#messages').val($('#messages').val() + stdout);
                            $('#messages').val($('#messages').val() + stderr);
                            if (error) {
                                $('#messages').val($('#messages').val() + error);
                                $('#messages_modal').html('<h3>Hubo un error.</h3>Verifica que tu placa esté conectada.');
                                $('#image_modal').html('<img src="images/error.png">');
                                $('#messages').val($('#messages').val() + '**** NO SE DETECTA UNA PLACA CONECTADA ****\n');
                            } else {
                                $('#messages_modal').html('<h3>Excelente trabajo.</h3>Tu código fue cargado correctamente.');
                                $('#image_modal').html('<img src="images/ok.gif">');
                                $('#messages').val($('#messages').val() + '\n **** Carga finalizada correctamente.');
                            }
                            textarea.scrollTop = textarea.scrollHeight;
                        });
                }
            });
    });
}

function update_monitor_messages(data) {
    if ($('#monitor').val().length + data.length > MONITOR_MAX_SIZE) {
        $('#monitor').val($('#monitor').val().substr(data.length, $('#monitor').val().length - data.length));
    }
    $('#monitor').val($('#monitor').val() + data);
    var textarea = document.getElementById('monitor');
    textarea.scrollTop = textarea.scrollHeight;
}

function open_monitor() {
    $('#monitor').val('');

    monitorport = new sp(port, { baudRate: 9600 });
    monitorport.on('data', function (data) {
        console.log('Data:', data);
        update_monitor_messages(data);
    });
    monitorport.on('readable', function () {
        var data = port.read();
        update_monitor_messages(data);
        console.log('Data:', data);
    });

    $('#selPort').prop('disabled', true);
}

function close_monitor() {
    $('#selPort').prop('disabled', false);
    monitorport.close(function (err) {
        console.log('port closed', err);
    });
    delete monitorport;
    monitorport = null;
}

function monitor() {
    if (document.getElementById('btnMonitor').value == 'Open monitor') {
        document.getElementById('btnMonitor').value = 'Close monitor';
        open_monitor();
    } else {
        document.getElementById('btnMonitor').value = 'Open monitor';
        close_monitor();
    }
}

function find_port(name) {
    var found = false;
    var selectBox = document.getElementById('selPort');
    for (var i = 0; i < selectBox.options.length; i++) {
        if (selectBox.options[i].value == name) {
            found = true;
            break;
        }
    }
    return found;
}

function update_ports(name, index) {
    if (find_port(name) == false) {
        var x = document.getElementById('selPort');
        console.log('available port[' + index + ']: ' + name);
        var option = document.createElement('option');
        option.text = name;
        x.add(option);
        if ((port == '') && (index == 0)) {
            port = name;
            console.log('selected port: ' + name);
        }
    }
}

function set_port() {
    var selectBox = document.getElementById('selPort');
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;
    port = selectedValue;
    console.log('selected port: ' + selectedValue);
}

function refresh_ports() {
    var index = 0;
    $('#selPort').empty();
    port = '';
    sp.list(function (err, ports) {
        ports.forEach(function (port) {
            if (port.comName.indexOf('COM') != -1 ||
                port.comName.indexOf('ACM') != -1 ||
                port.comName.indexOf('USB') != -1) {
                console.log(port.comName + ' ' + port.manufacturer);
                update_ports(port.comName, index);
                index++;
            }
        });
    });
}
