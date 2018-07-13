/**
 * Execute the user's code.
 * Just a quick and dirty eval.  No checks for infinite loops, etc.
 */
var uploaded = false;
var logedOut = false;
function runJS() {
  var code = Blockly.Generator.workspaceToCode('JavaScript');
  try {
    eval(code);
  } catch (e) {
    alert('Program error:\n' + e);
  }
}

/**
 * Backup code blocks to localStorage.
 */
function backup_blocks() {
  if ('localStorage' in window) {
    var xmlDom = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace);
    var xmlText = Blockly.Xml.domToPrettyText(xmlDom);
    window.localStorage.setItem("blockly.xml", xmlText);
  }
}

/**
 * Restore code blocks from localStorage.
 */
function restore_blocks_server(xml) {
  var xmlText = xml;
  if (xmlText) {
    Blockly.mainWorkspace.clear();
    xmlDom = Blockly.Xml.textToDom(xmlText);
    Blockly.Xml.domToWorkspace(Blockly.mainWorkspace, xmlDom);
  }
}


/**
 * Restore code blocks from localStorage.
 */
function restore_blocks() {
  var xmlText = localStorage.getItem("blockly.xml");
  if (xmlText) {
    Blockly.mainWorkspace.clear();
    xmlDom = Blockly.Xml.textToDom(xmlText);
    Blockly.Xml.domToWorkspace(Blockly.mainWorkspace, xmlDom);
  }
}

/*
 * auto save and restore blocks
 */
function auto_save_and_restore_blocks() {
  // Restore saved blocks in a separate thread so that subsequent
  // initialization is not affected from a failed load.
  window.setTimeout(restore_blocks, 0);
  // Hook a save function onto unload.
  bindEvent(window, 'unload', backup_blocks);
  //tabClick(selected);

  // Init load event.
  //var loadInput = document.getElementById('load');
  //loadInput.addEventListener('change', load, false);
  //document.getElementById('fakeload').onclick = function() {
  //  loadInput.click();
  //};
}


/*
 * auto save and restore blocks from server
 */
function auto_save_and_restore_blocks_server(xml) {
  // Restore saved blocks in a separate thread so that subsequent
  // initialization is not affected from a failed load.
  window.setTimeout(restore_blocks_server(xml), 0);
  // Hook a save function onto unload.
  bindEvent(window, 'unload', backup_blocks);
  //tabClick(selected);

  // Init load event.
  //var loadInput = document.getElementById('load');
  //loadInput.addEventListener('change', load, false);
  //document.getElementById('fakeload').onclick = function() {
  //  loadInput.click();
  //};
}


/**
 * Restore code blocks from localStorage.
 */
function restore_blocks() {
  var xmlText = localStorage.getItem("blockly.xml");
  if (xmlText) {
    Blockly.mainWorkspace.clear();
    xmlDom = Blockly.Xml.textToDom(xmlText);
    Blockly.Xml.domToWorkspace(Blockly.mainWorkspace, xmlDom);
  }
}

/**
 * Save Arduino generated code to local file.
 */
function saveCode() {
  //var fileName = window.prompt('¿Cómo querés llamar al archivo?', 'Archivo')
  var fileName = "offlineCode"
  //doesn't save if the user quits the save prompt
  if(fileName){
    var blob = new Blob([Blockly.Arduino.workspaceToCode()], {type: 'text/plain;charset=utf-8'});
    saveAs(blob, fileName + '.ino');
  }
}



/**
 * Save blocks to local file.
 * better include Blob and FileSaver for browser compatibility
 */
function save() {
  var xml = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace);
  var data = Blockly.Xml.domToText(xml);
  //var fileName = window.prompt('¿Cómo querés llamar al proyecto?', 'Proyecto');
    var fileName = "offlineProject"

    // Store data in blob.
  // var builder = new BlobBuilder();
  // builder.append(data);
  // saveAs(builder.getBlob('text/plain;charset=utf-8'), 'blockduino.xml');
  if(fileName){
    var blob = new Blob([data], {type: 'text/xml'});
    saveAs(blob, fileName + ".xml");
  }
}


/**
 * Begin a new project.
 */
function newProject() {
    Blockly.mainWorkspace.clear();
    Blockly.Xml.domToWorkspace(Blockly.getMainWorkspace(),
      document.getElementById('startBlocks'));

    uploadCode('nuevoproyecto','','', '', '', function(status, errorInfo) {
      if (status == 200) {
        uploaded = false;

        alertOk("El proyecto fue creado correctamente")

        setTimeout(
          function() {
            var url = window.location.origin+"/";
            window.location.href = url;
          }, 1000);

      } else {
        //alert("Error creando nuevo proyecto: " + errorInfo);
        alertWarning("Intentelo nuevamente "+ errorInfo)

      }
    });
}


