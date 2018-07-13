'use strict';
/* global Educablocks, Blockly*/
Educablocks.locales.initialize();
Educablocks.variables = {};
Educablocks.isVariable = function(varValue) {
    for (var i in Blockly.Variables.allVariables()) {
        if (Blockly.Variables.allVariables()[i] === varValue) {
            return true;
        }
    }
    if (Educablocks.variables[varValue]!==undefined){
        return true;
    }
    if (varValue.search('digitalRead\\(')>=0|| varValue.search('analogRead\\(')>=0){
        return true;
    }
    return false;
};

Educablocks.findPinMode=function(dropdown_pin){
    var code='';
    dropdown_pin = dropdown_pin.split(';\n');
    for (var j in dropdown_pin) {
        if (dropdown_pin[j].search('pinMode') >= 0) {
            code += dropdown_pin[j] + ';\n';
        } else {
            dropdown_pin = dropdown_pin[j];
        }
    }
    return {'code':code, 'pin':dropdown_pin};
};

// help URLs
Educablocks.GITHUB_SRC_URL = 'https://educabot.org';
// RGB block colors
Educablocks.LANG_COLOUR_BQ = '#D04141';
Educablocks.LANG_COLOUR_ZUM = '#CC7B44';
Educablocks.LANG_COLOUR_SERVO = '#CECE42';
Educablocks.LANG_COLOUR_LCD = '#ACCE42';
Educablocks.LANG_COLOUR_CONTROL = '#44CC44';
Educablocks.LANG_COLOUR_LOGIC = '#42CE91';
Educablocks.LANG_COLOUR_MATH = '#42CBCE';
Educablocks.LANG_COLOUR_TEXT = '#42A3CE';
Educablocks.LANG_COLOUR_COMMUNICATION = '#4263CE';
Educablocks.LANG_COLOUR_ADVANCED = '#9142CE';
Educablocks.LANG_COLOUR_VARIABLES = '#B244CC';
Educablocks.LANG_COLOUR_PROCEDURES = '#CE42B3';
Educablocks.setColors = function(colorArray) {
    Educablocks.LANG_COLOUR_BQ = colorArray[0];
    Educablocks.LANG_COLOUR_ZUM = colorArray[1];
    Educablocks.LANG_COLOUR_SERVO = colorArray[2];
    Educablocks.LANG_COLOUR_LCD = colorArray[3];
    Educablocks.LANG_COLOUR_CONTROL = colorArray[4];
    Educablocks.LANG_COLOUR_LOGIC = colorArray[5];
    Educablocks.LANG_COLOUR_MATH = colorArray[6];
    Educablocks.LANG_COLOUR_TEXT = colorArray[7];
    Educablocks.LANG_COLOUR_COMMUNICATION = colorArray[8];
    Educablocks.LANG_COLOUR_ADVANCED = colorArray[9];
    Educablocks.LANG_COLOUR_VARIABLES = colorArray[10];
    Educablocks.LANG_COLOUR_PROCEDURES = colorArray[11];
};