/**
 * Delete project.
 */
function deleteProject(idInserted) {
  if (!idInserted && uploaded == false){
    //alert('Debe guardar el proyecto primero')
    alertWarning("El proyecto no esta guardado")
  }else{
    if (window.confirm('¿Desea eliminar el proyecto?')) {
      Blockly.mainWorkspace.clear();

      uploadCode('eliminarproyecto','', '', '', '', function(status, errorInfo) {
        if (status == 200) {
          uploaded = false;
          alertOk("El proyecto fue eliminado con éxito")
        } else {
          //alert("Error creando nuevo proyecto: " + errorInfo);
          alertWarning("Intentelo nuevamente "+ errorInfo)

        }
      });
    }
  }
}

/**
 * Change project name.
 */
function changeName(idInserted) {
  if (!idInserted && uploaded == false){
    //alert('Debe guardar el proyecto primero')
    alertWarning("Debe guardar el proyecto primero")


  }else{
    if (window.confirm('¿Desea cambiar el nombre del proyecto?')) {
      //var fileName = window.prompt('¿Cómo querés llamar al proyecto?', 'Proyecto');
      var fileName = "offlineProject"


        if (fileName != null) {
        uploadCode('cambiarnombreproyecto','','', fileName, '', function(status, errorInfo) {
          if (status == 200) {
            uploaded = true;
            alertOk("El nombre fue cambiado con éxito")


            setTimeout(
              function() {
                location.reload();
              }, 1000);
          } else {
            //alert("Error creando nuevo proyecto: " + errorInfo);
            alertWarning("Intentelo nuevamente "+ errorInfo)
          }
        });
      }
    }
  }
}


/**
 * Copy project.
 */
function copyProject(idInserted) {
  if (!idInserted && uploaded == false){
    //alert('Debe guardar el proyecto primero')
    alertWarning("Debe guardar el proyecto primero")


  }else{
    if (window.confirm('¿Desea crear una copia del proyecto?')) {
      //var fileName = window.prompt('¿Cómo querés llamar a la copia del proyecto?', 'Proyecto');
      var fileName = "copyOfProject";

      if (fileName != null) {
        uploadCode('copiarproyecto', '', '', fileName, '', function (status, errorInfo) {
          if (status == 200) {
            //alert("Programa copiado correctamente");
            uploaded = true;
            alertOk("El proyecto fue copiado con éxito")

          } else {
            //alert("Error creando nuevo proyecto: " + errorInfo);
            alertWarning("Intentelo nuevamente " + errorInfo)
          }
        });
      }
    }
  }
}

/**
 * Save blocks to server.
 */
function saveToServer(userid,idInserted,idReferencia) {
  var xml = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace);
  var data = Blockly.Xml.domToText(xml);
  var fileName ='';

  var count = Blockly.mainWorkspace.getAllBlocks().length;
  if (count != 0){

    var blob = new Blob([data], {type: 'text/xml'});
    if (!idInserted && uploaded == false) {
      saveDetails(data,idReferencia, function (status, errorInfo) {
        if (status == 200) {
          uploaded = true;
          var url = window.location.origin+"/guardarproyecto";
          window.location.href = url;
        } else {
          alertWarning("Error subiendo el programa: " + errorInfo)
        }
      });
    }else{
      uploadCode('actualizarproyecto',userid,idReferencia, fileName, data, function(status, errorInfo) {

        if (status == 200) {
          //alert("Programa subido correctamente");
          uploaded = true;
          alertOk("Proyecto guardado correctamente")

        } else {
          //alert("Error subiendo el programa: " + errorInfo);
          alertWarning("Error subiendo el programa: " + errorInfo)
        }
      });
    }
  }else{
    alertWarning("El proyecto esta vacio")
  }
}

/**
 * Save blocks to server.
 */
function saveToServerUpdate(idInserted) {
  var xml = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace);
  var data = Blockly.Xml.domToText(xml);

  uploadCode('actualizarproyecto','',idInserted, '', data, function(status, errorInfo) {

    if (status == 200) {
      uploaded = true;
      alertOk("Proyecto guardado correctamente")
    } else {
      alertWarning("Error subiendo el programa: " + errorInfo)
    }
  });
}


/**
 * Add to favorites.
 */
function addToFavorites(idProject) {

  uploadCode('agregarfavorito','',idProject, '', '', function(status, errorInfo) {

    if (status == 200) {
      uploaded = true;
      alertOk("Proyecto agregado a favoritos correctamente")
    } else {
      alertWarning("El proyecto ya ha sido agregado a favoritos")
    }
  });
}


/**
 * Save blocks to server as.
 * better include Blob and FileSaver for browser compatibility
 */
function saveToServerAs(userid,idReferencia) {
  var xml = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace);
  var data = Blockly.Xml.domToText(xml);
  var count = Blockly.mainWorkspace.getAllBlocks().length;
  if (count != 0){

    var blob = new Blob([data], {type: 'text/xml'});
    saveDetails(data,idReferencia, function (status, errorInfo) {
      if (status == 200) {
        var url = window.location.origin+"/guardarproyecto";
        window.location.href = url;
      } else {
        alertWarning("Error subiendo el programa: " + errorInfo)
      }
    });
  } else{
  alertWarning("El proyecto esta vacio")
}
}

function saveDetails(data,idReferencia,callback){
  var target = document.getElementById('content_arduino');
  var spinner = new Spinner().spin(target);
  var url = window.location.origin+"/guardarbloques";
  var method = "POST";
  var async = true;

  var request = new XMLHttpRequest();

  var params = "&xml="+data+"&idreferencia="+idReferencia;

  request.onreadystatechange = function() {
    if (request.readyState != 4) {
      return;
    }

    spinner.stop();

    var status = parseInt(request.status); // HTTP response status, e.g., 200 for "200 OK"
    var errorInfo = null;
    switch (status) {
      case 200:
        break;
      case 0:
        errorInfo = "code 0\n\nCould not connect to server at " + url + ".  Is the local web server running?";
        break;
      case 400:
        errorInfo = "code 400\n\nBuild failed - probably due to invalid source code.  Make sure that there are no missing connections in the blocks.";
        break;
      case 500:
        errorInfo = "code 500\n\nCarga fallida.  Is the Arduino connected to USB port?";
        break;
      case 501:
        errorInfo = "code 501\n\nCarga fallida.  Is 'ino' installed and in your path?  This only works on Mac OS X and Linux at this time.";
        break;
      default:
        errorInfo = "code " + status + "\n\nError desconocido.";
        break;
    };

    callback(status, errorInfo);
  };
  request.open(method, url, async);
  request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  request.send(params);

}


/**
 * Load blocks from local file.
 */
function load(event) {
  var files = event.target.files;
  // Only allow uploading one file.
  if (files.length != 1) {
    return;
  }

  // FileReader
  var reader = new FileReader();
  reader.onloadend = function(event) {
    var target = event.target;
    // 2 == FileReader.DONE
    if (target.readyState == 2) {
      try {
        var xml = Blockly.Xml.textToDom(target.result);
      } catch (e) {
        alert('Error analizando XML:\n' + e);
        return;
      }
      var count = Blockly.mainWorkspace.getAllBlocks().length;
      if (count && confirm('¿Reemplazar los bloques existentes?\n"Cancelar" Se fusionaran.')) {
        Blockly.mainWorkspace.clear();
      }
      Blockly.Xml.domToWorkspace(Blockly.mainWorkspace, xml);
    }
    // Reset value of input after loading because Chrome will not fire
    // a 'change' event if the same file is loaded again.
    document.getElementById('upload').value = '';
  };
  reader.readAsText(files[0]);
}

/**
 * Discard all blocks from the workspace.
 */
function discard() {
  var count = Blockly.mainWorkspace.getAllBlocks().length;
  Blockly.mainWorkspace.clear();
  window.localStorage.setItem("blockly.xml", "");
  window.localStorage.clear();
  Blockly.Xml.domToWorkspace(Blockly.getMainWorkspace(),
    document.getElementById('startBlocks'));
}


/**
 * Bind an event to a function call.
 * @param {!Element} element Element upon which to listen.
 * @param {string} name Event name to listen to (e.g. 'mousedown').
 * @param {!Function} func Function to call when event is triggered.
 *     W3 browsers will call the function with the event object as a parameter,
 *     MSIE will not.
 */
function bindEvent(element, name, func) {
  if (element.addEventListener) {  // W3C
    element.addEventListener(name, func, false);
  } else if (element.attachEvent) {  // IE
    element.attachEvent('on' + name, func);
  }
}

//loading examples via ajax
var ajax;
function createAJAX() {
  if (window.ActiveXObject) { //IE
    try {
      return new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e) {
      try {
        return new ActiveXObject("Microsoft.XMLHTTP");
      } catch (e2) {
        return null;
      }
    }
  } else if (window.XMLHttpRequest) {
    return new XMLHttpRequest();
  } else {
    return null;
  }
}

function onSuccess() {
  if (ajax.readyState == 4) {
    if (ajax.status == 200) {
      try {
        var xml = Blockly.Xml.textToDom(ajax.responseText);
      } catch (e) {
        alert('Error fusionando XML:\n' + e);
        return;
      }
      var count = Blockly.mainWorkspace.getAllBlocks().length;
      if (count && confirm('¿Reemplazar los bloques existentes?\n"Cancelar" Se fusionaran.')) {
        Blockly.mainWorkspace.clear();
      }
      Blockly.Xml.domToWorkspace(Blockly.mainWorkspace, xml);
    } else {
      alert("Error del servidor");
    }
  }
}

function load_by_url(uri) {
  ajax = createAJAX();
  if (!ajax) {
    alert ('Not compatible with XMLHttpRequest');
    return 0;
  }
  if (ajax.overrideMimeType) {
    ajax.overrideMimeType('text/xml');
  }

  ajax.onreadystatechange = onSuccess;
  ajax.open ("GET", uri, true);
  ajax.send ("");
}


function uploadCode(path,id, idReferencia, name,code, callback) {
  var target = document.getElementById('content_arduino');
  var spinner = new Spinner().spin(target);

  var url = window.location.origin+"/"+path;
  var method = "POST";

  // You REALLY want async = true.
  // Otherwise, it'll block ALL execution waiting for server response.
  var async = true;

  var request = new XMLHttpRequest();

  request.onreadystatechange = function() {
    if (request.readyState != 4) {
      return;
    }

    spinner.stop();

    var status = parseInt(request.status); // HTTP response status, e.g., 200 for "200 OK"
    var errorInfo = null;
    switch (status) {
      case 200:
        break;
      case 0:
        errorInfo = "code 0\n\nCould not connect to server at " + url + ".  Is the local web server running?";
        break;
      case 400:
        errorInfo = "code 400\n\nBuild failed - probably due to invalid source code.  Make sure that there are no missing connections in the blocks.";
        break;
      case 500:
        errorInfo = "code 500\n\nCarga fallida.  Is the Arduino connected to USB port?";
        break;
      case 501:
        errorInfo = "code 501\n\nCarga fallida.  Is 'ino' installed and in your path?  This only works on Mac OS X and Linux at this time.";
        break;
      default:
        errorInfo = "code " + status + "\n\nError desconocido.";
        break;
    };

    callback(status, errorInfo);
  };


  var params = "userid="+id+"&idreferencia="+idReferencia+"&filename="+name+"&xml="+code;

  request.open(method, url, async);
  request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  request.send(params);
}


function uploadClick() {
  var code = Blockly.Arduino.workspaceToCode();

  alert("Preparado para subir al arduino");

  uploadCode('', '', '', '',code, function(status, errorInfo) {
    if (status == 200) {
      alert("Proyecto guardado correctamente");
    } else {
      alert("Error subiendo el programa: " + errorInfo);
    }
  });
}

function resetClick() {
  var code = "void setup() {} void loop() {}";

  uploadCode('', '', '', '', '', code, function(status, errorInfo) {
    if (status != 200) {
      alert("Error reseteando el programa: " + errorInfo);
    }
  });
}

/**
 * Discard all blocks from the workspace and logout
 */

function logoutBlocks() {
  //localStorage.setItem("blockly.xml", "");
  window.localStorage.setItem("blockly.xml", "");
  window.localStorage.clear();
  Blockly.mainWorkspace.clear();
  Blockly.Xml.domToWorkspace(Blockly.getMainWorkspace(),
    document.getElementById('startBlocks'));

  var url = window.location.origin+"/logout";
  window.location.href = url;
}


function logout() {
  //localStorage.setItem("blockly.xml", "");
  localStorage.setItem("blockly.xml", "");
  localStorage.clear();
  var url = window.location.origin+"/logout";
  window.location.href = url;
}

function alertOk(textPassed){
  swal({
    title: "Bien hecho",
    text: textPassed,
    type: "success",
    showCancelButton: false,
    confirmButtonClass: "btn-success",
    confirmButtonText: 'OK',
    closeOnConfirm: false
  });
}

function  alertWarning(textPassed) {
  swal({
    title: "Ups ocurrió un error",
    text: textPassed,
    type: "warning",
    showCancelButton: false,
    confirmButtonClass: "btn-success",
    confirmButtonText: 'OK',
    closeOnConfirm: false
  });

}
