/*! Educablocks - v0.2.3 - 2016-02-02
 * https://github.com/SALIDAS/Educablocks
 * Copyright (c) 2016 SALIDAS; Licensed  */

(function(factory) {
    if (typeof define === 'function' && define.amd) {
        define(['underscore', 'blockly-SALIDAS', 'blockly.blocks'], factory);
    } else {
        factory(_, window.Blockly, window.Blocks);
    }
}(function(_, Blockly, Blocks) {
    var load = function(options) {
        // Source: src/lang.js
        /* global Educablocks, options */
        Educablocks.locales = {
            defaultLanguage: {},
            languages: []
        };
        Educablocks.locales.getLang = function() {
            return this.defaultLanguage.lngCode;
        };
        Educablocks.locales.getKey = function(key) {
            return this.defaultLanguage[key];
        };
        Educablocks.locales.setDefaultLang = function(langCode) {
            for (var i in this.languages) {
                if (this.languages[i].langCode === langCode) {
                    this.defaultLanguage = this.languages[i].values;
                    this.defaultLanguage.lngCode = langCode;
                }
            }
        };
        Educablocks.locales.add = function(langCode, values) {
            if (!langCode) {
                return this.defaultLanguage;
            }
            if (langCode && !values) {
                if (!this.languages[langCode]) {
                    throw new Error('Unknown language : ' + langCode);
                }
                //this.defaultLanguage = langCode;
            }
            if (values || !this.languages[langCode]) {
                this.languages.push({
                    langCode: langCode,
                    values: values
                });
            }
            return this;
        };
        Educablocks.locales.initialize = function() {
            var lang = options.lang || window.EducablocksLanguage || 'es-ES';
            this.setDefaultLang(lang);
            return this;
        };

      
        // Source: lang/en-GB.js
        (function() {
            var language = {
                //random :
                BLOCKLY_MSG_DUPLICATE_BLOCK: 'Duplicate',
                BLOCKLY_MSG_REMOVE_COMMENT: 'Remove Comment',
                BLOCKLY_MSG_ADD_COMMENT: 'Add Comment',
                BLOCKLY_MSG_EXTERNAL_INPUTS: 'External Inputs',
                BLOCKLY_MSG_INLINE_INPUTS: 'Inline Inputs',
                BLOCKLY_MSG_DELETE_BLOCK: 'Delete Block',
                BLOCKLY_MSG_DELETE_X_BLOCKS: 'Delete %1 Blocks',
                BLOCKLY_MSG_COLLAPSE_BLOCK: 'Collapse Block',
                BLOCKLY_MSG_EXPAND_BLOCK: 'Expand Block',
                BLOCKLY_MSG_DISABLE_BLOCK: 'Disable Block',
                BLOCKLY_MSG_ENABLE_BLOCK: 'Enable Block',
                BLOCKLY_MSG_HELP: 'Help',
                BLOCKLY_MSG_COLLAPSE_ALL: 'Collapse Blocks',
                BLOCKLY_MSG_EXPAND_ALL: 'Expand Blocks',
                LANG_VARIABLES_SET_ITEM: 'item',
                LANG_RESERVED_WORDS: 'Reserved word: this name is not allowed.',
                //logic blocks:
                LANG_CATEGORY_LOGIC: 'Logic',
                LANG_LOGIC_OPERATION_AND: 'and',
                LANG_LOGIC_OPERATION_OR: 'or',
                LANG_LOGIC_COMPARE_TOOLTIP_EQ: 'Checks if both inputs are equal .',
                LANG_LOGIC_COMPARE_TOOLTIP_NEQ: 'Checks if both inputs are different.',
                LANG_LOGIC_COMPARE_TOOLTIP_LT: 'Checks if the first input is smaller than the second one.',
                LANG_LOGIC_COMPARE_TOOLTIP_LTE: 'Checks if the first input is smaller than or equal to the second one.',
                LANG_LOGIC_COMPARE_TOOLTIP_GT: 'Checks if the first input is greater than the second one.',
                LANG_LOGIC_COMPARE_TOOLTIP_GTE: 'Checks if the first input is greater than or equal to the second one.',
                LANG_LOGIC_OPERATION_TOOLTIP_AND: 'Checks if both inputs are true.',
                LANG_LOGIC_OPERATION_TOOLTIP_OR: 'Checks if either inputs are true.',
                LANG_LOGIC_NEGATE_INPUT_NOT: 'not',
                LANG_LOGIC_NEGATE_TOOLTIP: 'Returns the opposite of the input.',
                LANG_LOGIC_NEGATE_HELPURL: '',
                LANG_LOGIC_BOOLEAN_TRUE: 'true',
                LANG_LOGIC_BOOLEAN_FALSE: 'false',
                LANG_LOGIC_BOOLEAN_TOOLTIP: 'Returns either true or false.',
                //communication blocks:
                LANG_CATEGORY_COMMUNICATION: 'Communication',
                //LANG_SALIDAS_BLUETOOTH_RECEIVE: 'Bluetooth receive data',
                //LANG_SALIDAS_BLUETOOTH_RECEIVE_BLUETOOTH: 'Bluetooth',
                //LANG_SALIDAS_BLUETOOTH_RECEIVE_TOOLTIP: 'Returns the data received by the Bluetooth module',
                //LANG_SALIDAS_BLUETOOTH_SEND: 'Bluetooth send data',
                //LANG_SALIDAS_BLUETOOTH_SEND_SEND: 'Send',
                //LANG_SALIDAS_BLUETOOTH_SEND_TOOLTIP: 'Sends the input data using the Bluetooth module',
                //LANG_SALIDAS_BLUETOOTH_DEF: 'Bluetooth definition',
                //LANG_SALIDAS_BLUETOOTH_DEF_BAUD_RATE: 'Baud rate',
                //LANG_SALIDAS_BLUETOOTH_DEF_PIN1: 'RX',
                //LANG_SALIDAS_BLUETOOTH_DEF_PIN2: 'TX',
                //LANG_SALIDAS_BLUETOOTH_DEF_NAME: 'Name',
                //LANG_SALIDAS_BLUETOOTH_DEF_PINCODE: 'PinCode',
                //LANG_SALIDAS_BLUETOOTH_DEF_RECEIVE: 'Receive',
                //LANG_SALIDAS_BLUETOOTH_DEF_SEND: 'Send',
                //LANG_SALIDAS_BLUETOOTH_DEF_TOOLTIP: 'Bluetooth module definition',
                //LANG_ADVANCED_BT_SERIAL_AVAILABLE: 'Bluetooth Serial Available',
                //LANG_ADVANCED_BT_SERIAL_AVAILABLE_TOOLTIP: 'Check wether the bluetooth is available or not.',
                LANG_ADVANCED_SERIAL_AVAILABLE: 'Serial Available',
                LANG_ADVANCED_SERIAL_AVAILABLE_TOOLTIP: 'Check wether the serial port is available or not',
                LANG_ADVANCED_SERIAL_PARSEINT: 'Serial Read Integer',
                LANG_ADVANCED_SERIAL_PARSEINT_TOOLTIP: 'First valid (long) integer number from the serial buffer',
                LANG_ADVANCED_SERIAL_PRINT: 'Serial Print',
                LANG_ADVANCED_SERIAL_PRINT_TOOLTIP: 'Prints data as ASCII text.',
                LANG_ADVANCED_SERIAL_PRINTLN: 'Serial Println',
                LANG_ADVANCED_SERIAL_PRINTLN_TOOLTIP: 'Prints data as ASCII text and adds a Carriage Return (CR).',
                LANG_ADVANCED_SERIAL_READ: 'Serial Read',
                LANG_ADVANCED_SERIAL_READ_TOOLTIP: 'Reads incoming serial data from serial port as bytes.',
                LANG_ADVANCED_SERIAL_READSTRING: 'Serial Read String',
                LANG_ADVANCED_SERIAL_READSTRING_TOOLTIP: 'Reads incoming serial data from serial port as ASCII text.',
                LANG_ADVANCED_SERIAL_SPECIAL: 'Special Chars',
                LANG_ADVANCED_SERIAL_SPECIAL_TAB: 'Tab',
                LANG_ADVANCED_SERIAL_SPECIAL_CARRIAGE_RETURN: 'Carriage Return',
                LANG_ADVANCED_SERIAL_SPECIAL_LINE_FEED: 'Line Feed',
                LANG_ADVANCED_SERIAL_SPECIAL_TOOLTIP: 'Writes special Chars.',
                //SALIDAS blocks :
                LANG_CATEGORY_SALIDAS: 'Output',
                LANG_ENTRADAS_ULTRASONIDO: 'Ultrasonic Sensor',
                LANG_ENTRADAS_ULTRASONIDO_RED_PIN: 'ECHO PIN#',
                LANG_ENTRADAS_ULTRASONIDO_BLUE_PIN: 'TRIGGER PIN#',
                LANG_ENTRADAS_ULTRASONIDO_TOOLTIP: 'Returns the distancia measured by the ultrasonic sensor.',
                LANG_SALIDAS_BUTTON: 'Button',
                LANG_SALIDAS_BUTTON_PIN: 'PIN#',
                LANG_SALIDAS_BUTTON_TOOLTIP: 'Button',
                LANG_SALIDAS_BUTTONS: 'Button Pad',
                LANG_SALIDAS_BUTTONS_PIN: 'PIN#',
                LANG_SALIDAS_BUTTONS_BUTTON_A: 'Button #A',
                LANG_SALIDAS_BUTTONS_BUTTON_B: 'Button #B',
                LANG_SALIDAS_BUTTONS_BUTTON_C: 'Button #C',
                LANG_SALIDAS_BUTTONS_BUTTON_D: 'Button #D',
                LANG_SALIDAS_BUTTONS_BUTTON_E: 'Button #E',
                LANG_SALIDAS_BUTTONS_TOOLTIP: 'Button Pad',
                LANG_ENTRADAS_PIR: 'Infrared Sensor',
                LANG_ENTRADAS_PIR_PIN: 'PIN#',
                LANG_ENTRADAS_PIR_TOOLTIP: 'Returns the digital value read by the infrared sensor.',
                LANG_SALIDAS_JOYSTICK: 'Joystick',
                LANG_SALIDAS_JOYSTICK_PIN_X: 'X axis PIN#',
                LANG_SALIDAS_JOYSTICK_PIN_Y: 'Y axis PIN#',
                LANG_SALIDAS_JOYSTICK_PIN_BUTTON: 'Button PIN#',
                LANG_SALIDAS_JOYSTICK_POSITION: 'Joystick Position',
                LANG_SALIDAS_JOYSTICK_TOOLTIP: 'Joystick',
                LANG_SALIDAS_LED: 'LED',
                LANG_SALIDAS_LED_PIN: 'PIN#',
                LANG_SALIDAS_LED_STATE: '',
                LANG_SALIDAS_LED_ON: 'ON',
                LANG_SALIDAS_LED_OFF: 'OFF',
                LANG_SALIDAS_LED_TOOLTIP: 'LED',
                LANG_SALIDAS_RELE: 'Relay (reverse)',
                LANG_SALIDAS_RELE_PIN: 'PIN',
                LANG_SALIDAS_RELE_ON: 'OFF',
                LANG_SALIDAS_RELE_OFF: 'ON',
                LANG_SALIDAS_RELE_TOOLTIP: 'Control the relay',
                LANG_SALIDAS_PHOTORESISTOR: 'Light Sensor',
                LANG_SALIDAS_PHOTORESISTOR_PIN: 'PIN#',
                LANG_SALIDAS_PHOTORESISTOR_TOOLTIP: 'Returns the analog value measured by the light sensor.',
                LANG_SALIDAS_PIEZO_BUZZER: 'Buzzer',
                LANG_SALIDAS_PIEZO_BUZZER_PIN: 'PIN#',
                LANG_SALIDAS_PIEZO_BUZZER_TONE: 'TONE',
                LANG_SALIDAS_PIEZO_BUZZER_DO: 'DO',
                LANG_SALIDAS_PIEZO_BUZZER_RE: 'RE',
                LANG_SALIDAS_PIEZO_BUZZER_MI: 'MI',
                LANG_SALIDAS_PIEZO_BUZZER_FA: 'FA',
                LANG_SALIDAS_PIEZO_BUZZER_SOL: 'SOL',
                LANG_SALIDAS_PIEZO_BUZZER_LA: 'LA',
                LANG_SALIDAS_PIEZO_BUZZER_SI: 'SI',
                LANG_SALIDAS_PIEZO_BUZZER_DURATION: 'Duration [ms]',
                LANG_SALIDAS_PIEZO_BUZZER_TOOLTIP: 'Piezo Buzzer',
                LANG_SALIDAS_PIEZO_BUZZERAV: 'Advanced Buzzer',
                LANG_SALIDAS_PIEZO_BUZZERAV_PIN: 'PIN#',
                LANG_SALIDAS_PIEZO_BUZZERAV_TONE: 'TONE',
                LANG_SALIDAS_PIEZO_BUZZERAV_DURATION: 'Duration [ms]',
                LANG_SALIDAS_PIEZO_BUZZERAV_TOOLTIP: 'Piezo Buzzer Advanced',
                LANG_SALIDAS_POTENTIOMETER: 'Potentiometer',
                LANG_SALIDAS_POTENTIOMETER_PIN: 'PIN#',
                LANG_SALIDAS_POTENTIOMETER_TOOLTIP: 'Returns the analog value measured by the potentiometer.',
                //LCD blocks:
                LANG_CATEGORY_LCD: 'Screen',
                LANG_LCD_DIRECCION: 'I2C adresss',
                LANG_LCD_PRINT_fila: 'row',
                LANG_LCD_PRINT_columna: 'column',
                LANG_LCD_I2C: 'LCD I2C',
                LANG_LCD_DEF: 'LCD (2x16)',
                LANG_LCD_PINS: 'LCD Pins',
                LANG_LCD_DEF_TOOLTIP: 'Block that defines the LCD',
                LANG_LCD_ADVANCED_DEF: 'Advanced LCD',
                LANG_LCD_ADVANCED_ROWS: 'Rows',
                LANG_LCD_ADVANCED_COLUMNS: 'Columns',
                LANG_LCD_DEF_ADVANCED_TOOLTIP: 'Block that defines the advanced LCD',
                LANG_LCD_SETBACKLIGHT: 'LCD: setBacklight(',
                LANG_LCD_SETBACKLIGHT_CLOSE: ')',
                LANG_LCD_SETBACKLIGHT_TOOLTIP: 'Sets the backlight of the LCD screen.',
                LANG_LCD_PRINT: 'LCD: print ',
                LANG_LCD_PRINT_POSITION: 'Set text position?',
                LANG_LCD_PRINT_TOOLTIP: 'Prints a String in the LCD at the specified position or the next available one.',
                LANG_LCD_CLEAR: 'LCD clear',
                LANG_LCD_CLEAR_TOOLTIP: 'LCD clear',

                LANG_matriz_DEF: 'Matrix', //MATRIZ
                LANG_matriz_din: 'DIN', //MATRIZ
                LANG_matriz_clk: 'CLK', //MATRIZ
                LANG_matriz_cs: 'CS', //MATRIZ
                LANG_matriz_cantidad: 'N°', //MATRIZ
                LANG_matriz_DEF_TOOLTIP: 'Define the Matriz',//Matriz
                LANG_matriz_PRINT: 'Matrix: Print ',//Matriz
                LANG_matriz_PRINT_TOOLTIP: 'Print text in the Matrix',//Matriz
                LANG_matriz_caras_DEF: 'Matrix', //MATRIZ
                LANG_matriz_caras_din: 'DIN', //MATRIZ
                LANG_matriz_caras_clk: 'CLK', //MATRIZ
                LANG_matriz_caras_cs: 'CS', //MATRIZ
                LANG_matriz_caras_cantidad: 'N°', //MATRIZ
                LANG_matriz_caras_DEF_TOOLTIP: 'Define la Matriz',//Matriz
                LANG_matriz_caras_sorprendido: 'Surprised',//Matriz
                LANG_matriz_caras_feliz:'Happy',//Matriz
                LANG_matriz_caras_enojado:'Angry',//Matriz
                LANG_matriz_caras_estado: 'Stat', //Matriz

                //controls blocks :
                LANG_CATEGORY_CONTROLS: 'Control',
                LANG_CONTROLS_BASE_DELAY_WAIT: 'Wait (ms)',
                LANG_CONTROLS_BASE_DELAY_TOOLTIP: 'Waits the specified time in milliseconds (ms)',
                LANG_CONTROLS_BASE_MILLIS: 'Time from start (ms)',
                LANG_CONTROLS_BASE_MILLIS_TOOLTIP: 'Number of milliseconds since the program started (long integer)',
                LANG_CONTROLS_DOWHILE_OPERATOR_DO: 'Do',
                LANG_CONTROLS_DOWHILE_OPERATOR_WHILE: 'while',
                LANG_CONTROLS_DOWHILE_TOOLTIP: 'While the condition is true, continue doing the statements.',
                LANG_CONTROLS_EXECUTE: 'Execute',
                LANG_CONTROLS_EXECUTE_TOOLTIP: 'Executes C/C++ code. Use with caution, as it can easily break the program and prevent it from compiling.',
                LANG_CONTROLS_IF_TOOLTIP_1: 'If the condition is true, execute the statements.',
                LANG_CONTROLS_IF_TOOLTIP_2: 'If the condition is true, then do the first block of statements. Otherwise, do the second block of statements.',
                LANG_CONTROLS_IF_TOOLTIP_3: 'If the first condition is true, then do the first block of statements. Otherwise, if the second value is true, do the second block of statements.',
                LANG_CONTROLS_IF_TOOLTIP_4: 'If the first condition is true, then do the first block of statements. Otherwise, if the second value is true, do the second block of statements. If none of the values are true, do the last block of statements.',
                LANG_CONTROLS_IF_MSG_IF: 'if',
                LANG_CONTROLS_IF_MSG_ELSEIF: 'else if',
                LANG_CONTROLS_IF_MSG_ELSE: 'else',
                LANG_CONTROLS_IF_MSG_THEN: 'do',
                LANG_CONTROLS_IF_IF_Field_IF: 'if',
                LANG_CONTROLS_IF_IF_TOOLTIP: 'Add, remove, or reorder sections to reconfigure this if block.',
                LANG_CONTROLS_IF_ELSEIF_Field_ELSEIF: 'else if',
                LANG_CONTROLS_IF_ELSEIF_TOOLTIP: 'Add a condition to the if block.',
                LANG_CONTROLS_IF_ELSE_Field_ELSE: 'else',
                LANG_CONTROLS_IF_ELSE_TOOLTIP: 'Add a final, catch-all condition to the if block.',
                LANG_CONTROLS_FOR_FROM_WARNING: 'It is not possible to set a variable as the initial value of the for block.',
                LANG_CONTROLS_FOR_TO_WARNING: 'It is not possible to set a variable as the final value of the for block.',
                LANG_CONTROLS_FOR_INPUT_WITH: 'count with',
                LANG_CONTROLS_FOR_INPUT_VAR: 'x',
                LANG_CONTROLS_FOR_INPUT_FROM: 'from',
                LANG_CONTROLS_FOR_INPUT_TO: 'to',
                LANG_CONTROLS_FOR_INPUT_DO: 'do',
                LANG_CONTROLS_FOR_TOOLTIP: 'Count from a start number to an end number. Each time the count is incremented by one, the variable takes that value then do the statements.',
                LANG_CONTROLS_WHILEUNTIL_OPERATOR_WHILE: 'while',
                LANG_CONTROLS_WHILEUNTIL_OPERATOR_UNTIL: 'until',
                LANG_CONTROLS_WHILEUNTIL_TOOLTIP_WHILE: 'While the condition is true, then do the statements.',
                LANG_CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL: 'While the condition is false, then do the statements.',
                LANG_CONTROLS_REPEAT_TITLE_REPEAT: 'Repeat',
                LANG_CONTROLS_REPEAT_TITLE_TIMES: 'times',
                LANG_CONTROLS_REPEAT_INPUT_DO: 'do',
                LANG_CONTROLS_REPEAT_TOOLTIP: 'Repeat the statements a certain number of times',
                LANG_CONTROLS_FLOW_STATEMENTS_HELPURL: '',
                LANG_CONTROLS_FLOW_STATEMENTS_INPUT_OFLOOP: 'of loop',
                LANG_CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK: 'break out',
                LANG_CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE: 'continue with next iteration',
                LANG_CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK: 'Break out of the containing loop.',
                LANG_CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE: 'Skip the rest of this loop, and continue with the next iteration.',
                LANG_CONTROLS_FLOW_STATEMENTS_WARNING: 'Warning: This block may only be used within a loop.',
                LANG_CONTROLS_SETUP_LOOP_SETUP_TITLE: 'Setup',
                LANG_CONTROLS_SETUP_LOOP_LOOP_TITLE: 'Loop',
                LANG_CONTROLS_SETUP_LOOP_TOOLTIP: 'Blocks in setup will be executed at start, and blocks in Loop will be repeated continously.',
                LANG_CONTROLS_SWITCH: 'switch ',
                LANG_CONTROLS_SWITCH_TOOLTIP_1: 'Execute the statement of the case .',
                LANG_CONTROLS_SWITCH_TOOLTIP_2: 'Use the switch statement to select one of many blocks of code to be executed.',
                LANG_CONTROLS_SWITCH_TOOLTIP_3: 'Use the switch statement to select one of many blocks of code to be executed.',
                LANG_CONTROLS_SWITCH_TOOLTIP_4: 'Use the switch statement to select one of many blocks of code to be executed.',
                LANG_CONTROLS_SWITCH_SWITCH_TOOLTIP: 'The switch expression is evaluated once',
                LANG_CONTROLS_SWITCH_CASE_TOOLTIP: 'case',
                LANG_CONTROLS_SWITCH_DEFAULT_TOOLTIP: 'The default keyword specifies the code to run if there is no case match',
                LANG_CONTROLS_SWITCH_IS: 'case: ',
                LANG_CONTROLS_SWITCH_CASE: 'case',
                LANG_CONTROLS_SWITCH_COLON: ': ',
                LANG_CONTROLS_SWITCH_DEFAULT: 'default',
                LANG_CONTROLS_SWITCH_DO: 'do',
                //math blocks :
                LANG_CATEGORY_MATH: 'Math',
                LANG_MATH_ADVANCED_MAP_MAP: 'Map ',
                LANG_MATH_ADVANCED_MAP_FROM: 'From [',
                LANG_MATH_ADVANCED_MAP_HYPHEN: '-',
                LANG_MATH_ADVANCED_MAP_BRACKET: ']',
                LANG_MATH_ADVANCED_MAP_TO: 'to [',
                LANG_MATH_ADVANCED_MAP_TOOLTIP: 'Re-map the input from a certain range to another.',
                LANG_MATH_NUMBER_TOOLTIP: 'Number',
                LANG_MATH_ARRAY_ARRAY3: '[3]',
                LANG_MATH_ARRAY_BRACKET3: '{',
                LANG_MATH_ARRAY_BRACKET4: '}',
                LANG_MATH_ARRAY_COMMA: ',',
                LANG_MATH_ARRAY_TOOLTIP: 'Array',
                LANG_ARRAY_GET_BRACKET1: '[',
                LANG_ARRAY_GET_BRACKET2: ']',
                LANG_ARRAY_GET_TOOLTIP: 'Returns the value of a certain element of the array.',
                LANG_MATH_MODULO_TOOLTIP: 'Returns the remainder of the division of the two input numbers.',
                LANG_MATH_BASE_MAP: 'Map ',
                LANG_MATH_BASE_MAP_VALUE_TO: 'Value to [0-',
                LANG_MATH_BASE_MAP_BRACKET: ']',
                LANG_MATH_BASE_MAP_TOOLTIP: 'Re-map the input from [0-1023] to another.',
                LANG_MATH_SINGLE_OP_ROOT: 'square root',
                LANG_MATH_SINGLE_OP_ABSOLUTE: 'absolute',
                LANG_MATH_SINGLE_TOOLTIP_ROOT: 'Returns the square root of a number.',
                LANG_MATH_SINGLE_TOOLTIP_ABS: 'Returns the absolute value of a number.',
                LANG_MATH_SINGLE_TOOLTIP_NEG: 'Returns the negation of a number.',
                LANG_MATH_SINGLE_TOOLTIP_LN: 'Returns the natural logarithm of a number.',
                LANG_MATH_SINGLE_TOOLTIP_LOG10: 'Returns the base 10 logarithm of a number.',
                LANG_MATH_SINGLE_TOOLTIP_EXP: 'Returns e to the power of a number.',
                LANG_MATH_SINGLE_TOOLTIP_POW10: 'Returns 10 to the power of a number.',
                //text blocks:
                LANG_CATEGORY_TEXT: 'Text',
                LANG_TEXT_TEXT_HELPURL: '',
                LANG_TEXT_TEXT_TOOLTIP: 'A letter, word, or line of text.',
                LANG_TEXT_JOIN_HELPURL: '',
                LANG_TEXT_JOIN_Field_CREATEWITH: 'create text with',
                LANG_TEXT_JOIN_TOOLTIP: 'Create a piece of text by joining together any number of items.',
                LANG_TEXT_CREATE_JOIN_Field_JOIN: 'join',
                LANG_TEXT_CREATE_JOIN_TOOLTIP: 'Add, remove, or reorder sections to reconfigure this text block.',
                LANG_TEXT_CREATE_JOIN_ITEM_Field_ITEM: 'item',
                LANG_TEXT_CREATE_JOIN_ITEM_TOOLTIP: 'Add an item to the text.',
                LANG_TEXT_CREATE_JOIN_TITLE_JOIN: 'join',
                LANG_TEXT_CREATE_JOIN_ITEM_TITLE_ITEM: 'element',
                LANG_TEXT_APPEND_HELPURL: '',
                LANG_TEXT_APPEND_TO: 'to',
                LANG_TEXT_APPEND_APPENDTEXT: 'append text',
                LANG_TEXT_APPEND_VARIABLE: 'item',
                LANG_TEXT_APPEND_TOOLTIP: 'Append some text to variable %1.',
                LANG_TEXT_LENGTH_HELPURL: '',
                LANG_TEXT_LENGTH_INPUT_LENGTH: 'length',
                LANG_TEXT_LENGTH_TOOLTIP: 'Returns number of letters (including spaces) in the provided text.',
                LANG_TEXT_EQUALSIGNORECASE_IS: '',
                LANG_TEXT_EQUALSIGNORECASE_EQUAL: ' =',
                LANG_TEXT_EQUALSIGNORECASE_QUESTION: '?',
                LANG_TEXT_EQUALSIGNORECASE_TOOLTIP: 'Checks if both input strings are equal, regardless of the case.',
                LANG_TEXT_SUBSTRING: 'Crop ',
                LANG_TEXT_SUBSTRING_FROM: 'from',
                LANG_TEXT_SUBSTRING_TO: 'to',
                LANG_TEXT_SUBSTRING_TOOLTIP: 'Obtain a substring from the input string with the caracters between the two input numbers.',
                //advanced blocks :
                LANG_CATEGORY_ADVANCED: 'Pin functions',
                LANG_ADVANCED_CONVERSION_CONVERT: 'Convert',
                LANG_ADVANCED_CONVERSION_DECIMAL: 'Decimal',
                LANG_ADVANCED_CONVERSION_HEXADECIMAL: 'Hexadecimal',
                LANG_ADVANCED_CONVERSION_OCTAL: 'Octal',
                LANG_ADVANCED_CONVERSION_BINARY: 'Binary',
                LANG_ADVANCED_CONVERSION_VALUE: 'value',
                LANG_ADVANCED_CONVERSION_TOOLTIP: 'Convert a number from one base to another.',
                LANG_ADVANCED_INOUT_ANALOG_READ: 'AnalogRead PIN#',
                LANG_ADVANCED_INOUT_ANALOG_READ_TOOLTIP: 'Reads the value from a specified digital pin',
                LANG_ADVANCED_INOUT_ANALOG_WRITE: 'AnalogWrite PIN#',
                LANG_ADVANCED_INOUT_ANALOG_WRITE_VALUE: 'value',
                LANG_ADVANCED_INOUT_ANALOG_WRITE_TOOLTIP: 'Write a value between 0 and 255 to a specific analog output PIN',
                LANG_ADVANCED_BUILTIN_LED: 'BUILT-IN LED',
                LANG_ADVANCED_BUILTIN_LED_STATE: 'state',
                LANG_ADVANCED_BUILTIN_LED_ON: 'ON',
                LANG_ADVANCED_BUILTIN_LED_OFF: 'OFF',
                LANG_ADVANCED_BUILTIN_LED_TOOLTIP: 'Built-in LED that is internally connected to PIN 13',
                LANG_ADVANCED_INOUT_DIGITAL_READ: 'DigitalRead PIN#',
                LANG_ADVANCED_INOUT_DIGITAL_READ_TOOLTIP: 'Reads the value from a specified digital pin',
                LANG_ADVANCED_INOUT_DIGITAL_WRITE: 'DigitalWrite',
                LANG_ADVANCED_INOUT_DIGITAL_WRITE_PIN: 'PIN#',
                LANG_ADVANCED_INOUT_DIGITAL_WRITE_STATE: 'state',
                LANG_ADVANCED_INOUT_DIGITAL_WRITE_HIGH: 'HIGH',
                LANG_ADVANCED_INOUT_DIGITAL_WRITE_LOW: 'LOW',
                LANG_ADVANCED_INOUT_DIGITAL_WRITE_TOOLTIP: 'Write a value in a specified digital pin',
                LANG_ADVANCED_HIGHLOW_HIGH: 'HIGH',
                LANG_ADVANCED_HIGHLOW_LOW: 'LOW',
                LANG_ADVANCED_HIGHLOW_TOOLTIP: 'HIGH OR LOW',
                LANG_ADVANCED_MATH_RANDOM: 'Random between',
                LANG_ADVANCED_MATH_RANDOM_AND: ' and ',
                LANG_ADVANCED_MATH_RANDOM_TOOLTIP: 'Returns a random number between the two limits.',
                //procedures blocks
                LANG_CATEGORY_PROCEDURES: 'Functions',
                LANG_PROCEDURES_RETURN: 'return',
                LANG_PROCEDURES_RETURN_TOOLTIP: 'Returns a value',
                LANG_PROCEDURES_CALL_WITHOUT_DEFINITION: 'Function call without matching definition',
                LANG_PROCEDURES_DEFNORETURN_HELPURL: '',
                LANG_PROCEDURES_DEFNORETURN_PROCEDURE: 'function_without_return',
                LANG_PROCEDURES_DEFNORETURN_DO: 'do',
                LANG_PROCEDURES_DEFNORETURN_TOOLTIP: 'A function with no return value.',
                LANG_PROCEDURES_DEFRETURN_HELPURL: '',
                LANG_PROCEDURES_DEFRETURN_PROCEDURE: 'function_with_return',
                LANG_PROCEDURES_DEFRETURN_DO: 'do',
                LANG_PROCEDURES_DEFRETURN_RETURN: 'return',
                LANG_PROCEDURES_DEFRETURN_TOOLTIP: 'A function with a return value.',
                LANG_PROCEDURES_DEF_DUPLICATE_WARNING: 'Warning: This function has duplicate parameters.',
                LANG_PROCEDURES_CALLNORETURN_HELPURL: '',
                LANG_PROCEDURES_CALLNORETURN_CALL: 'do',
                LANG_PROCEDURES_CALLNORETURN_PROCEDURE: 'function_without_return',
                LANG_PROCEDURES_CALLNORETURN_TOOLTIP: 'Calls a function with no return value.',
                LANG_PROCEDURES_CALLRETURN_HELPURL: '',
                LANG_PROCEDURES_CALLRETURN_CALL: 'do',
                LANG_PROCEDURES_CALLRETURN_PROCEDURE: 'function_with_return',
                LANG_PROCEDURES_CALLRETURN_TOOLTIP: 'Calls a function with a return value.',
                LANG_PROCEDURES_MUTATORCONTAINER_Field: 'parameters',
                LANG_PROCEDURES_MUTATORARG_Field: 'variable:',
                LANG_PROCEDURES_HIGHLIGHT_DEF: 'Highlight function',
                LANG_PROCEDURES_IFRETURN_TOOLTIP: 'If the condition is true, then returns this value.',
                LANG_PROCEDURES_IFRETURN_WARNING: 'Warning: This block may only be used within a function with a return value.',
                //variables blocks :
                LANG_CATEGORY_VARIABLES: 'Variables',
                LANG_VARIABLES_CALL_WITHOUT_DEFINITION: 'This variable is not declared.',
                LANG_VARIABLES_GLOBAL: 'Declare GLOBAL Variable ',
                LANG_VARIABLES_GLOBAL_TYPE: 'of type ',
                LANG_VARIABLES_GLOBAL_EQUALS: 'equals',
                LANG_VARIABLES_GLOBAL_TOOLTIP: 'Declares and defines a GLOBAL variable of type int or String.',
                LANG_VARIABLES_LOCAL: 'Declare variable ',
                LANG_VARIABLES_LOCAL_TYPE: 'of type ',
                LANG_VARIABLES_LOCAL_EQUALS: 'equals',
                LANG_VARIABLES_LOCAL_TOOLTIP: 'Declare and define a LOCAL variable of type int or String.',
                LANG_VARIABLES_DEFINE: 'Define variable ',
                LANG_VARIABLES_DEFINE_AS: 'as',
                LANG_VARIABLES_DEFINE_TOOLTIP: 'Define the value of a variable.',
                LANG_VARIABLES_SET: 'Var',
                LANG_VARIABLES_SET_AS: '=',
                LANG_VARIABLES_SET_TOOLTIP: 'Sets the value of a variable.',
                LANG_VARIABLES_GET: 'Var',
                LANG_VARIABLES_GET_TOOLTIP: 'Returns the value of a variable.',
                LANG_VARIABLES_PIN_ANALOG: 'Analog pin',
                LANG_VARIABLES_PIN_DIGITAL: 'Digital pin',
                LANG_VARIABLES_PIN_DIGITAL0: 'WARNING: digital pin 0 (RX pin) is used when uploading a sketch. Using it to connect electronic components may cause problems when uploading a new sketch.',
                LANG_VARIABLES_PIN_TOOLTIP: 'Select the PIN.',
                LANG_VARIABLES_TYPE_BYTE: 'Byte',
                LANG_VARIABLES_TYPE_FLOAT: 'Float',
                LANG_VARIABLES_TYPE_INTEGER: 'Integer',
                LANG_VARIABLES_TYPE_INTEGER_LONG: 'Long Integer',
                LANG_VARIABLES_TYPE_STRING: 'String',
                //ENTRADAS blocks :
                LANG_CATEGORY_ENTRADAS: 'Input',
                LANG_ENTRADAS_ULTRASONIDO: 'Ultrasound sensor',
                LANG_ENTRADAS_ULTRASONIDO_RED_PIN: 'ECHO PIN',
                LANG_ENTRADAS_ULTRASONIDO_BLUE_PIN: 'TRIGGER PIN',
                LANG_ENTRADAS_ULTRASONIDO_TOOLTIP: 'Returns the distance of the sensor.',
                LANG_ENTRADAS_GYRO: 'Axis sensors 101',
                LANG_ENTRADAS_GYRO_EJE: 'Axis',
                LANG_ENTRADAS_GYRO_EJE_X: 'gx',
                LANG_ENTRADAS_GYRO_EJE_Y: 'gy',
                LANG_ENTRADAS_GYRO_EJE_Z: 'gz',
                LANG_ENTRADAS_ACE_EJE_X: 'ax',
                LANG_ENTRADAS_ACE_EJE_Y: 'ay',
                LANG_ENTRADAS_ACE_EJE_Z: 'az',
                LANG_ENTRADAS_ACE: 'Sensors Genuino 101',
                LANG_ENTRADAS_ACE_EJE: 'Axis',
                LANG_ENTRADAS_LLUVIA: 'Humidity ground sensor',
                LANG_ENTRADAS_LLUVIA_PIN: 'PIN#',
                LANG_ENTRADAS_LLUVIA_TOOLTIP: 'Returns the analog value of the sensor',
                LANG_ENTRADAS_PIR: 'Pir Sensor ',
                LANG_ENTRADAS_PIR_PIN: 'PIN#',
                LANG_ENTRADAS_PIR_TOOLTIP: 'Returns the digital value of the sensor',
                LANG_ENTRADAS_SONIDO: 'Sound sensor',
                LANG_ENTRADAS_SONIDO_PIN: 'PIN#',
                LANG_ENTRADAS_SONIDO_TOOLTIP: 'Returns the analog value of the sensor',
                LANG_ENTRADAS_TEMPERATURA: 'Temperature',
                LANG_ENTRADAS_TEMPERATURA_TOOLTIP: 'Returns the temperature in celcius',
                LANG_ENTRADAS_HUMEDAD: 'Humidity',
                LANG_ENTRADAS_HUMEDAD_TOOLTIP: 'Returns the % of humidity',
                LANG_ENTRADAS_DHT11: 'DHT11',
                LANG_ENTRADAS_DHT11_PIN: 'PIN',
                LANG_ENTRADAS_DHT11_TOOLTIP: 'Starts the DHT11 librery',

                LANG_ENTRADAS_BUTTON: 'Button',
                LANG_ENTRADAS_BUTTON_PIN: 'PIN#',
                LANG_ENTRADAS_BUTTON_TOOLTIP: 'Button',
                LANG_ENTRADAS_FOLLOWER: 'Infrared Sensor',
                LANG_ENTRADAS_FOLLOWER_PIN_LEFT: 'PIN LEFT#',
                LANG_ENTRADAS_FOLLOWER_PIN_RIGHT: 'PIN RIGHT#',
                LANG_ENTRADAS_FOLLOWER_LEFT: 'Left',
                LANG_ENTRADAS_FOLLOWER_RIGHT: 'Right',
                LANG_ENTRADAS_FOLLOWER_TOOLTIP: 'Returns the digital value read by the infrared sensor',
                LANG_ENTRADAS_INFRARED: 'Infrared Sensor',
                LANG_ENTRADAS_INFRARED_PIN: 'PIN#',
                LANG_ENTRADAS_INFRARED_TOOLTIP: 'Returns the digital value read by the infrared sensor',
                LANG_SALIDAS_LED: 'LED',
                LANG_SALIDAS_LED_PIN: 'PIN#',
                LANG_SALIDAS_LED_ON: 'ON',
                LANG_SALIDAS_LED_OFF: 'OFF',
                LANG_SALIDAS_LED_TOOLTIP: 'LED',
                LANG_ENTRADAS_PHOTORESISTOR: 'Light Sensor',
                LANG_ENTRADAS_PHOTORESISTOR_PIN: 'PIN#',
                LANG_ENTRADAS_PHOTORESISTOR_TOOLTIP: 'Returns the analog value measured by the light sensor.',
                LANG_SALIDAS_PIEZO_BUZZER: 'Buzzer',
                LANG_SALIDAS_PIEZO_BUZZER_PIN: 'PIN#',
                LANG_SALIDAS_PIEZO_BUZZER_TONE: 'TONE',
                LANG_SALIDAS_PIEZO_BUZZER_DO: 'DO',
                LANG_SALIDAS_PIEZO_BUZZER_RE: 'RE',
                LANG_SALIDAS_PIEZO_BUZZER_MI: 'MI',
                LANG_SALIDAS_PIEZO_BUZZER_FA: 'FA',
                LANG_SALIDAS_PIEZO_BUZZER_SOL: 'SOL',
                LANG_SALIDAS_PIEZO_BUZZER_LA: 'LA',
                LANG_SALIDAS_PIEZO_BUZZER_SI: 'SI',
                LANG_SALIDAS_PIEZO_BUZZER_DURATION: 'Duration [ms]',
                LANG_SALIDAS_PIEZO_BUZZER_TOOLTIP: 'Piezo Buzzer',
                LANG_SALIDAS_PIEZO_BUZZERAV: 'Advanced Buzzer',
                LANG_SALIDAS_PIEZO_BUZZERAV_PIN: 'PIN#',
                LANG_SALIDAS_PIEZO_BUZZERAV_TONE: 'TONE',
                LANG_SALIDAS_PIEZO_BUZZERAV_DURATION: 'Duration [ms]',
                LANG_SALIDAS_PIEZO_BUZZERAV_TOOLTIP: 'Piezo Buzzer Advanced',
                LANG_ENTRADAS_POTENTIOMETER: 'Potentiometer',
                LANG_ENTRADAS_POTENTIOMETER_PIN: 'PIN#',
                LANG_ENTRADAS_POTENTIOMETER_TOOLTIP: 'Returns the analog value measured by the potentiometer.',
                
                //arest inicio
                LANG_SALIDAS_AREST_DEF: 'Arest',
                LANG_SALIDAS_SCAN_DEF: 'Scan I2C',
                LANG_SALIDAS_BLE_DEF: 'BLE panel',
                LANG_SALIDAS_AREST_rename: 'Rename',
                LANG_SALIDAS_AREST_DEF_ID: 'ID',
                LANG_SALIDAS_AREST_DEF_NAME: 'NAME',
                LANG_SALIDAS_AREST_DEF_TOOLTIP: 'Conect your Arduino with the IOT panel',
                LANG_SALIDAS_MOTOR: 'Motor DC',
                LANG_SALIDAS_MOTOR_PIN1: 'POSITIVE',
                LANG_SALIDAS_MOTOR_PIN2: 'NEGATIVE',
                LANG_SALIDAS_MOTOR_STATE: '',
                LANG_SALIDAS_MOTOR_ON: 'ON',
                LANG_SALIDAS_MOTOR_OFF: 'OFF',
                LANG_SALIDAS_MOTOR_TOOLTIP: 'Control the DC motor ',
                LANG_SALIDAS_MOTOR2: 'Motor DC',
                LANG_SALIDAS_MOTOR_M1N: 'M1N',
                LANG_SALIDAS_MOTOR_M1P: 'M1P',
                LANG_SALIDAS_MOTOR_M1E: 'M1E',
                LANG_SALIDAS_MOTOR_M2N: 'M2N',
                LANG_SALIDAS_MOTOR_M2P: 'M2N',
                LANG_SALIDAS_MOTOR_M1E: 'M2E',
                LANG_SALIDAS_MOTOR2_DIRECCION: 'DIRECCIÓN',
                LANG_SALIDAS_MOTOR_STATE: '',
                LANG_SALIDAS_MOTOR_ON: 'ON',
                LANG_SALIDAS_MOTOR_OFF: 'OFF',
                LANG_SALIDAS_MOTOR_TOOLTIP: 'Control the DC motor ',
               
                LANG_SALIDAS_LEDRGB: 'Led RGB',
                LANG_SALIDAS_LEDRGB_PINROJO: 'RED',
                LANG_SALIDAS_LEDRGB_PINVERDE: 'GREEN',
                LANG_SALIDAS_LEDRGB_PINAZUL: 'BLUE',
                LANG_SALIDAS_LEDRGB_COLOR: 'COLOR',
                LANG_SALIDAS_LEDRGB_AZUL: 'BLUE',
                LANG_SALIDAS_LEDRGB_ROJO: 'RED',
                LANG_SALIDAS_LEDRGB_VERDE: 'GREEN',
                LANG_SALIDAS_LEDRGB_AMARILLO: 'YELLOW',
                LANG_SALIDAS_LEDRGB_VIOLETA: 'VIOLET',
                LANG_SALIDAS_LEDRGB_NARANJA: 'ORANGE',
                LANG_SALIDAS_LEDRGB_APAGADO: 'OFF',
                LANG_SALIDAS_LEDRGB_DURATION: 'Delay [ms]',
                LANG_SALIDAS_LEDRGB_TOOLTIP: 'Led RGB',
                //servo blocks :
                LANG_CATEGORY_SERVO: 'Servo',
                LANG_SERVO_CONT: 'Continuous rotation servo',
                LANG_SERVO_CONT_PIN: 'PIN#',
                LANG_SERVO_CONT_ROT: 'ROT',
                LANG_SERVO_CONT_TURN_CLOCKWISE: 'TURN CLOCKWISE',
                LANG_SERVO_CONT_TURN_COUNTERCLOCKWISE: 'TURN COUNTERCLOCKWISE',
                LANG_SERVO_CONT_STOPPED: 'STOPPED',
                LANG_SERVO_CONT_DELAY: 'Delay [ms]',
                LANG_SERVO_CONT_TOOLTIP: 'Continuous rotation servo.',
                LANG_SERVO_MOVE: 'Servo',
                LANG_SERVO_MOVE_PIN: 'PIN#',
                LANG_SERVO_MOVE_DEGREES: 'Degrees (0~180)',
                LANG_SERVO_MOVE_DELAY: 'Delay [ms]',
                LANG_SERVO_MOVE_TOOLTIP: 'Move between 0~180 degree',
                LANG_SERVO_WARNING: 'It is not possible to set the servo pin using a variable'


            };
            // Node
            if (typeof module !== 'undefined' && module.exports) {
                module.exports = language;
            }
            // Browser
            // if (typeof window !== 'undefined' && this.Educablocks && this.Educablocks.locales.add) {
            //     this.Educablocks.locales.add('en', language);
            if (typeof window !== 'undefined' && Educablocks && Educablocks.locales.add) {
                Educablocks.locales.add('en-GB', language);
            }
        }());

        // Source: lang/es-ES.js
        (function() {
            var language = {
                //random :
                BLOCKLY_MSG_DUPLICATE_BLOCK: 'Duplicar',
                BLOCKLY_MSG_REMOVE_COMMENT: 'Remover Comentario',
                BLOCKLY_MSG_ADD_COMMENT: 'Agregar Comentario',
                BLOCKLY_MSG_EXTERNAL_INPUTS: 'Entradas externas',
                BLOCKLY_MSG_INLINE_INPUTS: 'Entradas en línea',
                BLOCKLY_MSG_DELETE_BLOCK: 'Eliminar bloque',
                BLOCKLY_MSG_DELETE_X_BLOCKS: 'Eliminar %1 Bloque',
                BLOCKLY_MSG_COLLAPSE_BLOCK: 'Collapse bloques',
                BLOCKLY_MSG_EXPAND_BLOCK: 'Expandir bloques',
                BLOCKLY_MSG_DISABLE_BLOCK: 'Deshablilitar bloques',
                BLOCKLY_MSG_ENABLE_BLOCK: 'Habilitar bloques',
                BLOCKLY_MSG_HELP: 'Ayuda',
                BLOCKLY_MSG_COLLAPSE_ALL: 'Collapse bloques',
                BLOCKLY_MSG_EXPAND_ALL: 'Expandir bloques',
                LANG_VARIABLES_SET_ITEM: 'elemento',
                LANG_RESERVED_WORDS: 'Palabra reservada: este nombre no está permitido.',
                //logic blocks:
                LANG_CATEGORY_LOGIC: 'Lógica',
                LANG_LOGIC_OPERATION_AND: 'y',
                LANG_LOGIC_OPERATION_OR: 'o',
                LANG_LOGIC_COMPARE_TOOLTIP_EQ: 'Compara si las dos entradas son iguales.',
                LANG_LOGIC_COMPARE_TOOLTIP_NEQ: 'Compara si las dos entradas no son iguales entre sí.',
                LANG_LOGIC_COMPARE_TOOLTIP_LT: 'Compara si la primera entrada es menor que la segunda entrada.',
                LANG_LOGIC_COMPARE_TOOLTIP_LTE: 'Compara si la primera entrada es menor o igual que la segunda entrada.',
                LANG_LOGIC_COMPARE_TOOLTIP_GT: 'Compara si la primera entrada es mayor que la segunda entrada.',
                LANG_LOGIC_COMPARE_TOOLTIP_GTE: 'Compara si la primera entrada es mayor o igual que la segunda entrada.',
                LANG_LOGIC_OPERATION_TOOLTIP_AND: 'Compara si ambas entradas son verdaderas.',
                LANG_LOGIC_OPERATION_TOOLTIP_OR: 'Compara si alguna de las entradas son verdaderas.',
                LANG_LOGIC_NEGATE_INPUT_NOT: 'no',
                LANG_LOGIC_NEGATE_TOOLTIP: 'Devuelve lo contrario de la entrada.',
                LANG_LOGIC_NEGATE_HELPURL: '',
                LANG_LOGIC_BOOLEAN_TRUE: 'verdadero',
                LANG_LOGIC_BOOLEAN_FALSE: 'falso',
                LANG_LOGIC_BOOLEAN_TOOLTIP: 'Devuelve verdadero o falso en función de lo seleccionado.',
                //communication blocks:
                LANG_CATEGORY_COMMUNICATION: 'Comunicación',
                LANG_LIBRERIA: 'Librería',
                //LANG_SALIDAS_BLUETOOTH_RECEIVE: 'Bluetooth: recibir ',
                //LANG_SALIDAS_BLUETOOTH_RECEIVE_BLUETOOTH: 'Bluetooth',
                //LANG_SALIDAS_BLUETOOTH_RECEIVE_TOOLTIP: 'Devuelve los datos recibidos por el módulo Bluetooth',
                //LANG_SALIDAS_BLUETOOTH_SEND: 'Bluetooth: Enviar',
                //LANG_SALIDAS_BLUETOOTH_SEND_SEND: 'Enviar datos',
                //LANG_SALIDAS_BLUETOOTH_SEND_TOOLTIP: 'Toma los datos de la entrada y los envía usando el módulo Bluetooth',
                //LANG_SALIDAS_BLUETOOTH_DEF: 'Bluetooth',
                //LANG_SALIDAS_BLUETOOTH_DEF_BAUD_RATE: 'Tasa de baudios',
                //LANG_SALIDAS_BLUETOOTH_DEF_PIN1: 'RX',
                //LANG_SALIDAS_BLUETOOTH_DEF_PIN2: 'TX',
                //arest inicio
                //LANG_SALIDAS_AREST_DEF: 'Arest',
                LANG_SALIDAS_SCAN_DEF: 'Escaner I2C',
                //LANG_SALIDAS_BLE_DEF: 'Panel BLE',
                //LANG_SALIDAS_AREST_rename: 'Renombrar',
                //LANG_SALIDAS_AREST_DEF_ID: 'ID',
                //LANG_SALIDAS_AREST_DEF_NAME: 'NOMBRE',
                //LANG_SALIDAS_AREST_DEF_TOOLTIP: 'Conecta tu Arduino con el panel IOT',

                // arest final
                //LANG_SALIDAS_BLUETOOTH_DEF_NAME: 'Nombre',
                //LANG_SALIDAS_BLUETOOTH_DEF_PINCODE: 'Código PIN',
                //LANG_SALIDAS_BLUETOOTH_DEF_RECEIVE: 'Recibir',
                //LANG_SALIDAS_BLUETOOTH_DEF_SEND: 'Enviar',
                //LANG_SALIDAS_BLUETOOTH_DEF_TOOLTIP: 'Definición del módulo Bluetooth',
                //LANG_ADVANCED_BT_SERIAL_AVAILABLE: 'Bluetooth: Puerto Serie Disponible',
                //LANG_ADVANCED_BT_SERIAL_AVAILABLE_TOOLTIP: 'Comprueba si el módulo Bluetooth está disponible o no',
                LANG_ADVANCED_SERIAL_AVAILABLE: 'Puerto Serie Disponible',
                LANG_ADVANCED_SERIAL_AVAILABLE_TOOLTIP: 'Comprueba si el puerto serie está disponible o no',
                LANG_ADVANCED_SERIAL_PARSEINT: 'Leer entero por el puerto serie', // To translate
                LANG_ADVANCED_SERIAL_PARSEINT_TOOLTIP: 'Devuelve el primer número entero (largo) desde el puerto serie', // To translate
                LANG_ADVANCED_SERIAL_PRINT: 'Imprimir por puerto serie',
                LANG_ADVANCED_SERIAL_PRINT_TOOLTIP: 'Imprime los datos como texto ASCII.',
                LANG_ADVANCED_SERIAL_PRINTLN: 'Imprimir por puerto serie con salto de línea',
                LANG_ADVANCED_SERIAL_PRINTLN_TOOLTIP: 'Imprime los datos como texto ASCII y con retorno de carro (RC).',
                LANG_ADVANCED_SERIAL_READ: 'Leer desde el puerto serie',
                LANG_ADVANCED_SERIAL_READ_TOOLTIP: 'Lee los datos que se reciben por el puerto serie como texto bytes.',
                LANG_ADVANCED_SERIAL_READSTRING: 'Leer cadena desde el puerto serie',
                LANG_ADVANCED_SERIAL_READSTRING_TOOLTIP: 'Lee los datos que se reciben por el puerto serie como texto ASCII.',
                LANG_ADVANCED_SERIAL_SPECIAL: 'Caracteres especiales',
                LANG_ADVANCED_SERIAL_SPECIAL_TAB: 'Tabulador',
                LANG_ADVANCED_SERIAL_SPECIAL_CARRIAGE_RETURN: 'Retorno de carro',
                LANG_ADVANCED_SERIAL_SPECIAL_LINE_FEED: 'Salto de línea',
                LANG_ADVANCED_SERIAL_SPECIAL_TOOLTIP: 'Escribe caracteres especiales.',
                //SALIDAS blocks :
                LANG_CATEGORY_SALIDAS: 'Salidas',

               
                //LANG_SALIDAS_JOYSTICK: 'Joystick',
                //LANG_SALIDAS_JOYSTICK_PIN_X: 'Eje X PIN#',
                //LANG_SALIDAS_JOYSTICK_PIN_Y: 'Eje Y PIN#',
                //LANG_SALIDAS_JOYSTICK_POSITION: 'Posición Joystick',
                //LANG_SALIDAS_JOYSTICK_PIN_BUTTON: 'Pulsador PIN#',
                //LANG_SALIDAS_JOYSTICK_TOOLTIP: 'Joystick',
                
                LANG_SALIDAS_MOTOR: 'Motor DC',
                LANG_SALIDAS_MOTOR_PIN1: 'POSITIVO',
                LANG_SALIDAS_MOTOR_PIN2: 'NEGATIVO',
                LANG_SALIDAS_MOTOR_STATE: '',
                LANG_SALIDAS_MOTOR_ON: 'ENCENDER',
                LANG_SALIDAS_MOTOR_OFF: 'APAGAR',
                LANG_SALIDAS_MOTOR_TOOLTIP: 'Controla el motor DC',
                LANG_SALIDAS_MOTOR2: 'Motor DC',
                LANG_SALIDAS_MOTOR_M1N: 'M1N',
                LANG_SALIDAS_MOTOR_M1P: 'M1P',
                LANG_SALIDAS_MOTOR_M1E: 'M1E',
                LANG_SALIDAS_MOTOR_M2N: 'M2N',
                LANG_SALIDAS_MOTOR_M2P: 'M2P',
                LANG_SALIDAS_MOTOR_M2E: 'M2E',
                LANG_SALIDAS_MOTOR2_DIRECCION: 'DIRECCION',
                LANG_SALIDAS_MOTOR_STATE: '',
                LANG_SALIDAS_MOTOR_ON: 'ON',
                LANG_SALIDAS_MOTOR_OFF: 'OFF',
                LANG_SALIDAS_MOTOR_TOOLTIP: 'Control the DC motor ',
                LANG_SALIDAS_LEDRGB: 'Led RGB',
                LANG_SALIDAS_LEDRGB_PINROJO: 'PINROJO',
                LANG_SALIDAS_LEDRGB_PINVERDE: 'PINVERDE',
                LANG_SALIDAS_LEDRGB_PINAZUL: 'PINAZUL',
                LANG_SALIDAS_LEDRGB_COLOR: 'COLOR',
                LANG_SALIDAS_LEDRGB_AZUL: 'AZUL',
                LANG_SALIDAS_LEDRGB_ROJO: 'ROJO',
                LANG_SALIDAS_LEDRGB_VERDE: 'VERDE',
                LANG_SALIDAS_LEDRGB_AMARILLO: 'AMARILLO',
                LANG_SALIDAS_LEDRGB_VIOLETA: 'VIOLETA',
                LANG_SALIDAS_LEDRGB_NARANJA: 'NARANJA',
                LANG_SALIDAS_LEDRGB_APAGADO: 'APAGADO',
                LANG_SALIDAS_LEDRGB_DURATION: 'Duración [ms]',
                LANG_SALIDAS_LEDRGB_TOOLTIP: 'Led RGB',
                LANG_SALIDAS_LED: 'Led',
                LANG_SALIDAS_LED_PIN: 'PIN',
                LANG_SALIDAS_LED_ON: 'ENCENDER',
                LANG_SALIDAS_LED_OFF: 'APAGAR',
                LANG_SALIDAS_LED_TOOLTIP: 'Controla el LED',
                LANG_SALIDAS_RELE: 'Relé (invertido)',
                LANG_SALIDAS_RELE_PIN: 'PIN',
                LANG_SALIDAS_RELE_ON: 'APAGAR',
                LANG_SALIDAS_RELE_OFF: 'ENCENDER',
                LANG_SALIDAS_RELE_TOOLTIP: 'Controla el relé',
                //LCD blocks:
                LANG_CATEGORY_LCD: 'Pantallas',
                LANG_LCD_PRINT_fila: 'fila',
                LANG_LCD_PRINT_columna: 'columna',
                LANG_LCD_DEF: 'LCD (2x16)',
                LANG_LCD_PINS: 'Pines del LCD',
                LANG_LCD_DIRECCION: 'Dirección I2C',
                LANG_LCD_I2C: 'LCD I2C',
                LANG_LCD_DEF_TOOLTIP: 'Define el LCD',
                LANG_LCD_ADVANCED_DEF: 'LCD avanzado',
                LANG_LCD_ADVANCED_ROWS: 'Filas',
                LANG_LCD_ADVANCED_COLUMNS: 'Columnas',
                LANG_LCD_DEF_ADVANCED_TOOLTIP: 'Bloque que define el LCD avanzado',
                LANG_LCD_SETBACKLIGHT: 'LCD: ajustar la retroiluminación',
                LANG_LCD_SETBACKLIGHT_CLOSE: '',
                LANG_LCD_SETBACKLIGHT_TOOLTIP: 'Ajusta la retroiluminación de la pantalla LCD',
                LANG_LCD_PRINT: 'LCD: Imprimir ',
                LANG_LCD_PRINT_POSITION: '¿Fijar posición del texto?',
                LANG_LCD_PRINT_TOOLTIP: 'Imprime un string en la pantalla LCD en la posición específicada o en la siguiente disponible.',
                LANG_LCD_CLEAR: 'LCD borrar',
                LANG_LCD_CLEAR_TOOLTIP: 'LCD: Borrar',
                LANG_matriz_DEF: 'Matriz', //MATRIZ
                LANG_matriz_din: 'DIN', //MATRIZ
                LANG_matriz_clk: 'CLK', //MATRIZ
                LANG_matriz_cs: 'CS', //MATRIZ
                LANG_matriz_cantidad: 'N°', //MATRIZ
                LANG_matriz_DEF_TOOLTIP: 'Define la Matriz',//Matriz
                LANG_matriz_PRINT: 'Matriz: Imprimir ',//Matriz
                LANG_matriz_PRINT_TOOLTIP: 'Imprime texto en la matriz',//Matriz
                LANG_matriz_caras_DEF: 'Matriz', //MATRIZ
                LANG_matriz_caras_din: 'DIN', //MATRIZ
                LANG_matriz_caras_clk: 'CLK', //MATRIZ
                LANG_matriz_caras_cs: 'CS', //MATRIZ
                LANG_matriz_caras_cantidad: 'N°', //MATRIZ
                LANG_matriz_caras_DEF_TOOLTIP: 'Define la Matriz',//Matriz
                LANG_matriz_caras_sorprendido: 'Sorprendido',//Matriz
                LANG_matriz_caras_feliz:'Feliz',//Matriz
                LANG_matriz_caras_enojado:'Enojado',//Matriz
                LANG_matriz_caras_estado: 'Estado', //Matriz

                //controls blocks :
                LANG_CATEGORY_CONTROLS: 'Control',
                LANG_CONTROLS_BASE_DELAY_WAIT: 'Esperar [ms]',
                LANG_CONTROLS_BASE_DELAY_TOOLTIP: 'Espera el tiempo especificado en milisegundos (ms)',
                LANG_CONTROLS_BASE_MILLIS: 'Tiempo desde el arranque (ms)',
                LANG_CONTROLS_BASE_MILLIS_TOOLTIP: 'Número de milisegundos desde que se inició el programa (entero largo)',
                LANG_CONTROLS_DOWHILE_OPERATOR_DO: 'Hacer',
                LANG_CONTROLS_DOWHILE_OPERATOR_WHILE: 'mientras',
                LANG_CONTROLS_DOWHILE_TOOLTIP: 'Mientras la condición sea verdadera, continúa ejecutando las acciones del bloque.',
                LANG_CONTROLS_EXECUTE: 'Ejecutar',
                LANG_CONTROLS_EXECUTE_TOOLTIP: 'Ejecuta código C/C++. Utilizar con preucación, ya que puede romper fácilmente el programa e impedir su correcta compilación.',
                LANG_CONTROLS_IF_TOOLTIP_1: 'Si la condición es verdadera, ejecuta las acciones dentro del bloque.',
                LANG_CONTROLS_IF_TOOLTIP_2: 'Si la condición es verdadera, se ejecuta el primer bloque de comandos. Si no lo es, se ejecuta el segundo bloque de comandos.',
                LANG_CONTROLS_IF_TOOLTIP_3: 'Si el primer valor es verdadero, se ejecuta el primer bloque de comandos. Sino, si el segundo valor es verdadero, se ejecuta el segundo bloque de comandos.',
                LANG_CONTROLS_IF_TOOLTIP_4: 'Si el primer valor es verdadero, se ejecuta el primer bloque de comandos. Sino, si el segundo valor es verdadero, se ejecuta el segundo bloque de comandos. Si ninguno de los valores es verdadero, se ejecuta el último bloque de comandos',
                LANG_CONTROLS_IF_MSG_IF: 'si',
                LANG_CONTROLS_IF_MSG_ELSEIF: 'en cambio, si',
                LANG_CONTROLS_IF_MSG_ELSE: 'de lo contrario',
                LANG_CONTROLS_IF_MSG_THEN: 'ejecutar',
                LANG_CONTROLS_IF_IF_Field_IF: 'si',
                LANG_CONTROLS_IF_IF_TOOLTIP: 'Añadir, eliminar o reordenar secciones para reconfigurar este bloque "si".',
                LANG_CONTROLS_IF_ELSEIF_Field_ELSEIF: 'en cambio, si',
                LANG_CONTROLS_IF_ELSEIF_TOOLTIP: 'Añade una condición al bloque "si".',
                LANG_CONTROLS_IF_ELSE_Field_ELSE: 'de lo contrario',
                LANG_CONTROLS_IF_ELSE_TOOLTIP: 'Añade una condición final al bloque "si" para capturar el resto de opciones.',
                LANG_CONTROLS_FOR_FROM_WARNING: 'No puedes asignar una variable al valor inicial del for',
                LANG_CONTROLS_FOR_TO_WARNING: 'No puedes asignar una variable al valor final del for',
                LANG_CONTROLS_FOR_INPUT_WITH: 'Contar con',
                LANG_CONTROLS_FOR_INPUT_VAR: 'x',
                LANG_CONTROLS_FOR_INPUT_FROM: 'desde',
                LANG_CONTROLS_FOR_INPUT_TO: 'hasta',
                LANG_CONTROLS_FOR_INPUT_DO: 'ejecutar',
                LANG_CONTROLS_FOR_TOOLTIP: 'Contar desde un número de inicio hasta uno final. Cada vez que se incrementa en uno la cuenta, la variable toma ese valor y se ejecutan las acciones.',
                LANG_CONTROLS_WHILEUNTIL_OPERATOR_WHILE: 'mientras',
                LANG_CONTROLS_WHILEUNTIL_OPERATOR_UNTIL: 'hasta',
                LANG_CONTROLS_WHILEUNTIL_TOOLTIP_WHILE: 'Mientras la condición sea verdadera, ejecutar las instrucciones.',
                LANG_CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL: 'Mientras la condición sea falsa, ejecutar las instrucciones.',
                LANG_CONTROLS_REPEAT_TITLE_REPEAT: 'Repetir',
                LANG_CONTROLS_REPEAT_TITLE_TIMES: 'veces',
                LANG_CONTROLS_REPEAT_INPUT_DO: 'ejecutar',
                LANG_CONTROLS_REPEAT_TOOLTIP: 'Ejecutar las instrucciones un número concreto de veces.',
                LANG_CONTROLS_FLOW_STATEMENTS_HELPURL: '',
                LANG_CONTROLS_FLOW_STATEMENTS_INPUT_OFLOOP: 'el bucle',
                LANG_CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK: 'interrumpir',
                LANG_CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE: 'continuar con la siguiente iteración',
                LANG_CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK: 'Interrumpir el bucle que contiene esta instrucción.',
                LANG_CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE: 'Saltarse el resto de acciones de esta iteración y continuar con la siguiente iteración.',
                LANG_CONTROLS_FLOW_STATEMENTS_WARNING: 'Atención: Este bloque sólo puede ser usado dentro de un bucle.',
                LANG_CONTROLS_SETUP_LOOP_SETUP_TITLE: 'Inicio',
                LANG_CONTROLS_SETUP_LOOP_LOOP_TITLE: 'Repetir',
                LANG_CONTROLS_SETUP_LOOP_TOOLTIP: 'Los bloques en Inicio se ejecutarán una sola vez al arranque, mientras que los bloques en Repetir se ejecutarán de forma repetida.',
                LANG_CONTROLS_SWITCH: 'Cambiar',
                LANG_CONTROLS_SWITCH_TOOLTIP_1: 'Ejecuta las acciones del caso que se cumpla.',
                LANG_CONTROLS_SWITCH_TOOLTIP_2: 'Ejecuta las acciones del caso que se cumpla.',
                LANG_CONTROLS_SWITCH_TOOLTIP_3: 'Ejecuta las acciones del caso que se cumpla.',
                LANG_CONTROLS_SWITCH_TOOLTIP_4: 'Ejecuta las acciones del caso que se cumpla.',
                LANG_CONTROLS_SWITCH_SWITCH_TOOLTIP: 'Este bloque compara de uno en uno si se cumplen los distintos casos.',
                LANG_CONTROLS_SWITCH_CASE_TOOLTIP: 'caso ',
                LANG_CONTROLS_SWITCH_DEFAULT_TOOLTIP: 'El bloque "default" especifica la acción que se va a ejecutar si no se han cumplido ninguno de los casos anteriores.',
                LANG_CONTROLS_SWITCH_IS: 'es: ',
                LANG_CONTROLS_SWITCH_CASE: 'caso ',
                LANG_CONTROLS_SWITCH_COLON: ': ',
                LANG_CONTROLS_SWITCH_DEFAULT: 'en otro caso',
                LANG_CONTROLS_SWITCH_DO: 'ejecutar',
                //math blocks :
                LANG_CATEGORY_MATH: 'Matemáticas',
                LANG_MATH_ADVANCED_MAP_MAP: 'Mapear ',
                LANG_MATH_ADVANCED_MAP_FROM: 'De [',
                LANG_MATH_ADVANCED_MAP_HYPHEN: '-',
                LANG_MATH_ADVANCED_MAP_BRACKET: ']',
                LANG_MATH_ADVANCED_MAP_TO: 'a [',
                LANG_MATH_ADVANCED_MAP_TOOLTIP: 'Mapea la entrada desde un rango de valores iniciales a otro rango distinto.',
                LANG_MATH_NUMBER_TOOLTIP: 'Número entero',
                LANG_MATH_ARRAY_ARRAY3: '[3]',
                LANG_MATH_ARRAY_BRACKET3: '{',
                LANG_MATH_ARRAY_BRACKET4: '}',
                LANG_MATH_ARRAY_COMMA: ',',
                LANG_MATH_ARRAY_TOOLTIP: 'Vector de tres enteros',
                LANG_ARRAY_GET_BRACKET1: '[',
                LANG_ARRAY_GET_BRACKET2: ']',
                LANG_ARRAY_GET_TOOLTIP: 'Devuelve el valor de un elemento concreto del vector.',
                LANG_MATH_MODULO_TOOLTIP: 'Devuelve el resto de la división de las dos entradas.',
                LANG_MATH_BASE_MAP: 'Mapear ',
                LANG_MATH_BASE_MAP_VALUE_TO: 'Valor entre [0-',
                LANG_MATH_BASE_MAP_BRACKET: ']',
                LANG_MATH_BASE_MAP_TOOLTIP: 'Mapea la entrada desde el rango [0-1023] a otro rango de valores.',
                LANG_MATH_SINGLE_OP_ROOT: 'raíz cuadrada',
                LANG_MATH_SINGLE_OP_ABSOLUTE: 'valor absoluto',
                LANG_MATH_SINGLE_TOOLTIP_ROOT: 'Devuelve la raíz cuadrada de un número.',
                LANG_MATH_SINGLE_TOOLTIP_ABS: 'Devuelve el valor absoluto de un número.',
                LANG_MATH_SINGLE_TOOLTIP_NEG: 'Devuelve el número cambiado de signo.',
                LANG_MATH_SINGLE_TOOLTIP_LN: 'Devuelve el logaritmo neperiano de un número.',
                LANG_MATH_SINGLE_TOOLTIP_LOG10: 'Devuelve el logaritmo en base 10 de un número.',
                LANG_MATH_SINGLE_TOOLTIP_EXP: 'Devuelve el exponencial de un número.',
                LANG_MATH_SINGLE_TOOLTIP_POW10: 'Devuelve 10 elevado a una potencia.',
                //text blocks:
                LANG_CATEGORY_TEXT: 'Texto',
                LANG_TEXT_TEXT_HELPURL: '',
                LANG_TEXT_TEXT_TOOLTIP: 'Una letra, una palabra o una línea de texto.',
                LANG_TEXT_JOIN_HELPURL: '',
                LANG_TEXT_JOIN_Field_CREATEWITH: 'crear texto con',
                LANG_TEXT_JOIN_TOOLTIP: 'Crea texto juntando cualquier número de elementos.',
                LANG_TEXT_CREATE_JOIN_Field_JOIN: 'unir',
                LANG_TEXT_CREATE_JOIN_TOOLTIP: 'Añadir, eliminar o reordenar secciones para reconfigurar este bloque de texto.',
                LANG_TEXT_CREATE_JOIN_ITEM_Field_ITEM: 'elemento',
                LANG_TEXT_CREATE_JOIN_ITEM_TOOLTIP: 'Añadir un elemento al texto.',
                LANG_TEXT_CREATE_JOIN_TITLE_JOIN: 'unir',
                LANG_TEXT_CREATE_JOIN_ITEM_TITLE_ITEM: 'elemento',
                LANG_TEXT_APPEND_HELPURL: '',
                LANG_TEXT_APPEND_TO: 'a',
                LANG_TEXT_APPEND_APPENDTEXT: 'añadirle texto',
                LANG_TEXT_APPEND_VARIABLE: 'elemento',
                LANG_TEXT_APPEND_TOOLTIP: 'Añadir texto a la variable %1.',
                LANG_TEXT_LENGTH_HELPURL: '',
                LANG_TEXT_LENGTH_INPUT_LENGTH: 'longitud',
                LANG_TEXT_LENGTH_TOOLTIP: 'Devuelve el número de letras (incluyendo los espacios) en el texto introducido.',
                LANG_TEXT_EQUALSIGNORECASE_IS: '',
                LANG_TEXT_EQUALSIGNORECASE_EQUAL: ' =',
                LANG_TEXT_EQUALSIGNORECASE_QUESTION: '',
                LANG_TEXT_EQUALSIGNORECASE_TOOLTIP: 'Compara si los dos textos introducidos son iguales, independientemente de que tengan letras mayúsculas o minúsculas.',
                LANG_TEXT_SUBSTRING: 'Recortar ',
                LANG_TEXT_SUBSTRING_FROM: 'desde',
                LANG_TEXT_SUBSTRING_TO: 'hasta',
                LANG_TEXT_SUBSTRING_TOOLTIP: 'Recorta los caracteres del texto introducido que se encuentren entre los dos índices y crea con ellos un nuevo texto.',
                //advanced blocks :
                LANG_CATEGORY_ADVANCED: 'Funciones PIN',
                LANG_ADVANCED_CONVERSION_CONVERT: 'Convertir',
                LANG_ADVANCED_CONVERSION_DECIMAL: 'Decimal',
                LANG_ADVANCED_CONVERSION_HEXADECIMAL: 'Hexadecimal',
                LANG_ADVANCED_CONVERSION_OCTAL: 'Octal',
                LANG_ADVANCED_CONVERSION_BINARY: 'Binario',
                LANG_ADVANCED_CONVERSION_VALUE: 'valor',
                LANG_ADVANCED_CONVERSION_TOOLTIP: 'Convertir la base de un número.',
                LANG_ADVANCED_INOUT_ANALOG_READ: 'Leer el pin analógico PIN',
                LANG_ADVANCED_INOUT_ANALOG_READ_TOOLTIP: 'Lee el valor de un pin analógico específico.',
                LANG_ADVANCED_INOUT_ANALOG_WRITE: 'Escribir en PIN digital',
                LANG_ADVANCED_INOUT_ANALOG_WRITE_VALUE: 'el valor analógico',
                LANG_ADVANCED_INOUT_ANALOG_WRITE_TOOLTIP: 'Escribe un valor entre 0 y 255 en un PIN analógico específico.',
                LANG_ADVANCED_BUILTIN_LED: 'LED EN LA PLACA',
                LANG_ADVANCED_BUILTIN_LED_STATE: 'estado',
                LANG_ADVANCED_BUILTIN_LED_ON: 'ENCENDIDO',
                LANG_ADVANCED_BUILTIN_LED_OFF: 'APAGADO',
                LANG_ADVANCED_BUILTIN_LED_TOOLTIP: 'LED integrado en la placa que está internamente conectado al PIN 13.',
                LANG_ADVANCED_INOUT_DIGITAL_READ: 'Leer el pin digital PIN',
                LANG_ADVANCED_INOUT_DIGITAL_READ_TOOLTIP: 'Lee el valor desde un pin digital específico.',
                LANG_ADVANCED_INOUT_DIGITAL_WRITE: 'Escribir en el pin digital',
                LANG_ADVANCED_INOUT_DIGITAL_WRITE_PIN: 'PIN',
                LANG_ADVANCED_INOUT_DIGITAL_WRITE_STATE: 'estado',
                LANG_ADVANCED_INOUT_DIGITAL_WRITE_HIGH: 'ALTO',
                LANG_ADVANCED_INOUT_DIGITAL_WRITE_LOW: 'BAJO',
                LANG_ADVANCED_INOUT_DIGITAL_WRITE_TOOLTIP: 'Escribe un valor en el pin digital específico.',
                LANG_ADVANCED_HIGHLOW_HIGH: 'ALTO',
                LANG_ADVANCED_HIGHLOW_LOW: 'BAJO',
                LANG_ADVANCED_HIGHLOW_TOOLTIP: 'Escribe "ALTO" o "BAJO" en función de lo seleccionado.',
                LANG_ADVANCED_MATH_RANDOM: 'Aleatorio entre',
                LANG_ADVANCED_MATH_RANDOM_AND: ' y ',
                LANG_ADVANCED_MATH_RANDOM_TOOLTIP: 'Crea un número aleatorio entre los dos límites introducidos.',
                //procedures blocks
                LANG_CATEGORY_PROCEDURES: 'Funciones',
                LANG_PROCEDURES_RETURN: 'devuelve',
                LANG_PROCEDURES_RETURN_TOOLTIP: 'Devuelve un valor',
                LANG_PROCEDURES_CALL_WITHOUT_DEFINITION: 'Llamada a una función sin definición previa.',
                LANG_PROCEDURES_DEFNORETURN_HELPURL: '',
                LANG_PROCEDURES_DEFNORETURN_PROCEDURE: 'func_sin_retorno',
                LANG_PROCEDURES_DEFNORETURN_DO: 'ejecutar',
                LANG_PROCEDURES_DEFNORETURN_TOOLTIP: 'Función que se ejecutará sin devolver nada.',
                LANG_PROCEDURES_DEFRETURN_HELPURL: '',
                LANG_PROCEDURES_DEFRETURN_PROCEDURE: 'func_con_retorno',
                LANG_PROCEDURES_DEFRETURN_DO: 'ejecutar',
                LANG_PROCEDURES_DEFRETURN_RETURN: 'devuelve',
                LANG_PROCEDURES_DEFRETURN_TOOLTIP: 'Función con valor de retorno.',
                LANG_PROCEDURES_DEF_DUPLICATE_WARNING: 'Atención: Esta función tiene parámetros duplicados.',
                LANG_PROCEDURES_CALLNORETURN_HELPURL: '',
                LANG_PROCEDURES_CALLNORETURN_CALL: 'ejecutar',
                LANG_PROCEDURES_CALLNORETURN_PROCEDURE: 'func_sin_retorno',
                LANG_PROCEDURES_CALLNORETURN_TOOLTIP: 'Ejecuta esta función.',
                LANG_PROCEDURES_CALLRETURN_HELPURL: '',
                LANG_PROCEDURES_CALLRETURN_CALL: 'ejecutar',
                LANG_PROCEDURES_CALLRETURN_PROCEDURE: 'func_con_retorno',
                LANG_PROCEDURES_CALLRETURN_TOOLTIP: 'Ejecuta esta función que tiene valor de retorno.',
                LANG_PROCEDURES_MUTATORCONTAINER_Field: 'parámetros',
                LANG_PROCEDURES_MUTATORARG_Field: 'variable:',
                LANG_PROCEDURES_HIGHLIGHT_DEF: 'Subraya la función',
                LANG_PROCEDURES_IFRETURN_TOOLTIP: 'Si la condición es verdadera, la función devolverá este valor.',
                LANG_PROCEDURES_IFRETURN_WARNING: 'Atención: Este bloque sólo puede ser usado dentro de una función que tenga valor de retorno.',
                //variables blocks :
                LANG_CATEGORY_VARIABLES: 'Variables',
                LANG_VARIABLES_CALL_WITHOUT_DEFINITION: 'Esta variable no está declarada.',
                LANG_VARIABLES_GLOBAL: 'Declarar variable GLOBAL',
                LANG_VARIABLES_GLOBAL_TYPE: 'de tipo ',
                LANG_VARIABLES_GLOBAL_EQUALS: '=',
                LANG_VARIABLES_GLOBAL_TOOLTIP: 'Declara y define una variable GLOBAL de tipo entero (int) o texto (String).',
                LANG_VARIABLES_LOCAL: 'Declarar variable',
                LANG_VARIABLES_LOCAL_TYPE: 'de tipo ',
                LANG_VARIABLES_LOCAL_EQUALS: '=',
                LANG_VARIABLES_LOCAL_TOOLTIP: 'Declara y define una variable LOCAL de tipo entero (int) o texto (String).',
                LANG_VARIABLES_DEFINE: 'Definir variable ',
                LANG_VARIABLES_DEFINE_AS: 'como',
                LANG_VARIABLES_DEFINE_TOOLTIP: 'Definir el valor de una variable.',
                LANG_VARIABLES_SET: 'Var',
                LANG_VARIABLES_SET_AS: '=',
                LANG_VARIABLES_SET_TOOLTIP: 'Cambia el valor de una variable.',
                LANG_VARIABLES_GET: 'Var',
                LANG_VARIABLES_GET_TOOLTIP: 'Devuelve el valor de una variable',
                LANG_VARIABLES_PIN_ANALOG: 'Pin analógico',
                LANG_VARIABLES_PIN_DIGITAL: 'Pin digital',
                LANG_VARIABLES_PIN_DIGITAL0: 'CUIDADO: el pin digital 0 (pin Rx) es usado para escribir un programa en la placa desde el ordenador. Usarlo para conectar componentes puede dar problemas al programarla.',
                LANG_VARIABLES_PIN_TOOLTIP: 'Selecciona el PIN deseado.',
                LANG_VARIABLES_TYPE_BYTE: 'Octeto',
                LANG_VARIABLES_TYPE_FLOAT: 'Decimal',
                LANG_VARIABLES_TYPE_INTEGER: 'Entero',
                LANG_VARIABLES_TYPE_INTEGER_LONG: 'Entero largo',
                LANG_VARIABLES_TYPE_STRING: 'Texto',
                //ENTRADAS blocks :
                LANG_CATEGORY_ENTRADAS: 'Entradas',
                LANG_ENTRADAS_ULTRASONIDO: 'Sensor de Ultrasonidos',
                LANG_ENTRADAS_ULTRASONIDO_RED_PIN: 'ECHO PIN',
                LANG_ENTRADAS_ULTRASONIDO_BLUE_PIN: 'TRIGGER PIN',
                LANG_ENTRADAS_ULTRASONIDO_TOOLTIP: 'Devuelve la distancia medida por el sensor.',
                LANG_ENTRADAS_GYRO: 'Eje sensores 101',
                LANG_ENTRADAS_GYRO_EJE: 'Eje',
                LANG_ENTRADAS_GYRO_EJE_X: 'gx',
                LANG_ENTRADAS_GYRO_EJE_Y: 'gy',
                LANG_ENTRADAS_GYRO_EJE_Z: 'gz',
                LANG_ENTRADAS_ACE_EJE_X: 'ax',
                LANG_ENTRADAS_ACE_EJE_Y: 'ay',
                LANG_ENTRADAS_ACE_EJE_Z: 'az',
                LANG_ENTRADAS_ACE: 'Sensores Genuino 101',
                LANG_ENTRADAS_ACE_EJE: 'Eje',
                LANG_ENTRADAS_BUTTON: 'Botón',
                LANG_ENTRADAS_BUTTON_PIN: 'PIN',
                LANG_ENTRADAS_BUTTON_TOOLTIP: 'Botón ',
                LANG_ENTRADAS_FOLLOWER: 'Seguidor de líneas',
                LANG_ENTRADAS_FOLLOWER_PIN_LEFT: 'PIN IZQUIERDA',
                LANG_ENTRADAS_FOLLOWER_PIN_RIGHT: 'PIN DERECHA',
                LANG_ENTRADAS_FOLLOWER_LEFT: 'Izquierda',
                LANG_ENTRADAS_FOLLOWER_RIGHT: 'Derecha',
                LANG_ENTRADAS_FOLLOWER_TOOLTIP: 'Devuelve el valor digital de los sensores ópticos y crea un condicional para cada uno',
                LANG_ENTRADAS_INFRARED: 'Sensor óptico',
                LANG_ENTRADAS_INFRARED_PIN: 'PIN',
                LANG_ENTRADAS_INFRARED_TOOLTIP: 'Devuelve el valor digital del sensor óptico',
                LANG_ENTRADAS_PHOTORESISTOR: 'Sensor de Luz',
                LANG_ENTRADAS_PHOTORESISTOR_PIN: 'PIN',
                LANG_ENTRADAS_PHOTORESISTOR_TOOLTIP: 'Devuelve el valor analógico del sensor de luz (fotorresistencia).',
                LANG_SALIDAS_PIEZO_BUZZER: 'Zumbador',
                LANG_SALIDAS_PIEZO_BUZZER_PIN: 'PIN',
                LANG_SALIDAS_PIEZO_BUZZER_TONE: 'TONO',
                LANG_SALIDAS_PIEZO_BUZZER_DO: 'DO',
                LANG_SALIDAS_PIEZO_BUZZER_RE: 'RE',
                LANG_SALIDAS_PIEZO_BUZZER_MI: 'MI',
                LANG_SALIDAS_PIEZO_BUZZER_FA: 'FA',
                LANG_SALIDAS_PIEZO_BUZZER_SOL: 'SOL',
                LANG_SALIDAS_PIEZO_BUZZER_LA: 'LA',
                LANG_SALIDAS_PIEZO_BUZZER_SI: 'SI',
                LANG_SALIDAS_PIEZO_BUZZER_DURATION: 'Duración [ms]',
                LANG_SALIDAS_PIEZO_BUZZER_TOOLTIP: 'Zumbador piezoeléctrico',
                LANG_ENTRADAS_POTENTIOMETER: 'Potenciómetro',
                LANG_ENTRADAS_POTENTIOMETER_PIN: 'PIN',
                LANG_ENTRADAS_POTENTIOMETER_TOOLTIP: 'Potenciómetro',
                LANG_ENTRADAS_LLUVIA: 'Sensor humedad suelo',
                LANG_ENTRADAS_LLUVIA_PIN: 'PIN',
                LANG_ENTRADAS_LLUVIA_TOOLTIP: 'Devuelve el valor analógico del sensor',
                LANG_ENTRADAS_PIR: 'Sensor PIR',
                LANG_ENTRADAS_PIR_PIN: 'PIN',
                LANG_ENTRADAS_PIR_TOOLTIP: 'Devuelve el valor digital medido por el sensor PIR',
                LANG_ENTRADAS_SONIDO: 'Sensor de sonido',
                LANG_ENTRADAS_SONIDO_PIN: 'PIN',
                LANG_ENTRADAS_SONIDO_TOOLTIP: 'Devuelve el valor analógico medido por el sensor de sonido.',
                LANG_ENTRADAS_TEMPERATURA: 'Temperatura',
                LANG_ENTRADAS_TEMPERATURA_TOOLTIP: 'Devuelve la temperatura en grados celcius',
                LANG_ENTRADAS_HUMEDAD: 'Humedad',
                LANG_ENTRADAS_HUMEDAD_TOOLTIP: 'Devuelve el porcentaje de humedad',
                LANG_ENTRADAS_DHT11: 'DHT11',
                LANG_ENTRADAS_DHT11_PIN: 'PIN',
                LANG_ENTRADAS_DHT11_TOOLTIP: 'Inicia la librería del DHT11',
                //servo blocks :
                LANG_CATEGORY_SERVO: 'Servo',
                LANG_SERVO_CONT: 'Servo RC',
                LANG_SERVO_CONT_PIN: 'PIN',
                LANG_SERVO_CONT_ROT: 'ROT',
                LANG_SERVO_CONT_TURN_CLOCKWISE: 'GIRO HORARIO',
                LANG_SERVO_CONT_TURN_COUNTERCLOCKWISE: 'GIRO ANTIHORARIO',
                LANG_SERVO_CONT_STOPPED: 'DETENER',
                LANG_SERVO_CONT_DELAY: 'Pausa [ms]',
                LANG_SERVO_CONT_TOOLTIP: 'Servo de rotación continua.',
                LANG_SERVO_MOVE: 'Servo',
                LANG_SERVO_MOVE_PIN: 'PIN',
                LANG_SERVO_MOVE_DEGREES: 'Grados (0~180)',
                LANG_SERVO_MOVE_DELAY: 'Pausa [ms]',
                LANG_SERVO_READ: "Lectura del servo",
                LANG_SERVO_MOVE_TOOLTIP: 'Mover el servo entre 0 y 180 grados.',
                LANG_SERVO_WARNING: 'No puedes asignar una variable al pin del servo',
            
            };
            // Node
            if (typeof module !== 'undefined' && module.exports) {
                module.exports = language;
            }
            // Browser
            // if (typeof window !== 'undefined' && this.Educablocks && this.Educablocks.locales.add) {
            //     this.Educablocks.locales.add('es', language);
            if (typeof window !== 'undefined' && Educablocks && Educablocks.locales.add) {
                Educablocks.locales.add('es-ES', language);
            }
        }());

        

        // Source: src/constants.js
        /* global Educablocks, Blockly*/
        Educablocks.locales.initialize();
        Educablocks.variables = {};
        Educablocks.isVariable = function(varValue) {
            for (var i in Blockly.Variables.allVariables()) {
                if (Blockly.Variables.allVariables()[i] === varValue) {
                    return true;
                }
            }
            if (Educablocks.variables[varValue] !== undefined) {
                return true;
            }
            if (varValue.search('digitalRead\\(') >= 0 || varValue.search('analogRead\\(') >= 0) {
                return true;
            }
            return false;
        };

        Educablocks.findPinMode = function(dropdown_pin) {
            var code = '';
            dropdown_pin = dropdown_pin.split(';\n');
            for (var j in dropdown_pin) {
                if (dropdown_pin[j].search('pinMode') >= 0) {
                    code += dropdown_pin[j] + ';\n';
                } else {
                    dropdown_pin = dropdown_pin[j];
                }
            }
            return {
                'code': code,
                'pin': dropdown_pin
            };
        };

         //help URLs
        Educablocks.GITHUB_SRC_URL = 'https://github.com/SALIDAS/Educablocks/tree/master/src/';
        Educablocks.URL_LED = 'http://diwo.SALIDAS.com/programando-un-led-en-bitbloq-i/';
        Educablocks.URL_LDR = 'http://diwo.SALIDAS.com/el-sensor-de-luz/';
        Educablocks.URL_BUTTON = 'http://diwo.SALIDAS.com/programando-el-pulsador-en-bitbloq/';
        Educablocks.URL_BUZZER = 'http://diwo.bq.com/programando-el-ENTRADASbador-en-bitbloq/';
        Educablocks.URL_POTENTIOMETER = 'http://diwo.bq.com/programando-un-potenciometro-en-bitbloq/';
        Educablocks.URL_IR = 'http://diwo.bq.com/programando-un-sensor-infrarrojo-en-bitbloq/';
        Educablocks.URL_CONTINUOUS_ROTATION_SERVO = 'http://diwo.bq.com/programando-un-servo-en-bitbloq/';
        Educablocks.URL_SERVO = 'http://diwo.bq.com/programando-un-miniservo-en-bitbloq/';
        Educablocks.URL_LCD = 'http://diwo.bq.com/programando-una-pantalla-lcd-en-bitbloq/';
        Educablocks.URL_US = 'http://diwo.bq.com/programando-el-sensor-ultrasonido-en-bitbloq/';
        Educablocks.URL_BUTTONS = 'http://diwo.bq.com/programando-la-botonera-en-bitbloq/';
        Educablocks.URL_JOYSTICK = 'http://diwo.bq.com/programando-un-joystick-con-bitbloq/';
        Educablocks.URL_SERIE = 'http://diwo.bq.com/comunicacion-puerto-serie-en-windows-7/';
        Educablocks.URL_IF = 'http://diwo.bq.com/programando-los-bloques-de-control-el-bloque-si-ejecutar/';
        Educablocks.URL_SWITCH = 'http://diwo.bq.com/programando-los-bloques-de-control-el-bloque-si-switch-case/';
        Educablocks.URL_WHILE = 'http://diwo.bq.com/programando-los-bloques-de-control-el-bloque-mientras/';
        Educablocks.URL_FOR = 'http://diwo.bq.com/programando-los-bloques-de-control-el-bloque-contar/';
        Educablocks.URL_FLOW_STATEMENTS = 'http://diwo.bq.com/programando-los-bloques-de-control-interrumpir/';
        Educablocks.URL_LOGIC = 'http://diwo.bq.com/programando-los-bloques-logicos/';
        Educablocks.URL_MATH = 'http://diwo.bq.com/programando-los-bloques-matematicos/';
        Educablocks.URL_TEXT = 'http://diwo.bq.com/programando-los-bloques-de-texto/';
        Educablocks.URL_BT = 'http://diwo.bq.com/ejemplo-en-bitbloq-de-comunicacion-bluetooth/';
        Educablocks.URL_VAR = 'http://diwo.bq.com/programando-con-variables-en-bitbloq/';
        Educablocks.URL_PROC_NO_RET = 'http://diwo.bq.com/programando-con-funciones-en-bitbloq/';
        Educablocks.URL_PROC = 'http://diwo.bq.com/programando-con-funciones-en-bitbloq-2/';
        Educablocks.URL_PIN_FUNC = 'http://diwo.bq.com/programando-los-bloques-funciones-pin';

        // RGB block colors
        Educablocks.LANG_COLOUR_SALIDAS = '#F44336';
        Educablocks.LANG_COLOUR_ENTRADAS = '#9C27B0';
        Educablocks.LANG_COLOUR_SERVO = '#2196F3';
        Educablocks.LANG_COLOUR_LCD = '#3F51B5';
        Educablocks.LANG_COLOUR_CONTROL = '#e91e63';
        Educablocks.LANG_COLOUR_LOGIC = '#009688';
        Educablocks.LANG_COLOUR_MATH = '#00BCD4';
        Educablocks.LANG_COLOUR_TEXT = '#4CAF50';
        Educablocks.LANG_COLOUR_COMMUNICATION = '#00BFA5';
        Educablocks.LANG_COLOUR_ADVANCED = '#FF9800';
        Educablocks.LANG_COLOUR_VARIABLES = '#FF5722';
        Educablocks.LANG_COLOUR_PROCEDURES = '#651FFF';

        Educablocks.setColors = function(colorArray) {
            Educablocks.LANG_COLOUR_SALIDAS = colorArray[0];
            Educablocks.LANG_COLOUR_ENTRADAS = colorArray[1];
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
            Educablocks.LANG_COLOUR_SCREEN = colorArray[12];
        };
        // Source: src/profiles.js
        /*
         * Arduino Board profiles
         */
        var profiles = {
            arduino: {
                description: 'Standard-compatible board',
                digital: [
                    ['0', '0'],
                    ['1', '1'],
                    ['2', '2'],
                    ['3', '3'],
                    ['4', '4'],
                    ['5', '5'],
                    ['6', '6'],
                    ['7', '7'],
                    ['8', '8'],
                    ['9', '9'],
                    ['10', '10'],
                    ['11', '11'],
                    ['12', '12'],
                    ['13', '13']
                ],
                bluetooth: [
                    ['1', '1'],
                    ['2', '2'],
                    ['3', '3'],
                    ['4', '4'],
                    ['5', '5'],
                    ['6', '6'],
                    ['7', '7'],
                    ['8', '8'],
                    ['9', '9'],
                    ['10', '10'],
                    ['11', '11']
                ],
                pwm: [
                    ['#3', '3'],
                    ['#5', '5'],
                    ['#6', '6'],
                    ['#9', '9'],
                    ['#10', '10'],
                    ['#11', '11']
                ],
                analog: [
                    ['A0', 'A0'],
                    ['A1', 'A1'],
                    ['A2', 'A2'],
                    ['A3', 'A3'],
                    ['A4', 'A4'],
                    ['A5', 'A5']
                ],
                serial: 9600,
            },
            'arduino_mega': {
                description: 'Mega-compatible board',
            },
        };


        // Set default profile to arduino standard-compatible board
        profiles['default'] = profiles.arduino;

        // Source: src/blockly.extensions.js
        /* global Blockly */
        /* jshint sub:true */

        /**
         * Generates toolbox XML with all blocks defined in Blockly.Blocks
         * @return {String} Blockly toolbox XML
         */
        Blockly.createToolbox = function() {

            var blocks = {};

            for (var block in this.Blocks) {
                // important check that this is objects own property 
                // not from prototype prop inherited
                if (this.Blocks.hasOwnProperty(block) && this.Blocks[block] instanceof Object && this.Blocks[block].category) {
                    var category = this.Blocks[block].category;
                    blocks[category] = blocks[category] || [];
                    blocks[category].push(block);
                }
            }

            var toolbox = '<xml id="toolbox" style="display: none">';

            var categoryItem = function(type) {
                toolbox += '<block type="' + type + '"></block>';
            };

            for (block in blocks) {

                if (blocks.hasOwnProperty(block)) {
                    toolbox += '<category id="' + block + '" name="' + block + '">';
                    blocks[block].forEach(categoryItem);
                    toolbox += '</category>';
                }

            }
            toolbox += '</xml>';

            return toolbox ;
        };

        // Source: tmp/jst.js
        // Source: tmp/jst.js
        this["JST"] = this["JST"] || {};



        this["JST"]["advanced_conversion"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p +=
                    ((__t = (value_num)) == null ? '' : __t) +
                    ',' +
                    ((__t = (convertion)) == null ? '' : __t);

            }
            return __p
        };

        this["JST"]["advanced_map"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'map(' +
                    ((__t = (num)) == null ? '' : __t) +
                    ',' +
                    ((__t = (from_min)) == null ? '' : __t) +
                    ',' +
                    ((__t = (from_max)) == null ? '' : __t) +
                    ',' +
                    ((__t = (to_min)) == null ? '' : __t) +
                    ',' +
                    ((__t = (to_max)) == null ? '' : __t) +
                    ')';

            }
            return __p
        };

        this["JST"]["base_delay"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'delay(' +
                    ((__t = (delay_time)) == null ? '' : __t) +
                    ');\n';

            }
            return __p
        };

        this["JST"]["base_map"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'map(' +
                    ((__t = (value_num)) == null ? '' : __t) +
                    ',0,1023,0,' +
                    ((__t = (value_dmax)) == null ? '' : __t) +
                    ')';

            }
            return __p
        };

        this["JST"]["base_millis"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'millis()\n';

            }
            return __p
        };

        this["JST"]["SALIDAS_gyro"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p +=((__t = (dropdown_stat)) == null ? '' : __t);
            }
            return __p
        };

        this["JST"]["SALIDAS_gyro_definitions_distancia"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'long distancia(int trigger_pin, int echo_pin)\n{\n  long microseconds = tiempo(trigger_pin, echo_pin);\n  long distancia;\n  distancia = microseconds/29/2;\n  if (distancia == 0){\n    distancia = 999;\n  }\n  return distancia;\n}\n';

            }
            return __p
        };

        this["JST"]["SALIDAS_gyro_definitions_tiempo"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += '';
            }
            return __p
        };

        this["JST"]["SALIDAS_gyro_setups_echo"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += '';

            }
            return __p
        };

        this["JST"]["SALIDAS_gyro_setups_trigger"] = function(obj) {
   
        };


        this["JST"]["SALIDAS_ace"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'float ax, ay, az, gx, gy, gz;\nCurieIMU.readGyroScaled(gx, gy, gz);\nCurieIMU.readAccelerometerScaled(ax, ay, az); \n'
            }
            return __p
        };

        this["JST"]["SALIDAS_ace_definitions_distancia"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'long distancia(int trigger_pin, int echo_pin)\n{\n  long microseconds = tiempo(trigger_pin, echo_pin);\n  long distancia;\n  distancia = microseconds/29/2;\n  if (distancia == 0){\n    distancia = 999;\n  }\n  return distancia;\n}\n';

            }
            return __p
        };

        this["JST"]["SALIDAS_ace_definitions_tiempo"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += '#include "CurieIMU.h" \n';
            }
            return __p
        };

        this["JST"]["SALIDAS_ace_setups_echo"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p +='Serial.begin(9600);\nCurieIMU.begin();\nCurieIMU.setGyroRange(250);\nCurieIMU.setAccelerometerRange(2);\n';

            }
            return __p
        };

        this["JST"]["SALIDAS_ace_setups_trigger"] = function(obj) {
   
        };




        this["JST"]["SALIDAS_bat"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
             __p += 'distancia(' +
                    ((__t = (trigger_pin)) == null ? '' : __t) +
                    ',' +
                    ((__t = (echo_pin)) == null ? '' : __t) +
                    ')';

            }
            return __p
        };

        this["JST"]["SALIDAS_bat_definitions_distancia"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'long distancia(int trigger_pin, int echo_pin)\n{\n  long microseconds = tiempo(trigger_pin, echo_pin);\n  long distancia;\n  distancia = microseconds/29/2;\n  if (distancia == 0){\n    distancia = 999;\n  }\n  return distancia;\n}\n';

            }
            return __p
        };

        this["JST"]["SALIDAS_bat_definitions_tiempo"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += '//sensor de ultrasonido\nlong tiempo(int trigger_pin, int echo_pin)\n{\n  digitalWrite(trigger_pin, LOW);\n  delayMicroseconds(2);\n  digitalWrite(trigger_pin, HIGH);\n  delayMicroseconds(10);\n  digitalWrite(trigger_pin, LOW);\n  long microseconds = pulseIn(echo_pin ,HIGH);\n  return microseconds;\n}\n';

            }
            return __p
        };

        this["JST"]["SALIDAS_bat_setups_echo"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'pinMode( ' +
                    ((__t = (echo_pin)) == null ? '' : __t) +
                    ' , INPUT );\n';

            }
            return __p
        };

        this["JST"]["SALIDAS_bat_setups_trigger"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'pinMode( ' +
                    ((__t = (trigger_pin)) == null ? '' : __t) +
                    ' , OUTPUT );\n';

            }
            return __p
        };

        /*this["JST"]["SALIDAS_bluetooth_def_definitions"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += '#include <SoftwareSerial.h>\n';

            }
            return __p
        };

        this["JST"]["SALIDAS_bluetooth_def_setups"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'pinMode(' +
                    ((__t = (dropdown_pin)) == null ? '' : __t) +
                    ',INPUT);\n  pinMode(' +
                    ((__t = (NextPIN)) == null ? '' : __t) +
                    ', OUTPUT);\n  blueToothSerial.begin(' +
                    ((__t = (baud_rate)) == null ? '' : __t) +
                    ');\n  blueToothSerial.flush();\n';

            }
            return __p
        };

        this["JST"]["SALIDAS_bluetooth_receive"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'blueToothSerial.read()';

            }
            return __p
        };

        this["JST"]["SALIDAS_bluetooth_send"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'blueToothSerial.write( ' +
                    ((__t = (statement_send)) == null ? '' : __t) +
                    ' );\n';

            }
            return __p
        };*/

        this["JST"]["entradas_humedad"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'analogRead(' +
                    ((__t = (dropdown_npin)) == null ? '' : __t) +
                    ')';

            }
            return __p
        };

        this["JST"]["entradas_humedad_setups"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += '';

            }
            return __p
        };

        this["JST"]["SALIDAS_button"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'analogRead(' +
                    ((__t = (dropdown_pin)) == null ? '' : __t) +
                    ')';

            }
            return __p
        };

        this["JST"]["SALIDAS_button_setups"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'pinMode(' +
                    ((__t = (dropdown_pin)) == null ? '' : __t) +
                    ',OUTPUT);\n';

            }
            return __p
        };

        this["JST"]["SALIDAS_buttons"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += '  adc_key_in =analogRead(' +
                    ((__t = (dropdown_pin)) == null ? '' : __t) +
                    ');\n  key = get_key(adc_key_in);\n  if (key != oldkey)\n  {\n    delay(50);\n    adc_key_in = analogRead(' +
                    ((__t = (dropdown_pin)) == null ? '' : __t) +
                    ');\n    key = get_key(adc_key_in);\n    if (key != oldkey)\n    {\n      oldkey = key;\n      if (key >=0){\n        switch(key)\n        {\n          case 0:\n           ' +
                    ((__t = (code_btn1)) == null ? '' : __t) +
                    '\n          break;\n          case 1:\n           ' +
                    ((__t = (code_btn2)) == null ? '' : __t) +
                    '\n          break;\n          case 2:\n           ' +
                    ((__t = (code_btn3)) == null ? '' : __t) +
                    '\n          break;\n          case 3:\n           ' +
                    ((__t = (code_btn4)) == null ? '' : __t) +
                    '\n          break;  \n          case 4:\n           ' +
                    ((__t = (code_btn5)) == null ? '' : __t) +
                    '\n          break;\n        }      \n      }\n    }\n  }\n';

            }
            return __p
        };

        this["JST"]["SALIDAS_buttons_definitions"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'int get_key(unsigned int input)\n  {\n    int k;\n    for (k = 0; k < NUM_KEYS; k++)\n    {\n      if (input < adc_key_val[k])\n      {\n        return k;\n      }\n    }\n    if (k >= NUM_KEYS)k = -1;\n      return k;\n}\n';

            }
            return __p
        };

        this["JST"]["SALIDAS_buttons_definitions_variables"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += '//SALIDASButtons\nint adc_key_val[5] ={20,50, 100, 200, 600 };\nint NUM_KEYS = 5;\nint adc_key_in;\nint key=-1;\nint oldkey=-1;\n';

            }
            return __p
        };

        this["JST"]["ENTRADAS_PIR"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'digitalRead(' +
                    ((__t = (dropdown_npin)) == null ? '' : __t) +
                    ')';

            }
            return __p
        };

        this["JST"]["ENTRADAS_PIR_setups"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'pinMode( ' +
                    ((__t = (dropdown_npin)) == null ? '' : __t) +
                    ' , INPUT);\n';

            }
            return __p
        };

        this["JST"]["SALIDAS_joystick"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'readJoystick_' +
                    ((__t = (name)) == null ? '' : __t) +
                    '()';

            }
            return __p
        };

        this["JST"]["SALIDAS_joystick_definitions"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'int * readJoystick_' +
                    ((__t = (name)) == null ? '' : __t) +
                    '(){\n  _internal_readJoystick_array_' +
                    ((__t = (name)) == null ? '' : __t) +
                    '[0]=analogRead(' +
                    ((__t = (pinx)) == null ? '' : __t) +
                    ');\n  _internal_readJoystick_array_' +
                    ((__t = (name)) == null ? '' : __t) +
                    '[1]=analogRead(' +
                    ((__t = (piny)) == null ? '' : __t) +
                    ');\n  _internal_readJoystick_array_' +
                    ((__t = (name)) == null ? '' : __t) +
                    '[2]=digitalRead(' +
                    ((__t = (pinbutton)) == null ? '' : __t) +
                    ');\n  return _internal_readJoystick_array_' +
                    ((__t = (name)) == null ? '' : __t) +
                    ';\n}';

            }
            return __p
        };

        this["JST"]["SALIDAS_joystick_setups"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'pinMode(' +
                    ((__t = (pinbutton)) == null ? '' : __t) +
                    ',INPUT_PULLUP);\n';

            }
            return __p
        };

//rele inicio
        this["JST"]["salidas_rele"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'digitalWrite(' +
                    ((__t = (dropdown_npin)) == null ? '' : __t) +
                    ',' +
                    ((__t = (dropdown_stat)) == null ? '' : __t) +
                    ');\n';

            }
            return __p
        };

        this["JST"]["salidas_rele_setups"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'pinMode(' +
                    ((__t = (dropdown_npin)) == null ? '' : __t) +
                    ',OUTPUT);\n';

            }
            return __p
        };

//rele fin





        this["JST"]["SALIDAS_motor"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += __p += 'digitalWrite(' +
                    ((__t = (dropdown_npin)) == null ? '' : __t) +
                    ',HIGH);\n digitalWrite(' +
                    ((__t = (dropdown_npin2)) == null ? '' : __t) +
                    ',LOW);\n';

            }
            return __p
        };

        this["JST"]["SALIDAS_motor_setups"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p +='pinMode(' +
                    ((__t = (dropdown_npin)) == null ? '' : __t) +
                    ',OUTPUT);\n pinMode(' +
                    ((__t = (dropdown_npin2)) == null ? '' : __t) +
                    ',OUTPUT);\n';

            }
            return __p
        };

          

        this["JST"]["entradas_sonido_sensor"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'analogRead(' +
                    ((__t = (dropdown_npin)) == null ? '' : __t) +
                    ')';

            }
            return __p
        };

this["JST"]["SALIDAS_ledrgb_definitions"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'void color(int R, int G, int B)\n{\n analogWrite(' +                    
                    ((__t = (dropdown_pinrojo)) == null ? '' : __t) +  ' , R);\nanalogWrite(' +                    
                    ((__t = (dropdown_pinverde)) == null ? '' : __t) +  ' , G);\nanalogWrite(' +                    
                    ((__t = (dropdown_pinazul)) == null ? '' : __t) +  ' , B);\n}\n';
            }
            return __p
        };





        this["JST"]["SALIDAS_ledrgb"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'color(' +
                    ((__t = (dropdown_stat)) == null ? '' : __t) +          
                    ');\n';

            }
            return __p
        };
 this["JST"]["SALIDAS_ledrgb_setups"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
            __p +='pinMode(' +                    
                    ((__t = (dropdown_pinrojo)) == null ? '' : __t) +          
                    ',OUTPUT);\npinMode(' +
                    ((__t = (dropdown_pinverde)) == null ? '' : __t) +          
                    ',OUTPUT);\npinMode(' +
                    ((__t = (dropdown_pinazul)) == null ? '' : __t) +          
                    ',OUTPUT);\n';
            }
            return __p
        };

 this["JST"]["SALIDAS_piezo_buzzerav"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
            __p += 'digitalWrite(13,HIGH);\ndigitalWrite(12,LOW);\ndigitalWrite(11,HIGH);\ndigitalWrite(10,LOW);\ndelay(1000); \n\n';


            }
            return __p
        };

        this["JST"]["SALIDAS_piezo_buzzerav_setups"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
            __p += 'pinMode(13,OUTPUT);\npinMode(12,OUTPUT);\npinMode(11,OUTPUT);\npinMode(10,OUTPUT); \n\n';


            }
            return __p
        };
 


      /*  this["JST"]["bt_serial_available"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'if (blueToothSerial.available()>0){\n' +
                    ((__t = (branch)) == null ? '' : __t) +
                    '\n}\n';

            }
            return __p
        };*/

        this["JST"]["controls_doWhile"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'do {\n' +
                    ((__t = (branch)) == null ? '' : __t) +
                    '\n} while (' +
                    ((__t = (argument0)) == null ? '' : __t) +
                    ');\n';

            }
            return __p
        };

        this["JST"]["controls_execute"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p +=
                    ((__t = (content)) == null ? '' : __t) +
                    '\n';

            }
            return __p
        };

        this["JST"]["controls_else"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'else {\n' +
                    ((__t = (branch)) == null ? '' : __t) +
                    ' }';

            }
            return __p
        };

        this["JST"]["controls_elseif"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'else if (' +
                    ((__t = (argument)) == null ? '' : __t) +
                    ') {\n' +
                    ((__t = (branch)) == null ? '' : __t) +
                    ' }';

            }
            return __p
        };

        this["JST"]["controls_if"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'if (' +
                    ((__t = (argument)) == null ? '' : __t) +
                    ') {\n' +
                    ((__t = (branch)) == null ? '' : __t) +
                    ' }';

            }
            return __p
        };

        this["JST"]["controls_setupLoop"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p +=
                    ((__t = (branch)) == null ? '' : __t) +
                    '\n';

            }
            return __p
        };

        this["JST"]["controls_whileUntil"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'while (' +
                    ((__t = (argument0)) == null ? '' : __t) +
                    ') {\n' +
                    ((__t = (branch)) == null ? '' : __t) +
                    ' }\n';

            }
            return __p
        };

        this["JST"]["inout_analog_read"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'analogRead(' +
                    ((__t = (dropdown_pin)) == null ? '' : __t) +
                    ')';

            }
            return __p
        };

        this["JST"]["inout_analog_read_setups"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'pinMode(' +
                    ((__t = (dropdown_pin)) == null ? '' : __t) +
                    ',INPUT);\n';

            }
            return __p
        };

        this["JST"]["inout_analog_write"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'analogWrite(' +
                    ((__t = (dropdown_pin)) == null ? '' : __t) +
                    ',' +
                    ((__t = (value_num)) == null ? '' : __t) +
                    ');\n';

            }
            return __p
        };

        this["JST"]["inout_analog_write_setups"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'pinMode(' +
                    ((__t = (dropdown_pin)) == null ? '' : __t) +
                    ',OUTPUT);\n';

            }
            return __p
        };

        this["JST"]["inout_builtin_led"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'digitalWrite(LED_BUILTIN,' +
                    ((__t = (dropdown_stat)) == null ? '' : __t) +
                    ');\n';

            }
            return __p
        };

        this["JST"]["inout_builtin_led_setups"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'pinMode(LED_BUILTIN,OUTPUT);\n';

            }
            return __p
        };

        this["JST"]["inout_digital_read"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'digitalRead(' +
                    ((__t = (dropdown_pin)) == null ? '' : __t) +
                    ')';

            }
            return __p
        };

        this["JST"]["inout_digital_read_setups"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'pinMode(' +
                    ((__t = (dropdown_pin)) == null ? '' : __t) +
                    ',INPUT);\n';

            }
            return __p
        };

        this["JST"]["inout_digital_write"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'digitalWrite(' +
                    ((__t = (dropdown_pin)) == null ? '' : __t) +
                    ',' +
                    ((__t = (dropdown_stat)) == null ? '' : __t) +
                    ');\n';

            }
            return __p
        };

        this["JST"]["inout_digital_write_setups"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'pinMode(' +
                    ((__t = (dropdown_pin)) == null ? '' : __t) +
                    ',OUTPUT);\n';

            }
            return __p
        };

        this["JST"]["inout_highlow"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p +=
                    ((__t = (bool_value)) == null ? '' : __t);

            }
            return __p
        };

        this["JST"]["lcd_clear"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'lcd.clear();\n';

            }
            return __p
        };


        this["JST"]["lcd_i2c_declare"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'LiquidCrystal_I2C lcd( ' +
                    ((__t = (lcd_direccion)) == null ? '' : __t) +
                  ', 16, 2);\n';

            }
            return __p
        };

        this["JST"]["lcd_i2c_definitions"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += '#include <Wire.h>\n#include <LiquidCrystal_I2C.h>\n';

            }
            return __p
        };

        this["JST"]["lcd_i2c_setups"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
            __p += 'lcd.init();\nlcd.backlight();\n';
            }
            return __p
        };



        this["JST"]["lcd_def_declare"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'LiquidCrystal lcd(' +
                    ((__t = (lcd_1)) == null ? '' : __t) +
                    ', ' +
                    ((__t = (lcd_2)) == null ? '' : __t) +
                    ', ' +
                    ((__t = (lcd_3)) == null ? '' : __t) +
                    ', ' +
                    ((__t = (lcd_4)) == null ? '' : __t) +
                    ', ' +
                    ((__t = (lcd_5)) == null ? '' : __t) +
                    ', ' +
                    ((__t = (lcd_6)) == null ? '' : __t) +
                    ');\n';

            }
            return __p
        };

        this["JST"]["lcd_def_definitions"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += '#include <Wire.h>\n#include <LiquidCrystal.h>';

            }
            return __p
        };

        this["JST"]["lcd_def_setups"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'lcd.begin(16, 2);\nlcd.clear();\n';

            }
            return __p
        };

        this["JST"]["lcd_print"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'lcd.print(' +
                    ((__t = (val)) == null ? '' : __t) +
                    ');\n';

            }
            return __p
        };

        this["JST"]["lcd_print_pos"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'lcd.setCursor(' +
                    ((__t = (ycoor)) == null ? '' : __t) +
                    ',' +
                    ((__t = (xcoor)) == null ? '' : __t) +
                    ');\nlcd.print(' +
                    ((__t = (val)) == null ? '' : __t) +
                    ');\n';

            }
            return __p
        };

        this["JST"]["lcd_setBacklight"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'lcd.setBacklight(' +
                    ((__t = (state)) == null ? '' : __t) +
                    ');\n';

            }
            return __p
        };


        //matriz inicio

        this["JST"]["matriz_def_declare"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += '#define Matrices ' +
                    ((__t = (matriz_4)) == null ? '' : __t) + 
                     '\n LedControl matriz=LedControl(' +
                    ((__t = (matriz_1)) == null ? '' : __t) +
                    ', ' +
                    ((__t = (matriz_2)) == null ? '' : __t) +
                    ', ' +
                    ((__t = (matriz_3)) == null ? '' : __t) +
                    ', ' +
                    ((__t = (matriz_4)) == null ? '' : __t) +
                    ');\n';
            }
            return __p
        };

        this["JST"]["matriz_def_definitions"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += '#include "LedControlMS.h" \n'; 

            }
            return __p
        };

        this["JST"]["matriz_def_setups"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'for (int i=0; i< Matrices ; i++)\n{\nmatriz.shutdown(i,false);\nmatriz.setIntensity(i,8);\nmatriz.clearDisplay(i);\n}\n';
            }
            return __p
        };

        this["JST"]["matriz_print"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'matriz.writeString(0,' +
                    ((__t = (val)) == null ? '' : __t) +
                    ');\n';

            }
            return __p
        };


        //matriz final

        //matriz caras inicio


            this["JST"]["matriz_caras_declare"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'LiquidCrystal_I2C lcd( ' +
                    ((__t = (lcd_direccion)) == null ? '' : __t) +
                  ', 16, 2);\n';

            }
            return __p
        };

        this["JST"]["matriz_caras_definitions"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'void caritas(int variable_carita)\n {\nbyte feliz[8]={B00000000,\n B01100011,\n B11000011,\n B10001000,\nB10001000,\n B11000011,\n B01100011,\n B00000000};\nbyte sorprendido[8]={B00000000,\n B00000011,\n B01000011,\n B10101000,\n B10101000,\n B01000011,\n  B00000011,\n B00000000};\n byte enojado[8]={B00000000,\n B10000011,\n B01000010,\n B01001000,\n B01001000,\n B01000010,\n B10000011,\n B00000000};\n if(variable_carita==0)\n {\n  matriz.setRow(0,0,feliz[0]);\nmatriz.setRow(0,1,feliz[1]);\n matriz.setRow(0,2,feliz[2]);\n  matriz.setRow(0,3,feliz[3]);\n matriz.setRow(0,4,feliz[4]);\n  matriz.setRow(0,5,feliz[5]);\n matriz.setRow(0,6,feliz[6]);\n  matriz.setRow(0,7,feliz[7]);\n delay(50);\n }\n if(variable_carita==1)\n {\n matriz.setRow(0,0,sorprendido[0]);\n  matriz.setRow(0,1,sorprendido[1]);\n  matriz.setRow(0,2,sorprendido[2]);\n  matriz.setRow(0,3,sorprendido[3]);\n  matriz.setRow(0,4,sorprendido[4]);\n  matriz.setRow(0,5,sorprendido[5]);\n  matriz.setRow(0,6,sorprendido[6]);\n  matriz.setRow(0,7,sorprendido[7]);\n  delay(50);\n }\n  if(variable_carita==2)\n {\n  matriz.setRow(0,0, enojado[0]);\n  matriz.setRow(0,1, enojado[1]);\n  matriz.setRow(0,2, enojado[2]);\n  matriz.setRow(0,3, enojado[3]);\n  matriz.setRow(0,4, enojado[4]);\n  matriz.setRow(0,5, enojado[5]);\n  matriz.setRow(0,6, enojado[6]);\n  matriz.setRow(0,7, enojado[7]);\ndelay(50);\n}\n}';
            }
            return __p
        };

        this["JST"]["matriz_caras"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
            __p += 'caritas(' +
                    ((__t = (dropdown_stat)) == null ? '' : __t) +
                    ');\n';
            }
            return __p
        };

  this["JST"]["caras_setups"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
            __p += '';
            }
            return __p
        };



        //matriz caras final

        this["JST"]["logic_compare"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p +=
                    ((__t = (argument0)) == null ? '' : __t) +
                    ' ' +
                    ((__t = (operator)) == null ? '' : __t) +
                    ' ' +
                    ((__t = (argument1)) == null ? '' : __t);

            }
            return __p
        };

        this["JST"]["logic_negate"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += '!' +
                    ((__t = (argument0)) == null ? '' : __t);

            }
            return __p
        };

        this["JST"]["logic_operation"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p +=
                    ((__t = (argument0)) == null ? '' : __t) +
                    ' ' +
                    ((__t = (operator)) == null ? '' : __t) +
                    ' ' +
                    ((__t = (argument1)) == null ? '' : __t);

            }
            return __p
        };

        this["JST"]["math_arithmetic"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p +=
                    ((__t = (argument0)) == null ? '' : __t) +
                    '' +
                    ((__t = (operator)) == null ? '' : __t) +
                    '' +
                    ((__t = (argument1)) == null ? '' : __t);

            }
            return __p
        };

        this["JST"]["math_arithmetic_pow"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'pow(' +
                    ((__t = (argument0)) == null ? '' : __t) +
                    ',' +
                    ((__t = (argument1)) == null ? '' : __t) +
                    ')';

            }
            return __p
        };

        this["JST"]["math_modulo"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p +=
                    ((__t = (argument0)) == null ? '' : __t) +
                    '%' +
                    ((__t = (argument1)) == null ? '' : __t);

            }
            return __p
        };

        this["JST"]["math_random"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'random(' +
                    ((__t = (value_num)) == null ? '' : __t) +
                    ',' +
                    ((__t = (value_dmax)) == null ? '' : __t) +
                    ')';

            }
            return __p
        };

        this["JST"]["procedures_callnoreturn"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p +=
                    ((__t = (funcName)) == null ? '' : __t) +
                    '(' +
                    ((__t = (funcArgs)) == null ? '' : __t) +
                    ');\n';

            }
            return __p
        };

        this["JST"]["procedures_callreturn"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p +=
                    ((__t = (funcName)) == null ? '' : __t) +
                    '(' +
                    ((__t = (funcArgs)) == null ? '' : __t) +
                    ')';

            }
            return __p
        };

        this["JST"]["procedures_defnoreturn"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p +=
                    ((__t = (returnType)) == null ? '' : __t) +
                    ' ' +
                    ((__t = (funcName)) == null ? '' : __t) +
                    ' (' +
                    ((__t = (args)) == null ? '' : __t) +
                    ') {\n' +
                    ((__t = (branch)) == null ? '' : __t) +
                    ' }\n';

            }
            return __p
        };

        this["JST"]["procedures_defreturn"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p +=
                    ((__t = (returnType)) == null ? '' : __t) +
                    ' ' +
                    ((__t = (funcName)) == null ? '' : __t) +
                    ' (' +
                    ((__t = (args)) == null ? '' : __t) +
                    ') {\n' +
                    ((__t = (branch)) == null ? '' : __t) +
                    '\n' +
                    ((__t = (returnValue)) == null ? '' : __t) +
                    ' }\n';

            }
            return __p
        };

        this["JST"]["serial_available"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'if (Serial.available()>0){\n' +
                    ((__t = (branch)) == null ? '' : __t) +
                    '\n}\n';

            }
            return __p
        };

        this["JST"]["serial_parseint"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'Serial.parseInt()\n';

            }
            return __p
        };

        this["JST"]["serial_parseint_setups"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'Serial.begin(' +
                    ((__t = (bitrate)) == null ? '' : __t) +
                    ');\n';

            }
            return __p
        };

        this["JST"]["serial_print"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'Serial.print(' +
                    ((__t = (content)) == null ? '' : __t) +
                    ');\n';

            }
            return __p
        };

        this["JST"]["serial_print_setups"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'Serial.begin(' +
                    ((__t = (bitrate)) == null ? '' : __t) +
                    ');\n';

            }
            return __p
        };

        this["JST"]["serial_println"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'Serial.println(' +
                    ((__t = (content)) == null ? '' : __t) +
                    ');\n';

            }
            return __p
        };

        this["JST"]["serial_println_setups"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'Serial.begin(' +
                    ((__t = (bitrate)) == null ? '' : __t) +
                    ');\n';

            }
            return __p
        };

        this["JST"]["serial_read"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'Serial.read()';

            }
            return __p
        };

        this["JST"]["serial_read_setups"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'Serial.begin(' +
                    ((__t = (bitrate)) == null ? '' : __t) +
                    ');\n';

            }
            return __p
        };

        this["JST"]["serial_readstring"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'Serial.readString()\n';

            }
            return __p
        };

        this["JST"]["serial_readstring_setups"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'Serial.begin(' +
                    ((__t = (bitrate)) == null ? '' : __t) +
                    ');\n';

            }
            return __p
        };

        this["JST"]["serial_special"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p +=
                    ((__t = (char)) == null ? '' : __t);

            }
            return __p
        };

        this["JST"]["servo_cont"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'servos[' +
                    ((__t = (dropdown_npin)) == null ? '' : __t) +
                    '].write(' +
                    ((__t = (value_degree)) == null ? '' : __t) +
                    ');\n';

            }
            return __p
        };

        this["JST"]["servo_cont_definitions_include"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += '#include <Servo.h>\n\nServo servos[13];';

            }
            return __p
        };

        this["JST"]["servo_cont_setups"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'servos[' +
                    ((__t = (dropdown_npin)) == null ? '' : __t) +
                    '].attach(' +
                    ((__t = (dropdown_npin)) == null ? '' : __t) +
                    ');\n';

            }
            return __p
        };

//servo read

        this["JST"]["servo_read"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'servos[' +
                    ((__t = (dropdown_npin)) == null ? '' : __t) +
                    '].read()';
            }
            return __p
        };

        this["JST"]["servo_read_definitions_include"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += '#include <Servo.h>\n\nServo servos[13];';

            }
            return __p
        };

        this["JST"]["servo_read_setups"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'servos[' +
                    ((__t = (dropdown_npin)) == null ? '' : __t) +
                    '].attach(' +
                    ((__t = (dropdown_npin)) == null ? '' : __t) +
                    ');\n';

            }
            return __p
        };

//servo read fin





        this["JST"]["servo_move"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'servos[' +
                    ((__t = (dropdown_npin)) == null ? '' : __t) +
                    '].write(' +
                    ((__t = (value_degree)) == null ? '' : __t) +
                    ');\n';

            }
            return __p
        };

        this["JST"]["servo_move_definitions_include"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += '#include <Servo.h>\n\nServo servos[13];';

            }
            return __p
        };

        this["JST"]["servo_move_setups"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'servos[' +
                    ((__t = (dropdown_npin)) == null ? '' : __t) +
                    '].attach(' +
                    ((__t = (dropdown_npin)) == null ? '' : __t) +
                    ');\n';

            }
            return __p
        };

        this["JST"]["text_equalsIgnoreCase"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p +=
                    ((__t = (string1)) == null ? '' : __t) +
                    '.equalsIgnoreCase(' +
                    ((__t = (string2)) == null ? '' : __t) +
                    ')';

            }
            return __p
        };

        this["JST"]["text_length"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p +=
                    ((__t = (argument0)) == null ? '' : __t) +
                    '.length()';

            }
            return __p
        };

        this["JST"]["text_substring"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p +=
                    ((__t = (string1)) == null ? '' : __t) +
                    '.substring(' +
                    ((__t = (from)) == null ? '' : __t) +
                    ',' +
                    ((__t = (to)) == null ? '' : __t) +
                    ')';

            }
            return __p
        };

        this["JST"]["variables_set"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p +=
                    ((__t = (varName)) == null ? '' : __t) +
                    '=' +
                    ((__t = (varValue)) == null ? '' : __t) +
                    ';\n';

            }
            return __p
        };

        this["JST"]["ENTRADAS_button"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'digitalRead(' +
                    ((__t = (dropdown_npin)) == null ? '' : __t) +
                    ')';

            }
            return __p
        };

        this["JST"]["ENTRADAS_button_setups"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'pinMode(' +
                    ((__t = (dropdown_npin)) == null ? '' : __t) +
                    ',INPUT_PULLUP);\n';

            }
            return __p
        };

        this["JST"]["ENTRADAS_follower"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'if(digitalRead(' +
                    ((__t = (dropdown_npin)) == null ? '' : __t) +
                    ')==HIGH)\n{\n  ' +
                    ((__t = (code_btn1)) == null ? '' : __t) +
                    '\n}\nif(digitalRead(' +
                    ((__t = (dropdown_npin2)) == null ? '' : __t) +
                    ')==HIGH)\n{\n  ' +
                    ((__t = (code_btn2)) == null ? '' : __t) +
                    '\n}\n';

            }
            return __p
        };

        this["JST"]["ENTRADAS_follower_setups_nextpin"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'pinMode( ' +
                    ((__t = (dropdown_npin2)) == null ? '' : __t) +
                    ' , INPUT);\n';

            }
            return __p
        };

        this["JST"]["ENTRADAS_follower_setups_pin"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'pinMode( ' +
                    ((__t = (dropdown_npin)) == null ? '' : __t) +
                    ' , INPUT);\n';

            }
            return __p
        };

        this["JST"]["ENTRADAS_infrared"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'digitalRead(' +
                    ((__t = (dropdown_npin)) == null ? '' : __t) +
                    ')';

            }
            return __p
        };

        this["JST"]["ENTRADAS_infrared_setups"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'pinMode( ' +
                    ((__t = (dropdown_npin)) == null ? '' : __t) +
                    ' , INPUT);\n';

            }
            return __p
        };

        this["JST"]["salidas_led"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'digitalWrite(' +
                    ((__t = (dropdown_npin)) == null ? '' : __t) +
                    ',' +
                    ((__t = (dropdown_stat)) == null ? '' : __t) +
                    ');\n';

            }
            return __p
        };

        this["JST"]["salidas_led_setups"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'pinMode(' +
                    ((__t = (dropdown_npin)) == null ? '' : __t) +
                    ',OUTPUT);\n';

            }
            return __p
        };

        this["JST"]["ENTRADAS_photoresistor"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'analogRead(' +
                    ((__t = (dropdown_npin)) == null ? '' : __t) +
                    ')';

            }
            return __p
        };

        this["JST"]["ENTRADAS_piezo_buzzer"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'tone(' +
                    ((__t = (dropdown_pin)) == null ? '' : __t) +
                    ',' +
                    ((__t = (dropdown_stat)) == null ? '' : __t) +
                    ',' +
                    ((__t = (delay_time)) == null ? '' : __t) +
                    ');\ndelay(' +
                    ((__t = (delay_time)) == null ? '' : __t) +
                    ');\n';

            }
            return __p
        };

        this["JST"]["ENTRADAS_piezo_buzzerav"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'tone(' +
                    ((__t = (dropdown_pin)) == null ? '' : __t) +
                    ',' +
                    ((__t = (Buzztone)) == null ? '' : __t) +
                    ',' +
                    ((__t = (delay_time)) == null ? '' : __t) +
                    ');\ndelay(' +
                    ((__t = (delay_time)) == null ? '' : __t) +
                    ');\n\n';

            }
            return __p
        };

        this["JST"]["ENTRADAS_potentiometer"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'analogRead(' +
                    ((__t = (dropdown_npin)) == null ? '' : __t) +
                    ')';

            }
            return __p
        };
        var JST = this.JST;

        // Source: src/blocks/advanced_conversion/advanced_conversion.js
        /* global Blockly, JST, Educablocks */
        /* jshint sub:true */

        /**
         * advanced_conversion code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.advanced_conversion = function() {
            var value_num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_NONE);
            var code = '';
            var a = Educablocks.findPinMode(value_num);
            code += a['code'];
            value_num = a['pin'];


            var convertion = this.getFieldValue('CONV');
            code += JST['advanced_conversion']({
                'value_num': value_num,
                'convertion': convertion
            });
            return [code, Blockly.Arduino.ORDER_ATOMIC];
        };

        /**
         * advanced_conversion block definition
         * @type {Object}
         */
        Blockly.Blocks.advanced_conversion = {
            category: Educablocks.locales.getKey('LANG_CATEGORY_COMMUNICATION'),
            helpUrl: Educablocks.URL_SERIE,
            /**
             * advanced_conversion initialization
             */
            init: function() {
                this.setColour(Educablocks.LANG_COLOUR_COMMUNICATION);
                this.appendDummyInput('')
                    .appendField(Educablocks.locales.getKey('LANG_ADVANCED_CONVERSION_CONVERT'))
                    .appendField(new Blockly.FieldDropdown([
                        [Educablocks.locales.getKey('LANG_ADVANCED_CONVERSION_DECIMAL') || 'DEC', 'DEC'],
                        [Educablocks.locales.getKey('LANG_ADVANCED_CONVERSION_HEXADECIMAL') || 'HEX', 'HEX'],
                        [Educablocks.locales.getKey('LANG_ADVANCED_CONVERSION_OCTAL') || 'OCT', 'OCT'],
                        [Educablocks.locales.getKey('LANG_ADVANCED_CONVERSION_BINARY') || 'BIN', 'BIN']
                    ]), 'CONV');
                this.appendValueInput('NUM', Number)
                    .appendField(Educablocks.locales.getKey('LANG_ADVANCED_CONVERSION_VALUE'))
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .setCheck(Number);
                this.setOutput(true, Number);
                this.setTooltip(Educablocks.locales.getKey('LANG_ADVANCED_CONVERSION_TOOLTIP'));
            }
        };

        // Source: src/blocks/advanced_map/advanced_map.js
        /* global Blockly, JST, Educablocks */
        /* jshint sub:true */

        /**
         * advanced_map code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.advanced_map = function() {
            var num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_NONE);
            var from_min = Blockly.Arduino.valueToCode(this, 'FROM_MIN', Blockly.Arduino.ORDER_NONE);
            var from_max = Blockly.Arduino.valueToCode(this, 'FROM_MAX', Blockly.Arduino.ORDER_NONE);
            var to_min = Blockly.Arduino.valueToCode(this, 'TO_MIN', Blockly.Arduino.ORDER_NONE);
            var to_max = Blockly.Arduino.valueToCode(this, 'TO_MAX', Blockly.Arduino.ORDER_NONE);

            var code = '';
            var a = Educablocks.findPinMode(num);
            code += a['code'];
            num = a['pin'];

            a = Educablocks.findPinMode(from_min);
            code += a['code'];
            from_min = a['pin'];

            a = Educablocks.findPinMode(from_max);
            code += a['code'];
            from_max = a['pin'];

            a = Educablocks.findPinMode(to_min);
            code += a['code'];
            to_min = a['pin'];

            a = Educablocks.findPinMode(to_max);
            code += a['code'];
            to_max = a['pin'];


            code += JST['advanced_map']({
                'num': num,
                'from_min': from_min,
                'from_max': from_max,
                'to_min': to_min,
                'to_max': to_max
            });
            return [code, Blockly.Arduino.ORDER_ATOMIC];
        };

        /**
         * advanced_map block definition
         * @type {Object}
         */
        Blockly.Blocks.advanced_map = {
            category: Educablocks.locales.getKey('LANG_CATEGORY_MATH'),
            helpUrl: Educablocks.URL_MATH,
            /**
             * advanced_map initialization
             */
            init: function() {
                this.setColour(Educablocks.LANG_COLOUR_MATH);
                this.appendValueInput('NUM', Number)
                    .appendField(Educablocks.locales.getKey('LANG_MATH_ADVANCED_MAP_MAP'))
                    .setCheck(Number);
                this.appendValueInput('FROM_MIN', Number)
                    .appendField(Educablocks.locales.getKey('LANG_MATH_ADVANCED_MAP_FROM'))
                    .setCheck(Number);
                this.appendValueInput('FROM_MAX', Number)
                    .appendField(Educablocks.locales.getKey('LANG_MATH_ADVANCED_MAP_HYPHEN'))
                    .setCheck(Number);
                this.appendDummyInput('')
                    .appendField(Educablocks.locales.getKey('LANG_MATH_ADVANCED_MAP_BRACKET'));
                this.appendValueInput('TO_MIN', Number)
                    .appendField(Educablocks.locales.getKey('LANG_MATH_ADVANCED_MAP_TO'))
                    .setCheck(Number);
                this.appendValueInput('TO_MAX', Number)
                    .appendField(Educablocks.locales.getKey('LANG_MATH_ADVANCED_MAP_HYPHEN'))
                    .setCheck(Number);
                this.appendDummyInput('')
                    .appendField(Educablocks.locales.getKey('LANG_MATH_ADVANCED_MAP_BRACKET'));
                this.setInputsInline(true);
                this.setOutput(true);
                this.setTooltip(Educablocks.locales.getKey('LANG_MATH_ADVANCED_MAP_TOOLTIP'));
            }
        };

        // Source: src/blocks/array_get/array_get.js
        /* global Blockly, Educablocks */
        /* jshint sub:true */
        /**
         * array_get code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.array_get = function() {
            // Numeric value.
            var variable = this.getFieldValue('VAR');
            var index = this.getFieldValue('INDEX');
            var code = variable + '[' + index + ']';
            // -4.abs() returns -4 in Dart due to strange order of operation choices.
            // -4 is actually an operator and a number.  Reflect this in the order.
            // var order = code < 0 ? Blockly.Arduino.ORDER_UNARY_PREFIX : Blockly.Arduino.ORDER_ATOMIC;
            return [code, Blockly.Arduino.ORDER_ATOMIC];
        };
        Blockly.Blocks.array_get = {
            // Numeric value.
            category: Educablocks.locales.getKey('LANG_CATEGORY_VARIABLES'),
            helpUrl: Educablocks.URL_VAR,
            init: function() {
                this.setColour(Educablocks.LANG_COLOUR_VARIABLES);
                this.appendDummyInput('DUMMY').appendField(Educablocks.locales.getKey('LANG_VARIABLES_GET')).appendField(new Blockly.FieldVariable(' '), 'VAR');
                // .appendField(new Blockly.FieldDropdown(this.getVariables()), 'VAR');
                this.appendDummyInput('DUMMY2').appendField(Educablocks.locales.getKey('LANG_ARRAY_GET_BRACKET1')).appendField(new Blockly.FieldTextInput('0', Blockly.Blocks.array_get.validator), 'INDEX').appendField(Educablocks.locales.getKey('LANG_ARRAY_GET_BRACKET2'));
                this.setOutput(true, Number);
                this.setInputsInline(true);
                this.setTooltip(Educablocks.locales.getKey('LANG_ARRAY_GET_TOOLTIP'));
            },
            getVariables: function() {
                var variables = Blockly.Variables.allVariables();
                var dropdown = [];
                if (variables.length > 0) {
                    for (var i in variables) {
                        dropdown.push([variables[i], variables[i]]);
                    }
                } else {
                    dropdown.push(['', '']);
                }
                return dropdown;
            },
            onchange: function() {
                if (!this.workspace) {
                    // Block has been deleted.
                    return;
                }
                this.last_variable = this.getFieldValue('VAR');
                if (!this.last_variables) {
                    this.last_variables = Blockly.Variables.allVariables();
                }
                var variables = Blockly.Variables.allVariables();
                for (var i in variables) {
                    if (Blockly.Variables.allVariables()[i] !== this.last_variables[i]) {
                        try {
                            this.removeInput('DUMMY');
                            this.removeInput('DUMMY2');
                        } catch (e) {}
                        this.appendDummyInput('DUMMY').appendField(Educablocks.locales.getKey('LANG_VARIABLES_GET')).appendField(new Blockly.FieldDropdown(this.getVariables()), 'VAR');
                        this.appendDummyInput('DUMMY2').appendField(Educablocks.locales.getKey('LANG_ARRAY_GET_BRACKET1')).appendField(new Blockly.FieldTextInput('0', Blockly.Blocks.array_get.validator), 'INDEX').appendField(Educablocks.locales.getKey('LANG_ARRAY_GET_BRACKET2'));
                        this.setFieldValue(this.last_variable, 'VAR');
                        this.last_variables = Blockly.Variables.allVariables();
                    }
                }
                try {
                    if (!this.exists()) {
                        this.setWarningText(Educablocks.locales.getKey('LANG_VARIABLES_CALL_WITHOUT_DEFINITION'));
                    } else {
                        this.setWarningText(null);
                    }
                } catch (e) {}
            },
            renameVar: function(oldName, newName) {
                if (Blockly.Names.equals(oldName, this.getFieldValue('VAR'))) {
                    this.setTitleValue(newName, 'VAR');
                }
            },
            exists: function() {
                if (this.getFieldValue('VAR')) {
                    for (var i in Blockly.Variables.allVariables()) {
                        if (Blockly.Variables.allVariables()[i] === this.getFieldValue('VAR')) {
                            return true;
                        }
                    }
                }
                return false;
            }
        };
        Blockly.Blocks.array_get.validator = function(text) {
            // Ensure that only a number may be entered.
            // TODO: Handle cases like 'o', 'ten', '1,234', '3,14', etc.
            var n = window.parseFloat(text || 0);
            return window.isNaN(n) ? null : String(n);
        };
        // Source: src/blocks/base_delay/base_delay.js
        /* global Blockly, JST, Educablocks */

        //register with blockly arduino
        Blockly.Arduino.base_delay = function() {
            var delay_time = this.getFieldValue('delay');            
            var code = '';


            code += JST['base_delay']({
                'delay_time': delay_time
            });

            return code;
        };


        Blockly.Blocks.base_delay = {
            category: Educablocks.locales.getKey('LANG_CATEGORY_CONTROLS'),
            helpUrl: Educablocks.URL_LED,
            init: function() {
                this.setColour(Educablocks.LANG_COLOUR_CONTROL); 
                this.appendDummyInput()
                    .appendField(Educablocks.locales.getKey('LANG_CONTROLS_BASE_DELAY_WAIT')).appendField(new Blockly.FieldTextInput('1000'), 'delay')
                this.setInputsInline(false);
                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setTooltip(Educablocks.locales.getKey('LANG_CONTROLS_BASE_DELAY_TOOLTIP'));
            }
        };

        // Source: src/blocks/base_map/base_map.js
        /* global Blockly, JST, Educablocks */
        /* jshint sub:true */

        /**
         * base_map code generation
         * @return {String} Code generated with block parameters
         */

        Blockly.Arduino.base_map = function() {
            var value_num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_NONE);
            var value_dmax = Blockly.Arduino.valueToCode(this, 'DMAX', Blockly.Arduino.ORDER_ATOMIC);

            var code = '';
            var a = Educablocks.findPinMode(value_num);
            code += a['code'];
            value_num = a['pin'];

            a = Educablocks.findPinMode(value_dmax);
            code += a['code'];
            value_dmax = a['pin'];

            code += JST['base_map']({
                'value_num': value_num,
                'value_dmax': value_dmax
            });

            return [code, Blockly.Arduino.ORDER_ATOMIC];
        };

        Blockly.Blocks.base_map = {
            category: Educablocks.locales.getKey('LANG_CATEGORY_MATH'),
            helpUrl: Educablocks.URL_MATH,
            init: function() {
                this.setColour(Educablocks.LANG_COLOUR_MATH);
                this.appendValueInput('NUM', Number)
                    .appendField(Educablocks.locales.getKey('LANG_MATH_BASE_MAP'))
                    .setCheck(Number);
                this.appendValueInput('DMAX', Number)
                    .appendField(Educablocks.locales.getKey('LANG_MATH_BASE_MAP_VALUE_TO'))
                    .setCheck(Number);
                this.appendDummyInput('')
                    .appendField(Educablocks.locales.getKey('LANG_MATH_BASE_MAP_BRACKET'));
                this.setInputsInline(true);
                this.setOutput(true);
                this.setTooltip(Educablocks.locales.getKey('LANG_MATH_BASE_MAP_TOOLTIP'));
            }
        };



        // Source: src/blocks/base_millis/base_millis.js
        /* global Blockly, JST, Educablocks */

        //register with blockly arduino
        Blockly.Arduino.base_millis = function() {
            var code = 'millis()';
            return [code, Blockly.Arduino.ORDER_ATOMIC];
        };

        Blockly.Blocks.base_millis = {
            category: Educablocks.locales.getKey('LANG_CATEGORY_CONTROLS'),
            helpUrl: Educablocks.URL_LED,
            init: function() {
                this.setColour(Educablocks.LANG_COLOUR_CONTROL);
                this.appendDummyInput('').appendField(Educablocks.locales.getKey('LANG_CONTROLS_BASE_MILLIS'));
                this.setOutput(true, 'Number');
                this.setTooltip(Educablocks.locales.getKey('LANG_CONTROLS_BASE_MILLIS_TOOLTIP'));
            }
        };
   Blockly.Arduino.ENTRADAS_GYRO = function() {
            var echo_pin = Blockly.Arduino.valueToCode(this, 'RED PIN', Blockly.Arduino.ORDER_ATOMIC);
            var trigger_pin = Blockly.Arduino.valueToCode(this, 'BLUE PIN', Blockly.Arduino.ORDER_ATOMIC);
            var dropdown_stat = this.getFieldValue('STAT') || '';            
            var code = '';
            a = Educablocks.findPinMode(trigger_pin);
            code += a['code'];
            trigger_pin = a['pin'];

            Blockly.Arduino.definitions_['define_SALIDAS_gyro_tiempo'] = JST['SALIDAS_gyro_definitions_tiempo']({});
            if (Educablocks.isVariable(dropdown_stat)) {
                code += JST['SALIDAS_bat_setups_echo']({
                    'dropdown_stat': dropdown_stat
                });
            } else {
                Blockly.Arduino.setups_['setup_SALIDAS_gyro_'] = JST['SALIDAS_gyro_setups_echo']({
                    'echo_pin': echo_pin
                });
            }
            if (Educablocks.isVariable(dropdown_stat)) {
                code += JST['SALIDAS_gyro_setups_trigger']({
                    'dropdown_stat': dropdown_stat
                });
            } else {
                Blockly.Arduino.setups_['setup_SALIDAS_gyro_2'] = JST['SALIDAS_gyro_setups_trigger']({
                    'dropdown_stat': dropdown_stat
                });
            }
            code += JST['SALIDAS_gyro']({
                'trigger_pin': trigger_pin,
                'echo_pin': echo_pin,
                'dropdown_stat': dropdown_stat
            });
            return [code, Blockly.Arduino.ORDER_ATOMIC];
        };

         Blockly.Arduino.ENTRADAS_ACE = function() {
            var echo_pin = Blockly.Arduino.valueToCode(this, 'RED PIN', Blockly.Arduino.ORDER_ATOMIC);
            var trigger_pin = Blockly.Arduino.valueToCode(this, 'BLUE PIN', Blockly.Arduino.ORDER_ATOMIC);
            var dropdown_stat = this.getFieldValue('STAT') || '';            
            var code = '';
            a = Educablocks.findPinMode(trigger_pin);
            code += a['code'];
            trigger_pin = a['pin'];

            Blockly.Arduino.definitions_['define_SALIDAS_ace_tiempo'] = JST['SALIDAS_ace_definitions_tiempo']({});
            if (Educablocks.isVariable(dropdown_stat)) {
                code += JST['SALIDAS_bat_setups_echo']({
                    'dropdown_stat': dropdown_stat
                });
            } else {
                Blockly.Arduino.setups_['setup_SALIDAS_ace_'] = JST['SALIDAS_ace_setups_echo']({
                    'echo_pin': echo_pin
                });
            }
            if (Educablocks.isVariable(dropdown_stat)) {
                code += JST['SALIDAS_ace_setups_trigger']({
                    'dropdown_stat': dropdown_stat
                });
            } else {
                Blockly.Arduino.setups_['setup_SALIDAS_ace_2'] = JST['SALIDAS_ace_setups_trigger']({
                    'dropdown_stat': dropdown_stat
                });
            }
            code += JST['SALIDAS_ace']({
                'trigger_pin': trigger_pin,
                'echo_pin': echo_pin,
                'dropdown_stat': dropdown_stat
            });
            return code;
        };
        // Source: src/blocks/SALIDAS_bat/SALIDAS_bat.js
        /* global Blockly, options, JST, Educablocks */
        /* jshint sub:true */
        /**
         * SALIDAS_bat code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.entradas_ultrasonido = function() {
            var echo_pin= this.getFieldValue('NPIN');
            var trigger_pin = this.getFieldValue('NPIN2');
            var code = '';
            var a = Educablocks.findPinMode(echo_pin);
            code += a['code'];
            echo_pin = a['pin'];

            a = Educablocks.findPinMode(trigger_pin);
            code += a['code'];
            trigger_pin = a['pin'];

            Blockly.Arduino.definitions_['define_SALIDAS_bat_tiempo'] = JST['SALIDAS_bat_definitions_tiempo']({});
            Blockly.Arduino.definitions_['define_SALIDAS_bat_distancia'] = JST['SALIDAS_bat_definitions_distancia']({});
            if (Educablocks.isVariable(echo_pin)) {
                code += JST['SALIDAS_bat_setups_echo']({
                    'echo_pin': echo_pin
                });
            } else {
                Blockly.Arduino.setups_['setup_SALIDAS_bat_' + echo_pin + trigger_pin] = JST['SALIDAS_bat_setups_echo']({
                    'echo_pin': echo_pin
                });
            }
            if (Educablocks.isVariable(trigger_pin)) {
                code += JST['SALIDAS_bat_setups_trigger']({
                    'trigger_pin': trigger_pin
                });
            } else {
                Blockly.Arduino.setups_['setup_SALIDAS_bat_2' + trigger_pin + echo_pin] = JST['SALIDAS_bat_setups_trigger']({
                    'trigger_pin': trigger_pin
                });
            }
            code += JST['SALIDAS_bat']({
                'trigger_pin': trigger_pin,
                'echo_pin': echo_pin
            });
            return [code, Blockly.Arduino.ORDER_ATOMIC];
        };
        /**
         * SALIDAS_bat block definition
         * @type {Object}
         */
        Blockly.Blocks.entradas_ultrasonido = {
            category: Educablocks.locales.getKey('LANG_CATEGORY_ENTRADAS'),
            tags: ['ultrasonido'],
            helpUrl: Educablocks.URL_US,
            init: function() {
                this.setColour(Educablocks.LANG_COLOUR_ENTRADAS);
                this.appendDummyInput('').appendField(Educablocks.locales.getKey('LANG_ENTRADAS_ULTRASONIDO')).appendField(new Blockly.FieldImage('img/blocks/09.png', 208 * options.zoom, 140 * options.zoom));
                this.appendDummyInput('PIN').setAlign(Blockly.ALIGN_RIGHT).appendField(Educablocks.locales.getKey('LANG_ENTRADAS_ULTRASONIDO_RED_PIN')).appendField(new Blockly.FieldDropdown([
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN13') || '3', '3'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN12') || '2', '2'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN11') || '4', '4'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN10') || '5', '5'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN9') || '6', '6'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN8') || '7', '7'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN7') || '8', '8'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN6') || '9', '9'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN5') || '10', '10'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN4') || '11', '11'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN3') || '12', '12'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN2') || '13', '13']
                ]), 'NPIN');
                this.appendDummyInput('PIN2').setAlign(Blockly.ALIGN_RIGHT).appendField(Educablocks.locales.getKey('LANG_ENTRADAS_ULTRASONIDO_BLUE_PIN')).appendField(new Blockly.FieldDropdown([
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN13') || '2', '2'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN12') || '3', '3'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN11') || '4', '4'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN10') || '5', '5'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN9') || '6', '6'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN8') || '7', '7'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN7') || '8', '8'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN6') || '9', '9'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN5') || '10', '10'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN4') || '11', '11'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN3') || '12', '12'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN2') || '13', '13']
                ]), 'NPIN2');


                this.setInputsInline(false);
                this.setOutput(true, Number);
                this.setTooltip(Educablocks.locales.getKey('LANG_ENTRADAS_ULTRASONIDO_TOOLTIP'));
            }
        };

             Blockly.Blocks.ENTRADAS_ACE = {
             category: Educablocks.locales.getKey('LANG_CATEGORY_ENTRADAS'),
            tags: ['ace'],
            helpUrl: Educablocks.URL_US,
            init: function() {
                this.setColour(Educablocks.LANG_COLOUR_ENTRADAS);
                this.appendDummyInput('').appendField(Educablocks.locales.getKey('LANG_ENTRADAS_ACE')).appendField(new Blockly.FieldImage('img/blocks/45.png', 208 * options.zoom, 140 * options.zoom));
                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);

            }
        };

        Blockly.Blocks.ENTRADAS_GYRO = {
            category: Educablocks.locales.getKey('LANG_CATEGORY_ENTRADAS'),
            tags: ['gyro'],
            helpUrl: Educablocks.URL_US,
            init: function() {
                this.setColour(Educablocks.LANG_COLOUR_ENTRADAS);
                this.appendDummyInput('').appendField(Educablocks.locales.getKey('LANG_ENTRADAS_GYRO')).appendField(new Blockly.FieldImage('img/blocks/45.png', 208 * options.zoom, 140 * options.zoom));
                this.appendDummyInput('')
                    .appendField(Educablocks.locales.getKey('LANG_ENTRADAS_GYRO_EJE'))
                    .appendField(new Blockly.FieldDropdown([
                        [Educablocks.locales.getKey('LANG_ENTRADAS_GYRO_EJE_X') || 'GX', 'gx'],
                        [Educablocks.locales.getKey('LANG_ENTRADAS_GYRO_EJE_Y') || 'GY', 'gy'],
                        [Educablocks.locales.getKey('LANG_ENTRADAS_GYRO_EJE_Z') || 'GZ', 'gz'],
                        [Educablocks.locales.getKey('LANG_ENTRADAS_ACE_EJE_X') || 'AX', 'ax'],
                        [Educablocks.locales.getKey('LANG_ENTRADAS_ACE_EJE_Y') || 'AY', 'ay'],
                        [Educablocks.locales.getKey('LANG_ENTRADAS_ACE_EJE_Z') || 'AZ', 'az'],
                    ]), 'STAT') //523
                    .setAlign(Blockly.ALIGN_RIGHT);
                this.setInputsInline(false);

                this.setOutput(true, Number);
            }
        };

         
        // Source: src/blocks/SALIDAS_bluetooth_def/SALIDAS_bluetooth_def.js
        /* global Blockly, options, JST, Educablocks */
        /* jshint sub:true */
        /**
         * SALIDAS_bluetooth_def code generation
         * @return {String} Code generated with block parameters
       
        Blockly.Arduino.SALIDAS_bluetooth_def = function() {
            var dropdown_pin, NextPIN;
            if (this.getFieldValue('TOGGLE') === 'FALSE') {
                dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
                NextPIN = Blockly.Arduino.valueToCode(this, 'PIN2', Blockly.Arduino.ORDER_ATOMIC);
                var a = Educablocks.findPinMode(dropdown_pin);
                Blockly.Arduino.setups_['setup_bluetooth_pinmode'] = a['code'];
                dropdown_pin = a['pin'];
                a = Educablocks.findPinMode(NextPIN);
                Blockly.Arduino.setups_['setup_bluetooth_pinmode2'] = a['code'];
                NextPIN = a['pin'];
            } else {
                dropdown_pin = 0;
                NextPIN = 1;
            }
            var baud_rate = Blockly.Arduino.valueToCode(this, 'BAUD_RATE', Blockly.Arduino.ORDER_ATOMIC);
            var b = Educablocks.findPinMode(baud_rate);
            Blockly.Arduino.setups_['setup_bluetooth_pinmode3'] = b['code'];
            baud_rate = b['pin'];

            Blockly.Arduino.definitions_['declare_var_blueToothSerial' + dropdown_pin] = 'SoftwareSerial blueToothSerial(' + dropdown_pin + ',' + NextPIN + ');\n';
            Blockly.Arduino.definitions_['define_softwareserial'] = JST['SALIDAS_bluetooth_def_definitions']({
                'dropdown_pin': dropdown_pin,
                'NextPIN': NextPIN
            });
            Blockly.Arduino.setups_['setup_bluetooth_'] = JST['SALIDAS_bluetooth_def_setups']({
                'baud_rate': baud_rate,
                'dropdown_pin': dropdown_pin,
                'NextPIN': NextPIN
            });
            return '';
        };
        /**
         * SALIDAS_bluetooth__def block definition
         * @type {Object}
     
        Blockly.Blocks.SALIDAS_bluetooth_def = {
            category: Educablocks.locales.getKey('LANG_CATEGORY_COMMUNICATION'),
            tags: ['bluetooth'],
            helpUrl: Educablocks.URL_BT,
            /**
             * SALIDAS_bluetooth_slave initialization
        
            init: function() {
                this.setColour(Educablocks.LANG_COLOUR_COMMUNICATION);
                this.appendDummyInput().appendField(Educablocks.locales.getKey('LANG_SALIDAS_BLUETOOTH_DEF')).appendField(new Blockly.FieldImage('img/blocks/03.png', 208 * options.zoom, 100 * options.zoom));
                this.appendValueInput('BAUD_RATE').setCheck(Number).appendField(Educablocks.locales.getKey('LANG_SALIDAS_BLUETOOTH_DEF_BAUD_RATE')).setAlign(Blockly.ALIGN_RIGHT);
                this.appendDummyInput().appendField('ENTRADAS?').appendField(new Blockly.FieldCheckbox('FALSE'), 'TOGGLE').setAlign(Blockly.ALIGN_RIGHT);
                this.checkBT();
                this.last_toogle = this.getFieldValue('TOGGLE');
                this.setInputsInline(false);
                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setTooltip(Educablocks.locales.getKey('LANG_SALIDAS_BLUETOOTH_DEF_TOOLTIP'));
            },
            checkBT: function() {
                if (this.getFieldValue('TOGGLE') === 'FALSE') {
                    try {
                        this.removeInput('PIN');
                        this.removeInput('PIN2');
                    } catch (e) {}
                    this.appendValueInput('PIN').setCheck(Number).appendField(Educablocks.locales.getKey('LANG_SALIDAS_BLUETOOTH_DEF_PIN1')).setAlign(Blockly.ALIGN_RIGHT);
                    this.appendValueInput('PIN2').setCheck(Number).appendField(Educablocks.locales.getKey('LANG_SALIDAS_BLUETOOTH_DEF_PIN2')).setAlign(Blockly.ALIGN_RIGHT);
                } else {
                    try {
                        this.removeInput('PIN');
                        this.removeInput('PIN2');
                    } catch (e) {}
                }
            },
            onchange: function() {
                if (this.getFieldValue('TOGGLE') !== this.last_toogle) {
                    this.checkBT();
                    this.last_toogle = this.getFieldValue('TOGGLE');
                }
            }
        };
        // Source: src/blocks/SALIDAS_bluetooth_receive/SALIDAS_bluetooth_receive.js
        /* global Blockly, JST, Educablocks */
        /* jshint sub:true */

        /**
         * SALIDAS_bluetooth_slave code generation
         * @return {String} Code generated with block parameters
   

        Blockly.Arduino.SALIDAS_bluetooth_receive = function() {
            var code = JST['SALIDAS_bluetooth_receive']({});
            return [code, Blockly.Arduino.ORDER_ATOMIC];
        };

        /**
         * SALIDAS_bluetooth_slave block definition
         * @type {Object}

        Blockly.Blocks.SALIDAS_bluetooth_receive = {
            category: Educablocks.locales.getKey('LANG_CATEGORY_COMMUNICATION'),
            tags: ['bluetooth'],
            helpUrl: Educablocks.URL_BT,
            /**
             * SALIDAS_bluetooth_slave initialization
   
            init: function() {
                this.setColour(Educablocks.LANG_COLOUR_COMMUNICATION);
                this.appendDummyInput()
                    .appendField(Educablocks.locales.getKey('LANG_SALIDAS_BLUETOOTH_RECEIVE'));
                // .appendField(new Blockly.FieldImage('img/blocks/SALIDASmod03.png', 208 * options.zoom, 100 * options.zoom));

                this.setInputsInline(false);


                this.setOutput(true, null);
                this.setTooltip(Educablocks.locales.getKey('LANG_SALIDAS_BLUETOOTH_RECEIVE_TOOLTIP'));
            }
        };

        // Source: src/blocks/SALIDAS_bluetooth_send/SALIDAS_bluetooth_send.js
        /* global Blockly, JST, Educablocks */
        /* jshint sub:true */

        /**
         * SALIDAS_bluetooth_slave code generation
         * @return {String} Code generated with block parameters
        

        Blockly.Arduino.SALIDAS_bluetooth_send = function() {
            var statement_send = Blockly.Arduino.valueToCode(this, 'SNT', Blockly.Arduino.ORDER_ATOMIC) || '';

            var code = '';
            var a = Educablocks.findPinMode(statement_send);
            code += a['code'];
            statement_send = a['pin'];

            code += JST['SALIDAS_bluetooth_send']({
                'statement_send': statement_send
            });

            return code;
        };

        /**
         * SALIDAS_bluetooth_send block definition
         * @type {Object}
 
        Blockly.Blocks.SALIDAS_bluetooth_send = {
            category: Educablocks.locales.getKey('LANG_CATEGORY_COMMUNICATION'),
            tags: ['bluetooth'],
            helpUrl: Educablocks.URL_BT,
            /**
             * SALIDAS_bluetooth_send initialization
          
            init: function() {
                this.setColour(Educablocks.LANG_COLOUR_COMMUNICATION);
                this.appendDummyInput()
                    .appendField(Educablocks.locales.getKey('LANG_SALIDAS_BLUETOOTH_SEND'));
                // .appendField(new Blockly.FieldImage('img/blocks/SALIDASmod03.png', 208 * options.zoom, 100 * options.zoom));

                this.appendValueInput('SNT')
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField(Educablocks.locales.getKey('LANG_SALIDAS_BLUETOOTH_SEND_SEND'));

                this.setInputsInline(false);


                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setTooltip(Educablocks.locales.getKey('LANG_SALIDAS_BLUETOOTH_SEND_TOOLTIP'));
            }
        };

        // Source: src/blocks/SALIDAS_button/SALIDAS_button.js
        /* global Blockly, options, JST, Educablocks */
        /* jshint sub:true */
        /**
         * SALIDAS_button code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.entradas_humedad = function() {
            var dropdown_npin = this.getFieldValue('NPIN');
            var code = '';


            code += JST['entradas_humedad']({
                'dropdown_npin': dropdown_npin
            });

            return [code, Blockly.Arduino.ORDER_ATOMIC];
        };
        /**
         * SALIDAS_button block definition
         * @type {Object}
         */
        Blockly.Blocks.entradas_humedad = {
            category: Educablocks.locales.getKey('LANG_CATEGORY_ENTRADAS'),
            tags: ['humedad suelo'],
            helpUrl: Educablocks.URL_BUTTON,
            /**
             * SALIDAS_button initialization
             **/
            init: function() {
                this.setColour(Educablocks.LANG_COLOUR_ENTRADAS);
                this.appendDummyInput('PIN').appendField(Educablocks.locales.getKey('LANG_ENTRADAS_LLUVIA')).appendField(new Blockly.FieldImage('img/blocks/05.png', 336 * options.zoom, 176 * options.zoom)).setAlign(Blockly.ALIGN_RIGHT).appendField(Educablocks.locales.getKey('LANG_ENTRADAS_LLUVIA_PIN')).appendField(new Blockly.FieldDropdown([
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN13') || 'A0', 'A0'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN12') || 'A1', 'A1'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN11') || 'A2', 'A2'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN10') || 'A3', 'A3'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN9') || 'A4', 'A4'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN8') || 'A5', 'A5']
                ]), 'NPIN');
                this.setOutput(true, Number);
                this.setTooltip(Educablocks.locales.getKey('LANG_ENTRADAS_LLUVIA_TOOLTIP'));
            }
        };
        // Source: src/blocks/SALIDAS_buttons/SALIDAS_buttons.js
        /* global Blockly, options, JST, Educablocks */
        /* jshint sub:true */

        /**
         * SALIDAS_buttons code generation
         * @return {String} Code generated with block parameters
         *


        Blockly.Arduino.SALIDAS_buttons = function() {
            var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
            var code_btn1 = Blockly.Arduino.statementToCode(this, 'BUTN1');
            var code_btn2 = Blockly.Arduino.statementToCode(this, 'BUTN2');
            var code_btn3 = Blockly.Arduino.statementToCode(this, 'BUTN3');
            var code_btn4 = Blockly.Arduino.statementToCode(this, 'BUTN4');
            var code_btn5 = Blockly.Arduino.statementToCode(this, 'BUTN5');

            var code = '';
            var a = Educablocks.findPinMode(dropdown_pin);
            code += a['code'];
            dropdown_pin = a['pin'];


            code_btn1 = code_btn1.replace(/&quot;/g, '"');
            code_btn2 = code_btn2.replace(/&quot;/g, '"');
            code_btn3 = code_btn3.replace(/&quot;/g, '"');
            code_btn4 = code_btn4.replace(/&quot;/g, '"');
            code_btn5 = code_btn5.replace(/&quot;/g, '"');

            // code_btn1=code_btn1.replace(/&amp;/g,'');
            // code_btn2=code_btn2.replace(/&amp;/g,'');
            // code_btn3=code_btn3.replace(/&amp;/g,'');
            // code_btn4=code_btn4.replace(/&amp;/g,'');
            // code_btn5=code_btn5.replace(/&amp;/g,'');

            Blockly.Arduino.definitions_['declare_var_define_buttons' + dropdown_pin] = JST['SALIDAS_buttons_definitions_variables']({});
            Blockly.Arduino.definitions_['define_buttons' + dropdown_pin] = JST['SALIDAS_buttons_definitions']({
                'dropdown_pin': dropdown_pin
            });


            code += JST['SALIDAS_buttons']({
                'dropdown_pin': dropdown_pin,
                'code_btn1': code_btn1,
                'code_btn2': code_btn2,
                'code_btn3': code_btn3,
                'code_btn4': code_btn4,
                'code_btn5': code_btn5
            });

            return code;
        };

        /**
         * SALIDAS_buttons block definition
         * @type {Object}
         *
        Blockly.Blocks.SALIDAS_buttons = {
            category: Educablocks.locales.getKey('LANG_CATEGORY_SALIDAS'),
            tags: ['buttons'],
            helpUrl: Educablocks.URL_BUTTONS,
            /**
             * SALIDAS_buttons initialization
             *
            init: function() {
                this.setColour(Educablocks.LANG_COLOUR_SALIDAS);
                this.appendValueInput('PIN')
                    .appendField(Educablocks.locales.getKey('LANG_SALIDAS_BUTTONS'))
                    .appendField(new Blockly.FieldImage('img/blocks/10.png', 336 * options.zoom, 176 * options.zoom))
                    .appendField(Educablocks.locales.getKey('LANG_SALIDAS_BUTTONS_PIN'))
                    .setCheck(Number);
                this.appendStatementInput('BUTN1')
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField(Educablocks.locales.getKey('LANG_SALIDAS_BUTTONS_BUTTON_A'));
                this.appendStatementInput('BUTN2')
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField(Educablocks.locales.getKey('LANG_SALIDAS_BUTTONS_BUTTON_B'));
                this.appendStatementInput('BUTN3')
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField(Educablocks.locales.getKey('LANG_SALIDAS_BUTTONS_BUTTON_C'));
                this.appendStatementInput('BUTN4')
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField(Educablocks.locales.getKey('LANG_SALIDAS_BUTTONS_BUTTON_D'));
                this.appendStatementInput('BUTN5')
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField(Educablocks.locales.getKey('LANG_SALIDAS_BUTTONS_BUTTON_E'));
                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setTooltip(Educablocks.locales.getKey('LANG_SALIDAS_BUTTONS_TOOLTIP'));
            }
        };
        // Source: src/blocks/ENTRADAS_PIR/ENTRADAS_PIR.js
        /* global Blockly, options,  JST, Educablocks */
        /* jshint sub:true */
        /**
         * ENTRADAS_PIR code generation
         * @return {String} Code generated with block parameters
         */
/*AREST INICIO
   
   Blockly.Arduino.SALIDAS_arest_def = function() {
            var dropdown_pin, NextPIN;
            if (this.getFieldValue('TOGGLE') === 'TRUE') {
                dropdown_pin = Blockly.Arduino.valueToCode(this, 'ID', Blockly.Arduino.ORDER_ATOMIC);
                NextPIN = Blockly.Arduino.valueToCode(this, 'NAME', Blockly.Arduino.ORDER_ATOMIC);
                var a = Educablocks.findPinMode(dropdown_pin);
                Blockly.Arduino.setups_['setup_arest_pinmode'] = a['code'];
                dropdown_pin = a['pin'];
                a = Educablocks.findPinMode(NextPIN);
                Blockly.Arduino.setups_['setup_arest_pinmode2'] = a['code'];
                NextPIN = a['pin'];
            } else {
                dropdown_pin = "&quot; 2 &quot;";
                NextPIN = "&quot; serial &quot;";
            }

            Blockly.Arduino.definitions_['define_softwareserial'] = JST['SALIDAS_arest_def_definitions']({
                'dropdown_pin': dropdown_pin,
                'NextPIN': NextPIN
            });
            Blockly.Arduino.setups_['setup_arest_'] = JST['SALIDAS_arest_def_setups']({
                'dropdown_pin': dropdown_pin,
                'NextPIN': NextPIN
            });
             
            code = JST['SALIDAS_arest_def_loop']({});

            return code;
        };
    

        Blockly.Blocks.SALIDAS_arest_def = {
            category: Educablocks.locales.getKey('LANG_CATEGORY_COMMUNICATION'),
            tags: ['AREST'],
            helpUrl: Educablocks.URL_BT,

            init: function() {
                this.setColour(Educablocks.LANG_COLOUR_COMMUNICATION);
                this.appendDummyInput().appendField(Educablocks.locales.getKey('LANG_SALIDAS_AREST_DEF'));
                this.appendDummyInput().appendField(Educablocks.locales.getKey('LANG_SALIDAS_AREST_rename')).appendField(new Blockly.FieldCheckbox('FALSE'), 'TOGGLE').setAlign(Blockly.ALIGN_RIGHT);
                this.checkBT();
                this.last_toogle = this.getFieldValue('TOGGLE');
                this.setInputsInline(false);
                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setTooltip(Educablocks.locales.getKey('LANG_SALIDAS_AREST_DEF_TOOLTIP'));
            },
            checkBT: function() {
                if (this.getFieldValue('TOGGLE') === 'FALSE') {
                    try {
                        this.removeInput('ID');
                        this.removeInput('NAME');
                } catch (e) {}    
                } else {
                    try {
                        this.removeInput('ID');
                        this.removeInput('NAME');
                    } catch (e) {}
                    this.appendValueInput('ID').appendField(Educablocks.locales.getKey('LANG_SALIDAS_AREST_DEF_ID')).setAlign(Blockly.ALIGN_RIGHT);
                    this.appendValueInput('NAME').appendField(Educablocks.locales.getKey('LANG_SALIDAS_AREST_DEF_NAME')).setAlign(Blockly.ALIGN_RIGHT);
                }
            },
            onchange: function() {
                if (this.getFieldValue('TOGGLE') !== this.last_toogle) {
                    this.checkBT();
                    this.last_toogle = this.getFieldValue('TOGGLE');
                }
            }
        };

        this["JST"]["SALIDAS_arest_def_definitions"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += '#include <SPI.h>\n#include <aREST.h>\n#include <avr/wdt.h>\naREST rest = aREST();\n';

            }
            return __p
        };

        this["JST"]["SALIDAS_arest_def_setups"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'Serial.begin(115200);\nrest.set_id(' +
                    ((__t = (dropdown_pin)) == null ? '' : __t) +
                    ');\n  rest.set_name(' +
                    ((__t = (NextPIN)) == null ? '' : __t) +
                    ');\n wdt_enable(WDTO_4S);\n';
            }
            return __p
        };

        this["JST"]["SALIDAS_arest_def_loop"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'rest.handle(Serial);\nwdt_reset();\n';
            }
            return __p
        };

 AREST FINAL */

//scaner i2c

   Blockly.Arduino.SALIDAS_scan_def = function() {

            Blockly.Arduino.definitions_['define_scan'] = JST['SALIDAS_scan_def_definitions']({

            });
            Blockly.Arduino.setups_['setup_scan_'] = JST['SALIDAS_scan_def_setups']({

            });
             
            code = JST['SALIDAS_scan_def_loop']({});

            return code;
        };

        Blockly.Blocks.SALIDAS_scan_def = {
            category: Educablocks.locales.getKey('LANG_CATEGORY_COMMUNICATION'),
            tags: ['SCAN'],
            helpUrl: Educablocks.URL_BT,

            init: function() {
                this.setColour(Educablocks.LANG_COLOUR_COMMUNICATION);
                this.appendDummyInput().appendField(Educablocks.locales.getKey('LANG_SALIDAS_SCAN_DEF'));
                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setTooltip(Educablocks.locales.getKey('LANG_SALIDAS_SCAN_DEF_TOOLTIP'));
             }
        };
        this["JST"]["SALIDAS_scan_def_definitions"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += '#include <Wire.h>\n';

            }
            return __p
        };

        this["JST"]["SALIDAS_scan_def_setups"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += '  Wire.begin();\nSerial.begin(9600);\nwhile (!Serial);\nSerial.println("Escaner I2C ");\n';
            }
            return __p
        };

        this["JST"]["SALIDAS_scan_def_loop"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += '  byte error, address;\nint nDevices;\nSerial.println("Escaneando");\nnDevices = 0;\nfor(address = 1; address < 127; address++ )\n{\nWire.beginTransmission(address);\nerror = Wire.endTransmission();\nif (error == 0)\n{\nSerial.print("Dispositivo I2C encontrado en la direccion 0x");\nif (address<16)\nSerial.print("0");\nSerial.print(address,HEX);\nSerial.println("  !");\nnDevices++;\n}\nelse if (error==4)\n{\nSerial.print("Error desconocido en dirección 0x");\nif (address<16)\nSerial.print("0");\nSerial.println(address,HEX);\n}\n}\nif (nDevices == 0)\nSerial.println("No  se encontraron dispositivos I2C");\nelse\nSerial.println("terminado");\ndelay(5000);\n';
            }
            return __p
        };
//final scaner i2c

//panel ble 
/*
   Blockly.Arduino.SALIDAS_ble_def = function() {

            Blockly.Arduino.definitions_['define_ble'] = JST['SALIDAS_ble_def_definitions']({

            });
            Blockly.Arduino.definitions_['define_SALIDAS_ble'] = JST['SALIDAS_ble_definitions']({});

            Blockly.Arduino.setups_['setup_ble_'] = JST['SALIDAS_ble_def_setups']({

            });
             
            code = JST['SALIDAS_ble_def_loop']({});

            return code;
        };



        Blockly.Blocks.SALIDAS_ble_def = {
            category: Educablocks.locales.getKey('LANG_CATEGORY_COMMUNICATION'),
            tags: ['BLE'],
            helpUrl: Educablocks.URL_BT,

            init: function() {
                this.setColour(Educablocks.LANG_COLOUR_COMMUNICATION);
                this.appendDummyInput().appendField(Educablocks.locales.getKey('LANG_SALIDAS_BLE_DEF'));
                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setTooltip(Educablocks.locales.getKey('LANG_SALIDAS_BLE_DEF_TOOLTIP'));
             }
        };
        this["JST"]["SALIDAS_ble_def_definitions"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += '#include <CurieBLE.h>\nBLEPeripheral blePeripheral;\nBLEService iotService("19B10000-E8F2-537E-4F6C-D104768A1214");\n//Digital\nBLEUnsignedCharCharacteristic     dig02("19B10002-E8F2-537E-4F6C-D104768A1214", BLEWrite | BLENotify);\nBLEUnsignedCharCharacteristic     dig03("19B10003-E8F2-537E-4F6C-D104768A1214", BLEWrite | BLENotify);\nBLEUnsignedCharCharacteristic     dig04("19B10004-E8F2-537E-4F6C-D104768A1214", BLEWrite | BLENotify);\nBLEUnsignedCharCharacteristic     dig05("19B10005-E8F2-537E-4F6C-D104768A1214", BLEWrite | BLENotify);\nBLEUnsignedCharCharacteristic     dig06("19B10006-E8F2-537E-4F6C-D104768A1214", BLEWrite | BLENotify);\nBLEUnsignedCharCharacteristic     dig07("19B10007-E8F2-537E-4F6C-D104768A1214", BLEWrite | BLENotify);\nBLEUnsignedCharCharacteristic     dig08("19B10008-E8F2-537E-4F6C-D104768A1214", BLEWrite | BLENotify);\nBLEUnsignedCharCharacteristic     dig09("19B10009-E8F2-537E-4F6C-D104768A1214", BLEWrite | BLENotify);\nBLEUnsignedCharCharacteristic     dig10("19B10010-E8F2-537E-4F6C-D104768A1214", BLEWrite | BLENotify);\nBLEUnsignedCharCharacteristic     dig11("19B10011-E8F2-537E-4F6C-D104768A1214", BLEWrite | BLENotify);\nBLEUnsignedCharCharacteristic     dig12("19B10012-E8F2-537E-4F6C-D104768A1214", BLEWrite | BLENotify);\nBLEUnsignedCharCharacteristic     dig13("19B10013-E8F2-537E-4F6C-D104768A1214", BLEWrite | BLENotify);\n//PWM\nBLEUnsignedCharCharacteristic     digPWM03("19B10103-E8F2-537E-4F6C-D104768A1214", BLEWrite);\nBLEUnsignedCharCharacteristic     digPWM05("19B10105-E8F2-537E-4F6C-D104768A1214", BLEWrite);\nBLEUnsignedCharCharacteristic     digPWM06("19B10106-E8F2-537E-4F6C-D104768A1214", BLEWrite);\nBLEUnsignedCharCharacteristic     digPWM09("19B10109-E8F2-537E-4F6C-D104768A1214", BLEWrite);\n//Analog\nBLEUnsignedCharCharacteristic   anaA0("19B10200-E8F2-537E-4F6C-D104768A1214", BLENotify);\nBLEUnsignedCharCharacteristic   anaA1("19B10201-E8F2-537E-4F6C-D104768A1214", BLENotify);\nBLEUnsignedCharCharacteristic   anaA2("19B10202-E8F2-537E-4F6C-D104768A1214", BLENotify);\nBLEUnsignedCharCharacteristic   anaA3("19B10203-E8F2-537E-4F6C-D104768A1214", BLENotify);\nBLEUnsignedCharCharacteristic   anaA4("19B10204-E8F2-537E-4F6C-D104768A1214", BLENotify);\nBLEUnsignedCharCharacteristic   anaA5("19B10205-E8F2-537E-4F6C-D104768A1214", BLENotify);\nlong previousMillis = 0;\nint prevA0 = 0;\nint prevA1 = 0;\nint prevA2 = 0;\nint prevA3 = 0;\nint prevA4 = 0;\nint prevA5 = 0;\nboolean auxD02 = true;\nboolean auxD03 = true;\nboolean auxD04 = true;\nboolean auxD05 = true;\nboolean auxD06 = true;\nboolean auxD07 = true;\nboolean auxD08 = true;\nboolean auxD09 = true;\nboolean auxD10 = true;\nboolean auxD11 = true;\nboolean auxD12 = true;\nboolean auxD13 = true;\n';

            }
            return __p
        };

        this["JST"]["SALIDAS_ble_def_setups"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'setup_BLE();\n';
            }
            return __p
        };

        this["JST"]["SALIDAS_ble_definitions"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += '//--------------------------SETUP PARA BLE------------------------------------\nvoid setup_BLE(void)\n{\nblePeripheral.setLocalName("IoT");\nblePeripheral.setAdvertisedServiceUuid(iotService.uuid());\nblePeripheral.addAttribute(iotService);\nblePeripheral.addAttribute(dig02);\nblePeripheral.addAttribute(dig03);\nblePeripheral.addAttribute(dig04);\nblePeripheral.addAttribute(dig05);\nblePeripheral.addAttribute(dig06);\nblePeripheral.addAttribute(dig07);\nblePeripheral.addAttribute(dig08);\nblePeripheral.addAttribute(dig09);\nblePeripheral.addAttribute(dig10);\nblePeripheral.addAttribute(dig11);\nblePeripheral.addAttribute(dig12);\nblePeripheral.addAttribute(dig13);\nblePeripheral.addAttribute(digPWM03);\nblePeripheral.addAttribute(digPWM05);\nblePeripheral.addAttribute(digPWM06);\nblePeripheral.addAttribute(digPWM09);\nblePeripheral.addAttribute(anaA0);\nblePeripheral.addAttribute(anaA1);\nblePeripheral.addAttribute(anaA2);\nblePeripheral.addAttribute(anaA3);\nblePeripheral.addAttribute(anaA4);\nblePeripheral.addAttribute(anaA5);\nblePeripheral.begin();\nSerial.begin(9600);\nSerial.println("101-IoT");\n}\n//----------------------LOOP PARA BLE----------------------------------------\nvoid loop_BLE(void)\n{\nBLECentral central = blePeripheral.central();\nif (central) {\nwhile (central.connected()) {\nif (dig02.written()) {\npinMode(2, OUTPUT);\ndigitalWrite(2, auxD02);\nauxD02 = !auxD02;\n}\nif (dig03.written()) {\npinMode(3, OUTPUT);\ndigitalWrite(3, auxD03);\nauxD03 = !auxD03;\n}\nif (dig04.written()) {\npinMode(4, OUTPUT);\ndigitalWrite(4, auxD04);\nauxD04 = !auxD04;\n}\nif (dig05.written()) {\npinMode(5, OUTPUT);\ndigitalWrite(5, auxD05);\nauxD05 = !auxD05;\n}\nif (dig06.written()) {\npinMode(6, OUTPUT);\ndigitalWrite(6, auxD06);\nauxD06 = !auxD06;\n}\nif (dig07.written()) {\npinMode(7, OUTPUT);\ndigitalWrite(7, auxD07);\nauxD07 = !auxD07;\n}\nif (dig08.written()) {\npinMode(8, OUTPUT);\ndigitalWrite(8, auxD08);\nauxD08 = !auxD08;\n}\nif (dig09.written()) {\npinMode(9, OUTPUT);\ndigitalWrite(9, auxD09);\nauxD09 = !auxD09;\n}\nif (dig10.written()) {\npinMode(10, OUTPUT);\ndigitalWrite(10, auxD10);\nauxD10 = !auxD10;\n}\nif (dig11.written()) {\npinMode(11, OUTPUT);\ndigitalWrite(11, auxD11);\nauxD11 = !auxD11;\n}\nif (dig12.written()) {\npinMode(12, OUTPUT);\ndigitalWrite(12, auxD12);\nauxD12 = !auxD12;\n}\nif (dig13.written()) {\npinMode(13, OUTPUT);\ndigitalWrite(13, auxD13);\nauxD13 = !auxD13;\n}\n/////////////  PWM  //////////\nif (digPWM03.written()) {\npwmPinControl(digPWM03.value(), 3);\n}\nif (digPWM05.written()) {\npwmPinControl(digPWM05.value(), 5);\n}\nif (digPWM06.written()) {\npwmPinControl(digPWM06.value(), 6);\n}\nif (digPWM09.written()) {\npwmPinControl(digPWM09.value(), 9);\n}\nlong currentMillis = millis();\nif (currentMillis - previousMillis >= 200) {\npreviousMillis = currentMillis;\nupdateAnalogNoti();\nupdateDigitalNoti();\n}\n}\n}\n}\n//-----------------------------DEFINICION DIGITAL INPUT---------------------------------\nvoid updateDigitalNoti(void) {\nif (digitalRead(2) == HIGH) {\ndig02.setValue(1);\n} else {\ndig02.setValue(0);\n}\nif (digitalRead(3) == HIGH) {\ndig03.setValue(1);\n} else {\ndig03.setValue(0);\n}\nif (digitalRead(4) == HIGH) {\ndig04.setValue(1);\n} else {\ndig04.setValue(0);\n}\nif (digitalRead(5) == HIGH) {\ndig05.setValue(1);\n} else {\ndig05.setValue(0);\n}\nif (digitalRead(6) == HIGH) {\ndig06.setValue(1);\n} else {\ndig06.setValue(0);\n}\nif (digitalRead(7) == HIGH) {\ndig07.setValue(1);\n} else {\ndig07.setValue(0);\n}\nif (digitalRead(8) == HIGH) {\ndig08.setValue(1);\n} else {\ndig08.setValue(0);\n}\nif (digitalRead(9) == HIGH) {\ndig09.setValue(1);\n} else {\ndig09.setValue(0);\n}\nif (digitalRead(10) == HIGH) {\ndig10.setValue(1);\n} else {\ndig10.setValue(0);\n}\nif (digitalRead(11) == HIGH) {\ndig11.setValue(1);\n} else {\ndig11.setValue(0);\n}\nif (digitalRead(12) == HIGH) {\ndig12.setValue(1);\n} else {\ndig12.setValue(0);\n}\nif (digitalRead(13) == HIGH) {\ndig13.setValue(1);\n} else {\ndig13.setValue(0);\n}\n}\n//---------------------------DEFINICION ANALOG INPUT-----------------------------------\nvoid updateAnalogNoti(void) {\nint valA0 = analogRead(A0);\nint auxA0 = map(valA0, 0, 1023, 0, 100);\nif (auxA0 != prevA0) {\nanaA0.setValue(auxA0);\nprevA0 = auxA0;\n}\nint valA1 = analogRead(A1);\nint auxA1 = map(valA1, 0, 1023, 0, 100);\nif (auxA1 != prevA1) {\nanaA1.setValue(auxA1);\nprevA1 = auxA1;\n}\nint valA2 = analogRead(A2);\nint auxA2 = map(valA2, 0, 1023, 0, 100);\nif (auxA2 != prevA2) {\nanaA2.setValue(auxA2);\nprevA2 = auxA2;\n}\nint valA3 = analogRead(A3);\nint auxA3 = map(valA3, 0, 1023, 0, 100);\nif (auxA3 != prevA3) {\nanaA3.setValue(auxA3);\nprevA3 = auxA3;\n}\nint valA4 = analogRead(A4);\nint auxA4 = map(valA4, 0, 1023, 0, 100);\nif (auxA4 != prevA4) {\nanaA4.setValue(auxA4);\nprevA4 = auxA4;\n}\nint valA5 = analogRead(A5);\nint auxA5 = map(valA5, 0, 1023, 0, 100);\nif (auxA5 != prevA5) {\nanaA5.setValue(auxA5);\nprevA5 = auxA5;\n}\n}\n//-----------------------DEFINICNION PWM PIN---------------------------------------\nvoid pwmPinControl(int val, int pin) {\nSerial.print(val);\nSerial.print(" - ");\nSerial.print(pin); \nSerial.println(" PWM");\nanalogWrite(pin, val);\n}\n//-----------------------PINES DIGITALES ON/OFF---------------------------------------\nboolean test = true;\nvoid digitalPinControl(int val, int pin) {\nif (val <= 0 && test) {\nSerial.print(pin);\nSerial.println(" Pin on");\ndigitalWrite(pin, test);\ntest = !test;\n} else {\nSerial.print(pin);\nSerial.println(" Pin off");\ndigitalWrite(pin, test);\ntest = !test;\n}\n}';

            }
            return __p
        };

        this["JST"]["SALIDAS_ble_def_loop"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'loop_BLE();\n';
            }
            return __p
        };
//final panel ble

*/

        // Source: src/blocks/ENTRADAS_PIR/ENTRADAS_PIR.js
        /* global Blockly, options,  JST, Educablocks */
        /* jshint sub:true */
        /**
         * ENTRADAS_PIR code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.ENTRADAS_PIR = function() {
            var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
            var dropdown_npin = this.getFieldValue('NPIN');
            var code = '';
            var a = Educablocks.findPinMode(dropdown_pin);
            code += a['code'];
            dropdown_pin = a['pin'];

            if (Educablocks.isVariable(dropdown_npin)) {
                code += JST['ENTRADAS_PIR_setups']({
                    'dropdown_npin': dropdown_npin
                });
            } else {
                Blockly.Arduino.setups_['setup_infrared_' + dropdown_npin] = JST['ENTRADAS_PIR_setups']({
                    'dropdown_npin': dropdown_npin
                });
            }
            code += JST['ENTRADAS_PIR']({
                'dropdown_npin': dropdown_npin
            });
            return [code, Blockly.Arduino.ORDER_ATOMIC];
        };
        /**
         * ENTRADAS_PIR block definition
         * @type {Object}
         */
        Blockly.Blocks.ENTRADAS_PIR = {
            category: Educablocks.locales.getKey('LANG_CATEGORY_ENTRADAS'),
            tags: ['pir'],
            helpUrl: Educablocks.URL_IR,
            /**
             * ENTRADAS_PIR initialization
             */
            init: function() {
                this.setColour(Educablocks.LANG_COLOUR_ENTRADAS);
                this.appendDummyInput('PIN').appendField(Educablocks.locales.getKey('LANG_ENTRADAS_PIR')).appendField(new Blockly.FieldImage('img/blocks/04.png', 208 * options.zoom, 126 * options.zoom)).appendField(Educablocks.locales.getKey('LANG_ENTRADAS_PIR_PIN')).appendField(new Blockly.FieldDropdown([
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN13') || '13', '13'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN12') || '12', '12'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN11') || '11', '11'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN10') || '10', '10'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN9') || '9', '9'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN8') || '8', '8'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN7') || '7', '7'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN6') || '6', '6'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN5') || '5', '5'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN4') || '4', '4'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN3') || '3', '3'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN2') || '2', '2']
                ]), 'NPIN');

                this.setOutput(true);
                this.setTooltip(Educablocks.locales.getKey('LANG_ENTRADAS_PIR_TOOLTIP'));
            }
        };
        // Source: src/blocks/SALIDAS_joystick/SALIDAS_joystick.js
        /* global Blockly, options,JST, Educablocks */
        /* jshint sub:true */
        /**
         * SALIDAS_joystick code generation
         * @return {String} Code generated with block parameters
         
        Blockly.Arduino.SALIDAS_joystick = function() {
            var pinx = Blockly.Arduino.valueToCode(this, 'PINX', Blockly.Arduino.ORDER_ATOMIC);
            var piny = Blockly.Arduino.valueToCode(this, 'PINY', Blockly.Arduino.ORDER_ATOMIC);
            var pinbutton = Blockly.Arduino.valueToCode(this, 'PINBUTTON', Blockly.Arduino.ORDER_ATOMIC);
            var code = '';

            var a = Educablocks.findPinMode(pinx);
            code += a['code'];
            pinx = a['pin'];

            a = Educablocks.findPinMode(piny);
            code += a['code'];
            piny = a['pin'];

            a = Educablocks.findPinMode(pinbutton);
            code += a['code'];
            pinbutton = a['pin'];


            var name = pinx.substring(0, 3) + '_' + piny.substring(0, 3);

            Blockly.Arduino.definitions_['declare_var_internal_readJoystick_array_' + pinx] = 'int _internal_readJoystick_array_' + name + '[3];\n';
            Blockly.Arduino.definitions_['define_joystick' + pinx] = JST['SALIDAS_joystick_definitions']({
                'name': name,
                'pinx': pinx,
                'piny': piny,
                'pinbutton': pinbutton
            });
            if (Educablocks.isVariable(pinbutton)) {
                code += JST['SALIDAS_joystick_setups']({
                    'pinbutton': pinbutton
                });
            } else {
                Blockly.Arduino.setups_['setup_joystick_' + pinbutton] = JST['SALIDAS_joystick_setups']({
                    'pinbutton': pinbutton
                });
            }
            var array = Blockly.Arduino.valueToCode(this, 'POS', Blockly.Arduino.ORDER_ATOMIC);
            code += JST['SALIDAS_joystick']({
                'name': name,
                'pinx': pinx,
                'array': array
            });
            return [code, Blockly.Arduino.ORDER_ATOMIC];
        };
        /**
         * SALIDAS_joystick block definition
         * @type {Object}
         */
          /**Blockly.Blocks.SALIDAS_joystick = {
            category: Educablocks.locales.getKey('LANG_CATEGORY_SALIDAS'),
            tags: ['joystick'],
            helpUrl: Educablocks.URL_JOYSTICK,
            /**
             * SALIDAS_joystick initialization
           
            init: function() {
                this.setColour(Educablocks.LANG_COLOUR_SALIDAS);
                this.appendDummyInput().appendField(Educablocks.locales.getKey('LANG_SALIDAS_JOYSTICK')).appendField(new Blockly.FieldImage('img/blocks/11.png', 209 * options.zoom, 277 * options.zoom));
                // this.appendValueInput('POS')
                //     .appendField(Educablocks.locales.getKey('LANG_SALIDAS_JOYSTICK_POSITION'))
                //     .setAlign(Blockly.ALIGN_RIGHT)
                //     .setCheck(Number);
                this.appendValueInput('PINX').appendField(Educablocks.locales.getKey('LANG_SALIDAS_JOYSTICK_PIN_X')).setAlign(Blockly.ALIGN_RIGHT).setCheck(Number);
                this.appendValueInput('PINY').appendField(Educablocks.locales.getKey('LANG_SALIDAS_JOYSTICK_PIN_Y')).setAlign(Blockly.ALIGN_RIGHT).setCheck(Number);
                this.appendValueInput('PINBUTTON').appendField(Educablocks.locales.getKey('LANG_SALIDAS_JOYSTICK_PIN_BUTTON')).setAlign(Blockly.ALIGN_RIGHT).setCheck(Number);
                this.setOutput(true, Number);
                // this.setPreviousStatement(true, null);
                // this.setNextStatement(true, null);
                this.setTooltip(Educablocks.locales.getKey('LANG_SALIDAS_JOYSTICK_TOOLTIP'));
            }
        };
        // Source: src/blocks/SALIDAS_led/SALIDAS_led.js
        /* global Blockly, options, JST, Educablocks */
        /* jshint sub:true */
        /**
         * SALIDAS_led code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.SALIDAS_motor = function() {
            var dropdown_npin = this.getFieldValue('NPIN');
            var dropdown_npin2 = this.getFieldValue('NPIN2');
            var dropdown_pin1 = Blockly.Arduino.valueToCode(this, 'PIN1', Blockly.Arduino.ORDER_ATOMIC) || '';
            var dropdown_pin2 = Blockly.Arduino.valueToCode(this, 'PIN2', Blockly.Arduino.ORDER_ATOMIC);
            var code = '';
            var a = Educablocks.findPinMode(dropdown_pin1);
            code += a['code'];
            dropdown_pin1 = a['pin'];
            if (Educablocks.isVariable(dropdown_npin2 + dropdown_npin)) {
                code += JST['SALIDAS_motor_setups']({
                    'dropdown_pin1': dropdown_pin1,
                    'dropdown_npin': dropdown_npin,
                    'dropdown_npin2': dropdown_npin2,
                    'dropdown_pin2': dropdown_pin2
                });
            } else {
                Blockly.Arduino.setups_['' + dropdown_npin2 + dropdown_npin] = JST['SALIDAS_motor_setups']({
                    'dropdown_pin1': dropdown_pin1,
                    'dropdown_npin': dropdown_npin,
                    'dropdown_npin2': dropdown_npin2,
                    'dropdown_pin2': dropdown_pin2
                });
            }
            code += JST['SALIDAS_motor']({
                'dropdown_pin1': dropdown_pin1,
                'dropdown_npin': dropdown_npin,
                'dropdown_npin2': dropdown_npin2,
                'dropdown_pin2': dropdown_pin2
            });
            return code;
        };

        /**
         * SALIDAS_led block definition
         * @type {Object}
         */
        Blockly.Blocks.SALIDAS_motor = {
            category: Educablocks.locales.getKey('LANG_CATEGORY_SALIDAS'),
            tags: ['motor'],
            helpUrl: Educablocks.URL_LED,
            /**
             * SALIDAS_led initialization
             */
            init: function() {
               

                this.setColour(Educablocks.LANG_COLOUR_SALIDAS);
                this.appendDummyInput('').appendField(Educablocks.locales.getKey('LANG_SALIDAS_MOTOR')).appendField(new Blockly.FieldImage('img/blocks/02.png', 208 * options.zoom, 140 * options.zoom));            
                this.appendDummyInput('PIN1').setAlign(Blockly.ALIGN_RIGHT).appendField(Educablocks.locales.getKey('LANG_SALIDAS_MOTOR_PIN1')).appendField(new Blockly.FieldDropdown([
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN13') || '13', '13'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN12') || '12', '12'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN11') || '11', '11'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN10') || '10', '10'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN9') || '9', '9'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN8') || '8', '8'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN7') || '7', '7'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN6') || '6', '6'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN5') || '5', '5'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN4') || '4', '4'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN3') || '3', '3'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN2') || '2', '2']
                ]), 'NPIN');
                this.appendDummyInput('PIN2').setAlign(Blockly.ALIGN_RIGHT).appendField(Educablocks.locales.getKey('LANG_SALIDAS_MOTOR_PIN2')).appendField(new Blockly.FieldDropdown([
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN13') || '12', '12'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN12') || '13', '13'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN11') || '11', '11'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN10') || '10', '10'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN9') || '9', '9'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN8') || '8', '8'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN7') || '7', '7'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN6') || '6', '6'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN5') || '5', '5'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN4') || '4', '4'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN3') || '3', '3'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN2') || '2', '2']
                ]), 'NPIN2');
                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setTooltip(Educablocks.locales.getKey('LANG_SALIDAS_MOTOR_TOOLTIP'));
            }
        };
        
/*
//motor2 definicion inicio

        this["JST"]["motor2_def_declare"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += '#define Matrices ' +
                    ((__t = (motor2_4)) == null ? '' : __t) + 
                     '\n LedControl matriz=LedControl(' +
                    ((__t = (motor2_1)) == null ? '' : __t) +
                    ', ' +
                    ((__t = (motor2_2)) == null ? '' : __t) +
                    ', ' +
                    ((__t = (motor2_3)) == null ? '' : __t) +
                    ', ' +
                    ((__t = (motor2_4)) == null ? '' : __t) +
                    ');\n';
            }
            return __p
        };

        this["JST"]["motor2_def_definitions"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += '#include "LedControlMS.h" \n'; 

            }
            return __p
        };

        this["JST"]["motor2_def_setups"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'pinMode(' +
                    ((__t = (motor2_1)) == null ? '' : __t) + 
                    ',OUTPUT);\n pinMode(' +
                    ((__t = (motor2_2)) == null ? '' : __t) +
                    ',OUTPUT);\n pinMode(' +
                    ((__t = (motor2_3)) == null ? '' : __t) +
                    ',OUTPUT);\n pinMode(' +
                    ((__t = (motor2_4)) == null ? '' : __t) +
                    ', ' +
                    ',OUTPUT);\n';
            }
            return __p
        };



       Blockly.Arduino.motor2 = function() {
            var motor2_pins = {};
            motor2_pins['motor2_1'] = this.getFieldValue('motor_1');
            motor2_pins['motor2_2'] = this.getFieldValue('motor_2');
            motor2_pins['motor2_3'] = this.getFieldValue('motor_3');
            motor2_pins['motor2_4'] = this.getFieldValue('motor_4');
            Blockly.Arduino.setups_['setup_motor2_'] = JST['motor2_def_setups'](motor2_pins);
            return '';
        };
 
        Blockly.Blocks.motor2 = {
            category: Educablocks.locales.getKey('LANG_CATEGORY_SALIDAS'),
            tags: ['motor2'],
            helpUrl: Educablocks.URL_LCD,

            init: function() {
                this.setColour(Educablocks.LANG_COLOUR_SALIDAS);
                this.appendDummyInput().appendField(Educablocks.locales.getKey('LANG_SALIDAS_MOTOR2')).appendField(new Blockly.FieldImage('img/blocks/22.png', 300 * options.zoom, 200 * options.zoom));
                this.appendDummyInput()
                    .appendField(Educablocks.locales.getKey('LANG_SALIDAS_MOTOR_M1P')).appendField(new Blockly.FieldTextInput('12'), 'motor_1')
                    .appendField(Educablocks.locales.getKey('LANG_SALIDAS_MOTOR_M1N')).appendField(new Blockly.FieldTextInput('11'), 'motor_2')
                    .appendField(Educablocks.locales.getKey('LANG_SALIDAS_MOTOR_M2P')).appendField(new Blockly.FieldTextInput('10'), 'motor_3')
                    .appendField(Educablocks.locales.getKey('LANG_SALIDAS_MOTOR_M2N')).appendField(new Blockly.FieldTextInput('9'), 'motor_4')
                this.setInputsInline(false);
                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setTooltip(Educablocks.locales.getKey('LANG_matriz_DEF_TOOLTIP'));
            }
        };
//motor2 definicion fin


//motor2 direccion inicio

         this["JST"]["motor2_direccion_definitions"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
              __p += 'direccion(' +
                    ((__t = (dropdown_stat)) == null ? '' : __t) +
                    ');\n';
            }
            return __p
        };

        this["JST"]["motor2_direccion"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
            __p += 'direccion(' +
                    ((__t = (dropdown_stat)) == null ? '' : __t) +
                    ');\n';
            }
            return __p
        };

  this["JST"]["motor2_setups"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
            __p += '';
            }
            return __p
        };






    Blockly.Arduino.motor2_direccion = function() {
            var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC) || '';
            var dropdown_stat = this.getFieldValue('STAT') || '';
            Blockly.Arduino.definitions_['declare_motor2_direccion'] = JST['motor2_direccion_definitions'](dropdown_stat);
            var code = '';
            var a = Educablocks.findPinMode(dropdown_pin);
            code += a['code'];
            dropdown_pin = a['pin'];

            if (Educablocks.isVariable(dropdown_pin)) {
                code += JST['motor2_setups']({
                    'dropdown_pin': dropdown_pin,
                    'dropdown_stat': dropdown_stat

                });
            } else {
                Blockly.Arduino.setups_['motor2_direccion' + dropdown_pin] = JST['motor2_setups']({
                    'dropdown_pin': dropdown_pin,
                    'dropdown_stat': dropdown_stat

                });
            }
            code += JST['motor2_direccion']({
                'dropdown_pin': dropdown_pin,
                'dropdown_stat': dropdown_stat

            });
            return code;
        };
        
        Blockly.Blocks.motor2_direccion = {
            category: Educablocks.locales.getKey('LANG_CATEGORY_SALIDAS'),
            tags: ['motor2 direccion'],
            helpUrl: Educablocks.URL_CONTINUOUS_ROTATION_SERVO,
            init: function() {
                this.setColour(Educablocks.LANG_COLOUR_SALIDAS);
                this.appendDummyInput()
                    .appendField(Educablocks.locales.getKey('LANG_motor2_direccion_estado'))
                    .appendField(new Blockly.FieldDropdown([
                        [Educablocks.locales.getKey('LANG_motor2_direccion_adelante') || 'Adelante', '0'],
                        [Educablocks.locales.getKey('LANG_motor2_direccion_atras') || 'Atras', '1'],
                        [Educablocks.locales.getKey('LANG_motor2_direccion_derecha') || 'Derecha', '2'],
                        [Educablocks.locales.getKey('LANG_motor2_direccion_izquierda') || 'Izquierda', '3'],
                    ]), 'STAT')
            this.setInputsInline(false);
                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setTooltip(Educablocks.locales.getKey('LANG_motor2_direccion_DEF_TOOLTIP'));
            }
        };*/
//segundo caras final


//motor2 direccion fin







        // Source: src/blocks/SALIDAS_photoresistor/SALIDAS_photoresistor.js
        /* global Blockly, options, JST, Educablocks */
        /* jshint sub:true */

        /**
         * SALIDAS_photoresistor code generation
         * @return {String} Code generated with block parameters
         */
        //        var code = 'analogRead(' + dropdown_pin + ')';
        Blockly.Arduino.entradas_sonido = function() {
            var dropdown_npin = this.getFieldValue('NPIN');
            var code = '';


            code += JST['entradas_sonido_sensor']({
                'dropdown_npin': dropdown_npin
            });

            return [code, Blockly.Arduino.ORDER_ATOMIC];
        };



        /**
         * SALIDAS_photoresistor block definition
         * @type {Object}
         */
        Blockly.Blocks.entradas_sonido = {
            category: Educablocks.locales.getKey('LANG_CATEGORY_ENTRADAS'),
            tags: ['sensor de sonido'],
            helpUrl: Educablocks.URL_LDR,
            /**
             * SALIDAS_photoresistor initialization
             */
            init: function() {
                this.setColour(Educablocks.LANG_COLOUR_ENTRADAS);
                this.appendDummyInput('PIN')
                    .appendField(Educablocks.locales.getKey('LANG_ENTRADAS_SONIDO'))
                    .appendField(new Blockly.FieldImage('img/blocks/01.png', 208 * options.zoom, 140 * options.zoom))
                    this.appendDummyInput('PIN2').setAlign(Blockly.ALIGN_RIGHT).appendField(Educablocks.locales.getKey('LANG_ENTRADAS_SONIDO_PIN')).appendField(new Blockly.FieldDropdown([
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN13') || 'A0', 'A0'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN12') || 'A1', 'A1'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN11') || 'A2', 'A2'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN10') || 'A3', 'A3'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN9') || 'A4', 'A4'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN8') || 'A5', 'A5']
                ]), 'NPIN');
                this.setOutput(true);
                this.setTooltip(Educablocks.locales.getKey('LANG_ENTRADAS_SONIDO_TOOLTIP'));
            }
        };

        // Source: src/blocks/SALIDAS_piezo_buzzer/SALIDAS_piezo_buzzer.js
        /* global Blockly, options, JST, Educablocks */
        /* jshint sub:true */

        /**
         * SALIDAS_piezo_buzzer code generation
         * @return {String} Code generated with block parameters
         */

        //rgb 
        Blockly.Arduino.SALIDAS_ledrgb = function() {
            var dropdown_pinrojo = this.getFieldValue('NPIN1');
            var dropdown_pinverde = this.getFieldValue('NPIN2');
            var dropdown_pinazul = this.getFieldValue('NPIN3');
            var dropdown_stat = this.getFieldValue('STAT') || '';
            Blockly.Arduino.definitions_['declare_ledrgb'] = JST['SALIDAS_ledrgb_definitions']({
                'dropdown_pinrojo': dropdown_pinrojo,
                'dropdown_pinverde': dropdown_pinverde,
                'dropdown_pinazul': dropdown_pinazul
            });
            var code = '';
            var a = Educablocks.findPinMode(dropdown_pinrojo);
            code += a['code'];
            dropdown_pinrojo = a['pin'];

            var a = Educablocks.findPinMode(dropdown_pinverde);
            code += a['code'];
            dropdown_pinverde = a['pin'];

            var a = Educablocks.findPinMode(dropdown_pinazul);
            code += a['code'];
            dropdown_pinazul = a['pin'];

           
            if (Educablocks.isVariable(dropdown_pinrojo)) {
                code += JST['SALIDAS_ledrgb_setups']({
                    'dropdown_pinrojo': dropdown_pinrojo,
                    'dropdown_pinverde': dropdown_pinverde,
                    'dropdown_pinazul': dropdown_pinazul,
                    'dropdown_stat': dropdown_stat

                });
            } else {
                Blockly.Arduino.setups_['SALIDAS_ledrgb'] = JST['SALIDAS_ledrgb_setups' ]({
                    'dropdown_pinrojo': dropdown_pinrojo,
                    'dropdown_pinverde': dropdown_pinverde,
                    'dropdown_pinazul': dropdown_pinazul,
                    'dropdown_stat': dropdown_stat
                });
            }
          
            code += JST['SALIDAS_ledrgb']({
                'dropdown_pinrojo': dropdown_pinrojo,
                'dropdown_pinverde': dropdown_pinverde,
                'dropdown_pinazul': dropdown_pinazul,
                'dropdown_stat': dropdown_stat
            });

              return code;
        };
    


        /**
         * LED RGB
         */
        Blockly.Blocks.SALIDAS_ledrgb = {
            category: Educablocks.locales.getKey('LANG_CATEGORY_SALIDAS'),
            tags: ['ledrgb'],
            helpUrl: Educablocks.URL_ledrgb,
            /**
             * LED RGB
             */
            init: function() {
                this.setColour(Educablocks.LANG_COLOUR_SALIDAS);
                this.appendDummyInput('')
                    .appendField(Educablocks.locales.getKey('LANG_SALIDAS_LEDRGB'))
                    .appendField(new Blockly.FieldImage('img/blocks/07.png', 208 * options.zoom, 140 * options.zoom));
                this.appendDummyInput('PINROJO').setAlign(Blockly.ALIGN_RIGHT).appendField(Educablocks.locales.getKey('LANG_SALIDAS_LEDRGB_PINAZUL')).appendField(new Blockly.FieldDropdown([
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN9') || '9', '9'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN6') || '6', '6'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN5') || '5', '5'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN3') || '3', '3']
                ]), 'NPIN1'); 
                this.appendDummyInput('PINVERDE').setAlign(Blockly.ALIGN_RIGHT).appendField(Educablocks.locales.getKey('LANG_SALIDAS_LEDRGB_PINAZUL')).appendField(new Blockly.FieldDropdown([
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN9') || '6', '6'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN6') || '9', '9'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN5') || '5', '5'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN3') || '3', '3']
                ]), 'NPIN2'); 
                this.appendDummyInput('PINAZUL').setAlign(Blockly.ALIGN_RIGHT).appendField(Educablocks.locales.getKey('LANG_SALIDAS_LEDRGB_PINAZUL')).appendField(new Blockly.FieldDropdown([
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN9') || '5', '5'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN6') || '9', '9'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN5') || '6', '6'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN3') || '3', '3']
                ]), 'NPIN3');    
                this.appendDummyInput('')
                    .appendField(Educablocks.locales.getKey('LANG_SALIDAS_LEDRGB_COLOR'))
                    .appendField(new Blockly.FieldDropdown([
                        [Educablocks.locales.getKey('LANG_SALIDAS_LEDRGB_ROJO') || 'ROJO', '255, 0, 0'],
                        [Educablocks.locales.getKey('LANG_SALIDAS_LEDRGB_VERDE') || 'VERDE', '0, 255, 0'],
                        [Educablocks.locales.getKey('LANG_SALIDAS_LEDRGB_AZUL') || 'AZUL', '0, 0, 255'],
                        [Educablocks.locales.getKey('LANG_SALIDAS_LEDRGB_AMARILLO') || 'AMARILLO', '255, 255, 0'],
                        [Educablocks.locales.getKey('LANG_SALIDAS_LEDRGB_VIOLETA') || 'VIOLETA', '153, 51, 255'],
                        [Educablocks.locales.getKey('LANG_SALIDAS_LEDRGB_NARANJA') || 'NARANJA', '255, 128, 0'],
                        [Educablocks.locales.getKey('LANG_SALIDAS_LEDRGB_APAGADO') || 'APAGADO', '0, 0, 0'],
                    ]), 'STAT') //523
                    .setAlign(Blockly.ALIGN_RIGHT);

                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setTooltip(Educablocks.locales.getKey('LANG_SALIDAS_LEDRGB_TOOLTIP'));
            }
        };


       
        // Source: src/blocks/SALIDAS_potentiometer/SALIDAS_potentiometer.js
        /* global Blockly, options,JST, Educablocks */
        /* jshint sub:true */

        /**
         * SALIDAS_potentiometer code generation
         * @return {String} Code generated with block parameters
         */




        

        // Source: src/blocks/bt_serial_available/bt_serial_available.js
        /* global Blockly, JST, Educablocks */
        /* jshint sub:true */

        /**
         * serial_available code generation
         * @return {String} Code generated with block parameters
        
        Blockly.Arduino.bt_serial_available = function() {
            var branch = Blockly.Arduino.statementToCode(this, 'DO');
            branch = branch.replace(/&quot;/g, '"');

            var code = JST['bt_serial_available']({
                'branch': branch
            });
            return code;
        };

        /**
         * serial_available block definition
         * @type {Object}
       
        Blockly.Blocks.bt_serial_available = {
            category: Educablocks.locales.getKey('LANG_CATEGORY_COMMUNICATION'),
            helpUrl: Educablocks.URL_BT,
            tags: ['bluetooth'],
            /**
             * bt_serial_available initialization
        
            init: function() {
                this.setColour(Educablocks.LANG_COLOUR_COMMUNICATION);
                this.appendDummyInput()
                    .appendField(Educablocks.locales.getKey('LANG_ADVANCED_BT_SERIAL_AVAILABLE'));
                this.appendStatementInput('DO')
                    .appendField(Educablocks.locales.getKey('LANG_CONTROLS_REPEAT_INPUT_DO'));
                this.setPreviousStatement(true);
                this.setNextStatement(true);
                this.setTooltip(Educablocks.locales.getKey('LANG_ADVANCED_BT_SERIAL_AVAILABLE_TOOLTIP'));
            }
        };

        // Source: src/blocks/controls_doWhile/controls_doWhile.js
        /* global Blockly, JST, Educablocks */
        /* jshint sub:true */
        /**
         * controls_doWhile code generation
         * @return {String} Code generated with block parameters
         */

        Blockly.Arduino.controls_doWhile = function() {
            // Do while/until loop.
            var argument0 = Blockly.Arduino.valueToCode(this, 'WHILE', Blockly.Arduino.ORDER_NONE) || '';
            argument0 = argument0.replace(/&quot;/g, '"');
            var branch = Blockly.Arduino.statementToCode(this, 'DO');
            branch = branch.replace(/&quot;/g, '"');
            var code = '';
            if (Blockly.Arduino.INFINITE_LOOP_TRAP) {
                branch = Blockly.Arduino.INFINITE_LOOP_TRAP.replace(/%1/g, '\'' + this.id + '\'') + branch;
                // branch = branch.substring(0, branch.length - 2);
            }
            // branch=branch.replace(/&amp;/g, '');
            if (this.getFieldValue('MODE') === 'UNTIL') {
                if (!argument0.match(/^\w+$/)) {
                    argument0 = '(' + argument0 + ')';
                }
                argument0 = '!' + argument0;
            }
            code += JST['controls_doWhile']({
                'argument0': argument0,
                'branch': branch
            });
            return code;
        };
        Blockly.Blocks.controls_doWhile = {
            // Do/while loop.
            category: Educablocks.locales.getKey('LANG_CATEGORY_CONTROLS'),
            // helpUrl: Educablocks.URL_DOWHILE,
            init: function() {
                this.setColour(Educablocks.LANG_COLOUR_CONTROL);
                this.appendStatementInput('DO').appendField(Educablocks.locales.getKey('LANG_CONTROLS_DOWHILE_OPERATOR_DO'));
                this.appendValueInput('WHILE').setCheck(Boolean).appendField(Educablocks.locales.getKey('LANG_CONTROLS_WHILEUNTIL_TITLE_REPEAT')).appendField(new Blockly.FieldDropdown([
                    [Educablocks.locales.getKey('LANG_CONTROLS_WHILEUNTIL_OPERATOR_WHILE'), 'WHILE'],
                    [Educablocks.locales.getKey('LANG_CONTROLS_WHILEUNTIL_OPERATOR_UNTIL'), 'UNTIL']
                ]), 'MODE');
                // this.appendValueInput('WHILE').setCheck(Boolean).appendField(Educablocks.locales.getKey('LANG_CONTROLS_DOWHILE_OPERATOR_WHILE'));
                this.setPreviousStatement(true);
                this.setNextStatement(true);
                this.setTooltip(Educablocks.locales.getKey('LANG_CONTROLS_DOWHILE_TOOLTIP'));
            }
        };

        // Source: src/blocks/controls_execute/controls_execute.js
        /* global Blockly, profiles, JST, Educablocks */
        /* jshint sub:true */
        /**
         * controls_execute code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.controls_execute = function() {
            var content = Blockly.Arduino.valueToCode(this, 'CONTENT', Blockly.Arduino.ORDER_ATOMIC);
            var code = '';
            content = content.replace(/^"/, '');
            content = content.replace(/"$/g, '');
            if (content.match(/^#include /)) {
                var include_code = JST['controls_execute']({
                    'content': content
                });
                if ('define_include' in Blockly.Arduino.definitions_) {
                    Blockly.Arduino.definitions_['define_include'] += include_code;
                } else {
                    Blockly.Arduino.definitions_['define_include'] = include_code;
                }
            } else {
                code += JST['controls_execute']({
                    'content': content
                });
            }
            return code;
        };
        /**
         * control_execute block definition
         * @type {Object}
         */
        Blockly.Blocks.controls_execute = {
            category: Educablocks.locales.getKey('LANG_CATEGORY_CONTROLS'),
            // helpUrl: Educablocks.URL_SERIE,
            /**
             * controls_execute initialization
             */
            init: function() {
                this.setColour(Educablocks.LANG_COLOUR_CONTROL);
                this.appendValueInput('CONTENT', String).appendField(Educablocks.locales.getKey('LANG_CONTROLS_EXECUTE'));
                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setTooltip(Educablocks.locales.getKey('LANG_CONTROLS_EXECUTE_TOOLTIP'));
            }
        };

        // Source: src/blocks/controls_flow_statements/controls_flow_statements.js
        /* global Blockly, Educablocks */
        /* jshint sub:true */

        /**
         * controls_flow_statements code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.controls_flow_statements = function() {
            // Flow statements: continue, break.
            switch (this.getFieldValue('FLOW')) {
                case 'BREAK':
                    return 'break;\n';
                case 'CONTINUE':
                    return 'continue;\n';
            }
            throw 'Unknown flow statement.';
        };


        Blockly.Blocks.controls_flow_statements = {
            // Flow statements: continue, break.
            category: Educablocks.locales.getKey('LANG_CATEGORY_CONTROLS'),
            helpUrl: Educablocks.URL_FLOW_STATEMENTS,
            init: function() {
                this.setColour(Educablocks.LANG_COLOUR_CONTROL);
                var dropdown = new Blockly.FieldDropdown(
                    [
                        [Educablocks.locales.getKey('LANG_CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK') || 'BREAK', 'BREAK'],
                        [Educablocks.locales.getKey('LANG_CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE') || 'CONTINUE', 'CONTINUE']
                    ]);
                this.appendDummyInput()
                    .appendField(dropdown, 'FLOW')
                    .appendField(Educablocks.locales.getKey('LANG_CONTROLS_FLOW_STATEMENTS_INPUT_OFLOOP'));
                this.setPreviousStatement(true);
                // Assign 'this' to a variable for use in the tooltip closure below.
                var thisBlock = this;
                this.setTooltip(function() {
                    var op = thisBlock.getFieldValue('FLOW');
                    return Blockly.Blocks.controls_flow_statements.TOOLTIPS[op];
                });
            },
            onchange: function() {
                if (!this.workspace) {
                    // Block has been deleted.
                    return;
                }
                var legal = false;
                // Is the block nested in a control statement?
                var block = this;
                do {
                    if (block.type === 'controls_repeat' ||
                        block.type === 'controls_forEach' ||
                        block.type === 'controls_for' ||
                        block.type === 'controls_whileUntil') {
                        legal = true;
                        break;
                    }
                    block = block.getSurroundParent();
                } while (block);
                if (legal) {
                    this.setWarningText(null);
                } else {
                    try {
                        this.setWarningText(Educablocks.locales.getKey('LANG_CONTROLS_FLOW_STATEMENTS_WARNING'));
                    } catch (err) {
                        console.log('Captured error: ', err);
                    }
                }
            }
        };

        Blockly.Blocks.controls_flow_statements.TOOLTIPS = {
            BREAK: Educablocks.locales.getKey('LANG_CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK'),
            CONTINUE: Educablocks.locales.getKey('LANG_CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE')
        };

        // Source: src/blocks/controls_for/controls_for.js
        /* global Blockly, Educablocks */
        /* jshint sub:true */
        /**
         * controls_for code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.controls_for = function() {
            var variable0 = Blockly.Arduino.valueToCode(this, 'VAR', Blockly.Arduino.ORDER_NONE) || '';
            var argument0 = Blockly.Arduino.valueToCode(this, 'FROM', Blockly.Arduino.ORDER_ASSIGNMENT) || '';
            var argument1 = Blockly.Arduino.valueToCode(this, 'TO', Blockly.Arduino.ORDER_ASSIGNMENT) || '';
            var branch = Blockly.Arduino.statementToCode(this, 'DO');
            if (Blockly.Arduino.INFINITE_LOOP_TRAP) {
                branch = Blockly.Arduino.INFINITE_LOOP_TRAP.replace(/%1/g, '\'' + this.id + '\'') + branch;
            }

            var code = '';
            var a = Educablocks.findPinMode(variable0);
            code += a['code'];
            variable0 = a['pin'];

            a = Educablocks.findPinMode(argument0);
            code += a['code'];
            argument0 = a['pin'];

            a = Educablocks.findPinMode(argument1);
            code += a['code'];
            argument1 = a['pin'];

            var up = parseFloat(argument0) <= parseFloat(argument1);
            code += 'for (' + variable0 + ' = ' + argument0 + '; ' + variable0 + (up ? ' <= ' : ' >= ') + argument1 + '; ' + variable0 + (up ? '++' : '--') + ') {\n' + branch + '}\n';
            return code;
        };
        Blockly.Blocks.controls_for = {
            // For loop.
            category: Educablocks.locales.getKey('LANG_CATEGORY_CONTROLS'),
            helpUrl: Educablocks.URL_FOR,
            init: function() {
                this.setColour(Educablocks.LANG_COLOUR_CONTROL);
                this.appendValueInput('VAR').appendField(Educablocks.locales.getKey('LANG_CONTROLS_FOR_INPUT_WITH'));
                // .appendField(new Blockly.FieldVariable(' '), 'VAR');
                this.appendValueInput('FROM').setCheck(Number).setAlign(Blockly.ALIGN_RIGHT).appendField(Educablocks.locales.getKey('LANG_CONTROLS_FOR_INPUT_FROM'));
                this.appendValueInput('TO').setCheck(Number).setAlign(Blockly.ALIGN_RIGHT).appendField(Educablocks.locales.getKey('LANG_CONTROLS_FOR_INPUT_TO'));
                this.appendStatementInput('DO').appendField(Educablocks.locales.getKey('LANG_CONTROLS_FOR_INPUT_DO'));
                this.setPreviousStatement(true);
                this.setNextStatement(true);
                this.setInputsInline(true);
                // Assign 'this' to a variable for use in the tooltip closure below.
                var thisBlock = this;
                this.setTooltip(function() {
                    return Educablocks.LANG_CONTROLS_FOR_TOOLTIP.replace('%1', thisBlock.getFieldValue('VAR'));
                });
            },
            getVars: function() {
                return [this.getFieldValue('VAR')];
            },
            getVariables: function() {
                var variables = Blockly.Variables.allVariables();
                var dropdown = [];
                if (variables.length > 0) {
                    for (var i in variables) {
                        dropdown.push([variables[i], variables[i]]);
                    }
                } else {
                    dropdown.push(['', '']);
                }
                return dropdown;
            },
            isVariable: function(varValue) {
                for (var i in Blockly.Variables.allVariables()) {
                    if (Blockly.Variables.allVariables()[i] === varValue) {
                        return true;
                    }
                }
                return false;
            },
            onchange: function() {
                try {
                    if (this.isVariable(Blockly.Arduino.valueToCode(this, 'FROM', Blockly.Arduino.ORDER_ATOMIC))) {
                        this.setWarningText(Educablocks.locales.getKey('LANG_CONTROLS_FOR_FROM_WARNING'));
                    } else if (this.isVariable(Blockly.Arduino.valueToCode(this, 'TO', Blockly.Arduino.ORDER_ATOMIC))) {
                        this.setWarningText(Educablocks.locales.getKey('LANG_CONTROLS_FOR_TO_WARNING'));
                    } else {
                        this.setWarningText(null);
                    }
                } catch (e) {}


                // if (!this.workspace) {
                //     // Block has been deleted.
                //     return;
                // }
                // if (!this.last_variables){
                //     this.last_variables=Blockly.Variables.allVariables();
                // }
                // var variables=Blockly.Variables.allVariables();
                // for (var i in variables){
                //     if (Blockly.Variables.allVariables()[i]!==this.last_variables[i]){
                //         try{
                //             this.removeInput('DUMMY');
                //             this.removeInput('FROM');
                //             this.removeInput('TO');
                //             this.removeInput('DO');
                //             this.appendDummyInput('DUMMY')
                //                 .appendField(Educablocks.locales.getKey('LANG_CONTROLS_FOR_INPUT_WITH'))
                //                 .appendField(new Blockly.FieldDropdown(this.getVariables()), 'VAR');
                //             this.appendValueInput('FROM')
                //                 .setCheck(Number)
                //                 .setAlign(Blockly.ALIGN_RIGHT)
                //                 .appendField(Educablocks.locales.getKey('LANG_CONTROLS_FOR_INPUT_FROM'));
                //             this.appendValueInput('TO')
                //                 .setCheck(Number)
                //                 .setAlign(Blockly.ALIGN_RIGHT)
                //                 .appendField(Educablocks.locales.getKey('LANG_CONTROLS_FOR_INPUT_TO'));
                //             this.appendStatementInput('DO')
                //                 .appendField(Educablocks.locales.getKey('LANG_CONTROLS_FOR_INPUT_DO'));
                //         }catch(e){}
                //         this.last_variables=Blockly.Variables.allVariables();
                //     }
                // }
                // try {
                //     if (!this.exists()) {
                //         this.setWarningText(Educablocks.locales.getKey('LANG_VARIABLES_CALL_WITHOUT_DEFINITION'));
                //     } else {
                //         this.setWarningText(null);
                //     }
                // } catch (e) {}
            },
            renameVar: function(oldName, newName) {
                if (Blockly.Names.equals(oldName, this.getFieldValue('VAR'))) {
                    this.setTitleValue(newName, 'VAR');
                }
            },
            // exists: function() {
            //     console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaa', Blockly.Variables.allVariables(), this.getFieldValue('VAR'));
            //     if (this.getFieldValue('VAR') === ' ') {
            //         return false;
            //     }
            //     for (var i in Blockly.Variables.allVariables()) {
            //         if (Blockly.Variables.allVariables()[i] === this.getFieldValue('VAR')) {
            //             console.log('controls_for, variable!', this.getFieldValue('VAR'), Blockly.Variables.allVariables()[i]);
            //             return true;
            //         }
            //     }
            //     return false;
            // }
        };
        // Source: src/blocks/controls_if/controls_if.js
        /* global Blockly, JST,  Educablocks */
        /* jshint sub:true */

        /**
         * controls_if code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.controls_if = function() {
            // If/elseif/else condition.
            var n = 0;
            var argument = Blockly.Arduino.valueToCode(this, 'IF' + n, Blockly.Arduino.ORDER_NONE);
            argument = argument.replace(/&quot;/g, '"');

            var branch = Blockly.Arduino.statementToCode(this, 'DO' + n);

            var code = '';
            var a = Educablocks.findPinMode(argument);
            code += a['code'];
            argument = a['pin'];

            code += JST['controls_if']({
                'argument': argument,
                'branch': branch
            });


            for (n = 1; n <= this.elseifCount_; n++) {
                argument = Blockly.Arduino.valueToCode(this, 'IF' + n, Blockly.Arduino.ORDER_NONE);
                branch = Blockly.Arduino.statementToCode(this, 'DO' + n);
                // branch=branch.replace(/&amp;/g, '');

                code += JST['controls_elseif']({
                    'argument': argument,
                    'branch': branch
                });
            }
            if (this.elseCount_) {
                branch = Blockly.Arduino.statementToCode(this, 'ELSE');
                // branch=branch.replace(/&amp;/g, '');

                code += JST['controls_else']({
                    'argument': argument,
                    'branch': branch
                });
            }
            branch = branch.replace(/&quot;/g, '"');
            code = code.replace(/&quot;/g, '"');

            return code + '\n';
        };

        /**
         * controls_if block definition
         * @type {Object}
         */
        Blockly.Blocks.controls_if = {
            category: Educablocks.locales.getKey('LANG_CATEGORY_CONTROLS'),
            helpUrl: Educablocks.URL_IF,
            init: function() {
                this.setColour(Educablocks.LANG_COLOUR_CONTROL);
                this.appendValueInput('IF0')
                    .setCheck(Boolean)
                    .appendField(Educablocks.locales.getKey('LANG_CONTROLS_IF_MSG_IF'));
                this.appendStatementInput('DO0')
                    .appendField(Educablocks.locales.getKey('LANG_CONTROLS_IF_MSG_THEN'))
                    .setAlign(Blockly.ALIGN_RIGHT);
                this.setPreviousStatement(true);
                this.setNextStatement(true);
                this.setMutator(new Blockly.Mutator(['controls_if_elseif',
                    'controls_if_else'
                ]));
                // Assign 'this' to a variable for use in the tooltip closure below.
                var thisBlock = this;
                this.setTooltip(function() {
                    if (!thisBlock.elseifCount_ && !thisBlock.elseCount_) {
                        return Educablocks.locales.getKey('LANG_CONTROLS_IF_TOOLTIP_1');
                    } else if (!thisBlock.elseifCount_ && thisBlock.elseCount_) {
                        return Educablocks.locales.getKey('LANG_CONTROLS_IF_TOOLTIP_2');
                    } else if (thisBlock.elseifCount_ && !thisBlock.elseCount_) {
                        return Educablocks.locales.getKey('LANG_CONTROLS_IF_TOOLTIP_3');
                    } else if (thisBlock.elseifCount_ && thisBlock.elseCount_) {
                        return Educablocks.locales.getKey('LANG_CONTROLS_IF_TOOLTIP_4');
                    }
                    return '';
                });
                this.elseifCount_ = 0;
                this.elseCount_ = 0;
            },
            mutationToDom: function() {
                if (!this.elseifCount_ && !this.elseCount_) {
                    return null;
                }
                var container = document.createElement('mutation');
                if (this.elseifCount_) {
                    container.setAttribute('elseif', this.elseifCount_);
                }
                if (this.elseCount_) {
                    container.setAttribute('else', 1);
                }
                return container;
            },
            domToMutation: function(xmlElement) {
                this.elseifCount_ = window.parseInt(xmlElement.getAttribute('elseif'), 10);
                this.elseCount_ = window.parseInt(xmlElement.getAttribute('else'), 10);
                for (var x = 1; x <= this.elseifCount_; x++) {
                    this.appendValueInput('IF' + x)
                        .setCheck(Boolean)
                        .appendField(Educablocks.locales.getKey('LANG_CONTROLS_IF_MSG_ELSEIF'));
                    this.appendStatementInput('DO' + x)
                        .appendField(Educablocks.locales.getKey('LANG_CONTROLS_IF_MSG_THEN'))
                        .setAlign(Blockly.ALIGN_RIGHT);
                }
                if (this.elseCount_) {
                    this.appendStatementInput('ELSE')
                        .appendField(Educablocks.locales.getKey('LANG_CONTROLS_IF_MSG_ELSE'))
                        .setAlign(Blockly.ALIGN_RIGHT);
                }
            },
            decompose: function(workspace) {
                var containerBlock = Blockly.Block.obtain(workspace, 'controls_if_if');
                containerBlock.initSvg();
                var connection = containerBlock.getInput('STACK').connection;
                for (var x = 1; x <= this.elseifCount_; x++) {
                    var elseifBlock = Blockly.Block.obtain(workspace, 'controls_if_elseif');
                    elseifBlock.initSvg();
                    connection.connect(elseifBlock.previousConnection);
                    connection = elseifBlock.nextConnection;
                }
                if (this.elseCount_) {
                    var elseBlock = Blockly.Block.obtain(workspace, 'controls_if_else');
                    elseBlock.initSvg();
                    connection.connect(elseBlock.previousConnection);
                }
                return containerBlock;
            },
            compose: function(containerBlock) {
                // Disconnect the else input blocks and remove the inputs.
                if (this.elseCount_) {
                    this.removeInput('ELSE');
                }
                this.elseCount_ = 0;
                // Disconnect all the elseif input blocks and remove the inputs.
                for (var x = this.elseifCount_; x > 0; x--) {
                    this.removeInput('IF' + x);
                    this.removeInput('DO' + x);
                }
                this.elseifCount_ = 0;
                // Rebuild the block's optional inputs.
                var clauseBlock = containerBlock.getInputTargetBlock('STACK');
                while (clauseBlock) {
                    switch (clauseBlock.type) {
                        case 'controls_if_elseif':
                            this.elseifCount_++;
                            var ifInput = this.appendValueInput('IF' + this.elseifCount_)
                                .setCheck(Boolean)
                                .appendField(Educablocks.locales.getKey('LANG_CONTROLS_IF_MSG_ELSEIF'));
                            var doInput = this.appendStatementInput('DO' + this.elseifCount_);
                            doInput.appendField(Educablocks.locales.getKey('LANG_CONTROLS_IF_MSG_THEN'))
                                .setAlign(Blockly.ALIGN_RIGHT);
                            // Reconnect any child blocks.
                            if (clauseBlock.valueConnection_) {
                                ifInput.connection.connect(clauseBlock.valueConnection_);
                            }
                            if (clauseBlock.statementConnection_) {
                                doInput.connection.connect(clauseBlock.statementConnection_);
                            }
                            break;
                        case 'controls_if_else':
                            this.elseCount_++;
                            var elseInput = this.appendStatementInput('ELSE');
                            elseInput.appendField(Educablocks.locales.getKey('LANG_CONTROLS_IF_MSG_ELSE'))
                                .setAlign(Blockly.ALIGN_RIGHT);
                            // Reconnect any child blocks.
                            if (clauseBlock.statementConnection_) {
                                elseInput.connection.connect(clauseBlock.statementConnection_);
                            }
                            break;
                        default:
                            throw 'Unknown block type.';
                    }
                    clauseBlock = clauseBlock.nextConnection &&
                        clauseBlock.nextConnection.targetBlock();
                }
            },
            saveConnections: function(containerBlock) {
                // Store a pointer to any connected child blocks.
                var clauseBlock = containerBlock.getInputTargetBlock('STACK');
                var x = 1;
                while (clauseBlock) {
                    switch (clauseBlock.type) {
                        case 'controls_if_elseif':
                            var inputIf = this.getInput('IF' + x);
                            var inputDo = this.getInput('DO' + x);
                            clauseBlock.valueConnection_ =
                                inputIf && inputIf.connection.targetConnection;
                            clauseBlock.statementConnection_ =
                                inputDo && inputDo.connection.targetConnection;
                            x++;
                            break;
                        case 'controls_if_else':
                            inputDo = this.getInput('ELSE');
                            clauseBlock.statementConnection_ =
                                inputDo && inputDo.connection.targetConnection;
                            break;
                        default:
                            throw 'Unknown block type.';
                    }
                    clauseBlock = clauseBlock.nextConnection &&
                        clauseBlock.nextConnection.targetBlock();
                }
            }
        };

        Blockly.Blocks.controls_if_if = {
            // If condition.
            init: function() {
                this.setColour(Educablocks.LANG_COLOUR_CONTROL);
                this.appendDummyInput()
                    .appendField(Educablocks.locales.getKey('LANG_CONTROLS_IF_IF_Field_IF'))
                    .setAlign(Blockly.ALIGN_RIGHT);
                this.appendStatementInput('STACK');
                this.setTooltip(Educablocks.locales.getKey('LANG_CONTROLS_IF_IF_TOOLTIP'));
                this.contextMenu = false;
            }
        };

        Blockly.Blocks.controls_if_elseif = {
            // Else-If condition.
            init: function() {
                this.setColour(Educablocks.LANG_COLOUR_CONTROL);
                this.appendDummyInput()
                    .appendField(Educablocks.locales.getKey('LANG_CONTROLS_IF_ELSEIF_Field_ELSEIF'))
                    .setAlign(Blockly.ALIGN_RIGHT);
                this.setPreviousStatement(true);
                this.setNextStatement(true);
                this.setTooltip(Educablocks.locales.getKey('LANG_CONTROLS_IF_ELSEIF_TOOLTIP'));
                this.contextMenu = false;
            }
        };

        Blockly.Blocks.controls_if_else = {
            // Else condition.
            init: function() {
                this.setColour(Educablocks.LANG_COLOUR_CONTROL);
                this.appendDummyInput()
                    .appendField(Educablocks.locales.getKey('LANG_CONTROLS_IF_ELSE_Field_ELSE'))
                    .setAlign(Blockly.ALIGN_RIGHT);
                this.setPreviousStatement(true);
                this.setTooltip(Educablocks.locales.getKey('LANG_CONTROLS_IF_ELSE_TOOLTIP'));
                this.contextMenu = false;
            }
        };



        // Source: src/blocks/controls_setupLoop/controls_setupLoop.js
        /* global Blockly, JST, Educablocks */
        /* jshint sub:true */
        /**
         * controls_setup code generation
         * @return {String} Code generated with block parameters
         */

        Blockly.Arduino.controls_setupLoop = function() {
            // Add statements to setup.
            var branch = Blockly.Arduino.statementToCode(this, 'SETUP');
            branch = branch.replace(/&quot;/g, '"');

            Blockly.Arduino.setups_['X_SETUP'] = JST['controls_setupLoop']({
                'branch': branch
            });

            var content = Blockly.Arduino.statementToCode(this, 'LOOP');
            content = content.replace(/&quot;/g, '"');
            content = JST['controls_setupLoop']({
                'branch': content
            });
            return content;
        };
        Blockly.Blocks.controls_setupLoop = {
            // Setup statements.
            category: Educablocks.locales.getKey('LANG_CATEGORY_CONTROLS'),
            // helpUrl: Educablocks.URL_SETUP,
            init: function() {
                this.setColour(Educablocks.LANG_COLOUR_CONTROL);
                this.appendStatementInput('SETUP').appendField(Educablocks.locales.getKey('LANG_CONTROLS_SETUP_LOOP_SETUP_TITLE'));
                this.appendStatementInput('LOOP').appendField(Educablocks.locales.getKey('LANG_CONTROLS_SETUP_LOOP_LOOP_TITLE'));
                this.setPreviousStatement(false);
                this.setNextStatement(false);
                this.setTooltip(Educablocks.locales.getKey('LANG_CONTROLS_SETUP_LOOP_TOOLTIP'));
            }
        };

        // Source: src/blocks/controls_switch/controls_switch.js
        /* global Blockly, Educablocks */
        /* jshint sub:true */

        /**
         * controls_switch code generation
         * @return {String} Code generated with block parameters
         */
        var indentSentences = function(sentences) {
            var splitted_sentences = sentences.split('\n');
            var final_sentences = '';
            for (var i in splitted_sentences) {
                final_sentences += '  ' + splitted_sentences[i] + '\n';
            }
            return final_sentences;
        };

        Blockly.Arduino.controls_switch = function() {
            // switch condition.
            var n = 0;
            var argument = Blockly.Arduino.valueToCode(this, 'IF0',
                Blockly.Arduino.ORDER_NONE) || '';
            var branch = Blockly.Arduino.statementToCode(this, 'DO' + n);
            branch = indentSentences(branch);
            // branch=branch.replace(/&amp;/g, '');

            var code = '';
            var a = Educablocks.findPinMode(argument);
            code += a['code'];
            argument = a['pin'];

            code += 'switch (' + argument + ')\n{';
            for (n = 1; n <= this.switchCount_; n++) {
                argument = Blockly.Arduino.valueToCode(this, 'SWITCH' + n, Blockly.Arduino.ORDER_NONE) || '';
                branch = Blockly.Arduino.statementToCode(this, 'DO' + n);
                branch = indentSentences(branch);
                branch = branch.substring(0, branch.length - 1);
                // branch=branch.replace(/&amp;/g, '');

                code += ' \n  case ' + argument + ': \n  {\n' + branch + '  break;\n  }';
            }
            if (this.defaultCount_) {
                branch = Blockly.Arduino.statementToCode(this, 'DEFAULT');
                branch = indentSentences(branch);
                branch = branch.substring(0, branch.length - 1);
                // branch=branch.replace(/&amp;/g, '');

                code += '  \n  default:\n  {\n' + branch + '}';
            }
            return code + '\n}\n';
        };


        Blockly.Blocks.controls_switch = {
            // switch condition.
            category: Educablocks.locales.getKey('LANG_CATEGORY_CONTROLS'),
            helpUrl: Educablocks.URL_SWITCH,
            init: function() {
                this.setColour(Educablocks.LANG_COLOUR_CONTROL);
                this.appendValueInput('IF0')
                    .setCheck(Boolean)
                    .appendField(Educablocks.locales.getKey('LANG_CONTROLS_SWITCH'))
                    .setAlign(Blockly.ALIGN_RIGHT);
                this.setPreviousStatement(true);
                this.setNextStatement(true);
                this.setMutator(new Blockly.Mutator(['controls_switch_case', 'controls_switch_default']));
                // Assign 'this' to a variable for use in the tooltip closure below.
                var thisBlock = this;
                this.setTooltip(function() {
                    if (!thisBlock.switchCount_ && !thisBlock.defaultCount_) {
                        return Educablocks.locales.getKey('LANG_CONTROLS_SWITCH_TOOLTIP_1');
                    } else if (!thisBlock.switchCount_ && thisBlock.defaultCount_) {
                        return Educablocks.locales.getKey('LANG_CONTROLS_SWITCH_TOOLTIP_2');
                    } else if (thisBlock.switchCount_ && !thisBlock.defaultCount_) {
                        return Educablocks.locales.getKey('LANG_CONTROLS_SWITCH_TOOLTIP_3');
                    } else if (thisBlock.switchCount_ && thisBlock.defaultCount_) {
                        return Educablocks.locales.getKey('LANG_CONTROLS_SWITCH_TOOLTIP_4');
                    }
                    return '';
                });
                this.defaultCount_ = 0;
            },
            mutationToDom: function() {
                if (!this.switchCount_ && !this.defaultCount_) {
                    return null;
                }
                var container = document.createElement('mutation');
                if (this.switchCount_) {
                    container.setAttribute('case', this.switchCount_);
                }
                if (this.defaultCount_) {
                    container.setAttribute('default', 1);
                }
                return container;
            },
            domToMutation: function(xmlElement) {
                this.switchCount_ = window.parseInt(xmlElement.getAttribute('case'), 10);
                this.defaultCount_ = window.parseInt(xmlElement.getAttribute('default'), 10);
                for (var x = 1; x <= this.switchCount_; x++) {
                    this.appendValueInput('SWITCH' + x)
                        .setCheck(Number)
                        .appendField(Educablocks.locales.getKey('LANG_CONTROLS_SWITCH_CASE'))
                        .setAlign(Blockly.ALIGN_RIGHT);
                    this.setInputsInline(true);
                    this.appendStatementInput('DO' + x)
                        .appendField(Educablocks.locales.getKey('LANG_CONTROLS_IF_MSG_THEN'))
                        .setAlign(Blockly.ALIGN_RIGHT);
                }
                if (this.defaultCount_) {
                    this.appendStatementInput('DEFAULT')
                        .appendField(Educablocks.locales.getKey('LANG_CONTROLS_SWITCH_DEFAULT'))
                        .setAlign(Blockly.ALIGN_RIGHT);
                }
            },
            decompose: function(workspace) {
                var containerBlock = Blockly.Block.obtain(workspace, 'controls_switch_switch');
                containerBlock.initSvg();
                var connection = containerBlock.getInput('STACK').connection;
                for (var x = 1; x <= this.switchCount_; x++) {
                    var switchBlock = Blockly.Block.obtain(workspace, 'controls_switch_case');
                    switchBlock.initSvg();
                    connection.connect(switchBlock.previousConnection);
                    connection = switchBlock.nextConnection;
                }
                if (this.defaultCount_) {
                    var defaultBlock = Blockly.Block.obtain(workspace, 'controls_switch_default');
                    defaultBlock.initSvg();
                    connection.connect(defaultBlock.previousConnection);
                }
                return containerBlock;
            },
            compose: function(containerBlock) {
                // Disconnect the switch blocks and remove the inputs.
                if (this.defaultCount_) {
                    this.removeInput('DEFAULT');
                }
                this.defaultCount_ = 0;
                // Disconnect all the switch input blocks and remove the inputs.
                for (var x = this.switchCount_; x > 0; x--) {
                    this.removeInput('SWITCH' + x);
                    this.removeInput('DO' + x);
                }
                this.switchCount_ = 0;
                // Rebuild the block's optional inputs.
                var clauseBlock = containerBlock.getInputTargetBlock('STACK');
                while (clauseBlock) {
                    switch (clauseBlock.type) {
                        case 'controls_switch_case':
                            this.switchCount_++;
                            var case_lang;
                            if (this.switchCount_ === 1) {
                                case_lang = Educablocks.locales.getKey('LANG_CONTROLS_SWITCH_IS');
                            } else {
                                case_lang = Educablocks.locales.getKey('LANG_CONTROLS_SWITCH_CASE');
                            }
                            var switchInput = this.appendValueInput('SWITCH' + this.switchCount_)
                                .setCheck(Number)
                                .appendField(case_lang)
                                .setAlign(Blockly.ALIGN_RIGHT);
                            this.setInputsInline(true);

                            var doInput = this.appendStatementInput('DO' + this.switchCount_);
                            doInput.appendField(Educablocks.locales.getKey('LANG_CONTROLS_SWITCH_DO'))
                                .setAlign(Blockly.ALIGN_RIGHT);
                            // Reconnect any child blocks.
                            if (clauseBlock.valueConnection_) {
                                switchInput.connection.connect(clauseBlock.valueConnection_);
                            }
                            if (clauseBlock.statementConnection_) {
                                doInput.connection.connect(clauseBlock.statementConnection_);
                            }
                            break;
                        case 'controls_switch_default':
                            this.defaultCount_++;
                            var defaultInput = this.appendStatementInput('DEFAULT');
                            defaultInput.appendField(Educablocks.locales.getKey('LANG_CONTROLS_SWITCH_DEFAULT'))
                                .setAlign(Blockly.ALIGN_RIGHT);
                            // Reconnect any child blocks.
                            if (clauseBlock.statementConnection_) {
                                defaultInput.connection.connect(clauseBlock.statementConnection_);
                            }
                            break;
                        default:
                            throw 'Unknown block type.';
                    }
                    clauseBlock = clauseBlock.nextConnection && clauseBlock.nextConnection.targetBlock();
                }
            },
            saveConnections: function(containerBlock) {
                // Store a pointer to any connected child blocks.
                var clauseBlock = containerBlock.getInputTargetBlock('STACK');
                var x = 1;
                while (clauseBlock) {
                    switch (clauseBlock.type) {
                        case 'controls_switch_case':
                            var inputSwitch = this.getInput('SWITCH' + x);
                            var inputDo = this.getInput('DO' + x);
                            clauseBlock.valueConnection_ =
                                inputSwitch && inputSwitch.connection.targetConnection;
                            clauseBlock.statementConnection_ =
                                inputDo && inputDo.connection.targetConnection;
                            x++;
                            break;
                        case 'controls_switch_default':
                            inputDo = this.getInput('DEFAULT');
                            clauseBlock.statementConnection_ =
                                inputDo && inputDo.connection.targetConnection;
                            break;
                        default:
                            throw 'Unknown block type.';
                    }
                    clauseBlock = clauseBlock.nextConnection && clauseBlock.nextConnection.targetBlock();
                }
            }
        };


        Blockly.Blocks.controls_switch_switch = {
            // If condition.
            init: function() {
                this.setColour(Educablocks.LANG_COLOUR_CONTROL);
                this.appendDummyInput()
                    .appendField(Educablocks.locales.getKey('LANG_CONTROLS_SWITCH'))
                    .setAlign(Blockly.ALIGN_RIGHT);
                this.appendStatementInput('STACK');
                this.setTooltip('Switch');
                this.contextMenu = false;
            }
        };

        Blockly.Blocks.controls_switch_case = {
            // case condition.
            init: function() {
                this.setColour(Educablocks.LANG_COLOUR_CONTROL);
                this.appendDummyInput()
                    .appendField(Educablocks.locales.getKey('LANG_CONTROLS_SWITCH_CASE'))
                    .setAlign(Blockly.ALIGN_RIGHT);
                this.setPreviousStatement(true);
                this.setNextStatement(true);
                this.setTooltip('Switch case');
                this.contextMenu = false;
            }
        };

        Blockly.Blocks.controls_switch_default = {
            // default condition.
            init: function() {
                this.setColour(Educablocks.LANG_COLOUR_CONTROL);
                this.appendDummyInput()
                    .appendField(Educablocks.locales.getKey('LANG_CONTROLS_SWITCH_DEFAULT'))
                    .setAlign(Blockly.ALIGN_RIGHT);
                this.setPreviousStatement(true);
                this.setTooltip('Switch default');
                this.contextMenu = false;
            }
        };
        // Source: src/blocks/controls_whileUntil/controls_whileUntil.js
        /* global Blockly, JST, Educablocks */
        /* jshint sub:true */
        /**
         * controls_whileUntil code generation
         * @return {String} Code generated with block parameters
         */

        Blockly.Arduino.controls_whileUntil = function() {
            // Do while/until loop.
            var argument0 = Blockly.Arduino.valueToCode(this, 'BOOL', Blockly.Arduino.ORDER_NONE) || '';
            argument0 = argument0.replace(/&quot;/g, '"');
            var branch = Blockly.Arduino.statementToCode(this, 'DO');
            branch = branch.replace(/&quot;/g, '"');

            var code = '';
            var a = Educablocks.findPinMode(argument0);
            code += a['code'];
            argument0 = a['pin'];

            if (Blockly.Arduino.INFINITE_LOOP_TRAP) {
                branch = Blockly.Arduino.INFINITE_LOOP_TRAP.replace(/%1/g, '\'' + this.id + '\'') + branch;
                // branch = branch.substring(0, branch.length - 2);
            }
            // branch=branch.replace(/&amp;/g, '');

            if (this.getFieldValue('MODE') === 'UNTIL') {
                if (!argument0.match(/^\w+$/)) {
                    argument0 = '(' + argument0 + ')';
                }
                argument0 = '!' + argument0;
            }
            code += JST['controls_whileUntil']({
                'argument0': argument0,
                'branch': branch
            });
            return code;
        };
        Blockly.Blocks.controls_whileUntil = {
            // Do while/until loop.
            category: Educablocks.locales.getKey('LANG_CATEGORY_CONTROLS'),
            helpUrl: Educablocks.URL_WHILE,
            init: function() {
                this.setColour(Educablocks.LANG_COLOUR_CONTROL);
                this.appendValueInput('BOOL').setCheck(Boolean).appendField(Educablocks.locales.getKey('LANG_CONTROLS_WHILEUNTIL_TITLE_REPEAT')).appendField(new Blockly.FieldDropdown([
                    [Educablocks.locales.getKey('LANG_CONTROLS_WHILEUNTIL_OPERATOR_WHILE'), 'WHILE'],
                    [Educablocks.locales.getKey('LANG_CONTROLS_WHILEUNTIL_OPERATOR_UNTIL'), 'UNTIL']
                ]), 'MODE');
                this.appendStatementInput('DO').appendField(Educablocks.locales.getKey('LANG_CONTROLS_WHILEUNTIL_INPUT_DO'));
                this.setPreviousStatement(true);
                this.setNextStatement(true);
                // Assign 'this' to a variable for use in the tooltip closure below.
                var thisBlock = this;
                this.setTooltip(function() {
                    var op = thisBlock.getFieldValue('MODE');
                    return Blockly.Blocks.controls_whileUntil.TOOLTIPS[op];
                });
            }
        };
        Blockly.Blocks.controls_whileUntil.TOOLTIPS = {
            WHILE: Educablocks.locales.getKey('LANG_CONTROLS_WHILEUNTIL_TOOLTIP_WHILE'),
            UNTIL: Educablocks.locales.getKey('LANG_CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL')
        };
        // Source: src/blocks/inout_analog_read/inout_analog_read.js
        /* global Blockly, JST, Educablocks */
        /* jshint sub:true */
        /**
         * inout_analog_read code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.inout_analog_read = function() {
            var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
            var code = '';

            var a = Educablocks.findPinMode(dropdown_pin);
            code += a['code'];
            dropdown_pin = a['pin'];

            if (Educablocks.isVariable(dropdown_pin)) {
                code += JST['inout_analog_read_setups']({
                    'dropdown_pin': dropdown_pin,
                });
            } else {
                Blockly.Arduino.setups_['setup_green_analog_read' + dropdown_pin] = JST['inout_analog_read_setups']({
                    'dropdown_pin': dropdown_pin,
                });
            }
            code += JST['inout_analog_read']({
                'dropdown_pin': dropdown_pin,
            });
            return [code, Blockly.Arduino.ORDER_ATOMIC];
        };
        /**
         * inout_analog_read block definition
         * @type {Object}
         */
        Blockly.Blocks.inout_analog_read = {
            category: Educablocks.locales.getKey('LANG_CATEGORY_ADVANCED'),
            helpUrl: Educablocks.URL_PIN_FUNC,
            /**
             * inout_analog_read initialization
             */
            init: function() {
                this.setColour(Educablocks.LANG_COLOUR_ADVANCED);
                this.appendValueInput('PIN').appendField(Educablocks.locales.getKey('LANG_ADVANCED_INOUT_ANALOG_READ'));
                this.setOutput(true, Number);
                this.setInputsInline(true);
                this.setTooltip(Educablocks.locales.getKey('LANG_ADVANCED_INOUT_ANALOG_READ_TOOLTIP'));
            }
        };
        // Source: src/blocks/inout_analog_write/inout_analog_write.js
        /* global Blockly, JST, Educablocks */
        /* jshint sub:true */
        /**
         * inout_analog_write code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.inout_analog_write = function() {
            var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
            var value_num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC);
            var code = '';
            var a = Educablocks.findPinMode(dropdown_pin);
            code += a['code'];
            dropdown_pin = a['pin'];

            var b = Educablocks.findPinMode(value_num);
            code += b['code'];
            value_num = b['pin'];


            if (Educablocks.isVariable(dropdown_pin)) {
                code += JST['inout_analog_write_setups']({
                    'dropdown_pin': dropdown_pin,
                    'value_num': value_num
                });
            } else {
                Blockly.Arduino.setups_['setup_analog_write' + dropdown_pin] = JST['inout_analog_write_setups']({
                    'dropdown_pin': dropdown_pin,
                    'value_num': value_num
                });
            }

            code += JST['inout_analog_write']({
                'dropdown_pin': dropdown_pin,
                'value_num': value_num
            });
            return code;
        };
        /**
         * inout_analog_write block definition
         * @type {Object}
         */
        Blockly.Blocks.inout_analog_write = {
            category: Educablocks.locales.getKey('LANG_CATEGORY_ADVANCED'),
            helpUrl: Educablocks.URL_PIN_FUNC,
            /**
             * inout_analog_write initialization
             */
            init: function() {
                this.setColour(Educablocks.LANG_COLOUR_ADVANCED);
                this.appendValueInput('PIN').appendField(Educablocks.locales.getKey('LANG_ADVANCED_INOUT_ANALOG_WRITE'));
                this.appendValueInput('NUM', Number).appendField(Educablocks.locales.getKey('LANG_ADVANCED_INOUT_ANALOG_WRITE_VALUE')).setCheck(Number);
                this.setInputsInline(true);
                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setTooltip(Educablocks.locales.getKey('LANG_ADVANCED_INOUT_ANALOG_WRITE_TOOLTIP'));
            }
        };
        // Source: src/blocks/inout_builtin_led/inout_builtin_led.js
        /* global Blockly, JST, Educablocks */
        /* jshint sub:true */

        /**
         * inout_builtin_led code generation
         * @return {String} Code generated with block parameters
         */

        Blockly.Arduino.inout_builtin_led = function() {
            var dropdown_stat = this.getFieldValue('STAT');

            Blockly.Arduino.setups_['setup_green_led_13'] = JST['inout_builtin_led_setups']({});

            var code = JST['inout_builtin_led']({
                'dropdown_stat': dropdown_stat
            });

            return code;
        };

        /**
         * inout_builtin_led block definition
         * @type {Object}
         */
        Blockly.Blocks.inout_builtin_led = {
            category: Educablocks.locales.getKey('LANG_CATEGORY_ADVANCED'),
            helpUrl: Educablocks.URL_LED,
            /**
             * inout_builtin_led initialization
             */
            init: function() {
                this.setColour(Educablocks.LANG_COLOUR_ADVANCED);
                this.appendDummyInput('')
                    .appendField(Educablocks.locales.getKey('LANG_ADVANCED_BUILTIN_LED'))
                    .appendField(Educablocks.locales.getKey('LANG_ADVANCED_BUILTIN_LED_STATE'))
                    .appendField(new Blockly.FieldDropdown([
                        [Educablocks.locales.getKey('LANG_ADVANCED_BUILTIN_LED_ON') || 'ON', 'HIGH'],
                        [Educablocks.locales.getKey('LANG_ADVANCED_BUILTIN_LED_OFF') || 'OFF', 'LOW']
                    ]), 'STAT');
                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setTooltip(Educablocks.locales.getKey('LANG_ADVANCED_BUILTIN_LED_TOOLTIP'));
            }
        };

        // Source: src/blocks/inout_digital_read/inout_digital_read.js
        /* global Blockly, JST, Educablocks */
        /* jshint sub:true */
        /**
         * inout_digital_read code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.inout_digital_read = function() {
            var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
            var code = '';
            var a = Educablocks.findPinMode(dropdown_pin);
            code += a['code'];
            dropdown_pin = a['pin'];
            if (Educablocks.isVariable(dropdown_pin)) {
                code += JST['inout_digital_read_setups']({
                    'dropdown_pin': dropdown_pin,
                });
            } else {
                Blockly.Arduino.setups_['setup_green_digital_read' + dropdown_pin] = JST['inout_digital_read_setups']({
                    'dropdown_pin': dropdown_pin,
                });
            }
            code += JST['inout_digital_read']({
                'dropdown_pin': dropdown_pin,
            });
            return [code, Blockly.Arduino.ORDER_ATOMIC];
        };
        /**
         * inout_digital_read block definition
         * @type {Object}
         */
        Blockly.Blocks.inout_digital_read = {
            category: Educablocks.locales.getKey('LANG_CATEGORY_ADVANCED'),
            helpUrl: Educablocks.URL_PIN_FUNC,
            /**
             * inout_digital_read initialization
             */
            init: function() {
                this.setColour(Educablocks.LANG_COLOUR_ADVANCED);
                this.appendValueInput('PIN').appendField(Educablocks.locales.getKey('LANG_ADVANCED_INOUT_DIGITAL_READ'));
                this.setOutput(true, Boolean);
                this.setInputsInline(true);
                this.setTooltip(Educablocks.locales.getKey('LANG_ADVANCED_INOUT_DIGITAL_READ_TOOLTIP'));
            }
        };
        // Source: src/blocks/inout_digital_write/inout_digital_write.js
        /* global Blockly, JST, Educablocks */
        /* jshint sub:true */
        /**
         * inout_digital_write code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.inout_digital_write = function() {
            var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
            var dropdown_stat = this.getFieldValue('STAT');
            var code = '';
            var a = Educablocks.findPinMode(dropdown_pin);
            code += a['code'];
            dropdown_pin = a['pin'];
            if (Educablocks.isVariable(dropdown_pin)) {
                code += JST['inout_digital_write_setups']({
                    'dropdown_pin': dropdown_pin,
                    'dropdown_stat': dropdown_stat
                });
            } else {
                Blockly.Arduino.setups_['setup_green_digital_write_' + dropdown_pin] = JST['inout_digital_write_setups']({
                    'dropdown_pin': dropdown_pin,
                    'dropdown_stat': dropdown_stat
                });
            }
            code += JST['inout_digital_write']({
                'dropdown_pin': dropdown_pin,
                'dropdown_stat': dropdown_stat
            });
            return code;
        };
        /**
         * inout_digital_write block definition
         * @type {Object}
         */
        Blockly.Blocks.inout_digital_write = {
            category: Educablocks.locales.getKey('LANG_CATEGORY_ADVANCED'),
            helpUrl: Educablocks.URL_PIN_FUNC,
            /**
             * inout_digital_write initialization
             */
            init: function() {
                this.setColour(Educablocks.LANG_COLOUR_ADVANCED);
                this.appendValueInput('PIN').appendField(Educablocks.locales.getKey('LANG_ADVANCED_INOUT_DIGITAL_WRITE')).appendField(Educablocks.locales.getKey('LANG_ADVANCED_INOUT_DIGITAL_WRITE_PIN'));
                this.appendDummyInput().appendField(Educablocks.locales.getKey('LANG_ADVANCED_INOUT_DIGITAL_WRITE_STATE')).appendField(new Blockly.FieldDropdown([
                    [Educablocks.locales.getKey('LANG_ADVANCED_INOUT_DIGITAL_WRITE_HIGH') || 'HIGH', 'HIGH'],
                    [Educablocks.locales.getKey('LANG_ADVANCED_INOUT_DIGITAL_WRITE_LOW') || 'LOW', 'LOW']
                ]), 'STAT');
                this.setPreviousStatement(true, null);
                this.setInputsInline(true);
                this.setNextStatement(true, null);
                this.setTooltip(Educablocks.locales.getKey('LANG_ADVANCED_INOUT_DIGITAL_WRITE_TOOLTIP'));
            }
        };
        // Source: src/blocks/inout_highlow/inout_highlow.js
        /* global Blockly, JST, Educablocks */
        /* jshint sub:true */

        /**
         * inout_highlow code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.inout_highlow = function() {
            var bool_value = this.getFieldValue('BOOL');

            var code = JST['inout_highlow']({
                'bool_value': bool_value,
            });

            return [code, Blockly.Arduino.ORDER_ATOMIC];
        };

        /**
         * inout_highlow block definition
         * @type {Object}
         */
        Blockly.Blocks.inout_highlow = {
            category: Educablocks.locales.getKey('LANG_CATEGORY_ADVANCED'),
            helpUrl: Educablocks.URL_PIN_FUNC,
            /**
             * inout_highlow initialization
             */
            init: function() {
                this.setColour(Educablocks.LANG_COLOUR_ADVANCED);
                this.appendDummyInput('')
                    .appendField(new Blockly.FieldDropdown([
                        [Educablocks.locales.getKey('LANG_ADVANCED_HIGHLOW_HIGH') || 'HIGH', 'HIGH'],
                        [Educablocks.locales.getKey('LANG_ADVANCED_HIGHLOW_LOW') || 'LOW', 'LOW']
                    ]), 'BOOL');
                this.setOutput(true, Boolean);
                this.setTooltip(Educablocks.locales.getKey('LANG_ADVANCED_HIGHLOW_TOOLTIP'));
            }
        };

        // Source: src/blocks/lcd_clear/lcd_clear.js

        /* global Blockly, JST, Educablocks */
        /* jshint sub:true */

        /**
         * lcd_clear code generation
         * @return {String} Code generated with block parameters
         */

        Blockly.Arduino.lcd_clear = function() {
            var code = JST['lcd_clear']({});
            return code;
        };

        /**
         * lcd_clear block definition
         * @type {Object}
         */
        Blockly.Blocks.lcd_clear = {
            category: Educablocks.locales.getKey('LANG_CATEGORY_LCD'),
            tags: ['lcd'],
            helpUrl: Educablocks.URL_LCD,
            /**
             * lcd_slave initialization
             */
            init: function() {
                this.setColour(Educablocks.LANG_COLOUR_LCD);
                this.appendDummyInput()
                    .appendField(Educablocks.locales.getKey('LANG_LCD_CLEAR'));
                // .appendField(new Blockly.FieldImage('img/blocks/SALIDASmod03.png', 208 * options.zoom, 100 * options.zoom));



                this.setInputsInline(false);

                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setTooltip(Educablocks.locales.getKey('LANG_LCD_CLEAR_TOOLTIP'));
            }
        };

        // Source: src/blocks/lcd_def/lcd_def.js
        /* global Blockly, JST, options, Educablocks */
        /* jshint sub:true */
        /**
         * lcd_def code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.lcd_def = function() {
            var lcd_pins = {};
            lcd_pins['lcd_1'] = this.getFieldValue('LCD_1');
            lcd_pins['lcd_2'] = this.getFieldValue('LCD_2');
            lcd_pins['lcd_3'] = this.getFieldValue('LCD_3');
            lcd_pins['lcd_4'] = this.getFieldValue('LCD_4');
            lcd_pins['lcd_5'] = this.getFieldValue('LCD_5');
            lcd_pins['lcd_6'] = this.getFieldValue('LCD_6');
            Blockly.Arduino.definitions_['define_lcd'] = JST['lcd_def_definitions']({});
            Blockly.Arduino.definitions_['declare_var_LCD'] = JST['lcd_def_declare'](lcd_pins);
            Blockly.Arduino.setups_['setup_lcd_'] = JST['lcd_def_setups']({});
            return '';
        };
        /**
         * lcd_def block definition
         * @type {Object}
         */
        Blockly.Blocks.lcd_def = {
            category: Educablocks.locales.getKey('LANG_CATEGORY_LCD'),
            tags: ['lcd'],
            helpUrl: Educablocks.URL_LCD,
            /**
             * lcd_slave initialization
             */
            init: function() {
                this.setColour(Educablocks.LANG_COLOUR_LCD);
                this.appendDummyInput().appendField(Educablocks.locales.getKey('LANG_LCD_DEF')).appendField(new Blockly.FieldImage('img/blocks/12.png', 208 * options.zoom, 100 * options.zoom));
                this.appendDummyInput()
                    .appendField(Educablocks.locales.getKey('LANG_LCD_PINS'))
                    .appendField(new Blockly.FieldTextInput('11'), 'LCD_1')
                    .appendField(new Blockly.FieldTextInput('12'), 'LCD_2')
                    .appendField(new Blockly.FieldTextInput('3'), 'LCD_3')
                    .appendField(new Blockly.FieldTextInput('4'), 'LCD_4')
                    .appendField(new Blockly.FieldTextInput('5'), 'LCD_5')
                    .appendField(new Blockly.FieldTextInput('6'), 'LCD_6');
                this.setInputsInline(false);
                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setTooltip(Educablocks.locales.getKey('LANG_LCD_DEF_TOOLTIP'));
            }
        };
   Blockly.Arduino.lcd_setBacklight = function() {
            var state = this.getFieldValue('STATE');
            var code = JST['lcd_setBacklight']({
                'state': state
            });
            return code;
        };

        /**
         * lcd_setBacklight block definition
         * @type {Object}
         */
        Blockly.Blocks.lcd_setBacklight = {
            category: Educablocks.locales.getKey('LANG_CATEGORY_LCD'),
            helpUrl: Educablocks.URL_LCD,
            tags: ['lcd'],
            /**
             * lcd_slave initialization
             */
            init: function() {
                this.setColour(Educablocks.LANG_COLOUR_LCD);
                this.appendDummyInput()
                    .appendField(Educablocks.locales.getKey('LANG_LCD_SETBACKLIGHT'))
                    .appendField(new Blockly.FieldDropdown([
                        ['LOW', 'LOW'],
                        ['HIGH', 'HIGH']
                    ]), 'STATE')
                    .appendField(Educablocks.locales.getKey('LANG_LCD_SETBACKLIGHT_CLOSE'));
                // .appendField(new Blockly.FieldImage('img/blocks/SALIDASmod03.png', 208 * options.zoom, 100 * options.zoom));


                this.setInputsInline(false);

                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setTooltip(Educablocks.locales.getKey('LANG_LCD_SETBACKLIGHT_TOOLTIP'));
            }
        };






        Blockly.Arduino.lcd_i2c = function() {
           var lcd_pins = {};
            lcd_pins['lcd_direccion'] = this.getFieldValue('LCD_DIRECCION');
            Blockly.Arduino.definitions_['declare_lcd'] = JST['lcd_i2c_definitions']({});
            Blockly.Arduino.definitions_['declare_var_LCD'] = JST['lcd_i2c_declare'](lcd_pins);
            Blockly.Arduino.setups_['setup_lcd_'] = JST['lcd_i2c_setups']({});
            return '';
        };
        /**
         * lcdi2c_def block definition
         * @type {Object}
         */
        Blockly.Blocks.lcd_i2c = {
            category: Educablocks.locales.getKey('LANG_CATEGORY_LCD'),
            tags: ['lcd_i2c'],
            helpUrl: Educablocks.URL_LCD,
            /**
             * lcd_slave initialization
             */
            init: function() {
                this.setColour(Educablocks.LANG_COLOUR_LCD);
                this.appendDummyInput().appendField(Educablocks.locales.getKey('LANG_LCD_I2C')).appendField(new Blockly.FieldImage('img/blocks/30.png', 208 * options.zoom, 100 * options.zoom));
                this.appendDummyInput()
                    .appendField(Educablocks.locales.getKey('LANG_LCD_DIRECCION'))
                    .appendField(new Blockly.FieldTextInput('0x3f'), 'LCD_DIRECCION')
                this.setInputsInline(false);
                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setTooltip(Educablocks.locales.getKey('LANG_LCD_DEF_TOOLTIP'));
            }
        };

        // Source: src/blocks/lcd_print/lcd_print.js
        /* global Blockly, JST, Educablocks */
        /* jshint sub:true */
        /**
         * lcd_print code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.lcd_print = function() {
            var val = Blockly.Arduino.valueToCode(this, 'VAL', Blockly.Arduino.ORDER_ATOMIC);
            var xcoor = Blockly.Arduino.valueToCode(this, 'XCOOR', Blockly.Arduino.ORDER_ATOMIC);
            var ycoor = Blockly.Arduino.valueToCode(this, 'YCOOR', Blockly.Arduino.ORDER_ATOMIC);
            var code = '';

            var a = Educablocks.findPinMode(xcoor);
            code += a['code'];
            xcoor = a['pin'];

            a = Educablocks.findPinMode(ycoor);
            code += a['code'];
            ycoor = a['pin'];

            a = Educablocks.findPinMode(val);
            code += a['code'];
            val = a['pin'];

            if (this.getFieldValue('POS') === 'TRUE') {
                code += JST['lcd_print_pos']({
                    'val': val,
                    'xcoor': xcoor,
                    'ycoor': ycoor
                });
            } else {
                code += JST['lcd_print']({
                    'val': val
                });
            }
            code = code.replace(/&quot;/g, '"');
            return code;
        };
        /**
         * lcd_print block definition
         * @type {Object}
         */
        Blockly.Blocks.lcd_print = {
            category: Educablocks.locales.getKey('LANG_CATEGORY_LCD'),
            tags: ['lcd'],
            helpUrl: Educablocks.URL_LCD,
            /**
             * lcd_slave initialization
             */
            init: function() {
                this.setColour(Educablocks.LANG_COLOUR_LCD);
                this.appendValueInput('VAL').appendField(Educablocks.locales.getKey('LANG_LCD_PRINT'));
                // .appendField(new Blockly.FieldImage('img/blocks/SALIDASmod03.png', 208 * options.zoom, 100 * options.zoom));
                this.appendDummyInput().appendField(Educablocks.locales.getKey('LANG_LCD_PRINT_POSITION')).appendField(new Blockly.FieldCheckbox('TRUE'), 'POS').setAlign(Blockly.ALIGN_RIGHT);
                this.last_pos = this.getFieldValue('POS');
                this.getPosition();
                this.setInputsInline(false);
                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setTooltip(Educablocks.locales.getKey('LANG_LCD_PRINT_TOOLTIP'));
            },
            getPosition: function() {
                try {
                    this.removeInput('XCOOR');
                    this.removeInput('YCOOR');
                } catch (e) {}
                if (this.getFieldValue('POS') === 'TRUE') {
                    this.appendValueInput('XCOOR').appendField(Educablocks.locales.getKey('LANG_LCD_PRINT_fila')).setAlign(Blockly.ALIGN_RIGHT);
                    this.appendValueInput('YCOOR').appendField(Educablocks.locales.getKey('LANG_LCD_PRINT_columna')).setAlign(Blockly.ALIGN_RIGHT);
                }
            },
            onchange: function() {
                if (this.getFieldValue('POS') !== this.last_pos) {
                    this.getPosition();
                    this.last_pos = this.getFieldValue('POS');
                }
            },
            mutationToDom: function() {
                var container = document.createElement('mutation');
                if (this.getFieldValue('POS') === 'TRUE') {
                    container.setAttribute('fixed', true);
                } else if (this.getFieldValue('POS') === 'FALSE') {
                    container.setAttribute('fixed', false);
                }
                return container;
            },
            domToMutation: function(xmlElement) {
                this.setFieldValue(xmlElement.getAttribute('fixed'), 'POS');
                if (this.getFieldValue('POS') === 'TRUE') {
                    this.appendValueInput('XCOOR').appendField('row').setAlign(Blockly.ALIGN_RIGHT);
                    this.appendValueInput('YCOOR').appendField('column').setAlign(Blockly.ALIGN_RIGHT);
                }
            }
        };
        // Source: src/blocks/lcd_setBacklight/lcd_setBacklight.js
        /* global Blockly, JST, Educablocks */
        /* jshint sub:true */

        /**
         * lcd_setBacklight code generation
         * @return {String} Code generated with block parameters
         */

//matriz inicio

        Blockly.Arduino.matriz_def = function() {
            var matriz_pins = {};
            matriz_pins['matriz_1'] = this.getFieldValue('matriz_1');
            matriz_pins['matriz_2'] = this.getFieldValue('matriz_2');
            matriz_pins['matriz_3'] = this.getFieldValue('matriz_3');
            matriz_pins['matriz_4'] = this.getFieldValue('matriz_4');
            Blockly.Arduino.definitions_['define_matriz'] = JST['matriz_def_definitions']({});
            Blockly.Arduino.definitions_['declare_var_matriz'] = JST['matriz_def_declare'](matriz_pins);
            Blockly.Arduino.setups_['setup_matriz_'] = JST['matriz_def_setups']({});
            return '';
        };
 
        Blockly.Blocks.matriz_def = {
            category: Educablocks.locales.getKey('LANG_CATEGORY_LCD'),
            tags: ['matriz'],
            helpUrl: Educablocks.URL_LCD,

            init: function() {
                this.setColour(Educablocks.LANG_COLOUR_LCD);
                this.appendDummyInput().appendField(Educablocks.locales.getKey('LANG_matriz_DEF')).appendField(new Blockly.FieldImage('img/blocks/33.png', 300 * options.zoom, 200 * options.zoom));
                this.appendDummyInput()
                    .appendField(Educablocks.locales.getKey('LANG_matriz_din')).appendField(new Blockly.FieldTextInput('12'), 'matriz_1')
                    .appendField(Educablocks.locales.getKey('LANG_matriz_clk')).appendField(new Blockly.FieldTextInput('11'), 'matriz_2')
                    .appendField(Educablocks.locales.getKey('LANG_matriz_cs')).appendField(new Blockly.FieldTextInput('10'), 'matriz_3')
                    .appendField(Educablocks.locales.getKey('LANG_matriz_cantidad')).appendField(new Blockly.FieldTextInput('1'), 'matriz_4')
                this.setInputsInline(false);
                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setTooltip(Educablocks.locales.getKey('LANG_matriz_DEF_TOOLTIP'));
            }
        };

//matriz final

//segundo caras inicio
     Blockly.Arduino.matriz_caras_def = function() {
            var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC) || '';
            var dropdown_stat = this.getFieldValue('STAT') || '';
            Blockly.Arduino.definitions_['declare_matriz_caras'] = JST['matriz_caras_definitions']({});
            var code = '';
            var a = Educablocks.findPinMode(dropdown_pin);
            code += a['code'];
            dropdown_pin = a['pin'];

            if (Educablocks.isVariable(dropdown_pin)) {
                code += JST['caras_setups']({
                    'dropdown_pin': dropdown_pin,
                    'dropdown_stat': dropdown_stat

                });
            } else {
                Blockly.Arduino.setups_['matriz_caras' + dropdown_pin] = JST['caras_setups']({
                    'dropdown_pin': dropdown_pin,
                    'dropdown_stat': dropdown_stat

                });
            }
            code += JST['matriz_caras']({
                'dropdown_pin': dropdown_pin,
                'dropdown_stat': dropdown_stat

            });
            return code;
        };
        /**
         matriz block definition
         * @type {Object}
         */
        Blockly.Blocks.matriz_caras_def = {
            category: Educablocks.locales.getKey('LANG_CATEGORY_LCD'),
            tags: ['matriz'],
            helpUrl: Educablocks.URL_CONTINUOUS_ROTATION_SERVO,
            init: function() {
                this.setColour(Educablocks.LANG_COLOUR_LCD);
                this.appendDummyInput()
                    .appendField(Educablocks.locales.getKey('LANG_matriz_caras_estado'))
                    .appendField(new Blockly.FieldDropdown([
                        [Educablocks.locales.getKey('LANG_matriz_caras_feliz') || 'Feliz', '0'],
                        [Educablocks.locales.getKey('LANG_matriz_caras_sorprendido') || 'Sorprendido', '1'],
                        [Educablocks.locales.getKey('LANG_matriz_caras_enojado') || 'Enojado', '2'],
                    ]), 'STAT')
            this.setInputsInline(false);
                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setTooltip(Educablocks.locales.getKey('LANG_matriz_caras_DEF_TOOLTIP'));
            }
        };
//segundo caras final

//matriz print

        Blockly.Arduino.matriz_print = function() {
            var val = Blockly.Arduino.valueToCode(this, 'VAL', Blockly.Arduino.ORDER_ATOMIC);
            var xcoor = Blockly.Arduino.valueToCode(this, 'XCOOR', Blockly.Arduino.ORDER_ATOMIC);
            var ycoor = Blockly.Arduino.valueToCode(this, 'YCOOR', Blockly.Arduino.ORDER_ATOMIC);
            var code = '';

            var a = Educablocks.findPinMode(xcoor);
            code += a['code'];
            xcoor = a['pin'];

            a = Educablocks.findPinMode(ycoor);
            code += a['code'];
            ycoor = a['pin'];

            a = Educablocks.findPinMode(val);
            code += a['code'];
            val = a['pin'];

            if (this.getFieldValue('POS') === 'TRUE') {
                code += JST['matriz_print']({
                    'val': val,
                    'xcoor': xcoor,
                    'ycoor': ycoor
                });
            } else {
                code += JST['matriz_print']({
                    'val': val
                });
            }
            code = code.replace(/&quot;/g, '"');
            return code;
        };
        /**
         * lcd_print block definition
         * @type {Object}
         */
        Blockly.Blocks.matriz_print = {
            category: Educablocks.locales.getKey('LANG_CATEGORY_LCD'),
            tags: ['lcd'],
            helpUrl: Educablocks.URL_LCD,
            /**
             * lcd_slave initialization
             */
            init: function() {
                this.setColour(Educablocks.LANG_COLOUR_LCD);
                this.appendValueInput('VAL').appendField(Educablocks.locales.getKey('LANG_matriz_PRINT'));
                this.setInputsInline(false);
                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setTooltip(Educablocks.locales.getKey('LANG_matriz_PRINT_TOOLTIP'));
            },
           
        };

//matriz print final
     

        // Source: src/blocks/logic_boolean/logic_boolean.js
        /* global Blockly, Educablocks */

        /**
         * logic_boolean code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.logic_boolean = function() {
            // Boolean values true and false.
            var code = (this.getFieldValue('BOOL') === 'TRUE') ? 'true' : 'false';
            return [code, Blockly.Arduino.ORDER_ATOMIC];
        };

        Blockly.Blocks.logic_boolean = {
            // Boolean data type: true and false.
            category: Educablocks.locales.getKey('LANG_CATEGORY_LOGIC'),
            helpUrl: Educablocks.URL_LOGIC,
            init: function() {
                this.setColour(Educablocks.LANG_COLOUR_LOGIC);
                this.setOutput(true, Boolean);
                this.appendDummyInput()
                    .appendField(new Blockly.FieldDropdown([
                        [Educablocks.locales.getKey('LANG_LOGIC_BOOLEAN_TRUE'), 'TRUE'],
                        [Educablocks.locales.getKey('LANG_LOGIC_BOOLEAN_FALSE'), 'FALSE']
                    ]), 'BOOL');
                this.setTooltip(Educablocks.locales.getKey('LANG_LOGIC_BOOLEAN_TOOLTIP'));
            }
        };
        // Source: src/blocks/logic_compare/logic_compare.js
        /* global Blockly, JST, Educablocks */
        /* jshint sub:true */

        /**
         * logic_compare code generation
         * @return {String} Code generated with block parameters
         */

        Blockly.Arduino.logic_compare = function() {
            // Comparison operator.
            var mode = this.getFieldValue('OP');
            var operator = Blockly.Arduino.logic_compare.OPERATORS[mode];
            var order = (operator === '==' || operator === '!=') ?
                Blockly.Arduino.ORDER_EQUALITY : Blockly.Arduino.ORDER_RELATIONAL;
            var argument0 = Blockly.Arduino.valueToCode(this, 'A', order) || '';
            var argument1 = Blockly.Arduino.valueToCode(this, 'B', order) || '';

            var code = '';

            var a = Educablocks.findPinMode(argument0);
            code += a['code'];
            argument0 = a['pin'];

            a = Educablocks.findPinMode(argument1);
            code += a['code'];
            argument1 = a['pin'];

            code += JST['logic_compare']({
                'argument0': argument0,
                'argument1': argument1,
                'operator': operator
            });

            return [code, order];
        };

        Blockly.Arduino.logic_compare.OPERATORS = {
            EQ: '==',
            NEQ: '!=',
            LT: '<',
            LTE: '<=',
            GT: '>',
            GTE: '>='
        };


        Blockly.Blocks.logic_compare = {
            // Comparison operator.
            category: Educablocks.locales.getKey('LANG_CATEGORY_LOGIC'),
            helpUrl: Educablocks.URL_LOGIC,
            init: function() {
                this.setColour(Educablocks.LANG_COLOUR_LOGIC);
                this.setOutput(true, Boolean);
                this.appendValueInput('A');
                this.appendValueInput('B')
                    .appendField(new Blockly.FieldDropdown(this.OPERATORS), 'OP');
                this.setInputsInline(true);
                // Assign 'this' to a variable for use in the tooltip closure below.
                var thisBlock = this;
                this.setTooltip(function() {
                    var op = thisBlock.getFieldValue('OP');
                    return Blockly.Blocks.logic_compare.TOOLTIPS[op];
                });
            }
        };

        Blockly.Blocks.logic_compare.OPERATORS = [
            ['=', 'EQ'],
            ['\u2260', 'NEQ'],
            ['<', 'LT'],
            ['\u2264', 'LTE'],
            ['>', 'GT'],
            ['\u2265', 'GTE']
        ];

        Blockly.Blocks.logic_compare.TOOLTIPS = {
            EQ: Educablocks.locales.getKey('LANG_LOGIC_COMPARE_TOOLTIP_EQ'),
            NEQ: Educablocks.locales.getKey('LANG_LOGIC_COMPARE_TOOLTIP_NEQ'),
            LT: Educablocks.locales.getKey('LANG_LOGIC_COMPARE_TOOLTIP_LT'),
            LTE: Educablocks.locales.getKey('LANG_LOGIC_COMPARE_TOOLTIP_LTE'),
            GT: Educablocks.locales.getKey('LANG_LOGIC_COMPARE_TOOLTIP_GT'),
            GTE: Educablocks.locales.getKey('LANG_LOGIC_COMPARE_TOOLTIP_GTE')
        };

        // Source: src/blocks/logic_negate/logic_negate.js
        /* global Blockly, JST, Educablocks */

        /**
         * logic_negate code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.logic_negate = function() {
            // Negation.
            var order = Blockly.Arduino.ORDER_UNARY_PREFIX;
            var argument0 = Blockly.Arduino.valueToCode(this, 'BOOL', order) || 'false';
            var code = '';
            var a = Educablocks.findPinMode(argument0);
            code += a['code'];
            argument0 = a['pin'];

            code += JST['logic_negate']({
                'argument0': argument0
            });

            //'!' + argument0;
            return [code, order];
        };


        Blockly.Blocks.logic_negate = {
            // Negation.
            category: Educablocks.locales.getKey('LANG_CATEGORY_LOGIC'),
            helpUrl: Educablocks.URL_LOGIC,
            init: function() {
                this.setColour(Educablocks.LANG_COLOUR_LOGIC);
                this.setOutput(true, Boolean);
                this.appendValueInput('BOOL')
                    .setCheck(Boolean)
                    .appendField(Educablocks.locales.getKey('LANG_LOGIC_NEGATE_INPUT_NOT'));
                this.setTooltip(Educablocks.locales.getKey('LANG_LOGIC_NEGATE_TOOLTIP'));
            }
        };

        // Source: src/blocks/logic_operation/logic_operation.js
        /* global Blockly, Educablocks */
        /**
         * logic_operation code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.logic_operation = function() {
            // Operations 'and', 'or'.
            var operator = (this.getFieldValue('OP') === 'AND') ? '&&' : '||';
            var order = (operator === '&&') ? Blockly.Arduino.ORDER_LOGICAL_AND : Blockly.Arduino.ORDER_LOGICAL_OR;
            var argument0 = Blockly.Arduino.valueToCode(this, 'A', order) || '';
            var argument1 = Blockly.Arduino.valueToCode(this, 'B', order) || '';
            // var code = JST['logic_operation']({
            //     'operator': operator,
            //     'argument0': argument0,
            //     'argument1': argument1
            // });
            var code = '';
            var a = Educablocks.findPinMode(argument0);
            code += a['code'];
            argument0 = a['pin'];
            a = Educablocks.findPinMode(argument1);
            code += a['code'];
            argument1 = a['pin'];

            code += '(' + argument0 + ') ' + operator + ' (' + argument1 + ')';
            return [code, order];
        };
        Blockly.Blocks.logic_operation = {
            // Logical operations: 'and', 'or'.
            category: Educablocks.locales.getKey('LANG_CATEGORY_LOGIC'),
            helpUrl: Educablocks.URL_LOGIC,
            init: function() {
                this.setColour(Educablocks.LANG_COLOUR_LOGIC);
                this.setOutput(true, Boolean);
                this.appendValueInput('A').setCheck(Boolean);
                this.appendValueInput('B').setCheck(Boolean).appendField(new Blockly.FieldDropdown([
                    [Educablocks.locales.getKey('LANG_LOGIC_OPERATION_AND') || 'AND', 'AND'],
                    [Educablocks.locales.getKey('LANG_LOGIC_OPERATION_OR') || 'OR', 'OR']
                ]), 'OP');
                this.setInputsInline(true);
                // Assign 'this' to a variable for use in the tooltip closure below.
                var thisBlock = this;
                this.setTooltip(function() {
                    var op = thisBlock.getFieldValue('OP');
                    return Blockly.Blocks.logic_operation.TOOLTIPS[op];
                });
            }
        };
        Blockly.Blocks.logic_operation.TOOLTIPS = {
            AND: Educablocks.locales.getKey('LANG_LOGIC_OPERATION_TOOLTIP_AND'),
            OR: Educablocks.locales.getKey('LANG_LOGIC_OPERATION_TOOLTIP_OR')
        };
        // Source: src/blocks/math_arithmetic/math_arithmetic.js
        /* global Blockly, JST, Educablocks */
        /* jshint sub:true */

        /**
         * math_arithmetic code generation
         * @return {String} Code generated with block parameters
         */


        Blockly.Arduino.math_arithmetic = function() {
            // Basic arithmetic operators, and power.
            var mode = this.getFieldValue('OP');
            var tuple = Blockly.Arduino.math_arithmetic.OPERATORS[mode];
            var operator = tuple[0];
            var order = tuple[1];
            var argument0 = Blockly.Arduino.valueToCode(this, 'A', order) || '';
            var argument1 = Blockly.Arduino.valueToCode(this, 'B', order) || '';
            var code = '';
            var a = Educablocks.findPinMode(argument0);
            code += a['code'];
            argument0 = a['pin'];

            a = Educablocks.findPinMode(argument1);
            code += a['code'];
            argument1 = a['pin'];
            if (!operator) {
                code = JST['math_arithmetic_pow']({
                    'argument0': argument0,
                    'argument1': argument1
                });
                return [code, Blockly.Arduino.ORDER_UNARY_POSTFIX];
            }
            code += JST['math_arithmetic']({
                'argument0': argument0,
                'argument1': argument1,
                'operator': operator
            });
            return [code, order];
        };

        Blockly.Arduino.math_arithmetic.OPERATORS = {
            ADD: [' + ', Blockly.Arduino.ORDER_ADDITIVE],
            MINUS: [' - ', Blockly.Arduino.ORDER_ADDITIVE],
            MULTIPLY: [' * ', Blockly.Arduino.ORDER_MULTIPLICATIVE],
            DIVIDE: [' / ', Blockly.Arduino.ORDER_MULTIPLICATIVE],
            POWER: [null, Blockly.Arduino.ORDER_NONE]
        };




        Blockly.Blocks.math_arithmetic = {
            // Basic arithmetic operator.
            category: Educablocks.locales.getKey('LANG_CATEGORY_MATH'),
            helpUrl: Educablocks.URL_MATH,
            init: function() {
                this.setColour(Educablocks.LANG_COLOUR_MATH);
                this.setOutput(true, Number);
                this.appendValueInput('A')
                    .setCheck(Number);
                this.appendValueInput('B')
                    .setCheck(Number)
                    .appendField(new Blockly.FieldDropdown(this.OPERATORS), 'OP');
                this.setInputsInline(true);
                // Assign 'this' to a variable for use in the tooltip closure below.
                var thisBlock = this;
                this.setTooltip(function() {
                    var mode = thisBlock.getFieldValue('OP');
                    return Blockly.Blocks.math_arithmetic.TOOLTIPS[mode];
                });
            }
        };

        Blockly.Blocks.math_arithmetic.OPERATORS = [
            ['+', 'ADD'],
            ['-', 'MINUS'],
            ['\u00D7', 'MULTIPLY'],
            ['\u00F7', 'DIVIDE'],
            ['^', 'POWER']
        ];

        Blockly.Blocks.math_arithmetic.TOOLTIPS = {
            ADD: Educablocks.locales.getKey('LANG_MATH_ARITHMETIC_TOOLTIP_ADD'),
            MINUS: Educablocks.locales.getKey('LANG_MATH_ARITHMETIC_TOOLTIP_MINUS'),
            MULTIPLY: Educablocks.locales.getKey('LANG_MATH_ARITHMETIC_TOOLTIP_MULTIPLY'),
            DIVIDE: Educablocks.locales.getKey('LANG_MATH_ARITHMETIC_TOOLTIP_DIVIDE'),
            POWER: Educablocks.locales.getKey('LANG_MATH_ARITHMETIC_TOOLTIP_POWER')
        };

        // Source: src/blocks/math_array/math_array.js
        /* global Blockly, Educablocks */
        /* jshint sub:true */

        /**
         * math_array code generation
         * @return {String} Code generated with block parameters
         */

        Blockly.Arduino.math_array = function() {
            // Numeric value.
            var code = '{';
            code += window.parseFloat(this.getFieldValue('NUM0'));
            code += ',';
            code += window.parseFloat(this.getFieldValue('NUM1'));
            code += ',';
            code += window.parseFloat(this.getFieldValue('NUM2'));
            code += '}';

            // -4.abs() returns -4 in Dart due to strange order of operation choices.
            // -4 is actually an operator and a number.  Reflect this in the order.
            // var order = code < 0 ? Blockly.Arduino.ORDER_UNARY_PREFIX : Blockly.Arduino.ORDER_ATOMIC;
            return [code, Blockly.Arduino.ORDER_ATOMIC];
        };

        Blockly.Blocks.math_array = {
            // Numeric value.
            category: Educablocks.locales.getKey('LANG_CATEGORY_MATH'), // Variables are handled specially.
            helpUrl: Educablocks.URL_MATH,
            init: function() {
                this.setColour(Educablocks.LANG_COLOUR_MATH);
                this.appendDummyInput()
                    .appendField(Educablocks.locales.getKey('LANG_MATH_ARRAY_ARRAY3'))
                    .appendField(Educablocks.locales.getKey('LANG_MATH_ARRAY_BRACKET3'))
                    .appendField(new Blockly.FieldTextInput('0', Blockly.Blocks.math_array.validator), 'NUM0')
                    .appendField(Educablocks.locales.getKey('LANG_MATH_ARRAY_COMMA'));


                this.appendDummyInput()
                    .appendField(new Blockly.FieldTextInput('0', Blockly.Blocks.math_array.validator), 'NUM1')
                    .appendField(Educablocks.locales.getKey('LANG_MATH_ARRAY_COMMA'));

                this.appendDummyInput()
                    .appendField(new Blockly.FieldTextInput('0', Blockly.Blocks.math_array.validator), 'NUM2')
                    .appendField(Educablocks.locales.getKey('LANG_MATH_ARRAY_BRACKET4'));

                this.setOutput(true, Number);
                this.setInputsInline(true);
                this.setTooltip(Educablocks.locales.getKey('LANG_MATH_ARRAY_TOOLTIP'));
            }
        };


        Blockly.Blocks.math_array.validator = function(text) {
            // Ensure that only a number may be entered.
            // TODO: Handle cases like 'o', 'ten', '1,234', '3,14', etc.
            var n = window.parseFloat(text || 0);
            return window.isNaN(n) ? null : String(n);
        };
        // Source: src/blocks/math_modulo/math_modulo.js
        /* global Blockly, JST, Educablocks */
        /* jshint sub:true */

        /**
         * math_modulo code generation
         * @return {String} Code generated with block parameters
         */

        Blockly.Arduino.math_modulo = function() {
            // Remainder computation.
            var argument0 = Blockly.Arduino.valueToCode(this, 'DIVIDEND',
                Blockly.Arduino.ORDER_MULTIPLICATIVE) || '';
            var argument1 = Blockly.Arduino.valueToCode(this, 'DIVISOR',
                Blockly.Arduino.ORDER_MULTIPLICATIVE) || '';
            var code = '';
            var a = Educablocks.findPinMode(argument0);
            code += a['code'];
            argument0 = a['pin'];
            a = Educablocks.findPinMode(argument1);
            code += a['code'];
            argument1 = a['pin'];
            code += JST['math_modulo']({
                'argument0': argument0,
                'argument1': argument1
            });

            //argument0 + ' % ' + argument1;
            return [code, Blockly.Arduino.ORDER_MULTIPLICATIVE];
        };

        Blockly.Blocks.math_modulo = {
            // Remainder of a division.
            category: Educablocks.locales.getKey('LANG_CATEGORY_MATH'),
            helpUrl: Educablocks.URL_MATH,
            init: function() {
                this.setColour(Educablocks.LANG_COLOUR_MATH);
                this.setOutput(true, Number);
                this.appendValueInput('DIVIDEND')
                    .setCheck(Number)
                    .appendField(Educablocks.locales.getKey('LANG_MATH_MODULO_INPUT_DIVIDEND'));
                this.appendValueInput('DIVISOR')
                    .setCheck(Number)
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField('%');
                this.setInputsInline(true);
                this.setTooltip(Educablocks.locales.getKey('LANG_MATH_MODULO_TOOLTIP'));
            }
        };

        // Source: src/blocks/math_number/math_number.js
        /* global Blockly, Educablocks */
        /* jshint sub:true */

        /**
         * math_number code generation
         * @return {String} Code generated with block parameters
         */

        Blockly.Arduino.math_number = function() {
            // Numeric value.
            var code = window.parseFloat(this.getFieldValue('NUM'));
            // -4.abs() returns -4 in Dart due to strange order of operation choices.
            // -4 is actually an operator and a number.  Reflect this in the order.
            var order = code < 0 ? Blockly.Arduino.ORDER_UNARY_PREFIX : Blockly.Arduino.ORDER_ATOMIC;
            return [code, order];
        };

        Blockly.Blocks.math_number = {
            // Numeric value.
            category: Educablocks.locales.getKey('LANG_CATEGORY_MATH'), // Variables are handled specially.
            helpUrl: Educablocks.URL_MATH,
            init: function() {
                this.setColour(Educablocks.LANG_COLOUR_MATH);
                this.appendDummyInput()
                    .appendField(new Blockly.FieldTextInput('0', Blockly.Blocks.math_number.validator), 'NUM');
                this.setOutput(true, Number);
                this.setTooltip(Educablocks.locales.getKey('LANG_MATH_NUMBER_TOOLTIP'));
            }
        };

        Blockly.Blocks.math_number.validator = function(text) {
            // Ensure that only a number may be entered.
            // TODO: Handle cases like 'o', 'ten', '1,234', '3,14', etc.
            var n = window.parseFloat(text || 0);
            return window.isNaN(n) ? null : String(n);
        };

        // Source: src/blocks/math_random/math_random.js
        /* global Blockly, JST, Educablocks */

        /**
         * math_random code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.math_random = function() {
            var value_num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_NONE);
            var value_dmax = Blockly.Arduino.valueToCode(this, 'DMAX', Blockly.Arduino.ORDER_ATOMIC);
            var code = '';
            var a = Educablocks.findPinMode(value_num);
            code += a['code'];
            value_num = a['pin'];

            a = Educablocks.findPinMode(value_dmax);
            code += a['code'];
            value_dmax = a['pin'];

            code += JST['math_random']({
                'value_num': value_num,
                'value_dmax': value_dmax
            });
            return [code, Blockly.Arduino.ORDER_ATOMIC];
        };

        Blockly.Blocks.math_random = {
            category: Educablocks.locales.getKey('LANG_CATEGORY_MATH'),
            helpUrl: Educablocks.URL_MATH,
            init: function() {
                this.setColour(Educablocks.LANG_COLOUR_MATH);
                this.appendValueInput('NUM', Number)
                    .appendField(Educablocks.locales.getKey('LANG_ADVANCED_MATH_RANDOM'))
                    .setCheck(Number);
                this.appendValueInput('DMAX', Number)
                    .appendField(Educablocks.locales.getKey('LANG_ADVANCED_MATH_RANDOM_AND'))
                    .setCheck(Number);
                this.setInputsInline(true);
                this.setOutput(true);
                this.setTooltip(Educablocks.locales.getKey('LANG_ADVANCED_MATH_RANDOM_TOOLTIP'));
            }
        };

        // Source: src/blocks/math_single/math_single.js
        /* global Blockly, Educablocks */
        /* jshint sub:true */

        /**
         * math_single code generation
         * @return {String} Code generated with block parameters
         */

        Blockly.Arduino.math_single = function() {
            // Math operators with single operand.
            var operator = this.getFieldValue('OP');
            var arg;
            var code = '';
            var a;

            if (operator === 'NEG') {
                // Negation is a special case given its different operator precedents.
                arg = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_UNARY_PREFIX) || '';
                a = Educablocks.findPinMode(arg);
                code += a['code'];
                arg = a['pin'];
                if (arg[0] === '-') {
                    // --3 is not legal in Dart.
                    arg = ' ' + arg;
                }
                code += '-' + arg;
                return [code, Blockly.Arduino.ORDER_UNARY_PREFIX];
            } else if (operator === 'SIN' || operator === 'COS' || operator === 'TAN') {
                arg = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_MULTIPLICATIVE) || '';
                a = Educablocks.findPinMode(arg);
                code += a['code'];
                arg = a['pin'];
            } else if (operator === 'LOG10') {
                code = '';
            } else {
                arg = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_NONE) || '';
                a = Educablocks.findPinMode(arg);
                code += a['code'];
                arg = a['pin'];
            }
            var PI = 3.14159;
            // First, handle cases which generate values that don't need parentheses.
            switch (operator) {
                case 'ABS':
                    code += 'abs(' + arg + ')';
                    break;
                case 'ROOT':
                    code += 'sqrt(' + arg + ')';
                    break;
                case 'LN':
                    code += 'log(' + arg + ')';
                    break;
                case 'EXP':
                    code += 'exp(' + arg + ')';
                    break;
                case 'POW10':
                    code += 'pow(10,' + arg + ')';
                    break;
                case 'SIN':
                    code += 'sin(' + arg + ' / 180 * ' + PI + ')';
                    break;
                case 'COS':
                    code += 'cos(' + arg + ' / 180 * ' + PI + ')';
                    break;
                case 'TAN':
                    code += 'tan(' + arg + ' / 180 * ' + PI + ')';
                    break;
            }
            if (code) {
                return [code, Blockly.Arduino.ORDER_UNARY_POSTFIX];
            }

            // Second, handle cases which generate values that may need parentheses.
            switch (operator) {
                case 'LOG10':
                    arg = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_NONE) || '';
                    a = Educablocks.findPinMode(arg);
                    code += a['code'];
                    arg = a['pin'];
                    code += 'log(' + arg + ') / log(10)';
                    break;
                case 'ASIN':
                    code += 'asin(' + arg + ') / ' + PI + ' * 180';
                    break;
                case 'ACOS':
                    code += 'acos(' + arg + ') / ' + PI + ' * 180';
                    break;
                case 'ATAN':
                    code += 'atan(' + arg + ') / ' + PI + ' * 180';
                    break;
                default:
                    throw 'Unknown math operator: ' + operator;
            }
            return [code, Blockly.Arduino.ORDER_MULTIPLICATIVE];
        };


        Blockly.Blocks.math_single = {
            // Advanced math operators with single operand.
            category: Educablocks.locales.getKey('LANG_CATEGORY_MATH'),
            helpUrl: Educablocks.URL_MATH,
            init: function() {
                this.setColour(Educablocks.LANG_COLOUR_MATH);
                this.setOutput(true, Number);
                this.appendValueInput('NUM')
                    .setCheck(Number)
                    .appendField(new Blockly.FieldDropdown([
                        [Educablocks.locales.getKey('LANG_MATH_SINGLE_OP_ROOT') || 'SQR ROOT', 'ROOT'],
                        [Educablocks.locales.getKey('LANG_MATH_SINGLE_OP_ABSOLUTE') || 'ABS', 'ABS'],
                        ['-', 'NEG'],
                        ['ln', 'LN'],
                        ['log10', 'LOG10'],
                        ['e^', 'EXP'],
                        ['10^', 'POW10']
                    ]), 'OP');
                // Assign 'this' to a variable for use in the tooltip closure below.
                var thisBlock = this;
                this.setTooltip(function() {
                    var mode = thisBlock.getFieldValue('OP');
                    return Blockly.Blocks.math_single.TOOLTIPS[mode];
                });
            }
        };

        Blockly.Blocks.math_single.TOOLTIPS = {
            ROOT: Educablocks.locales.getKey('LANG_MATH_SINGLE_TOOLTIP_ROOT'),
            ABS: Educablocks.locales.getKey('LANG_MATH_SINGLE_TOOLTIP_ABS'),
            NEG: Educablocks.locales.getKey('LANG_MATH_SINGLE_TOOLTIP_NEG'),
            LN: Educablocks.locales.getKey('LANG_MATH_SINGLE_TOOLTIP_LN'),
            LOG10: Educablocks.locales.getKey('LANG_MATH_SINGLE_TOOLTIP_LOG10'),
            EXP: Educablocks.locales.getKey('LANG_MATH_SINGLE_TOOLTIP_EXP'),
            POW10: Educablocks.locales.getKey('LANG_MATH_SINGLE_TOOLTIP_POW10')
        };

        // Source: src/blocks/pin_analog/pin_analog.js
        /* global Blockly, profiles, Educablocks */

        /**
         * pin code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.pin_analog = function() {
            var pin = this.getFieldValue('PIN') || '';
            return [pin, Blockly.Arduino.ORDER_NONE];
        };

        Blockly.Blocks.pin_analog = {
            category: Educablocks.locales.getKey('LANG_CATEGORY_ADVANCED'),
            helpUrl: Educablocks.URL_PIN_FUNC,
            init: function() {
                this.setColour(Educablocks.LANG_COLOUR_ADVANCED);
                this.appendDummyInput('')
                    .appendField(Educablocks.locales.getKey('LANG_VARIABLES_PIN_ANALOG'))
                    .appendField(new Blockly.FieldDropdown(profiles.default.analog), 'PIN');

                this.setInputsInline(true);
                this.setOutput(true, Number);
                this.setTooltip(Educablocks.locales.getKey('LANG_VARIABLES_PIN_TOOLTIP'));
            }
        };

        // Source: src/blocks/pin_digital/pin_digital.js
        /* global Blockly, profiles, Educablocks */

        /**
         * pin code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.pin_digital = function() {
            var pin = this.getFieldValue('PIN') || '';
            return [pin, Blockly.Arduino.ORDER_NONE];
        };

        Blockly.Blocks.pin_digital = {
            category: Educablocks.locales.getKey('LANG_CATEGORY_ADVANCED'),
            helpUrl: Educablocks.URL_PIN_FUNC,
            init: function() {
                this.setColour(Educablocks.LANG_COLOUR_ADVANCED);
                this.appendDummyInput('')
                    .appendField(Educablocks.locales.getKey('LANG_VARIABLES_PIN_DIGITAL'))
                    .appendField(new Blockly.FieldDropdown(profiles.default.digital), 'PIN');

                this.setInputsInline(true);
                this.setOutput(true, Number);
                this.setTooltip(Educablocks.locales.getKey('LANG_VARIABLES_PIN_TOOLTIP'));
            },
            onchange: function() {
                if (!this.workspace) {
                    // Block has been deleted.
                    return;
                }
                if (this.getFieldValue('PIN') === '0') {
                    try {
                        this.setWarningText(Educablocks.locales.getKey('LANG_VARIABLES_PIN_DIGITAL0'));
                    } catch (e) {}
                } else {
                    try {
                        this.setWarningText(null);
                    } catch (e) {}
                }
            }
        };

        // Source: src/blocks/procedures_callnoreturn/procedures_callnoreturn.js
        /* global Blockly, JST, Educablocks */
        /**
         * procedures_callnoreturn code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.procedures_callnoreturn = function() {
            // Call a procedure with a return value.
            var funcName = this.getFieldValue('PROCEDURES');
            var args = [];
            var code = '';
            var a;
            try {
                for (var x = 0; x < this.getVariables(funcName).length; x++) {
                    args[x] = Blockly.Arduino.valueToCode(this, 'ARG' + x, Blockly.Arduino.ORDER_NONE) || '';
                    a = Educablocks.findPinMode(args[x]);
                    code += a['code'];
                    args[x] = a['pin'];
                }
            } catch (e) {}
            var funcArgs = args.join(', ');
            code += JST['procedures_callnoreturn']({
                'funcName': funcName,
                'funcArgs': funcArgs
            });
            return code;
        };
        Blockly.Blocks.procedures_callnoreturn = {
            // Variable getter.
            category: Educablocks.locales.getKey('LANG_CATEGORY_PROCEDURES'), // Variables are handled specially.
            helpUrl: Educablocks.URL_PROC_NO_RET,
            init: function() {
                this.setColour(Educablocks.LANG_COLOUR_PROCEDURES);
                this.appendDummyInput('DUMMY').appendField(new Blockly.FieldDropdown(this.getProcedures()), 'PROCEDURES');
                this.setPreviousStatement(true);
                this.setNextStatement(true);
                this.setTooltip(Educablocks.locales.getKey('LANG_PROCEDURES_CALLNORETURN_TOOLTIP'));
                this.arguments_ = this.getVariables(this.getFieldValue('PROCEDURES'));
                this.quarkConnections_ = null;
                this.quarkArguments_ = null;
                this.last_variables = this.getVariables(this.getFieldValue('PROCEDURES'));
            },
            validName: function(name) {
                if (name && name.length > 0) {
                    var i = 0;
                    while (i < name.length) {
                        if (!isNaN(parseFloat(name[i]))) {
                            name = name.substring(1, name.length);
                        } else {
                            break;
                        }
                    }
                    name = name.replace(/([ ])/g, '_');
                    name = name.replace(/([áàâä])/g, 'a');
                    name = name.replace(/([éèêë])/g, 'e');
                    name = name.replace(/([íìîï])/g, 'i');
                    name = name.replace(/([óòôö])/g, 'o');
                    name = name.replace(/([úùûü])/g, 'u');
                    name = name.replace(/([ñ])/g, 'n');
                    name = name.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|<>\-\&\Ç\%\=\~\{\}\¿\¡\"\@\:\;\-\"\·\|\º\ª\¨\'\·\̣\─\ç\`\´\¨\^])/g, '');
                    i = 0;
                    while (i < name.length) {
                        if (!isNaN(parseFloat(name[i]))) {
                            name = name.substring(1, name.length);
                        } else {
                            break;
                        }
                    }
                }
                return name;
            },
            getProcedures: function() {
                var procedures = Blockly.Procedures.allProcedures();
                var procedures_dropdown = [];
                if (procedures[0].length > 0) {
                    for (var i in procedures[0]) {
                        var proc_name = procedures[0][i][0];
                        proc_name = this.validName(proc_name);
                        procedures_dropdown.push([proc_name, proc_name]);
                    }
                } else {
                    procedures_dropdown.push([Educablocks.locales.getKey('LANG_PROCEDURES_DEFNORETURN_PROCEDURE'), Educablocks.locales.getKey('LANG_PROCEDURES_DEFNORETURN_PROCEDURE')]);
                }
                return procedures_dropdown;
            },
            maxVariableNumber: function() {
                var procedures = Blockly.Procedures.allProcedures();
                var procedures_dropdown = [];
                var max_num = 0;
                if (procedures[0].length > 0 || procedures[1].length > 0) {
                    for (var i in procedures[0]) {
                        if (procedures[0][i][1].length > max_num) { // if the length of the variable array is larger than the max_num, equal max_num to that number
                            max_num = procedures[0][i][1].length;
                        }
                    }
                    return max_num;
                } else {
                    procedures_dropdown.push(['', '']);
                }
            },
            getVariables: function(funcName) {
                try {
                    var procedures = Blockly.Procedures.allProcedures();
                    var procedures_dropdown = [];
                    if (procedures[0].length > 0) {
                        for (var i in procedures[0]) {
                            if (procedures[0][i][0] === funcName) {
                                return procedures[0][i][1];
                            }
                        }
                    } else {
                        procedures_dropdown.push(['', '']);
                    }
                } catch (e) {}
            },
            exists: function() {
                var procedures = Blockly.Procedures.allProcedures();
                if (procedures[0].length > 0) {
                    for (var i in procedures[0]) {
                        if (procedures[0][i][0] === this.getFieldValue('PROCEDURES')) {
                            return true;
                        }
                    }
                } else {
                    return false;
                }
            },
            onchange: function() {
                if (!this.workspace) {
                    // Block has been deleted.
                    return;
                }
                if (this.getFieldValue('PROCEDURES') !== this.last_procedure && this.getFieldValue('PROCEDURES')) {
                    this.changeVariables();
                    this.last_procedure = this.getFieldValue('PROCEDURES');
                    this.last_variables = this.getVariables(this.getFieldValue('PROCEDURES'));
                } else if (this.getVariables(this.getFieldValue('PROCEDURES')) !== this.last_variables) {
                    this.addVariables();
                    this.last_variables = this.getVariables(this.getFieldValue('PROCEDURES'));
                    this.last_procedure = this.getFieldValue('PROCEDURES');
                }
                if (!this.exists()) {
                    try {
                        this.setWarningText(Educablocks.locales.getKey('LANG_PROCEDURES_CALL_WITHOUT_DEFINITION'));
                    } catch (e) {}
                } else {
                    try {
                        this.setWarningText(null);
                    } catch (e) {}
                }
            },
            addVariables: function() {
                var func_variables = this.getVariables(this.getFieldValue('PROCEDURES'));
                var var_num = 0;
                if (func_variables) {
                    if (!this.last_variables) {
                        this.last_variables = this.getVariables(this.getFieldValue('PROCEDURES'));
                    }
                    if (func_variables.length >= this.last_variables.length) {
                        var_num = func_variables.length;
                    } else if (this.last_variables) {
                        try {
                            var_num = this.last_variables.length;
                        } catch (e) {}
                    }
                    for (var x = 0; x < var_num; x++) {
                        if (this.getInput('ARG' + x) === null) {
                            this.appendValueInput('ARG' + x).appendField(func_variables[x], 'ARG_NAME' + x).setAlign(Blockly.ALIGN_RIGHT);
                        } else {
                            if (func_variables[x] && this.getFieldValue('ARG_NAME' + x)) {
                                this.setFieldValue(func_variables[x], 'ARG_NAME' + x);
                            } else {
                                this.removeInput('ARG' + x);
                            }
                        }
                    }
                    this.arguments_ = func_variables;
                }
            },
            renameProcedure: function(oldName, newName) {
                if (this.last_procedure) {
                    var procedures = this.getProcedures();
                    for (var i in procedures) {
                        if (Blockly.Names.equals(oldName, procedures[i][0])) {
                            this.removeInput('DUMMY');
                            this.appendDummyInput('DUMMY').appendField(new Blockly.FieldDropdown(this.getProcedures()), 'PROCEDURES');
                        }
                    }
                    if (this.last_procedure === oldName) {
                        this.last_procedure = newName;
                    }
                    try {
                        this.setFieldValue(this.last_procedure, 'PROCEDURES');
                    } catch (e) {}
                }
            },
            changeVariables: function() {
                var func_variables = this.getVariables(this.getFieldValue('PROCEDURES')); //get the variables of the actual function
                for (var i = 0; i < this.maxVariableNumber(); i++) { // remove all the possible variable inputs
                    if (this.getInput('ARG' + i) === null) {
                        break;
                    }
                    this.removeInput('ARG' + i);
                }
                for (var variable in func_variables) {
                    this.appendValueInput('ARG' + variable).appendField(func_variables[variable]).setAlign(Blockly.ALIGN_RIGHT);
                }
                this.arguments_ = func_variables;
            },
            mutationToDom: function() {
                // Save the name and arguments (none of which are editable).
                var container = document.createElement('mutation');
                container.setAttribute('name', this.getFieldValue('PROCEDURES'));
                if (typeof this.arguments_ === 'undefined') {
                    this.arguments_ = this.getVariables(this.getFieldValue('PROCEDURES'));
                }
                if (typeof this.arguments_ === 'undefined') {
                    this.arguments_ = [];
                }
                for (var x = 0; x < this.arguments_.length; x++) {
                    var parameter = document.createElement('arg');
                    parameter.setAttribute('name', this.arguments_[x]);
                    container.appendChild(parameter);
                }
                return container;
            },
            domToMutation: function(xmlElement) {
                this.xmlElement = xmlElement;
                // Restore the name and parameters.
                var name = xmlElement.getAttribute('name');
                this.last_procedure = name;
                this.setFieldValue(name, 'PROCEDURES');
                for (var x = 0; x < xmlElement.childNodes.length; x++) {
                    this.appendValueInput('ARG' + x).appendField(xmlElement.childNodes[x].getAttribute('name'), 'ARG_NAME' + x).setAlign(Blockly.ALIGN_RIGHT);
                }
            }
        };
        // Source: src/blocks/procedures_callreturn/procedures_callreturn.js
        /* global Blockly, JST, Educablocks */
        /**
         * procedures_callreturn code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.procedures_callreturn = function() {
            // Call a procedure with a return value.
            var funcName = this.getFieldValue('PROCEDURES');
            var args = [];
            var a;
            var code = '';
            for (var x = 0; x < this.getVariables(funcName).length; x++) {
                args[x] = Blockly.Arduino.valueToCode(this, 'ARG' + x, Blockly.Arduino.ORDER_NONE) || 'null';

                a = Educablocks.findPinMode(args[x]);
                code += a['code'];
                args[x] = a['pin'];
            }
            var funcArgs = args.join(', ');
            code += JST['procedures_callreturn']({
                'funcName': funcName,
                'funcArgs': funcArgs
            });
            //funcName + '(' + args.join(', ') + ')';
            return [code, Blockly.Arduino.ORDER_UNARY_POSTFIX];
        };
        Blockly.Blocks.procedures_callreturn = {
            // Variable getter.
            category: Educablocks.locales.getKey('LANG_CATEGORY_PROCEDURES'), // Variables are handled specially.
            helpUrl: Educablocks.URL_PROC,
            init: function() {
                this.setColour(Educablocks.LANG_COLOUR_PROCEDURES);
                this.appendDummyInput('DUMMY').appendField(new Blockly.FieldDropdown(this.getProcedures()), 'PROCEDURES');
                this.setOutput(true);
                this.setTooltip(Educablocks.locales.getKey('LANG_PROCEDURES_CALLRETURN_TOOLTIP'));
                this.arguments_ = this.getVariables(this.getFieldValue('PROCEDURES'));
                this.quarkConnections_ = null;
                this.quarkArguments_ = null;
                this.last_variables = this.getVariables(this.getFieldValue('PROCEDURES'));
            },
            validName: function(name) {
                if (name && name.length > 0) {
                    var i = 0;
                    while (i < name.length) {
                        if (!isNaN(parseFloat(name[i]))) {
                            name = name.substring(1, name.length);
                        } else {
                            break;
                        }
                    }
                    name = name.replace(/([ ])/g, '_');
                    name = name.replace(/([áàâä])/g, 'a');
                    name = name.replace(/([éèêë])/g, 'e');
                    name = name.replace(/([íìîï])/g, 'i');
                    name = name.replace(/([óòôö])/g, 'o');
                    name = name.replace(/([úùûü])/g, 'u');
                    name = name.replace(/([ñ])/g, 'n');
                    name = name.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|<>\-\&\Ç\%\=\~\{\}\¿\¡\"\@\:\;\-\"\·\|\º\ª\¨\'\·\̣\─\ç\`\´\¨\^])/g, '');
                    i = 0;
                    while (i < name.length) {
                        if (!isNaN(parseFloat(name[i]))) {
                            name = name.substring(1, name.length);
                        } else {
                            break;
                        }
                    }
                    for (var j in Blockly.Arduino.RESERVED_WORDS_) {
                        var reserved_words = Blockly.Arduino.RESERVED_WORDS_.split(',');
                        if (name === reserved_words[j]) {
                            this.setWarningText(Educablocks.locales.getKey('LANG_RESERVED_WORDS'));
                            name = '';
                            break;
                        } else {
                            this.setWarningText(null);
                        }
                    }
                }
                return name;
            },
            getProcedures: function() {
                var procedures = Blockly.Procedures.allProcedures();
                var procedures_dropdown = [];
                if (procedures[1].length > 0) {
                    for (var i in procedures[1]) {
                        var proc_name = procedures[1][i][0];
                        proc_name = this.validName(proc_name);
                        procedures_dropdown.push([proc_name, proc_name]);
                    }
                } else {
                    procedures_dropdown.push([Educablocks.locales.getKey('LANG_PROCEDURES_DEFRETURN_PROCEDURE'), Educablocks.locales.getKey('LANG_PROCEDURES_DEFRETURN_PROCEDURE')]);
                }
                return procedures_dropdown;
            },
            maxVariableNumber: function() {
                var procedures = Blockly.Procedures.allProcedures();
                var procedures_dropdown = [];
                var max_num = 0;
                if (procedures[1].length > 0) {
                    for (var i in procedures[1]) {
                        if (procedures[1][i][1].length > max_num) { // if the length of the variable array is larger than the max_num, equal max_num to that number
                            max_num = procedures[1][i][1].length;
                        }
                    }
                    return max_num;
                } else {
                    procedures_dropdown.push(['', '']);
                }
            },
            getVariables: function(funcName) {
                try {
                    var procedures = Blockly.Procedures.allProcedures();
                    var procedures_dropdown = [];
                    if (procedures[1].length > 0) {
                        for (var i in procedures[1]) {
                            if (procedures[1][i][0] === funcName) {
                                return procedures[1][i][1];
                            }
                        }
                    } else {
                        procedures_dropdown.push(['', '']);
                    }
                } catch (e) {}
            },
            exists: function() {
                var procedures = Blockly.Procedures.allProcedures();
                if (procedures[1].length > 0) {
                    for (var i in procedures[1]) {
                        if (procedures[1][i][0] === this.getFieldValue('PROCEDURES')) {
                            return true;
                        }
                    }
                } else {
                    return false;
                }
            },
            onchange: function() {
                if (!this.workspace) {
                    // Block has been deleted.
                    return;
                }
                if (this.getFieldValue('PROCEDURES') !== this.last_procedure && this.getFieldValue('PROCEDURES')) {
                    this.changeVariables();
                    this.last_procedure = this.getFieldValue('PROCEDURES');
                    this.last_variables = this.getVariables(this.getFieldValue('PROCEDURES'));
                } else if (this.getVariables(this.getFieldValue('PROCEDURES')) !== this.last_variables) {
                    this.addVariables();
                    this.last_variables = this.getVariables(this.getFieldValue('PROCEDURES'));
                    this.last_procedure = this.getFieldValue('PROCEDURES');
                }
                if (!this.exists()) {
                    try {
                        this.setWarningText(Educablocks.locales.getKey('LANG_PROCEDURES_CALL_WITHOUT_DEFINITION'));
                    } catch (e) {}
                } else {
                    try {
                        this.setWarningText(null);
                    } catch (e) {}
                }
            },
            addVariables: function() {
                var func_variables = this.getVariables(this.getFieldValue('PROCEDURES'));
                var var_num = 0;
                if (func_variables) {
                    if (!this.last_variables) {
                        this.last_variables = this.getVariables(this.getFieldValue('PROCEDURES'));
                    }
                    if (func_variables.length >= this.last_variables.length) {
                        var_num = func_variables.length;
                    } else if (this.last_variables) {
                        try {
                            var_num = this.last_variables.length;
                        } catch (e) {}
                    }
                    for (var x = 0; x < var_num; x++) {
                        if (this.getInput('ARG' + x) === null) {
                            this.appendValueInput('ARG' + x).appendField(func_variables[x], 'ARG_NAME' + x).setAlign(Blockly.ALIGN_RIGHT);
                        } else {
                            if (func_variables[x] && this.getFieldValue('ARG_NAME' + x)) {
                                this.setFieldValue(func_variables[x], 'ARG_NAME' + x);
                            } else {
                                this.removeInput('ARG' + x);
                            }
                        }
                    }
                    this.arguments_ = func_variables;
                }
            },
            renameProcedure: function(oldName, newName) {
                if (this.last_procedure) {
                    var procedures = this.getProcedures();
                    for (var i in procedures) {
                        if (Blockly.Names.equals(oldName, procedures[i][0])) {
                            this.removeInput('DUMMY');
                            this.appendDummyInput('DUMMY').appendField(new Blockly.FieldDropdown(this.getProcedures()), 'PROCEDURES');
                        }
                    }
                    if (this.last_procedure === oldName) {
                        this.last_procedure = newName;
                    }
                    try {
                        this.setFieldValue(this.last_procedure, 'PROCEDURES');
                    } catch (e) {}
                }
            },
            changeVariables: function() {
                var func_variables = this.getVariables(this.getFieldValue('PROCEDURES')); //get the variables of the actual function
                for (var i = 0; i < this.maxVariableNumber(); i++) { // remove all the possible variable inputs
                    if (this.getInput('ARG' + i) === null) {
                        break;
                    }
                    this.removeInput('ARG' + i);
                }
                for (var variable in func_variables) {
                    this.appendValueInput('ARG' + variable).appendField(func_variables[variable]).setAlign(Blockly.ALIGN_RIGHT);
                }
                this.arguments_ = func_variables;
            },
            mutationToDom: function() {
                // Save the name and arguments (none of which are editable).
                var container = document.createElement('mutation');
                container.setAttribute('name', this.getFieldValue('PROCEDURES'));
                if (typeof this.arguments_ === 'undefined') {
                    this.arguments_ = this.getVariables(this.getFieldValue('PROCEDURES'));
                }
                if (typeof this.arguments_ === 'undefined') {
                    this.arguments_ = [];
                }
                for (var x = 0; x < this.arguments_.length; x++) {
                    var parameter = document.createElement('arg');
                    parameter.setAttribute('name', this.arguments_[x]);
                    container.appendChild(parameter);
                }
                return container;
            },
            domToMutation: function(xmlElement) {
                this.xmlElement = xmlElement;
                // Restore the name and parameters.
                var name = xmlElement.getAttribute('name');
                this.last_procedure = name;
                this.setFieldValue(name, 'PROCEDURES');
                for (var x = 0; x < xmlElement.childNodes.length; x++) {
                    this.appendValueInput('ARG' + x).appendField(xmlElement.childNodes[x].getAttribute('name'), 'ARG_NAME' + x).setAlign(Blockly.ALIGN_RIGHT);
                }
            }
        };
        // Source: src/blocks/procedures_defnoreturn/procedures_defnoreturn.js
        /* global Blockly, JST, Educablocks */
        /**
         * procedures_defnoreturn code generation
         * @return {String} Code generated with block parameters
         */
        // Defining a procedure without a return value uses the same generator as
        // a procedure with a return value.
        Blockly.Arduino.procedures_defnoreturn = function() {
            // Define a procedure with a return value.
            var funcName = this.getFieldValue('NAME');
            var branch = Blockly.Arduino.statementToCode(this, 'STACK');
            branch = branch.replace(/&quot;/g, '"');
            if (Blockly.Arduino.INFINITE_LOOP_TRAP) {
                branch = Blockly.Arduino.INFINITE_LOOP_TRAP.replace(/%1/g, '\'' + this.id + '\'') + branch;
            }
            // branch=branch.replace(/&amp;/g, '');

            var returnType = 'void';
            var args = this.paramString;
            var code = JST['procedures_defnoreturn']({
                'returnType': returnType,
                'funcName': funcName,
                'args': args,
                'branch': branch
            });
            // code=code.replace(/&amp;/g, '');

            code = Blockly.Arduino.scrub_(this, code);
            Blockly.Arduino.definitions_[funcName] = code;
            return null;
        };
        Blockly.Blocks.procedures_defnoreturn = {
            // Define a procedure with no return value.
            category: Educablocks.locales.getKey('LANG_CATEGORY_PROCEDURES'),
            helpUrl: Educablocks.URL_PROC_NO_RET,
            init: function() {
                this.setColour(Educablocks.LANG_COLOUR_PROCEDURES);
                var name = Blockly.Procedures.findLegalName(Educablocks.locales.getKey('LANG_PROCEDURES_DEFNORETURN_PROCEDURE'), this);
                this.appendDummyInput().appendField(new Blockly.FieldTextInput(name, Blockly.Procedures.rename), 'NAME').appendField('', 'PARAMS');
                // this.appendDummyInput().appendField(new Blockly.FieldTextInput(name), 'NAME').appendField('', 'PARAMS');
                this.appendStatementInput('STACK').appendField(Educablocks.locales.getKey('LANG_PROCEDURES_DEFNORETURN_DO'));
                this.setMutator(new Blockly.Mutator(['procedures_mutatorarg']));
                this.setTooltip(Educablocks.locales.getKey('LANG_PROCEDURES_DEFNORETURN_TOOLTIP'));
                this.arguments_ = [];
                this.type_arguments_ = [];
            },
            updateParams_: function() {
                // Check for duplicated arguments.
                var badArg = false;
                var hash = {};
                for (var x = 0; x < this.arguments_.length; x++) {
                    if (hash['arg_' + this.arguments_[x].toLowerCase()]) {
                        badArg = true;
                        break;
                    }
                    hash['arg_' + this.arguments_[x].toLowerCase()] = true;
                }
                if (badArg) {
                    try {
                        this.setWarningText(Educablocks.locales.getKey('LANG_PROCEDURES_DEF_DUPLICATE_WARNING'));
                    } catch (err) {
                        console.log('Captured error: ', err);
                    }
                } else {
                    this.setWarningText(null);
                }
                // Merge the arguments into a human-readable list.
                var params = [];
                for (var i in this.arguments_) {
                    params.push(this.type_arguments_[i] + ' ' + this.arguments_[i]);
                }
                this.paramString = params.join(', ');
                this.setFieldValue(this.paramString, 'PARAMS');
            },
            mutationToDom: function() {
                var container = document.createElement('mutation');
                for (var x = 0; x < this.arguments_.length; x++) {
                    var parameter = document.createElement('arg_name');
                    parameter.setAttribute('name', this.arguments_[x]);
                    container.appendChild(parameter);
                    parameter = document.createElement('arg_type');
                    parameter.setAttribute('name', this.type_arguments_[x]);
                    container.appendChild(parameter);
                }
                return container;
            },
            domToMutation: function(xmlElement) {
                this.arguments_ = [];
                this.type_arguments_ = [];
                var childNode;
                for (var x = 0; x < xmlElement.childNodes.length; x++) {
                    childNode = xmlElement.childNodes[x];
                    if (childNode.nodeName.toLowerCase() === 'arg_name') {
                        this.arguments_.push(childNode.getAttribute('name'));
                    }
                    if (childNode.nodeName.toLowerCase() === 'arg_type') {
                        this.type_arguments_.push(childNode.getAttribute('name'));
                    }
                }
                this.updateParams_();
            },
            decompose: function(workspace) {
                var containerBlock = Blockly.Block.obtain(workspace, 'procedures_mutatorcontainer');
                containerBlock.initSvg();
                var connection = containerBlock.getInput('STACK').connection;
                for (var x = 0; x < this.arguments_.length; x++) {
                    var paramBlock = Blockly.Block.obtain(workspace, 'procedures_mutatorarg');
                    paramBlock.initSvg();
                    paramBlock.setFieldValue(this.type_arguments_[x], 'TYPE');
                    paramBlock.setFieldValue(this.arguments_[x], 'NAME');
                    // Store the old location.
                    paramBlock.oldLocation = x;
                    connection.connect(paramBlock.previousConnection);
                    connection = paramBlock.nextConnection;
                }
                // Initialize procedure's callers with blank IDs.
                Blockly.Procedures.mutateCallers(this.getFieldValue('NAME'), this.workspace, this.arguments_, null);
                Blockly.Procedures.mutateCallers(this.getFieldValue('TYPE'), this.workspace, this.type_arguments_, null);
                return containerBlock;
            },
            compose: function(containerBlock) {
                this.arguments_ = [];
                this.paramIds_ = [];
                this.type_arguments_ = [];
                var paramBlock = containerBlock.getInputTargetBlock('STACK');
                var varName;
                while (paramBlock) {
                    varName = paramBlock.getFieldValue('NAME');
                    this.type_arguments_.push(paramBlock.getFieldValue('TYPE'));
                    this.arguments_.push(varName);
                    this.paramIds_.push(paramBlock.id);
                    paramBlock = paramBlock.nextConnection && paramBlock.nextConnection.targetBlock();
                }
                this.updateParams_();
                Blockly.Procedures.mutateCallers(this.getFieldValue('NAME'), this.workspace, this.arguments_, this.paramIds_);
            },
            dispose: function() {
                var name = this.getFieldValue('NAME');
                var editable = this.editable;
                var workspace = this.workspace;
                // Call parent's destructor.
                Blockly.Block.prototype.dispose.apply(this, arguments);
                if (editable) {
                    // Dispose of any callers.
                    Blockly.Procedures.disposeCallers(name, workspace);
                }
            },
            getProcedureDef: function() {
                // Return the name of the defined procedure,
                // a list of all its arguments,
                // and that it DOES NOT have a return value.
                return [this.getFieldValue('NAME'), this.arguments_, false];
            },
            getVars: function() {
                return this.arguments_;
            },
            renameVar: function(oldName, newName) {
                var change = false;
                for (var x = 0; x < this.arguments_.length; x++) {
                    if (Blockly.Names.equals(oldName, this.arguments_[x])) {
                        newName = this.validName(newName);
                        this.arguments_[x] = newName;
                        change = true;
                    }
                }
                if (change) {
                    this.updateParams_();
                    // Update the mutator's variables if the mutator is open.
                    if (this.mutator.isVisible_()) {
                        var blocks = this.mutator.workspace_.getAllBlocks();
                        var block;
                        for (x = 0; blocks.length; x++) {
                            block = blocks[x];
                            if (block.type === 'procedures_mutatorarg' && Blockly.Names.equals(oldName, block.getFieldValue('NAME'))) {
                                block.setFieldValue(newName, 'NAME');
                            }
                        }
                    }
                }
            },
            validName: function(name) {
                if (name && name.length > 0) {
                    var i = 0;
                    while (i < name.length) {
                        if (!isNaN(parseFloat(name[i]))) {
                            name = name.substring(1, name.length);
                        } else {
                            break;
                        }
                    }
                    name = name.replace(/([ ])/g, '_');
                    name = name.replace(/([áàâä])/g, 'a');
                    name = name.replace(/([éèêë])/g, 'e');
                    name = name.replace(/([íìîï])/g, 'i');
                    name = name.replace(/([óòôö])/g, 'o');
                    name = name.replace(/([úùûü])/g, 'u');
                    name = name.replace(/([ñ])/g, 'n');
                    name = name.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|<>\-\&\Ç\%\=\~\{\}\¿\¡\"\@\:\;\-\"\·\|\º\ª\¨\'\·\̣\─\ç\`\´\¨\^])/g, '');
                    i = 0;
                    while (i < name.length) {
                        if (!isNaN(parseFloat(name[i]))) {
                            name = name.substring(1, name.length);
                        } else {
                            break;
                        }
                    }
                    for (var j in Blockly.Arduino.RESERVED_WORDS_) {
                        this.reserved_words = Blockly.Arduino.RESERVED_WORDS_.split(',');
                        if (name === this.reserved_words[j]) {
                            this.setWarningText(Educablocks.locales.getKey('LANG_RESERVED_WORDS'));
                            name = '';
                            break;
                        } else {
                            this.setWarningText(null);
                        }
                    }
                }
                return name;
            },
            onchange: function() {
                if (this.last_procedure !== this.getFieldValue('NAME')) {
                    var name = this.getFieldValue('NAME');
                    name = this.validName(name);
                    try {
                        this.setFieldValue(name, 'NAME');
                    } catch (e) {}
                    this.last_procedure = name;
                }
            }
        };
        Blockly.Blocks.procedures_mutatorcontainer = {
            // Procedure container (for mutator dialog).
            init: function() {
                this.setColour(Educablocks.LANG_COLOUR_PROCEDURES);
                this.appendDummyInput().appendField(Educablocks.locales.getKey('LANG_PROCEDURES_MUTATORCONTAINER_Field'));
                this.appendStatementInput('STACK');
                this.setTooltip('');
                this.contextMenu = false;
            }
        };
        Blockly.Blocks.procedures_mutatorarg = {
            // Procedure argument (for mutator dialog).
            init: function() {
                this.setColour(Educablocks.LANG_COLOUR_PROCEDURES);
                this.appendDummyInput().appendField(Educablocks.locales.getKey('LANG_PROCEDURES_MUTATORARG_Field')).appendField(new Blockly.FieldDropdown([
                    ['int', 'int'],
                    ['String', 'String']
                ]), 'TYPE').appendField(new Blockly.FieldTextInput('x', Blockly.Blocks.procedures_mutatorarg.validator), 'NAME');
                this.setPreviousStatement(true);
                this.setNextStatement(true);
                this.setTooltip('');
                this.contextMenu = false;
            },
            onchange: function() {
                if (this.last_variable !== this.getFieldValue('NAME')) {
                    var name = this.getFieldValue('NAME');
                    name = this.validName(name);
                    try {
                        this.setFieldValue(name, 'NAME');
                    } catch (e) {}
                    this.last_variable = name;
                }
            },
            validName: Blockly.Blocks.procedures_defnoreturn.validName
        };
        Blockly.Blocks.procedures_mutatorarg.validator = function(newVar) {
            // Merge runs of whitespace.  Strip leading and trailing whitespace.
            // Beyond this, all names are legal.
            newVar = newVar.replace(/[\s\xa0]+/g, ' ').replace(/^ | $/g, '');
            return newVar || null;
        };

        // Source: src/blocks/procedures_defreturn/procedures_defreturn.js
        /* global Blockly, JST, Educablocks */
        /**
         * procedures_defreturn code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.procedures_defreturn = function() {
            // Define a procedure with a return value.
            var funcName = this.getFieldValue('NAME');
            var branch = Blockly.Arduino.statementToCode(this, 'STACK');
            branch = branch.replace(/&quot;/g, '"');

            if (Blockly.Arduino.INFINITE_LOOP_TRAP) {
                branch = Blockly.Arduino.INFINITE_LOOP_TRAP.replace(/%1/g, '\'' + this.id + '\'') + branch;
            }
            var returnValue = Blockly.Arduino.valueToCode(this, 'RETURN', Blockly.Arduino.ORDER_NONE) || '';
            var code = '';

            returnValue = returnValue.replace(/&quot;/g, '"');
            var returnType = this.getReturnType();
            if (returnValue) {
                var a = Educablocks.findPinMode(returnValue);
                returnValue = a['code'];
                returnValue += '  return ' + a['pin'] + ';\n';
            }
            var args = this.paramString;
            code += JST['procedures_defreturn']({
                'returnType': returnType,
                'funcName': funcName,
                'args': args,
                'branch': branch,
                'returnValue': returnValue
            });
            // code=code.replace(/&amp;/g, '');

            code = Blockly.Arduino.scrub_(this, code);
            Blockly.Arduino.definitions_[funcName] = code;
            return null;
        };
        Blockly.Blocks.procedures_defreturn = {
            // Define a procedure with a return value.
            category: Educablocks.locales.getKey('LANG_CATEGORY_PROCEDURES'), // Procedures are handled specially.
            helpUrl: Educablocks.URL_PROC,
            init: function() {
                this.setColour(Educablocks.LANG_COLOUR_PROCEDURES);
                var name = Blockly.Procedures.findLegalName(Educablocks.locales.getKey('LANG_PROCEDURES_DEFRETURN_PROCEDURE'), this);
                this.appendDummyInput().appendField(new Blockly.FieldTextInput(name, Blockly.Procedures.rename), 'NAME').appendField('', 'PARAMS');
                this.appendStatementInput('STACK').appendField(Educablocks.locales.getKey('LANG_PROCEDURES_DEFRETURN_DO'));
                this.appendValueInput('RETURN').setAlign(Blockly.ALIGN_RIGHT).appendField(Educablocks.locales.getKey('LANG_PROCEDURES_DEFRETURN_RETURN'));
                this.setMutator(new Blockly.Mutator(['procedures_mutatorarg']));
                this.setTooltip(Educablocks.locales.getKey('LANG_PROCEDURES_DEFRETURN_TOOLTIP'));
                this.arguments_ = [];
            },
            isVariable: function(varValue) {
                for (var i in Blockly.Variables.allVariables()) {
                    if (Blockly.Variables.allVariables()[i] === varValue) {
                        return true;
                    }
                }
                return false;
            },
            getReturnType: function() {
                var returnType;
                var returnValue = Blockly.Arduino.valueToCode(this, 'RETURN', Blockly.Arduino.ORDER_NONE) || '';
                var a = Educablocks.findPinMode(returnValue);
                // code+=a['code'];
                returnValue = a['pin'];

                var isFunction = false;

                for (var i in Blockly.Arduino.definitions_) {
                    if (Blockly.Arduino.definitions_[i].search(returnValue + ' \\(') >= 0) {
                        isFunction = true;
                        break;
                    }
                }
                if (!returnValue) {
                    returnType = 'void';
                }
                if (returnValue.search('"') >= 0) {
                    returnType = 'String';
                } else if (isFunction) { //returnValue.search('\\(') >= 0 && returnValue.search('\\)') >= 0) {
                    for (i in Blockly.Arduino.definitions_) {
                        if (Blockly.Arduino.definitions_[i].search(returnValue) >= 0) {
                            if (Blockly.Arduino.definitions_[i].substring(0, 3) === 'int' || Blockly.Arduino.definitions_[i].substring(0, 3) === '//b') { //SALIDASbat function
                                if (Blockly.Arduino.definitions_[i].substring(0, 5) === 'int *' || Blockly.Arduino.definitions_[i].substring(0, 5) === 'int _') {
                                    returnType = 'int *';
                                } else {
                                    returnType = 'int';
                                }
                            } else if (Blockly.Arduino.definitions_[i].substring(0, 3) === 'Str') {
                                returnType = 'String';
                            } else {
                                returnType = '';
                            }
                        }
                    }
                } else if (this.isVariable(returnValue)) {
                    returnType = Educablocks.variables[returnValue][0];
                } else if ((returnValue.search('analogRead') >= 0) || (returnValue.search('digitalRead') >= 0) || (returnValue.search('Distanc') >= 0) || (!isNaN(parseFloat(returnValue)) || (returnValue.search('random') >= 0)) || (returnValue.search('map') >= 0) || returnValue.search('\\[') >= 0 || (returnValue.search('abs') >= 0) || (returnValue.search('sqrt') >= 0) || (returnValue.search('log') >= 0) || (returnValue.search('log') >= 0) || (returnValue.search('exp') >= 0) || (returnValue.search('pow') >= 0)) {
                    returnType = 'int';
                } else if (returnValue.search('readJoystick') >= 0 || returnValue[0] === '{') {
                    returnType = 'int *';
                } else {
                    returnType = 'void';
                }
                return returnType;
            },
            updateParams_: Blockly.Blocks.procedures_defnoreturn.updateParams_,
            decompose: Blockly.Blocks.procedures_defnoreturn.decompose,
            compose: Blockly.Blocks.procedures_defnoreturn.compose,
            dispose: Blockly.Blocks.procedures_defnoreturn.dispose,
            getProcedureDef: function() {
                // Return the name of the defined procedure,
                // a list of all its arguments,
                // and that it DOES have a return value.
                return [this.getFieldValue('NAME'), this.arguments_, true];
            },
            getVars: Blockly.Blocks.procedures_defnoreturn.getVars,
            renameVar: Blockly.Blocks.procedures_defnoreturn.renameVar,
            mutationToDom: Blockly.Blocks.procedures_defnoreturn.mutationToDom,
            domToMutation: Blockly.Blocks.procedures_defnoreturn.domToMutation,
            validName: Blockly.Blocks.procedures_defnoreturn.validName,
            onchange: Blockly.Blocks.procedures_defnoreturn.onchange
        };

        // Source: src/blocks/procedures_ifreturn/procedures_ifreturn.js
        /* global Blockly, Educablocks */

        /**
         * procedures_ifreturn code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.procedures_ifreturn = function() {
            // Conditionally return value from a procedure.
            var condition = Blockly.Arduino.valueToCode(this, 'CONDITION',
                Blockly.Arduino.ORDER_NONE) || '';
            var code = '';
            var a = Educablocks.findPinMode(condition);
            code += a['code'];
            condition = a['pin'];

            code += 'if (' + condition + ') {\n';
            // if (this.hasReturnValue_) {
            var value = Blockly.Arduino.valueToCode(this, 'VALUE', Blockly.Arduino.ORDER_NONE) || '';
            a = Educablocks.findPinMode(value);
            code += a['code'];
            code += '  return (' + value + ');\n';
            // } else {
            //     code += '  return;\n';
            // }
            code += '}\n';
            return code;
        };



        Blockly.Blocks.procedures_ifreturn = {
            // Conditionally return value from a procedure.
            category: Educablocks.locales.getKey('LANG_CATEGORY_PROCEDURES'),
            helpUrl: Educablocks.URL_PROC,
            init: function() {
                this.setColour(Educablocks.LANG_COLOUR_PROCEDURES);
                this.appendValueInput('CONDITION')
                    .setCheck(Boolean)
                    .appendField(Educablocks.locales.getKey('LANG_CONTROLS_IF_MSG_IF'));
                this.appendDummyInput()
                    .appendField(Educablocks.locales.getKey('LANG_PROCEDURES_DEFRETURN_RETURN'));
                this.appendValueInput('VALUE');
                this.setInputsInline(true);
                this.setPreviousStatement(true);
                this.setNextStatement(true);
                this.setTooltip(Educablocks.locales.getKey('LANG_PROCEDURES_IFRETURN_TOOLTIP'));
                this.hasReturnValue_ = true;
            },
            mutationToDom: function() {
                // Save whether this block has a return value.
                var container = document.createElement('mutation');
                container.setAttribute('value', Number(this.hasReturnValue_));
                return container;
            },
            domToMutation: function(xmlElement) {
                // Restore whether this block has a return value.
                var value = xmlElement.getAttribute('value');
                this.hasReturnValue_ = (value === 1);
                // if (!this.hasReturnValue_) {
                //     this.removeInput('VALUE');
                // }
            },
            onchange: function() {
                if (!this.workspace) {
                    // Block has been deleted.
                    return;
                }
                var legal = false;
                // Is the block nested in a procedure?
                var block = this;
                do {
                    if (block.type === 'procedures_defreturn') {
                        legal = true;
                        break;
                    }
                    block = block.getSurroundParent();
                } while (block);
                if (legal) {
                    // If needed, toggle whether this block has a return value.
                    // if (block.type === 'procedures_defnoreturn' && this.hasReturnValue_) {
                    //     this.removeInput('VALUE');
                    //     this.hasReturnValue_ = false;
                    // } else if (block.type === 'procedures_defreturn' && !this.hasReturnValue_) {
                    //     this.appendValueInput('VALUE');
                    //     this.hasReturnValue_ = true;
                    // }
                    this.setWarningText(null);
                } else {
                    try {
                        this.setWarningText(Educablocks.locales.getKey('LANG_PROCEDURES_IFRETURN_WARNING'));
                    } catch (err) {
                        console.log('Captured error: ', err);
                    }
                }
            }
        };

        // Source: src/blocks/procedures_return/procedures_return.js
        /* global Blockly, Educablocks */

        /**
         * procedures_ifreturn code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.procedures_return = function() {
            // Conditionally return value from a procedure.
            var code = '';
            var value = Blockly.Arduino.valueToCode(this, 'VALUE', Blockly.Arduino.ORDER_NONE) || '';
            var a = Educablocks.findPinMode(value);
            code += a['code'];
            code += '  return (' + value + ');\n';
            return code;
        };



        Blockly.Blocks.procedures_return = {
            // Conditionally return value from a procedure.
            category: Educablocks.locales.getKey('LANG_CATEGORY_PROCEDURES'),
            helpUrl: Educablocks.URL_PROC,
            init: function() {
                this.setColour(Educablocks.LANG_COLOUR_PROCEDURES);
                this.appendDummyInput()
                    .appendField(Educablocks.locales.getKey('LANG_PROCEDURES_RETURN'));
                this.appendValueInput('VALUE');
                this.setInputsInline(true);
                this.setPreviousStatement(true);
                this.setNextStatement(true);
                this.setTooltip(Educablocks.locales.getKey('LANG_PROCEDURES_RETURN_TOOLTIP'));
                this.hasReturnValue_ = true;
            },
            mutationToDom: function() {
                // Save whether this block has a return value.
                var container = document.createElement('mutation');
                container.setAttribute('value', Number(this.hasReturnValue_));
                return container;
            },
            domToMutation: function(xmlElement) {
                // Restore whether this block has a return value.
                var value = xmlElement.getAttribute('value');
                this.hasReturnValue_ = (value === 1);
            },
            onchange: function() {
                if (!this.workspace) {
                    // Block has been deleted.
                    return;
                }
                var legal = false;
                // Is the block nested in a procedure?
                var block = this;
                do {
                    if (block.type === 'procedures_defreturn') {
                        legal = true;
                        break;
                    }
                    block = block.getSurroundParent();
                } while (block);
                if (legal) {
                    this.setWarningText(null);
                } else {
                    try {
                        this.setWarningText(Educablocks.locales.getKey('LANG_PROCEDURES_IFRETURN_WARNING'));
                    } catch (err) {
                        console.log('Captured error: ', err);
                    }
                }
            }
        };

        // Source: src/blocks/serial_available/serial_available.js
        /* global Blockly, JST, Educablocks */
        /* jshint sub:true */

        /**
         * serial_available code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.serial_available = function() {
            var branch = Blockly.Arduino.statementToCode(this, 'DO');
            branch = branch.replace(/&quot;/g, '"');
            // branch=branch.replace(/&amp;/g, '');

            var code = JST['serial_available']({
                'branch': branch
            });
            return code;
        };

        /**
         * serial_available block definition
         * @type {Object}
         */
        Blockly.Blocks.serial_available = {
            category: Educablocks.locales.getKey('LANG_CATEGORY_COMMUNICATION'),
            helpUrl: Educablocks.URL_SERIE,
            tags: ['serial'],

            /**
             * serial_available initialization
             */
            init: function() {
                this.setColour(Educablocks.LANG_COLOUR_COMMUNICATION);
                this.appendDummyInput()
                    .appendField(Educablocks.locales.getKey('LANG_ADVANCED_SERIAL_AVAILABLE'));
                this.appendStatementInput('DO')
                    .appendField(Educablocks.locales.getKey('LANG_CONTROLS_REPEAT_INPUT_DO'));
                this.setPreviousStatement(true);
                this.setNextStatement(true);
                this.setTooltip(Educablocks.locales.getKey('LANG_ADVANCED_SERIAL_AVAILABLE_TOOLTIP'));
            }
        };

        // Source: src/blocks/serial_parseint/serial_parseint.js
        /* global Blockly, profiles, JST, Educablocks */
        /* jshint sub:true */

        /**
         * serial_parseint code generation
         * @return {Number} First valid (long) integer number from the serial buffer
         */

        Blockly.Arduino.serial_parseint = function() {
            Blockly.Arduino.setups_['setup_serial'] = JST['serial_parseint_setups']({
                'bitrate': profiles.default.serial
            });
            var code = 'Serial.parseInt()'; // JST['serial_parseint']({});

            return [code, Blockly.Arduino.ORDER_ATOMIC];
        };

        /**
         * serial_parseint block definition
         * @type {Object}
         */
        Blockly.Blocks.serial_parseint = {
            category: Educablocks.locales.getKey('LANG_CATEGORY_COMMUNICATION'),
            helpUrl: Educablocks.URL_SERIE,
            tags: ['serial'],

            /**
             * serial_paraseint initialization
             */
            init: function() {
                this.setColour(Educablocks.LANG_COLOUR_COMMUNICATION);
                this.appendDummyInput('')
                    .appendField(Educablocks.locales.getKey('LANG_ADVANCED_SERIAL_PARSEINT'));
                this.setOutput(true, Number);
                this.setTooltip(Educablocks.locales.getKey('LANG_ADVANCED_SERIAL_PARSEINT_TOOLTIP'));
            }
        };

        // Source: src/blocks/serial_print/serial_print.js
        /* global Blockly, profiles, JST, Educablocks */
        /* jshint sub:true */
        /**
         * serial_print code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.serial_print = function() {
            var content = Blockly.Arduino.valueToCode(this, 'CONTENT', Blockly.Arduino.ORDER_ATOMIC);
            var code = '';
            var a = Educablocks.findPinMode(content);
            code += a['code'];
            content = a['pin'];
            Blockly.Arduino.setups_['setup_serial'] = JST['serial_print_setups']({
                'bitrate': profiles.
                default.serial
            });
            code += JST['serial_print']({
                'content': content
            });
            return code;
        };
        /**
         * serial_print block definition
         * @type {Object}
         */
        Blockly.Blocks.serial_print = {
            category: Educablocks.locales.getKey('LANG_CATEGORY_COMMUNICATION'),
            helpUrl: Educablocks.URL_SERIE,
            tags: ['serial'],
            /**
             * serial_print initialization
             */
            init: function() {
                this.setColour(Educablocks.LANG_COLOUR_COMMUNICATION);
                this.appendValueInput('CONTENT', String).appendField(Educablocks.locales.getKey('LANG_ADVANCED_SERIAL_PRINT'));
                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setTooltip(Educablocks.locales.getKey('LANG_ADVANCED_SERIAL_PRINT_TOOLTIP'));
            }
        };
        // Source: src/blocks/serial_println/serial_println.js
        /* global Blockly, profiles, JST, Educablocks */
        /* jshint sub:true */
        /**
         * serial_println code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.serial_println = function() {
            var content = Blockly.Arduino.valueToCode(this, 'CONTENT', Blockly.Arduino.ORDER_ATOMIC);
            var code = '';
            var a = Educablocks.findPinMode(content);
            code += a['code'];
            content = a['pin'];
            Blockly.Arduino.setups_['setup_serial'] = JST['serial_println_setups']({
                'bitrate': profiles.
                default.serial
            });
            code += JST['serial_println']({
                'content': content
            });
            return code;
        };
        /**
         * serial_println block definition
         * @type {Object}
         */
        Blockly.Blocks.serial_println = {
            category: Educablocks.locales.getKey('LANG_CATEGORY_COMMUNICATION'),
            helpUrl: Educablocks.URL_SERIE,
            tags: ['serial'],
            /**
             * serial_println initialization
             */
            init: function() {
                this.setColour(Educablocks.LANG_COLOUR_COMMUNICATION);
                this.appendValueInput('CONTENT', String).appendField(Educablocks.locales.getKey('LANG_ADVANCED_SERIAL_PRINTLN'));
                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setTooltip(Educablocks.locales.getKey('LANG_ADVANCED_SERIAL_PRINTLN_TOOLTIP'));
            }
        };
        // Source: src/blocks/serial_read/serial_read.js
        /* global Blockly, profiles, JST, Educablocks */
        /* jshint sub:true */

        /**
         * serial_read code generation
         * @return {int} Code generated with block parameters
         */

        Blockly.Arduino.serial_read = function() {

            Blockly.Arduino.setups_['setup_serial'] = JST['serial_read_setups']({
                'bitrate': profiles.default.serial
            });
            var code = JST['serial_read']({});

            return [code, Blockly.Arduino.ORDER_ATOMIC];
        };

        /**
         * serial_read block definition
         * @type {Object}
         */
        Blockly.Blocks.serial_read = {
            category: Educablocks.locales.getKey('LANG_CATEGORY_COMMUNICATION'),
            helpUrl: Educablocks.URL_SERIE,
            tags: ['serial'],

            /**
             * serial_read initialization
             */
            init: function() {
                this.setColour(Educablocks.LANG_COLOUR_COMMUNICATION);
                this.appendDummyInput('')
                    .appendField(Educablocks.locales.getKey('LANG_ADVANCED_SERIAL_READ'));
                this.setOutput(true, String);
                this.setTooltip(Educablocks.locales.getKey('LANG_ADVANCED_SERIAL_READ_TOOLTIP'));
            }
        };

        // Source: src/blocks/serial_readstring/serial_readstring.js
        /* global Blockly, profiles, JST, Educablocks */
        /* jshint sub:true */

        /**
         * serial_readstring code generation
         * @return {String} Code generated with block parameters
         */

        Blockly.Arduino.serial_readstring = function() {

            Blockly.Arduino.setups_['setup_serial'] = JST['serial_readstring_setups']({
                'bitrate': profiles.default.serial
            });
            var code = JST['serial_readstring']({});

            return [code, Blockly.Arduino.ORDER_ATOMIC];
        };

        /**
         * serial_readstring block definition
         * @type {Object}
         */
        Blockly.Blocks.serial_readstring = {
            category: Educablocks.locales.getKey('LANG_CATEGORY_COMMUNICATION'),
            helpUrl: Educablocks.URL_SERIE,
            tags: ['serial'],

            /**
             * serial_readstring initialization
             */
            init: function() {
                this.setColour(Educablocks.LANG_COLOUR_COMMUNICATION);
                this.appendDummyInput('')
                    .appendField(Educablocks.locales.getKey('LANG_ADVANCED_SERIAL_READSTRING'));
                this.setOutput(true, String);
                this.setTooltip(Educablocks.locales.getKey('LANG_ADVANCED_SERIAL_READSTRING_TOOLTIP'));
            }
        };

        // Source: src/blocks/serial_special/serial_special.js
        /* global Blockly, JST, Educablocks */
        /* jshint sub:true */

        /**
         * serial_special code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.serial_special = function() {
            var char = this.getFieldValue('CHAR');
            var code = JST['serial_special']({
                'char': char
            });
            return [code, Blockly.Arduino.ORDER_ATOMIC];
        };

        /**
         * serial_special block definition
         * @type {Object}
         */
        Blockly.Blocks.serial_special = {
            category: Educablocks.locales.getKey('LANG_CATEGORY_COMMUNICATION'),
            helpUrl: Educablocks.URL_SERIE,
            tags: ['serial'],

            /**
             * serial_special initialization
             */
            init: function() {
                this.setColour(Educablocks.LANG_COLOUR_COMMUNICATION);
                this.appendDummyInput('')
                    .appendField(Educablocks.locales.getKey('LANG_ADVANCED_SERIAL_SPECIAL'))
                    .appendField(new Blockly.FieldDropdown([
                        [Educablocks.locales.getKey('LANG_ADVANCED_SERIAL_SPECIAL_TAB') || 'TAB', '\\t'],
                        [Educablocks.locales.getKey('LANG_ADVANCED_SERIAL_SPECIAL_CARRIAGE_RETURN') || 'CARRIAGE RETURN', '\\r'],
                        [Educablocks.locales.getKey('LANG_ADVANCED_SERIAL_SPECIAL_LINE_FEED') || 'LINE FEED', '\\n']
                    ]), 'CHAR');
                this.setOutput(true, String);
                this.setTooltip(Educablocks.locales.getKey('LANG_ADVANCED_SERIAL_SPECIAL_TOOLTIP'));
            }
        };

        // Source: src/blocks/servo_cont/servo_cont.js
        /* global Blockly, options,JST, Educablocks */
        /* jshint sub:true */
        /**
         * servo_cont code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.servo_cont = function() {
            var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC) || '';
            var value_degree = this.getFieldValue('ROT') || '';
            var dropdown_npin = this.getFieldValue('NPIN') || '';
            var delay_time = Blockly.Arduino.valueToCode(this, 'DELAY_TIME', Blockly.Arduino.ORDER_ATOMIC) || '';
            Blockly.Arduino.definitions_['include_servo'] = JST['servo_cont_definitions_include']({});
            var code = '';
            var a = Educablocks.findPinMode(dropdown_pin);
            code += a['code'];
            dropdown_pin = a['pin'];
            var b = Educablocks.findPinMode(delay_time);
            code += b['code'];
            delay_time = b['pin'];


            if (Educablocks.isVariable(dropdown_npin)) {
                code += JST['servo_cont_setups']({
                    'dropdown_npin': dropdown_npin

                });
            } else {
                Blockly.Arduino.setups_['servo_cont_' + dropdown_npin] = JST['servo_cont_setups']({
                    'dropdown_npin': dropdown_npin
                });
            }
            code += JST['servo_cont']({
                'dropdown_pin': dropdown_pin,
                'dropdown_npin': dropdown_npin,
                'value_degree': value_degree,
                'delay_time': delay_time
            });
            return code;
        };
        /**
         * servo_cont block definition
         * @type {Object}
         */
        Blockly.Blocks.servo_cont = {
            category: Educablocks.locales.getKey('LANG_CATEGORY_SERVO'),
            tags: ['servo'],
            helpUrl: Educablocks.URL_CONTINUOUS_ROTATION_SERVO,
            init: function() {
                this.setColour(Educablocks.LANG_COLOUR_SERVO);
                this.appendDummyInput('PIN').appendField(Educablocks.locales.getKey('LANG_SERVO_CONT')).appendField(new Blockly.FieldImage('img/blocks/13.png', 208 * options.zoom, 140 * options.zoom)).appendField(Educablocks.locales.getKey('LANG_SERVO_CONT_PIN')).setAlign(Blockly.ALIGN_RIGHT).appendField(new Blockly.FieldDropdown([
                    [Educablocks.locales.getKey('ENTRADAS_BUTTON_PIN2') || '2', '2'],
                    [Educablocks.locales.getKey('ENTRADAS_BUTTON_PIN3') || '3', '3'],
                    [Educablocks.locales.getKey('ENTRADAS_BUTTON_PIN4') || '4', '4'],
                    [Educablocks.locales.getKey('ENTRADAS_BUTTON_PIN5') || '5', '5'],
                    [Educablocks.locales.getKey('ENTRADAS_BUTTON_PIN6') || '6', '6'],
                    [Educablocks.locales.getKey('ENTRADAS_BUTTON_PIN7') || '7', '7'],
                    [Educablocks.locales.getKey('ENTRADAS_BUTTON_PIN8') || '8', '8'],
                    [Educablocks.locales.getKey('ENTRADAS_BUTTON_PIN9') || '9', '9'],
                    [Educablocks.locales.getKey('ENTRADAS_BUTTON_PIN10') || '10', '10'],
                    [Educablocks.locales.getKey('ENTRADAS_BUTTON_PIN11') || '11', '11'],
                    [Educablocks.locales.getKey('ENTRADAS_BUTTON_PIN12') || '12', '12'],
                    [Educablocks.locales.getKey('ENTRADAS_BUTTON_PIN13') || '13', '13']
                ]), 'NPIN');

                this.appendDummyInput().appendField(Educablocks.locales.getKey('LANG_SERVO_CONT_ROT')).setAlign(Blockly.ALIGN_RIGHT).appendField(new Blockly.FieldDropdown([
                    [Educablocks.locales.getKey('LANG_SERVO_CONT_TURN_CLOCKWISE') || 'CLOCKWISE', '0'],
                    [Educablocks.locales.getKey('LANG_SERVO_CONT_TURN_COUNTERCLOCKWISE') || 'ANTICLOCKWISE', '180'],
                    [Educablocks.locales.getKey('LANG_SERVO_CONT_STOPPED') || 'STOPPED', '90']
                ]), 'ROT');
                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setTooltip(Educablocks.locales.getKey('LANG_SERVO_CONT_TOOLTIP'));
            },
            isVariable: function(varValue) {
                for (var i in Blockly.Variables.allVariables()) {
                    if (Blockly.Variables.allVariables()[i] === varValue) {
                        return true;
                    }
                }
                return false;
            },
            onchange: function() {
                // try {
                //     if (this.isVariable(Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC))) {
                //         this.setWarningText(Educablocks.locales.getKey('LANG_SERVO_WARNING'));
                //     } else {
                //         this.setWarningText(null);
                //     }
                // } catch (e) {}
            }
        };
        // Source: src/blocks/servo_move/servo_move.js
        /* global Blockly, options, JST, Educablocks */
        /* jshint sub:true */
        /**
         * servo_move code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.servo_move = function() {
            var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
            var value_degree = Blockly.Arduino.valueToCode(this, 'DEGREE', Blockly.Arduino.ORDER_ATOMIC);
            var dropdown_npin = this.getFieldValue('NPIN') || '';
            var delay_time = Blockly.Arduino.valueToCode(this, 'DELAY_TIME', Blockly.Arduino.ORDER_ATOMIC);
            Blockly.Arduino.definitions_['include_servo'] = JST['servo_move_definitions_include']({
                'dropdown_pin': dropdown_pin
            });
            var code = '';
            var a = Educablocks.findPinMode(dropdown_pin);
            code += a['code'];
            dropdown_pin = a['pin'];
            var b = Educablocks.findPinMode(delay_time);
            code += b['code'];
            delay_time = b['pin'];
            var c = Educablocks.findPinMode(value_degree);
            code += c['code'];
            value_degree = c['pin'];

            if (Educablocks.isVariable(dropdown_npin)) {
                code += JST['servo_move_setups']({
                    'dropdown_npin': dropdown_npin
                });
            } else {
                Blockly.Arduino.setups_['servo_move_' + dropdown_npin] = JST['servo_move_setups']({
                    'dropdown_npin': dropdown_npin
                });
            }

            code += JST['servo_move']({
                'dropdown_pin': dropdown_pin,
                'value_degree': value_degree,
                'delay_time': delay_time,
                'dropdown_npin': dropdown_npin

            });
            return code;
        };

//servo read

       Blockly.Arduino.servo_read = function() {
            var dropdown_npin = this.getFieldValue('NPIN') || '';
            Blockly.Arduino.definitions_['include_servo'] = JST['servo_read_definitions_include']({});
            var code = '';

            if (Educablocks.isVariable(dropdown_npin)) {
                code += JST['servo_read_setups']({
                    'dropdown_npin': dropdown_npin

                });
            } else {
                Blockly.Arduino.setups_['servo_read_' + dropdown_npin] = JST['servo_read_setups']({
                    'dropdown_npin': dropdown_npin
                });
            }
            code += JST['servo_read']({
                'dropdown_npin': dropdown_npin,
            });
            return [code, Blockly.Arduino.ORDER_ATOMIC];
        };
        /**
         * servo_cont block definition
         * @type {Object}
         */
        Blockly.Blocks.servo_read = {
            category: Educablocks.locales.getKey('LANG_CATEGORY_SERVO'),
            tags: ['servo'],
            helpUrl: Educablocks.URL_CONTINUOUS_ROTATION_SERVO,
            init: function() {
                this.setColour(Educablocks.LANG_COLOUR_SERVO);
                this.appendDummyInput('').appendField(Educablocks.locales.getKey('LANG_SERVO_READ')).appendField(Educablocks.locales.getKey('LANG_SERVO_READ_PIN')).setAlign(Blockly.ALIGN_RIGHT).appendField(new Blockly.FieldDropdown([
                    [Educablocks.locales.getKey('ENTRADAS_BUTTON_PIN2') || '2', '2'],
                    [Educablocks.locales.getKey('ENTRADAS_BUTTON_PIN3') || '3', '3'],
                    [Educablocks.locales.getKey('ENTRADAS_BUTTON_PIN4') || '4', '4'],
                    [Educablocks.locales.getKey('ENTRADAS_BUTTON_PIN5') || '5', '5'],
                    [Educablocks.locales.getKey('ENTRADAS_BUTTON_PIN6') || '6', '6'],
                    [Educablocks.locales.getKey('ENTRADAS_BUTTON_PIN7') || '7', '7'],
                    [Educablocks.locales.getKey('ENTRADAS_BUTTON_PIN8') || '8', '8'],
                    [Educablocks.locales.getKey('ENTRADAS_BUTTON_PIN9') || '9', '9'],
                    [Educablocks.locales.getKey('ENTRADAS_BUTTON_PIN10') || '10', '10'],
                    [Educablocks.locales.getKey('ENTRADAS_BUTTON_PIN11') || '11', '11'],
                    [Educablocks.locales.getKey('ENTRADAS_BUTTON_PIN12') || '12', '12'],
                    [Educablocks.locales.getKey('ENTRADAS_BUTTON_PIN13') || '13', '13']
                ]), 'NPIN');
                this.setOutput(true, Boolean);
                this.setTooltip(Educablocks.locales.getKey('LANG_SERVO_CONT_TOOLTIP'));
            
            }
        };

//servo read final

        /**
         * servo_move block definition
         * @type {Object}
         */
        Blockly.Blocks.servo_move = {
            category: Educablocks.locales.getKey('LANG_CATEGORY_SERVO'),
            tags: ['servo'],
            helpUrl: Educablocks.URL_SERVO,
            /**
             * servo_move initialization
             */
            init: function() {
                this.setColour(Educablocks.LANG_COLOUR_SERVO);
                this.appendDummyInput('PIN').appendField(Educablocks.locales.getKey('LANG_SERVO_MOVE')).appendField(new Blockly.FieldImage('img/blocks/14.png', 208 * options.zoom, 140 * options.zoom)).appendField(Educablocks.locales.getKey('LANG_SERVO_MOVE_PIN')).setAlign(Blockly.ALIGN_RIGHT).appendField(new Blockly.FieldDropdown([
                    [Educablocks.locales.getKey('ENTRADAS_BUTTON_PIN2') || '2', '2'],
                    [Educablocks.locales.getKey('ENTRADAS_BUTTON_PIN3') || '3', '3'],
                    [Educablocks.locales.getKey('ENTRADAS_BUTTON_PIN4') || '4', '4'],
                    [Educablocks.locales.getKey('ENTRADAS_BUTTON_PIN5') || '5', '5'],
                    [Educablocks.locales.getKey('ENTRADAS_BUTTON_PIN6') || '6', '6'],
                    [Educablocks.locales.getKey('ENTRADAS_BUTTON_PIN7') || '7', '7'],
                    [Educablocks.locales.getKey('ENTRADAS_BUTTON_PIN8') || '8', '8'],
                    [Educablocks.locales.getKey('ENTRADAS_BUTTON_PIN9') || '9', '9'],
                    [Educablocks.locales.getKey('ENTRADAS_BUTTON_PIN10') || '10', '10'],
                    [Educablocks.locales.getKey('ENTRADAS_BUTTON_PIN11') || '11', '11'],
                    [Educablocks.locales.getKey('ENTRADAS_BUTTON_PIN12') || '12', '12'],
                    [Educablocks.locales.getKey('ENTRADAS_BUTTON_PIN13') || '13', '13']
                ]), 'NPIN');

                this.appendValueInput('DEGREE', Number).setCheck(Number).setAlign(Blockly.ALIGN_RIGHT).appendField(Educablocks.locales.getKey('LANG_SERVO_MOVE_DEGREES'));
                this.setPreviousStatement(true);
                this.setNextStatement(true);
                this.setTooltip(Educablocks.locales.getKey('LANG_SERVO_MOVE_TOOLTIP'));
            },
            isVariable: function(varValue) {
                for (var i in Blockly.Variables.allVariables()) {
                    if (Blockly.Variables.allVariables()[i] === varValue) {
                        return true;
                    }
                }
                return false;
            },
            onchange: function() {
                // try {
                //     if (this.isVariable(Blockly.Arduino.valueToCode(this,'PIN', Blockly.Arduino.ORDER_ATOMIC))) {
                //         this.setWarningText(Educablocks.locales.getKey('LANG_SERVO_WARNING'));
                //     } else {
                //         this.setWarningText(null);
                //     }
                // } catch (e) {}
            }
        };
        // Source: src/blocks/text/text.js
        /* global Blockly, Educablocks */

        /**
         * text code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.text = function() {
            // Text value.
            var code = Blockly.Arduino.quote_(this.getFieldValue('TEXT'));
            return [code, Blockly.Arduino.ORDER_ATOMIC];
        };

        Blockly.Blocks.text = {
            // Text value.
            category: Educablocks.locales.getKey('LANG_CATEGORY_TEXT'),
            helpUrl: Educablocks.URL_TEXT,
            init: function() {
                this.setColour(Educablocks.LANG_COLOUR_TEXT);
                this.appendDummyInput()
                    .appendField('"')
                    .appendField(new Blockly.FieldTextInput(''), 'TEXT')
                    .appendField('"');
                this.setOutput(true, String);
                this.setTooltip(Educablocks.locales.getKey('LANG_TEXT_TEXT_TOOLTIP'));
            }
        };

        // Source: src/blocks/text_append/text_append.js
        /* global Blockly, Educablocks */
        /**
         * text_append code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.text_append = function() {
            // Append to a variable in place.
            var varName = Blockly.Arduino.valueToCode(this, 'VAR', Blockly.Arduino.ORDER_NONE) || '';
            var argument0 = Blockly.Arduino.valueToCode(this, 'TEXT', Blockly.Arduino.ORDER_UNARY_POSTFIX) || '';

            var code = '';

            var a = Educablocks.findPinMode(varName);
            code += a['code'];
            varName = a['pin'];
            a = Educablocks.findPinMode(argument0);
            code += a['code'];
            argument0 = a['pin'];

            code += varName + ' += String(' + argument0 + ');\n';
            return code;
        };
        Blockly.Blocks.text_append = {
            // Append to a variable in place.
            category: Educablocks.locales.getKey('LANG_CATEGORY_TEXT'),
            helpUrl: Educablocks.URL_TEXT,
            init: function() {
                this.setColour(Educablocks.LANG_COLOUR_TEXT);
                this.appendValueInput('VAR')
                    // .appendField(new Blockly.FieldVariable(' '), 'VAR')
                    .appendField(Educablocks.locales.getKey('LANG_TEXT_APPEND_TO'));
                this.appendValueInput('TEXT').appendField(Educablocks.locales.getKey('LANG_TEXT_APPEND_APPENDTEXT'));
                this.setPreviousStatement(true);
                this.setNextStatement(true);
                this.setInputsInline(true);
                this.setTooltip(Educablocks.locales.getKey('LANG_TEXT_APPEND_TOOLTIP'));
            },
            getVars: function() {
                return [this.getFieldValue('VAR')];
            },
            renameVar: function(oldName, newName) {
                if (Blockly.Names.equals(oldName, this.getFieldValue('VAR'))) {
                    this.setTitleValue(newName, 'VAR');
                }
            },
            getVariables: function() {
                var variables = Blockly.Variables.allVariables();
                var dropdown = [];
                if (variables.length > 0) {
                    for (var i in variables) {
                        dropdown.push([variables[i], variables[i]]);
                    }
                } else {
                    dropdown.push(['', '']);
                }
                return dropdown;
            },
            onchange: function() {
                // if (!this.last_variables){
                //     this.last_variables=Blockly.Variables.allVariables();
                // }
                // var variables=Blockly.Variables.allVariables();
                // for (var i in variables){
                //     if (Blockly.Variables.allVariables()[i]!==this.last_variables[i]){
                //         try{
                //             this.removeInput('TEXT');
                //             this.appendValueInput('TEXT')
                //                 .appendField(Educablocks.locales.getKey('LANG_TEXT_APPEND_TO'))
                //                 .appendField(new Blockly.FieldDropdown(this.getVariables()), 'VAR')
                //                 .appendField(Educablocks.locales.getKey('LANG_TEXT_APPEND_APPENDTEXT'));
                //             this.setInputsInline(true);
                //         }catch(e){}
                //         this.last_variables=Blockly.Variables.allVariables();
                //     }
                // }
            }
        };
        // Source: src/blocks/text_equalsIgnoreCase/text_equalsIgnoreCase.js
        /* global Blockly, JST, Educablocks */

        /**
         * text_equalsIgnoreCase code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.text_equalsIgnoreCase = function() {
            var string1 = Blockly.Arduino.valueToCode(this, 'STRING1', Blockly.Arduino.ORDER_NONE);
            string1 = string1.replace(/&quot;/g, '"');
            var string2 = Blockly.Arduino.valueToCode(this, 'STRING2', Blockly.Arduino.ORDER_NONE);
            string2 = string2.replace(/&quot;/g, '"');

            var code = '';

            var a = Educablocks.findPinMode(string1);
            code += a['code'];
            string1 = a['pin'];

            a = Educablocks.findPinMode(string2);
            code += a['code'];
            string2 = a['pin'];

            code += JST['text_equalsIgnoreCase']({
                'string1': string1,
                'string2': string2
            });

            return [code, Blockly.Arduino.ORDER_ATOMIC];
        };

        Blockly.Blocks.text_equalsIgnoreCase = {
            category: Educablocks.locales.getKey('LANG_CATEGORY_TEXT'),
            helpUrl: Educablocks.URL_TEXT,
            init: function() {
                this.setColour(Educablocks.LANG_COLOUR_TEXT);
                this.appendValueInput('STRING1')
                    .appendField(Educablocks.locales.getKey('LANG_TEXT_EQUALSIGNORECASE_IS'));

                this.appendValueInput('STRING2')
                    .appendField(Educablocks.locales.getKey('LANG_TEXT_EQUALSIGNORECASE_EQUAL'))
                    .setAlign(Blockly.ALIGN_RIGHT);
                this.appendDummyInput()
                    .appendField(Educablocks.locales.getKey('LANG_TEXT_EQUALSIGNORECASE_QUESTION'));

                this.setInputsInline(true);

                this.setOutput(true);
                this.setTooltip(Educablocks.locales.getKey('LANG_TEXT_EQUALSIGNORECASE_TOOLTIP'));
            }
        };
        // Source: src/blocks/text_join/text_join.js
        /* global Blockly, Educablocks */

        /**
         * text_join code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.text_join = function() {
            // Create a string made up of any number of elements of any type.
            var code = '';
            var a;
            console.log('this.itemCount_', this.itemCount_);
            if (this.itemCount_ === 0) {
                return ['\'\'', Blockly.Arduino.ORDER_ATOMIC];
            } else if (this.itemCount_ === 1) {
                var argument0 = Blockly.Arduino.valueToCode(this, 'ADD0', Blockly.Arduino.ORDER_UNARY_POSTFIX) || '';
                a = Educablocks.findPinMode(argument0);
                code += a['code'];
                argument0 = a['pin'];

                code += 'String(' + argument0 + ')';
                return [code, Blockly.Arduino.ORDER_UNARY_POSTFIX];
            } else {
                var i = (Blockly.Arduino.valueToCode(this, 'ADD0', Blockly.Arduino.ORDER_NONE) || '');
                console.log('Blockly.Arduino.valueToCode(this, ADD0, Blockly.Arduino.ORDER_NONE)', Blockly.Arduino.valueToCode(this, 'ADD0', Blockly.Arduino.ORDER_NONE));
                a = Educablocks.findPinMode(i);
                code = a['code'];
                i = a['pin'];

                var final_line = 'String(' + i;
                console.log('iteration 0', '\ncode: ', code, '\nfinal_line: ', final_line, '\nb', i);

                for (var n = 1; n < this.itemCount_; n++) {
                    i = (Blockly.Arduino.valueToCode(this, 'ADD' + n, Blockly.Arduino.ORDER_NONE) || '');
                    console.log('Blockly.Arduino.valueToCode(this, ADDn, Blockly.Arduino.ORDER_NONE)', Blockly.Arduino.valueToCode(this, 'ADD' + n, Blockly.Arduino.ORDER_NONE));
                    a = Educablocks.findPinMode(i);
                    code += a['code'];
                    i = a['pin'];
                    final_line += ') + String(' + i;
                    console.log('iteration', n, '\ncode: ', code, '\nfinal_line: ', final_line, '\nb', i);
                }


                code += final_line + ')';

                return [code, Blockly.Arduino.ORDER_UNARY_POSTFIX];
            }
        };

        Blockly.Blocks.text_join = {
            // Create a string made up of any number of elements of any type.
            category: Educablocks.locales.getKey('LANG_CATEGORY_TEXT'),
            helpUrl: Educablocks.URL_TEXT,
            init: function() {
                this.setColour(Educablocks.LANG_COLOUR_TEXT);
                this.appendValueInput('ADD0')
                    .appendField(Educablocks.locales.getKey('LANG_TEXT_JOIN_Field_CREATEWITH'));
                this.appendValueInput('ADD1');
                this.setOutput(true, String);
                this.setMutator(new Blockly.Mutator(['text_create_join_item']));
                this.setTooltip(Educablocks.locales.getKey('LANG_TEXT_JOIN_TOOLTIP'));
                this.itemCount_ = 2;
            },
            mutationToDom: function() {
                var container = document.createElement('mutation');
                container.setAttribute('items', this.itemCount_);
                return container;
            },
            domToMutation: function(xmlElement) {
                for (var x = 0; x < this.itemCount_; x++) {
                    this.removeInput('ADD' + x);
                }
                this.itemCount_ = window.parseInt(xmlElement.getAttribute('items'), 10);
                for (x = 0; x < this.itemCount_; x++) {
                    var input = this.appendValueInput('ADD' + x);
                    if (x === 0) {
                        input.appendField(Educablocks.locales.getKey('LANG_TEXT_JOIN_Field_CREATEWITH'));
                    }
                }
                if (this.itemCount_ === 0) {
                    this.appendDummyInput('EMPTY')
                        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly +
                            'media/quote0.png', 12, 12))
                        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly +
                            'media/quote1.png', 12, 12));
                }
            },
            decompose: function(workspace) {
                var containerBlock = Blockly.Block.obtain(workspace, 'text_create_join_container');
                containerBlock.initSvg();
                var connection = containerBlock.getInput('STACK').connection;
                for (var x = 0; x < this.itemCount_; x++) {
                    var itemBlock = Blockly.Block.obtain(workspace, 'text_create_join_item');
                    itemBlock.initSvg();
                    connection.connect(itemBlock.previousConnection);
                    connection = itemBlock.nextConnection;
                }
                return containerBlock;
            },
            compose: function(containerBlock) {
                // Disconnect all input blocks and remove all inputs.
                if (this.itemCount_ === 0) {
                    this.removeInput('EMPTY');
                } else {
                    for (var x = this.itemCount_ - 1; x >= 0; x--) {
                        this.removeInput('ADD' + x);
                    }
                }
                this.itemCount_ = 0;
                // Rebuild the block's inputs.
                var itemBlock = containerBlock.getInputTargetBlock('STACK');
                while (itemBlock) {
                    var input = this.appendValueInput('ADD' + this.itemCount_);
                    if (this.itemCount_ === 0) {
                        input.appendField(Educablocks.locales.getKey('LANG_TEXT_JOIN_Field_CREATEWITH'));
                    }
                    // Reconnect any child blocks.
                    if (itemBlock.valueConnection_) {
                        input.connection.connect(itemBlock.valueConnection_);
                    }
                    this.itemCount_++;
                    itemBlock = itemBlock.nextConnection && itemBlock.nextConnection.targetBlock();
                }
                if (this.itemCount_ === 0) {
                    this.appendDummyInput('EMPTY')
                        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly +
                            'media/quote0.png', 12, 12))
                        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly +
                            'media/quote1.png', 12, 12));
                }
            },
            saveConnections: function(containerBlock) {
                // Store a pointer to any connected child blocks.
                var itemBlock = containerBlock.getInputTargetBlock('STACK');
                var x = 0;
                while (itemBlock) {
                    var input = this.getInput('ADD' + x);
                    itemBlock.valueConnection_ = input && input.connection.targetConnection;
                    x++;
                    itemBlock = itemBlock.nextConnection && itemBlock.nextConnection.targetBlock();
                }
            }
        };



        Blockly.Blocks.text_create_join_container = {
            // Container.
            init: function() {
                this.setColour(Educablocks.LANG_COLOUR_TEXT);
                this.appendDummyInput()
                    .appendField(Educablocks.locales.getKey('LANG_TEXT_CREATE_JOIN_Field_JOIN'));
                this.appendStatementInput('STACK');
                this.setTooltip(Educablocks.locales.getKey('LANG_TEXT_CREATE_JOIN_TOOLTIP'));
                this.contextMenu = false;
            }
        };

        Blockly.Blocks.text_create_join_item = {
            // Add items.
            init: function() {
                this.appendDummyInput()
                    .appendField(Educablocks.locales.getKey('LANG_TEXT_CREATE_JOIN_ITEM_Field_ITEM'));
                this.setPreviousStatement(true);
                this.setNextStatement(true);
                this.setTooltip(Educablocks.locales.getKey('LANG_TEXT_CREATE_JOIN_ITEM_TOOLTIP'));
                this.contextMenu = false;
            }
        };


        Blockly.Blocks.text_create_join_container = {
            // Container.
            init: function() {
                this.setColour(Educablocks.LANG_COLOUR_TEXT);
                this.appendDummyInput()
                    .appendField(Educablocks.locales.getKey('LANG_TEXT_CREATE_JOIN_TITLE_JOIN'));
                this.appendStatementInput('STACK');
                this.setTooltip(Educablocks.locales.getKey('LANG_TEXT_CREATE_JOIN_TOOLTIP'));
                this.contextMenu = false;
            }
        };

        Blockly.Blocks.text_create_join_item = {
            // Add items.
            init: function() {
                this.setColour(Educablocks.LANG_COLOUR_TEXT);
                this.appendDummyInput()
                    .appendField(Educablocks.locales.getKey('LANG_TEXT_CREATE_JOIN_ITEM_TITLE_ITEM'));
                this.setPreviousStatement(true);
                this.setNextStatement(true);
                this.setTooltip(Educablocks.locales.getKey('LANG_TEXT_CREATE_JOIN_ITEM_TOOLTIP'));
                this.contextMenu = false;
            }
        };



        // Source: src/blocks/text_length/text_length.js
        /* global Blockly, JST, Educablocks */

        /**
         * text_length code generation
         * @return {String} Code generated with block parameters
         */

        Blockly.Arduino.text_length = function() {
            // String length.
            var argument0 = Blockly.Arduino.valueToCode(this, 'VALUE', Blockly.Arduino.ORDER_UNARY_POSTFIX) || '';
            var code = '';
            var a = Educablocks.findPinMode(argument0);
            code += a['code'];
            argument0 = a['pin'];

            code += JST['text_length']({
                'argument0': argument0
            });

            return [code, Blockly.Arduino.ORDER_UNARY_POSTFIX];
        };

        Blockly.Blocks.text_length = {
            // String length.
            category: Educablocks.locales.getKey('LANG_CATEGORY_TEXT'),
            helpUrl: Educablocks.URL_TEXT,
            init: function() {
                this.setColour(Educablocks.LANG_COLOUR_TEXT);
                this.appendValueInput('VALUE')
                    .setCheck([String, Array])
                    .appendField(Educablocks.locales.getKey('LANG_TEXT_LENGTH_INPUT_LENGTH'));
                this.setOutput(true, Number);
                this.setTooltip(Educablocks.locales.getKey('LANG_TEXT_LENGTH_TOOLTIP'));
            }
        };
        // Source: src/blocks/text_substring/text_substring.js
        /* global Blockly, JST, Educablocks */

        /**
         * text_substring code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.text_substring = function() {
            var string1 = Blockly.Arduino.valueToCode(this, 'STRING1', Blockly.Arduino.ORDER_NONE);
            var from = Blockly.Arduino.valueToCode(this, 'FROM', Blockly.Arduino.ORDER_NONE);
            var to = Blockly.Arduino.valueToCode(this, 'TO', Blockly.Arduino.ORDER_NONE);
            var code = '';
            var a = Educablocks.findPinMode(string1);
            code += a['code'];
            string1 = a['pin'];

            a = Educablocks.findPinMode(from);
            code += a['code'];
            from = a['pin'];

            a = Educablocks.findPinMode(to);
            code += a['code'];
            to = a['pin'];

            code += JST['text_substring']({
                'string1': string1,
                'from': from,
                'to': to
            });

            return [code, Blockly.Arduino.ORDER_ATOMIC];
        };


//dht11
Blockly.Arduino.SALIDAS_dht11 = function() {
            var num_pin = this.getFieldValue('NPIN');
            var code = '';
            Blockly.Arduino.definitions_['define_SALIDAS_dht11'] = JST['SALIDAS_dht11_definitions' ]({
                'num_pin': num_pin
            });
                     
            code += JST['SALIDAS_dht11']({
                'num_pin': num_pin
            });
            return code;
        };
        /**
         * SALIDAS_dht11 block definition
         * @type {Object}
         */
       

        Blockly.Blocks.SALIDAS_dht11 = {
            category: Educablocks.locales.getKey('LANG_CATEGORY_ENTRADAS'),
            tags: ['dht11'],
            helpUrl: Educablocks.URL_US,
            init: function() {
                this.setColour(Educablocks.LANG_COLOUR_ENTRADAS);
                this.appendDummyInput('').appendField(Educablocks.locales.getKey('LANG_ENTRADAS_DHT11')).appendField(new Blockly.FieldImage('img/blocks/06.png', 208 * options.zoom, 140 * options.zoom));
                this.appendDummyInput('NUM PIN').setAlign(Blockly.ALIGN_RIGHT).appendField(Educablocks.locales.getKey('LANG_ENTRADAS_DHT11_PIN')).appendField(new Blockly.FieldDropdown([
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN13') || '13', '13'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN12') || '12', '12'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN11') || '11', '11'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN10') || '10', '10'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN9') || '9', '9'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN8') || '8', '8'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN7') || '7', '7'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN6') || '6', '6'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN5') || '5', '5'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN4') || '4', '4'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN3') || '3', '3'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN2') || '2', '2']
                ]), 'NPIN');
                this.setPreviousStatement(true, null);
                this.setNextStatement(true, Number);
                this.setTooltip(Educablocks.locales.getKey('LANG_ENTRADAS_DHT11_TOOLTIP'));
            }
        };

          this["JST"]["SALIDAS_dht11"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
             __p += 'DHT11.read(DHT11PIN);\n';

            }
            return __p
        };

        this["JST"]["SALIDAS_dht11_definitions"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += '#include <dht11.h>\n\ndht11 DHT11;\n\n#define DHT11PIN ' +
                    ((__t = (num_pin)) == null ? '' : __t) +
                    '\n\n';

            }
            return __p
        };


        

//findht11

//temperatura
Blockly.Arduino.SALIDAS_temperatura = function() {
            
            var code = '';
     
                     
            code += JST['SALIDAS_temperatura']({});
            return [code, Blockly.Arduino.ORDER_ATOMIC];

        };
        /**
         * SALIDAS_dht11 block definition
         * @type {Object}
         */
       

        Blockly.Blocks.SALIDAS_temperatura = {
            category: Educablocks.locales.getKey('LANG_CATEGORY_ENTRADAS'),
            tags: ['temperatura'],
            helpUrl: Educablocks.URL_US,
            init: function() {
                this.setColour(Educablocks.LANG_COLOUR_ENTRADAS);
                this.appendDummyInput('').appendField(Educablocks.locales.getKey('LANG_ENTRADAS_TEMPERATURA')).appendField(new Blockly.FieldImage('img/blocks/06.png', 208 * options.zoom, 140 * options.zoom));
                this.setOutput(true, Boolean);
                this.setTooltip(Educablocks.locales.getKey('LANG_ENTRADAS_TEMPERATURA_TOOLTIP'));
            }
        };



          this["JST"]["SALIDAS_temperatura"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
             __p += 'DHT11.temperature';

            }
            return __p
        };




//fin temperatura


//temperatura
Blockly.Arduino.SALIDAS_humedad = function() {
            
            var code = '';
     
                     
            code += JST['SALIDAS_humedad']({});
            return [code, Blockly.Arduino.ORDER_ATOMIC];

        };
        /**
         * SALIDAS_dht11 block definition
         * @type {Object}
         */
       

        Blockly.Blocks.SALIDAS_humedad = {
            category: Educablocks.locales.getKey('LANG_CATEGORY_ENTRADAS'),
            tags: ['temperatura'],
            helpUrl: Educablocks.URL_US,
            init: function() {
                this.setColour(Educablocks.LANG_COLOUR_ENTRADAS);
                this.appendDummyInput('').appendField(Educablocks.locales.getKey('LANG_ENTRADAS_HUMEDAD')).appendField(new Blockly.FieldImage('img/blocks/06.png', 208 * options.zoom, 140 * options.zoom));
                this.setOutput(true, Boolean);
                this.setTooltip(Educablocks.locales.getKey('LANG_ENTRADAS_HUMEDAD_TOOLTIP'));
            }
        };



          this["JST"]["SALIDAS_humedad"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
             __p += 'DHT11.humidity';

            }
            return __p
        };




//fin temperatura





        Blockly.Blocks.text_substring = {
            category: Educablocks.locales.getKey('LANG_CATEGORY_TEXT'),
            helpUrl: Educablocks.URL_TEXT,
            init: function() {
                this.setColour(Educablocks.LANG_COLOUR_TEXT);
                this.appendValueInput('STRING1')
                    // .setCheck(String)
                    .appendField(Educablocks.locales.getKey('LANG_TEXT_SUBSTRING'));

                this.appendValueInput('FROM')
                    .appendField(Educablocks.locales.getKey('LANG_TEXT_SUBSTRING_FROM'))
                    .setCheck(Number)
                    .setAlign(Blockly.ALIGN_RIGHT);

                this.appendValueInput('TO')
                    .appendField(Educablocks.locales.getKey('LANG_TEXT_SUBSTRING_TO'))
                    .setCheck(Number)
                    .setAlign(Blockly.ALIGN_RIGHT);
                // this.appendDummyInput()
                //     .appendField(Educablocks.locales.getKey('LANG_TEXT_SUBSTRING_QUESTION'));

                this.setInputsInline(true);

                this.setOutput(true);
                this.setTooltip(Educablocks.locales.getKey('LANG_TEXT_SUBSTRING_TOOLTIP'));
            }
        };
        // Source: src/blocks/variables_get/variables_get.js
        /* global Blockly, Educablocks */
        /* jshint sub:true */
        /**
         * variables_get code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.variables_get = function() {
            // Variable setter.
            var varName = this.getFieldValue('VAR') || '';
            if (Educablocks.variables[this.getFieldValue('VAR')] !== undefined) {
                this.var_type = Educablocks.variables[this.getFieldValue('VAR')][0];
            }
            return [varName, Blockly.Arduino.ORDER_ATOMIC];
        };
        Blockly.Blocks.variables_get = {
            // Variable setter.
            category: Educablocks.locales.getKey('LANG_CATEGORY_VARIABLES'), // Variables are handled specially.
            helpUrl: Educablocks.URL_VAR,
            init: function() {
                this.setColour(Educablocks.LANG_COLOUR_VARIABLES);
                this.appendDummyInput('DUMMY').appendField(Educablocks.locales.getKey('LANG_VARIABLES_GET'))
                    // .appendField(new Blockly.FieldDropdown(this.getVariables()), 'VAR');
                    .appendField(new Blockly.FieldVariable(' '), 'VAR');
                this.setOutput(true);
                this.setTooltip(Educablocks.locales.getKey('LANG_VARIABLES_GET_TOOLTIP'));
            },
            getVariables: function() {
                var variables = Blockly.Variables.allVariables();
                var dropdown = [];
                if (variables.length > 0) {
                    for (var i in variables) {
                        dropdown.push([variables[i], variables[i]]);
                    }
                } else {
                    dropdown.push(['', '']);
                }
                return dropdown;
            },
            onchange: function() {
                // if (!this.workspace) {
                //     // Block has been deleted.
                //     return;
                // }
                // this.last_variable=this.getFieldValue('VAR');
                // if (!this.last_variables){
                //     this.last_variables=Blockly.Variables.allVariables();
                // }
                // var variables=Blockly.Variables.allVariables();
                // for (var i in variables){
                //     if (Blockly.Variables.allVariables()[i]!==this.last_variables[i]){
                //         try{
                //             this.removeInput('DUMMY');
                //         }catch(e){}
                //         this.appendDummyInput('DUMMY')
                //             .appendField(Educablocks.locales.getKey('LANG_VARIABLES_GET'))
                //             .appendField(new Blockly.FieldDropdown(this.getVariables()), 'VAR');
                //         this.setFieldValue(this.last_variable, 'VAR');
                //         this.last_variables=Blockly.Variables.allVariables();
                //     }
                // }
                try {
                    if (!this.exists()) {
                        this.setWarningText(Educablocks.locales.getKey('LANG_VARIABLES_CALL_WITHOUT_DEFINITION'));
                    } else {
                        this.setWarningText(null);
                    }
                } catch (e) {}
            },
            renameVar: function(oldName, newName) {
                if (Blockly.Names.equals(oldName, this.getFieldValue('VAR'))) {
                    this.setTitleValue(newName, 'VAR');
                }
            },
            exists: function() {
                for (var i in Blockly.Variables.allVariables()) {
                    if (Blockly.Variables.allVariables()[i] === this.getFieldValue('VAR')) {
                        return true;
                    }
                }
                return false;
            }
        };
        // Source: src/blocks/variables_global/variables_global.js
        /* global Blockly,  Educablocks */
        /* jshint sub:true */
        /**
         * variables_global code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.variables_global = function() {
            // Variable setter.
            var varType;
            var varValue = Blockly.Arduino.valueToCode(this, 'VALUE', Blockly.Arduino.ORDER_ASSIGNMENT);
            var varName = this.getFieldValue('VAR') || '';
            var isFunction = false;

            var a = Educablocks.findPinMode(varValue);
            Blockly.Arduino.setups_['pinMode' + varValue] = a['code'];
            varValue = a['pin'];

            for (var i in Blockly.Arduino.definitions_) {
                if (Blockly.Arduino.definitions_[i].search(varValue + ' \\(') >= 0) {
                    isFunction = true;
                    break;
                }
            }
            if (varValue.search('"') >= 0 || varValue.search('substring\\(') >= 0) {
                varType = 'String';
                Blockly.Arduino.definitions_['declare_var' + varName] = varType + ' ' + varName + '=' + varValue + ';';
            } else if (isFunction) { //varValue.search('\\(') >= 0 && varValue.search('\\)') >= 0) {
                for (i in Blockly.Arduino.definitions_) {
                    if (Blockly.Arduino.definitions_[i].search(varValue) >= 0) {
                        if (Blockly.Arduino.definitions_[i].substring(0, 3) === 'int' || Blockly.Arduino.definitions_[i].substring(0, 3) === '//b') { //SALIDASbat function
                            if (Blockly.Arduino.definitions_[i].substring(0, 5) === 'int *' || Blockly.Arduino.definitions_[i].substring(0, 5) === 'int _') {
                                varType = 'int *';
                            } else {
                                varType = 'int';
                            }
                        } else if (Blockly.Arduino.definitions_[i].substring(0, 3) === 'Str') {
                            varType = 'String';
                        } else {
                            varType = '';
                        }
                        Blockly.Arduino.definitions_['declare_var' + varName] = varType + ' ' + varName + ';\n';
                        Blockly.Arduino.setups_['define_var' + varName] = varName + '=' + varValue + ';\n';
                        break;
                    }
                }
            } else if (varValue[0] === '{') {
                varType = 'int *';
                varValue = varValue.replace('{', '');
                varValue = varValue.replace('}', '');
                varValue = varValue.split(',');
                Blockly.Arduino.definitions_['declare_var' + varName] = varType + varName + '=' + '(int*)malloc(3*sizeof(int));\n';
                // Blockly.Arduino.definitions_['declare_var' + varName] = varType + varName + ';\n';
                Blockly.Arduino.setups_['define_var' + varName] = varName + '[0]=' + varValue[0] + ';\n  ' + varName + '[1]=' + varValue[1] + ';\n  ' + varName + '[2]=' + varValue[2] + ';\n';
            } else if (this.isVariable(varValue)) {
                varType = Educablocks.variables[varValue][0];
                Blockly.Arduino.definitions_['declare_var' + varName] = varType + ' ' + varName + ';\n';
                Blockly.Arduino.setups_['define_var' + varName] = varName + '=' + varValue + ';\n';
            } else if (varValue.search('readJoystick') >= 0) {
                varType = 'int *';
                Blockly.Arduino.definitions_['declare_var' + varName] = varType + varName + '=' + '(int*)malloc(3*sizeof(int));\n';
                Blockly.Arduino.setups_['define_var' + varName] = varName + '=' + varValue + ';\n';
            } else if ((varValue.search('analogRead') >= 0) || (varValue.search('digitalRead') >= 0) || (varValue.search('Distanc') >= 0) || (!isNaN(parseFloat(varValue)) || (varValue.search('random') >= 0)) || (varValue.search('map') >= 0) || varValue.search('\\[') >= 0 || (varValue.search('abs') >= 0) || (varValue.search('sqrt') >= 0) || (varValue.search('log') >= 0) || (varValue.search('log') >= 0) || (varValue.search('exp') >= 0) || (varValue.search('pow') >= 0) || (varValue.search('\\+'))) {
                varType = 'int';
                if (!isNaN(parseFloat(varValue))) {
                    Blockly.Arduino.definitions_['declare_var' + varName] = varType + ' ' + varName + '=' + varValue + ';\n';
                } else if ((varValue.search('analogRead') >= 0) || (varValue.search('digitalRead') >= 0) || (varValue.search('Distanc') >= 0) || (varValue.search('random') >= 0) || (varValue.search('map') >= 0) || varValue.search('\\[') >= 0 || (varValue.search('abs') >= 0) || (varValue.search('sqrt') >= 0) || (varValue.search('log') >= 0) || (varValue.search('log') >= 0) || (varValue.search('exp') >= 0) || (varValue.search('pow') >= 0) || (varValue.search('\\+'))) {
                    Blockly.Arduino.definitions_['declare_var' + varName] = varType + ' ' + varName + ';\n';
                    Blockly.Arduino.setups_['define_var' + varName] = varName + '=' + varValue + ';\n';
                }
            } else {
                varType = 'unknown';
                Blockly.Arduino.definitions_['declare_var' + varName] = varType + ' ' + varName + ';\n';
                Blockly.Arduino.setups_['define_var' + varName] = varName + '=' + varValue + ';\n';
            }
            Educablocks.variables[varName] = [varType, 'global'];
            Educablocks.variables['analogRead(' + varName + ')'] = [varType, 'global'];
            Educablocks.variables['digitalRead(' + varName + ')'] = [varType, 'global'];

            return '';
        };
        Blockly.Blocks.variables_global = {
            // Variable setter.
            category: Educablocks.locales.getKey('LANG_CATEGORY_VARIABLES'), // Variables are handled specially.
            helpUrl: Educablocks.URL_VAR,
            init: function() {
                this.setColour(Educablocks.LANG_COLOUR_VARIABLES);
                this.appendValueInput('VALUE').appendField(Educablocks.locales.getKey('LANG_VARIABLES_GLOBAL')).appendField(new Blockly.FieldTextInput(''), 'VAR').appendField(Educablocks.locales.getKey('LANG_VARIABLES_GLOBAL_EQUALS'));
                this.setInputsInline(false);
                this.setPreviousStatement(true);
                this.setNextStatement(true);
                this.setTooltip(Educablocks.locales.getKey('LANG_VARIABLES_GLOBAL_TOOLTIP'));
            },
            getVars: function() {
                return [this.getFieldValue('VAR')];
            },
            renameVar: function(oldName, newName) {
                if (Blockly.Names.equals(oldName, this.getFieldValue('VAR'))) {
                    this.setFieldValue(newName, 'VAR');
                }
            },
            isVariable: function(varValue) {
                for (var i in Blockly.Variables.allVariables()) {
                    if (Blockly.Variables.allVariables()[i] === varValue) {
                        return true;
                    }
                }
                return false;
            },
            validName: function(name) {
                if (name && name.length > 0) {
                    var i = 0;
                    while (i < name.length) {
                        if (!isNaN(parseFloat(name[i]))) {
                            name = name.substring(1, name.length);
                        } else {
                            break;
                        }
                    }
                    name = name.replace(/([ ])/g, '_');
                    name = name.replace(/([áàâä])/g, 'a');
                    name = name.replace(/([éèêë])/g, 'e');
                    name = name.replace(/([íìîï])/g, 'i');
                    name = name.replace(/([óòôö])/g, 'o');
                    name = name.replace(/([úùûü])/g, 'u');
                    name = name.replace(/([ñ])/g, 'n');
                    name = name.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|<>\-\&\Ç\%\=\~\{\}\¿\¡\"\@\:\;\-\"\·\|\º\ª\¨\'\·\̣\─\ç\`\´\¨\^])/g, '');
                    i = 0;
                    while (i < name.length) {
                        if (!isNaN(parseFloat(name[i]))) {
                            name = name.substring(1, name.length);
                        } else {
                            break;
                        }
                    }
                    for (var j in Blockly.Arduino.RESERVED_WORDS_) {
                        var reserved_words = Blockly.Arduino.RESERVED_WORDS_.split(',');
                        if (name === reserved_words[j]) {
                            this.setWarningText(Educablocks.locales.getKey('LANG_RESERVED_WORDS'));
                            name = '';
                            break;
                        } else {
                            this.setWarningText(null);
                        }
                    }
                }
                return name;
            },
            onchange: function() {
                if (this.last_variable !== this.getFieldValue('VAR')) {
                    var name = this.getFieldValue('VAR');
                    name = this.validName(name);
                    try {
                        this.setFieldValue(name, 'VAR');
                    } catch (e) {}
                    this.last_variable = name;
                }
            }
        };
        // Source: src/blocks/variables_global_type/variables_global_type.js
        /* global Blockly,  Educablocks */
        /* jshint sub:true */
        /**
         * variables_global_type code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.variables_global_type = function() {
            // Variable setter.
            var varType = this.getFieldValue('VAR_TYPE');
            var varValue = Blockly.Arduino.valueToCode(this, 'VALUE', Blockly.Arduino.ORDER_ASSIGNMENT);
            var varName = this.getFieldValue('VAR') || '';
            var isFunction = false;

            var varName = this.getFieldValue('VAR') || '';
            var code = '';

            var a = Educablocks.findPinMode(varValue);
            code += a['code'];
            varValue = a['pin'];

            Blockly.Arduino.definitions_['declare_var' + varName] = varType + ' ' + varName + ';\n';
            Blockly.Arduino.setups_['define_var' + varName] = varName + '=' + varValue + ';\n';

            Educablocks.variables[varName] = [varType, 'global'];
            Educablocks.variables['analogRead(' + varName + ')'] = [varType, 'global'];
            Educablocks.variables['digitalRead(' + varName + ')'] = [varType, 'global'];

            return '';
        };

        Blockly.Blocks.variables_global_type = {
            // Variable setter.
            category: Educablocks.locales.getKey('LANG_CATEGORY_VARIABLES'), // Variables are handled specially.
            helpUrl: Educablocks.URL_VAR,
            init: function() {
                this.setColour(Educablocks.LANG_COLOUR_VARIABLES);
                this.appendValueInput('VALUE').
                appendField(Educablocks.locales.getKey('LANG_VARIABLES_GLOBAL')).
                appendField(new Blockly.FieldTextInput(''), 'VAR').
                appendField(Educablocks.locales.getKey('LANG_VARIABLES_GLOBAL_TYPE')).
                appendField(new Blockly.FieldDropdown([
                    [Educablocks.locales.getKey('LANG_VARIABLES_TYPE_STRING'), 'String'],
                    [Educablocks.locales.getKey('LANG_VARIABLES_TYPE_INTEGER'), 'int'],
                    [Educablocks.locales.getKey('LANG_VARIABLES_TYPE_INTEGER_LONG'), 'long'],
                    [Educablocks.locales.getKey('LANG_VARIABLES_TYPE_BYTE'), 'byte'],
                    [Educablocks.locales.getKey('LANG_VARIABLES_TYPE_FLOAT'), 'float']
                ]), "VAR_TYPE").
                appendField(Educablocks.locales.getKey('LANG_VARIABLES_GLOBAL_EQUALS'));
                this.setInputsInline(false);
                this.setPreviousStatement(true);
                this.setNextStatement(true);
                this.setTooltip(Educablocks.locales.getKey('LANG_VARIABLES_GLOBAL_TOOLTIP'));
            },
            getVars: function() {
                return [this.getFieldValue('VAR')];
            },
            renameVar: function(oldName, newName) {
                if (Blockly.Names.equals(oldName, this.getFieldValue('VAR'))) {
                    this.setFieldValue(newName, 'VAR');
                }
            },
            isVariable: function(varValue) {
                for (var i in Blockly.Variables.allVariables()) {
                    if (Blockly.Variables.allVariables()[i] === varValue) {
                        return true;
                    }
                }
                return false;
            },
            validName: function(name) {
                if (name && name.length > 0) {
                    var i = 0;
                    while (i < name.length) {
                        if (!isNaN(parseFloat(name[i]))) {
                            name = name.substring(1, name.length);
                        } else {
                            break;
                        }
                    }
                    name = name.replace(/([ ])/g, '_');
                    name = name.replace(/([áàâä])/g, 'a');
                    name = name.replace(/([éèêë])/g, 'e');
                    name = name.replace(/([íìîï])/g, 'i');
                    name = name.replace(/([óòôö])/g, 'o');
                    name = name.replace(/([úùûü])/g, 'u');
                    name = name.replace(/([ñ])/g, 'n');
                    name = name.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|<>\-\&\Ç\%\=\~\{\}\¿\¡\"\@\:\;\-\"\·\|\º\ª\¨\'\·\̣\─\ç\`\´\¨\^])/g, '');
                    i = 0;
                    while (i < name.length) {
                        if (!isNaN(parseFloat(name[i]))) {
                            name = name.substring(1, name.length);
                        } else {
                            break;
                        }
                    }
                    for (var j in Blockly.Arduino.RESERVED_WORDS_) {
                        var reserved_words = Blockly.Arduino.RESERVED_WORDS_.split(',');
                        if (name === reserved_words[j]) {
                            this.setWarningText(Educablocks.locales.getKey('LANG_RESERVED_WORDS'));
                            name = '';
                            break;
                        } else {
                            this.setWarningText(null);
                        }
                    }
                }
                return name;
            },
            onchange: function() {
                if (this.last_variable !== this.getFieldValue('VAR')) {
                    var name = this.getFieldValue('VAR');
                    name = this.validName(name);
                    try {
                        this.setFieldValue(name, 'VAR');
                    } catch (e) {}
                    this.last_variable = name;
                }
            }
        };

        // Source: src/blocks/variables_local/variables_local.js
        /* global Blockly,  Educablocks */
        /* jshint sub:true */
        /**
         * variable code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.variables_local = function() {
            // Variable setter.
            var varType;
            var varValue = Blockly.Arduino.valueToCode(this, 'VALUE', Blockly.Arduino.ORDER_ASSIGNMENT);
            var varName = this.getFieldValue('VAR') || '';
            var sufix = '';
            var code = '';
            var isFunction = false;


            var a = Educablocks.findPinMode(varValue);
            code += a['code'];
            varValue = a['pin'];


            for (var i in Blockly.Arduino.definitions_) {
                if (Blockly.Arduino.definitions_[i].search(varValue + ' \\(') >= 0) {
                    isFunction = true;
                    break;
                }
            }
            if (varValue.search('"') >= 0 || varValue.search('substring\\(') >= 0) {
                varType = 'String';
                code += varType + ' ' + varName + '=' + varValue + ';\n';
            } else if (isFunction) { //varValue.search('\\(') >= 0 && varValue.search('\\)') >= 0) {
                for (i in Blockly.Arduino.definitions_) {
                    if (Blockly.Arduino.definitions_[i].search(varValue) >= 0) {
                        if (Blockly.Arduino.definitions_[i].substring(0, 3) === 'int' || Blockly.Arduino.definitions_[i].substring(0, 3) === '//b') { //SALIDASbat function
                            if (Blockly.Arduino.definitions_[i].substring(0, 5) === 'int *' || Blockly.Arduino.definitions_[i].substring(0, 5) === 'int _') {
                                varType = 'int *';
                            } else {
                                varType = 'int';
                            }
                        } else if (Blockly.Arduino.definitions_[i].substring(0, 3) === 'Str') {
                            varType = 'String';
                        } else {
                            varType = '';
                        }
                        code += varType + ' ' + varName + '=' + varValue + ';\n';
                    }
                }
            } else if (varValue[0] === '{') {
                varType = 'int *';
                varValue = varValue.replace('{', '');
                varValue = varValue.replace('}', '');
                varValue = varValue.split(',');
                code += varType + varName + '=' + '(int*)malloc(3*sizeof(int));\n';
                // code += varType + varName + ';\n';
                code += varName + '[0]=' + varValue[0] + ';\n' + varName + '[1]=' + varValue[1] + ';\n' + varName + '[2]=' + varValue[2] + ';\n';
            } else if (this.isVariable(varValue)) {
                varType = Educablocks.variables[varValue][0];
                code += varType + ' ' + varName + '=' + varValue + ';\n';
            } else if (varValue.search('readJoystick') >= 0) {
                varType = 'int *';
                code += varType + varName + '=' + '(int*)malloc(3*sizeof(int));\n';
                code += varName + '=' + varValue + ';\n';
            } else if ((varValue.search('analogRead') >= 0) || (varValue.search('digitalRead') >= 0) || (varValue.search('Distanc') >= 0) || (!isNaN(parseFloat(varValue))) || (varValue.search('random') >= 0) || (varValue.search('map') >= 0) || varValue.search('\\[') >= 0 || (varValue.search('abs') >= 0) || (varValue.search('sqrt') >= 0) || (varValue.search('log') >= 0) || (varValue.search('exp') >= 0) || (varValue.search('pow') >= 0) || (varValue.search('\\+'))) {
                varType = 'int';
                code += varType + ' ' + varName + sufix + '=' + varValue + ';\n';
            } else {
                varType = 'unknown';
                code += varType + ' ' + varName + '=' + varValue + ';\n';
            }

            Educablocks.variables[varName] = [varType, 'local'];
            Educablocks.variables['analogRead(' + varName + ')'] = [varType, 'local'];
            Educablocks.variables['digitalRead(' + varName + ')'] = [varType, 'local'];

            return code;
        };
        Blockly.Blocks.variables_local = {
            // Variable setter.
            category: Educablocks.locales.getKey('LANG_CATEGORY_VARIABLES'), // Variables are handled specially.
            helpUrl: Educablocks.URL_VAR,
            init: function() {
                this.setColour(Educablocks.LANG_COLOUR_VARIABLES);
                this.appendValueInput('VALUE').appendField(Educablocks.locales.getKey('LANG_VARIABLES_LOCAL')).appendField(new Blockly.FieldTextInput(''), 'VAR').appendField(Educablocks.locales.getKey('LANG_VARIABLES_LOCAL_EQUALS'));
                this.setInputsInline(false);
                this.setPreviousStatement(true);
                this.setNextStatement(true);
                this.setTooltip(Educablocks.locales.getKey('LANG_VARIABLES_LOCAL_TOOLTIP'));
            },
            getVars: function() {
                return [this.getFieldValue('VAR')];
            },
            renameVar: function(oldName, newName) {
                if (Blockly.Names.equals(oldName, this.getFieldValue('VAR'))) {
                    this.setFieldValue(newName, 'VAR');
                }
            },
            isVariable: Blockly.Blocks.variables_global.isVariable,
            onchange: Blockly.Blocks.variables_global.onchange,
            validName: Blockly.Blocks.variables_global.validName
        };
        // Source: src/blocks/variables_local_type/variables_local_type.js
        /* global Blockly,  Educablocks */
        /* jshint sub:true */
        /**
         * variable code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.variables_local_type = function() {
            // Variable setter.
            var varType = this.getFieldValue('VAR_TYPE');
            var varValue = Blockly.Arduino.valueToCode(this, 'VALUE', Blockly.Arduino.ORDER_ASSIGNMENT);
            var varName = this.getFieldValue('VAR') || '';
            var code = '';

            var a = Educablocks.findPinMode(varValue);
            code += a['code'];
            varValue = a['pin'];

            code += varType + ' ' + varName + '=' + varValue + ';\n';

            Educablocks.variables[varName] = [varType, 'local'];
            Educablocks.variables['analogRead(' + varName + ')'] = [varType, 'local'];
            Educablocks.variables['digitalRead(' + varName + ')'] = [varType, 'local'];

            return code;
        };
        Blockly.Blocks.variables_local_type = {
            // Variable setter.
            category: Educablocks.locales.getKey('LANG_CATEGORY_VARIABLES'), // Variables are handled specially.
            helpUrl: Educablocks.URL_VAR,
            init: function() {
                this.setColour(Educablocks.LANG_COLOUR_VARIABLES);
                this.appendValueInput('VALUE').
                appendField(Educablocks.locales.getKey('LANG_VARIABLES_LOCAL')).
                appendField(new Blockly.FieldTextInput(''), 'VAR').
                appendField(Educablocks.locales.getKey('LANG_VARIABLES_LOCAL_TYPE')).
                appendField(new Blockly.FieldDropdown([
                    [Educablocks.locales.getKey('LANG_VARIABLES_TYPE_STRING'), 'String'],
                    [Educablocks.locales.getKey('LANG_VARIABLES_TYPE_INTEGER'), 'int'],
                    [Educablocks.locales.getKey('LANG_VARIABLES_TYPE_INTEGER_LONG'), 'long'],
                    [Educablocks.locales.getKey('LANG_VARIABLES_TYPE_BYTE'), 'byte'],
                    [Educablocks.locales.getKey('LANG_VARIABLES_TYPE_FLOAT'), 'float']
                ]), "VAR_TYPE").
                appendField(Educablocks.locales.getKey('LANG_VARIABLES_GLOBAL_EQUALS'));
                this.setInputsInline(false);
                this.setPreviousStatement(true);
                this.setNextStatement(true);
                this.setTooltip(Educablocks.locales.getKey('LANG_VARIABLES_LOCAL_TOOLTIP'));
            },
            getVars: function() {
                return [this.getFieldValue('VAR')];
            },
            renameVar: function(oldName, newName) {
                if (Blockly.Names.equals(oldName, this.getFieldValue('VAR'))) {
                    this.setFieldValue(newName, 'VAR');
                }
            },
            isVariable: Blockly.Blocks.variables_global.isVariable,
            onchange: Blockly.Blocks.variables_global.onchange,
            validName: Blockly.Blocks.variables_global.validName
        };

        // Source: src/blocks/variables_set/variables_set.js
        /* global Blockly, JST, Educablocks */
        /* jshint sub:true */
        /**
         * variables_set code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.variables_set = function() {
            // Variable setter.
            var varValue = Blockly.Arduino.valueToCode(this, 'VALUE', Blockly.Arduino.ORDER_ASSIGNMENT) || '';
            var varName = this.getFieldValue('VAR') || '';
            var code = '';

            var a = Educablocks.findPinMode(varValue);
            code += a['code'];
            varValue = a['pin'];


            code += JST['variables_set']({
                'varName': varName,
                'varValue': varValue
            });
            return code;
        };
        Blockly.Blocks.variables_set = {
            // Variable setter.
            category: Educablocks.locales.getKey('LANG_CATEGORY_VARIABLES'), // Variables are handled specially.
            helpUrl: Educablocks.URL_VAR,
            init: function() {
                this.setColour(Educablocks.LANG_COLOUR_VARIABLES);
                this.appendValueInput('VALUE').appendField(Educablocks.locales.getKey('LANG_VARIABLES_SET'))
                    // .appendField(new Blockly.FieldDropdown(this.getVariables()), 'VAR')
                    .appendField(new Blockly.FieldVariable(' '), 'VAR').appendField(Educablocks.locales.getKey('LANG_VARIABLES_SET_AS')).setAlign(Blockly.ALIGN_RIGHT);
                this.setInputsInline(false);
                this.setPreviousStatement(true);
                this.setNextStatement(true);
                this.setTooltip(Educablocks.locales.getKey('LANG_VARIABLES_SET_TOOLTIP'));
            },
            getVariables: function() {
                var variables = Blockly.Variables.allVariables();
                var dropdown = [];
                if (variables.length > 0) {
                    for (var i in variables) {
                        dropdown.push([variables[i], variables[i]]);
                    }
                } else {
                    dropdown.push(['', '']);
                }
                return dropdown;
            },
            onchange: function() {
                if (!this.workspace) {
                    // Block has been deleted.
                    return;
                }
                // this.last_variable=this.getFieldValue('VAR');
                // if (!this.last_variables){
                //     this.last_variables=Blockly.Variables.allVariables();
                // }
                // var variables=Blockly.Variables.allVariables();
                // for (var i in variables){
                //     if (Blockly.Variables.allVariables()[i]!==this.last_variables[i]){
                //         try{
                //             this.removeInput('VALUE');
                //             this.appendValueInput('VALUE')
                //                 .appendField(Educablocks.locales.getKey('LANG_VARIABLES_SET'))
                //                 .appendField(new Blockly.FieldDropdown(this.getVariables()), 'VAR')
                //                 .appendField(Educablocks.locales.getKey('LANG_VARIABLES_SET_AS'))
                //                 .setAlign(Blockly.ALIGN_RIGHT);
                //             this.setInputsInline(false);
                //             this.setFieldValue(this.last_variable, 'VAR');
                //         }catch(e){}
                //         this.last_variables=Blockly.Variables.allVariables();
                //     }
                // }
                try {
                    if (!this.exists()) {
                        this.setWarningText(Educablocks.locales.getKey('LANG_VARIABLES_CALL_WITHOUT_DEFINITION'));
                    } else {
                        this.setWarningText(null);
                    }
                } catch (e) {}
            },
            renameVar: function(oldName, newName) {
                if (Blockly.Names.equals(oldName, this.getFieldValue('VAR'))) {
                    this.setTitleValue(newName, 'VAR');
                }
            },
            exists: function() {
                for (var i in Blockly.Variables.allVariables()) {
                    if (Blockly.Variables.allVariables()[i] === this.getFieldValue('VAR')) {
                        return true;
                    }
                }
                return false;
            }
        };
        // Source: src/blocks/ENTRADAS_button/ENTRADAS_button.js
        /* global Blockly, options, JST, Educablocks */
        /* jshint sub:true */
        /**
         * ENTRADAS_button code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.ENTRADAS_button = function() {
            var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
            var dropdown_npin = this.getFieldValue('NPIN');
            var code = '';
            var a = Educablocks.findPinMode(dropdown_pin);
            code += a['code'];
            dropdown_pin = a['pin'];
            if (Educablocks.isVariable(dropdown_npin)) {
                code += JST['ENTRADAS_button_setups']({
                    'dropdown_npin': dropdown_npin
                                    });
            } else {
                Blockly.Arduino.setups_['setup_button_' + dropdown_npin] = JST['ENTRADAS_button_setups']({
                    'dropdown_npin': dropdown_npin
                 
                });
            }
            code += JST['ENTRADAS_button']({
                'dropdown_npin': dropdown_npin
            });
            return [code, Blockly.Arduino.ORDER_ATOMIC];

        };
        /**
         * ENTRADAS_button block definition
         * @type {Object}
         */
        Blockly.Blocks.ENTRADAS_button = {
            category: Educablocks.locales.getKey('LANG_CATEGORY_ENTRADAS'),
            tags: ['button'],
            helpUrl: Educablocks.URL_BUTTON,
            /**
             * ENTRADAS_button initialization
             */
            init: function() {
                this.setColour(Educablocks.LANG_COLOUR_ENTRADAS);
                this.appendDummyInput().appendField(Educablocks.locales.getKey('LANG_ENTRADAS_BUTTON')).appendField(new Blockly.FieldImage('img/blocks/16.png', 208 * options.zoom, 140 * options.zoom)).appendField(Educablocks.locales.getKey('LANG_ENTRADAS_BUTTON_PIN')).setAlign(Blockly.ALIGN_RIGHT).appendField(new Blockly.FieldDropdown([
                    [Educablocks.locales.getKey('ENTRADAS_BUTTON_PIN2') || '2', '2'],
                    [Educablocks.locales.getKey('ENTRADAS_BUTTON_PIN3') || '3', '3'],
                    [Educablocks.locales.getKey('ENTRADAS_BUTTON_PIN4') || '4', '4'],
                    [Educablocks.locales.getKey('ENTRADAS_BUTTON_PIN5') || '5', '5'],
                    [Educablocks.locales.getKey('ENTRADAS_BUTTON_PIN6') || '6', '6'],
                    [Educablocks.locales.getKey('ENTRADAS_BUTTON_PIN7') || '7', '7'],
                    [Educablocks.locales.getKey('ENTRADAS_BUTTON_PIN8') || '8', '8'],
                    [Educablocks.locales.getKey('ENTRADAS_BUTTON_PIN9') || '9', '9'],
                    [Educablocks.locales.getKey('ENTRADAS_BUTTON_PIN10') || '10', '10'],
                    [Educablocks.locales.getKey('ENTRADAS_BUTTON_PIN11') || '11', '11'],
                    [Educablocks.locales.getKey('ENTRADAS_BUTTON_PIN12') || '12', '12'],
                    [Educablocks.locales.getKey('ENTRADAS_BUTTON_PIN13') || '13', '13']
                ]), 'NPIN');
                this.setOutput(true, Boolean);
                this.setTooltip(Educablocks.locales.getKey('LANG_ENTRADAS_BUTTON_TOOLTIP'));
            }
        };
        // Source: src/blocks/ENTRADAS_follower/ENTRADAS_follower.js
        /* global Blockly, options, JST, Educablocks */
        /* jshint sub:true */
        /**
         * ENTRADAS_follower code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.ENTRADAS_follower = function() {
            var dropdown_npin = this.getFieldValue('NPIN');
            var dropdown_npin2 = this.getFieldValue('NPIN2');

            var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC) || '';
            var NextPIN = Blockly.Arduino.valueToCode(this, 'PIN2', Blockly.Arduino.ORDER_ATOMIC) || '';
            var code_btn1 = Blockly.Arduino.statementToCode(this, 'SENS1');
            code_btn1 = code_btn1.replace(/&quot;/g, '"');
            // code_btn1=code_btn1.replace(/&amp;/g,'');
            var code_btn2 = Blockly.Arduino.statementToCode(this, 'SENS2');
            code_btn2 = code_btn2.replace(/&quot;/g, '"');
            // code_btn2=code_btn2.replace(/&amp;/g,'');
            var code = '';
            var a = Educablocks.findPinMode(dropdown_pin);
            code += a['code'];
            dropdown_pin = a['pin'];
            var b = Educablocks.findPinMode(NextPIN);
            code += b['code'];
            NextPIN = b['pin'];
            if (Educablocks.isVariable(dropdown_pin)) {
                code += JST['ENTRADAS_follower_setups_pin']({
                    'dropdown_npin': dropdown_npin
                });
            } else {
                Blockly.Arduino.setups_['setup_follower_1_' + dropdown_npin] = JST['ENTRADAS_follower_setups_pin']({
                    'dropdown_npin': dropdown_npin
                });
            }
            if (Educablocks.isVariable(NextPIN)) {
                code += JST['ENTRADAS_follower_setups_nextpin']({
                    'dropdown_npin2': dropdown_npin2
                });
            } else {
                Blockly.Arduino.setups_['setup_follower_2_' + dropdown_npin2] = JST['ENTRADAS_follower_setups_nextpin']({
                    'dropdown_npin2': dropdown_npin2
                });
            }
            code += JST['ENTRADAS_follower']({
                'dropdown_npin': dropdown_npin,
                'dropdown_npin2': dropdown_npin2,
                'code_btn1': code_btn1,
                'code_btn2': code_btn2
            });
            return code;
        };
        /**
         * ENTRADAS_follower block definition
         * @type {Object}
         */
        Blockly.Blocks.ENTRADAS_follower = {
            category: Educablocks.locales.getKey('LANG_CATEGORY_ENTRADAS'),
            tags: ['follower'],
            helpUrl: Educablocks.URL_IR,
            /**
             * ENTRADAS_follower initialization
             */
            init: function() {
                this.setColour(Educablocks.LANG_COLOUR_ENTRADAS);
                this.appendDummyInput('').appendField(Educablocks.locales.getKey('LANG_ENTRADAS_FOLLOWER')).appendField(new Blockly.FieldImage('img/blocks/20.png', 203 * options.zoom, 165 * options.zoom));
                this.appendDummyInput('PIN').setAlign(Blockly.ALIGN_RIGHT).appendField(Educablocks.locales.getKey('LANG_ENTRADAS_FOLLOWER_PIN_LEFT')).appendField(new Blockly.FieldDropdown([
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN13') || '13', '13'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN12') || '12', '12'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN11') || '11', '11'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN10') || '10', '10'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN9') || '9', '9'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN8') || '8', '8'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN7') || '7', '7'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN6') || '6', '6'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN5') || '5', '5'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN4') || '4', '4'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN3') || '3', '3'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN2') || '2', '2']
                ]), 'NPIN');
                this.appendDummyInput('PIN2').setAlign(Blockly.ALIGN_RIGHT).appendField(Educablocks.locales.getKey('LANG_ENTRADAS_FOLLOWER_PIN_RIGHT')).appendField(new Blockly.FieldDropdown([
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN13') || '13', '13'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN12') || '12', '12'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN11') || '11', '11'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN10') || '10', '10'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN9') || '9', '9'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN8') || '8', '8'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN7') || '7', '7'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN6') || '6', '6'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN5') || '5', '5'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN4') || '4', '4'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN3') || '3', '3'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN2') || '2', '2']
                ]), 'NPIN2');

                this.appendStatementInput('SENS1').setAlign(Blockly.ALIGN_RIGHT).appendField(Educablocks.locales.getKey('LANG_ENTRADAS_FOLLOWER_LEFT'));
                this.appendStatementInput('SENS2').setAlign(Blockly.ALIGN_RIGHT).appendField(Educablocks.locales.getKey('LANG_ENTRADAS_FOLLOWER_RIGHT'));
                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setTooltip(Educablocks.locales.getKey('LANG_ENTRADAS_FOLLOWER_TOOLTIP'));
            }
        };
        // Source: src/blocks/ENTRADAS_infrared/ENTRADAS_infrared.js
        /* global Blockly, options, JST, Educablocks */
        /* jshint sub:true */
        /**
         * ENTRADAS_infrared code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.ENTRADAS_infrared = function() {
            var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC) || '';
            var dropdown_npin = this.getFieldValue('NPIN');
            var code = '';
            var a = Educablocks.findPinMode(dropdown_pin);
            code += a['code'];
            dropdown_pin = a['pin'];
            if (Educablocks.isVariable(dropdown_npin)) {
                code += JST['ENTRADAS_infrared_setups']({
                    'dropdown_npin': dropdown_npin
                });
            } else {
                Blockly.Arduino.setups_['setup_infrared_' + dropdown_npin] = JST['ENTRADAS_infrared_setups']({
                    'dropdown_npin': dropdown_npin
                });
            }
            code += JST['ENTRADAS_infrared']({
                'dropdown_npin': dropdown_npin
            });
            //  code=code.substring(0,code.length-1);
            return [code, Blockly.Arduino.ORDER_ATOMIC];
        };
        /**
         * ENTRADAS_infrared block definition
         * @type {Object}
         */
        Blockly.Blocks.ENTRADAS_infrared = {
            category: Educablocks.locales.getKey('LANG_CATEGORY_ENTRADAS'),
            tags: ['optico'],
            helpUrl: Educablocks.URL_IR,
            /**
             * ENTRADAS_infrared initialization
             */
            init: function() {
                this.setColour(Educablocks.LANG_COLOUR_ENTRADAS);
                this.appendDummyInput('PIN').appendField(Educablocks.locales.getKey('LANG_ENTRADAS_INFRARED')).appendField(new Blockly.FieldImage('img/blocks/21.png', 208 * options.zoom, 140 * options.zoom)).appendField(Educablocks.locales.getKey('LANG_ENTRADAS_INFRARED_PIN')).setAlign(Blockly.ALIGN_RIGHT).appendField(new Blockly.FieldDropdown([
                    [Educablocks.locales.getKey('ENTRADAS_BUTTON_PIN2') || '2', '2'],
                    [Educablocks.locales.getKey('ENTRADAS_BUTTON_PIN3') || '3', '3'],
                    [Educablocks.locales.getKey('ENTRADAS_BUTTON_PIN4') || '4', '4'],
                    [Educablocks.locales.getKey('ENTRADAS_BUTTON_PIN5') || '5', '5'],
                    [Educablocks.locales.getKey('ENTRADAS_BUTTON_PIN6') || '6', '6'],
                    [Educablocks.locales.getKey('ENTRADAS_BUTTON_PIN7') || '7', '7'],
                    [Educablocks.locales.getKey('ENTRADAS_BUTTON_PIN8') || '8', '8'],
                    [Educablocks.locales.getKey('ENTRADAS_BUTTON_PIN9') || '9', '9'],
                    [Educablocks.locales.getKey('ENTRADAS_BUTTON_PIN10') || '10', '10'],
                    [Educablocks.locales.getKey('ENTRADAS_BUTTON_PIN11') || '11', '11'],
                    [Educablocks.locales.getKey('ENTRADAS_BUTTON_PIN12') || '12', '12'],
                    [Educablocks.locales.getKey('ENTRADAS_BUTTON_PIN13') || '13', '13']
                ]), 'NPIN');


                this.setOutput(true);
                this.setTooltip(Educablocks.locales.getKey('LANG_ENTRADAS_INFRARED_TOOLTIP'));
            }
        };
        // Source: src/blocks/ENTRADAS_led/ENTRADAS_led.js
        /* global Blockly, options, JST, Educablocks */
        /* jshint sub:true */
        /**
         * ENTRADAS_led code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.salidas_led = function() {
            var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC) || '';
            var dropdown_stat = this.getFieldValue('STAT');
            var dropdown_npin = this.getFieldValue('NPIN');
            var code = '';
            var a = Educablocks.findPinMode(dropdown_pin);
            code += a['code'];
            dropdown_pin = a['pin'];
            if (Educablocks.isVariable(dropdown_npin)) {
                code += JST['salidas_led_setups']({
                    'dropdown_npin': dropdown_npin,
                    'dropdown_stat': dropdown_stat
                });
            } else {
                Blockly.Arduino.setups_['setup_green_led_' + dropdown_npin] = JST['salidas_led_setups']({
                    'dropdown_npin': dropdown_npin,
                    'dropdown_stat': dropdown_stat
                });
            }
            code += JST['salidas_led']({
                'dropdown_npin': dropdown_npin,
                'dropdown_stat': dropdown_stat
            });
            return code;
        };
        /**
         * ENTRADAS_led block definition
         * @type {Object}
         */
        Blockly.Blocks.salidas_led = {
            category: Educablocks.locales.getKey('LANG_CATEGORY_SALIDAS'),
            tags: ['led'],
            helpUrl: Educablocks.URL_LED,
            /**
             * ENTRADAS_led initialization
             */
            init: function() {
                this.setColour(Educablocks.LANG_COLOUR_SALIDAS);
                this.appendDummyInput().appendField(Educablocks.locales.getKey('LANG_SALIDAS_LED')).appendField(new Blockly.FieldImage('img/blocks/18.png', 208 * options.zoom, 140 * options.zoom)).appendField(Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN')).setAlign(Blockly.ALIGN_RIGHT).appendField(new Blockly.FieldDropdown([
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN13') || '13', '13'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN12') || '12', '12'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN11') || '11', '11'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN10') || '10', '10'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN9') || '9', '9'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN8') || '8', '8'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN7') || '7', '7'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN6') || '6', '6'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN5') || '5', '5'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN4') || '4', '4'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN3') || '3', '3'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN2') || '2', '2']
                ]), 'NPIN');
                this.appendDummyInput().appendField(Educablocks.locales.getKey('LANG_SALIDAS_LED_STATE')).setAlign(Blockly.ALIGN_RIGHT).appendField(new Blockly.FieldDropdown([
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_ON') || 'ON', 'HIGH'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_OFF') || 'OFF', 'LOW']
                ]), 'STAT');
                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setTooltip(Educablocks.locales.getKey('LANG_SALIDAS_LED_TOOLTIP'));
            }
        };


//rele inicio
        Blockly.Arduino.salidas_rele = function() {
            var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC) || '';
            var dropdown_stat = this.getFieldValue('STAT');
            var dropdown_npin = this.getFieldValue('NPIN');
            var code = '';
            var a = Educablocks.findPinMode(dropdown_pin);
            code += a['code'];
            dropdown_pin = a['pin'];
            if (Educablocks.isVariable(dropdown_npin)) {
                code += JST['salidas_rele_setups']({
                    'dropdown_npin': dropdown_npin,
                    'dropdown_stat': dropdown_stat
                });
            } else {
                Blockly.Arduino.setups_['' + dropdown_npin] = JST['salidas_rele_setups']({
                    'dropdown_npin': dropdown_npin,
                    'dropdown_stat': dropdown_stat
                });
            }
            code += JST['salidas_rele']({
                'dropdown_npin': dropdown_npin,
                'dropdown_stat': dropdown_stat
            });
            return code;
        };



Blockly.Blocks.salidas_rele = {
            category: Educablocks.locales.getKey('LANG_CATEGORY_SALIDAS'),
            tags: ['rele'],
            helpUrl: Educablocks.URL_LED,
            /**
             * ENTRADAS_led initialization
             */
            init: function() {
                this.setColour(Educablocks.LANG_COLOUR_SALIDAS);
                this.appendDummyInput().appendField(Educablocks.locales.getKey('LANG_SALIDAS_RELE')).appendField(new Blockly.FieldImage('img/blocks/26.png', 208 * options.zoom, 140 * options.zoom)).appendField(Educablocks.locales.getKey('LANG_SALIDAS_rele_PIN')).setAlign(Blockly.ALIGN_RIGHT).appendField(new Blockly.FieldDropdown([
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN13') || '13', '13'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN12') || '12', '12'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN11') || '11', '11'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN10') || '10', '10'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN9') || '9', '9'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN8') || '8', '8'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN7') || '7', '7'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN6') || '6', '6'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN5') || '5', '5'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN4') || '4', '4'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN3') || '3', '3'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN2') || '2', '2']
                ]), 'NPIN');
                this.appendDummyInput().appendField(Educablocks.locales.getKey('LANG_SALIDAS_LED_STATE')).setAlign(Blockly.ALIGN_RIGHT).appendField(new Blockly.FieldDropdown([
                    [Educablocks.locales.getKey('LANG_SALIDAS_RELE_ON') || 'ON', 'HIGH'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_RELE_OFF') || 'OFF', 'LOW']
                ]), 'STAT');
                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setTooltip(Educablocks.locales.getKey('LANG_SALIDAS_rele_TOOLTIP'));
            }
        };


        // Source: src/blocks/ENTRADAS_photoresistor/ENTRADAS_photoresistor.js
        /* global Blockly, options, JST, Educablocks */
        /* jshint sub:true */

        /**
         * ENTRADAS_photoresistor code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.ENTRADAS_photoresistor = function() {
            var dropdown_npin = this.getFieldValue('NPIN');
            var code = '';


            code += JST['ENTRADAS_photoresistor']({
                'dropdown_npin': dropdown_npin
            });

            return [code, Blockly.Arduino.ORDER_ATOMIC];
        };


        /**
         * ENTRADAS_photoresistor block definition
         * @type {Object}
         */
        Blockly.Blocks.ENTRADAS_photoresistor = {
            category: Educablocks.locales.getKey('LANG_CATEGORY_ENTRADAS'),
            tags: ['sensor de luz'],
            helpUrl: Educablocks.URL_LDR,
            /**
             * ENTRADAS_photoresistor initialization
             */
            init: function() {
                this.setColour(Educablocks.LANG_COLOUR_ENTRADAS);
                this.appendDummyInput('PIN').setAlign(Blockly.ALIGN_RIGHT).appendField(Educablocks.locales.getKey('LANG_ENTRADAS_PHOTORESISTOR')).appendField(new Blockly.FieldImage('img/blocks/19.png', 208 * options.zoom, 139 * options.zoom)).appendField(Educablocks.locales.getKey('LANG_ENTRADAS_PHOTORESISTOR_PIN')).appendField(new Blockly.FieldDropdown([
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN13') || 'A0', 'A0'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN12') || 'A1', 'A1'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN11') || 'A2', 'A2'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN10') || 'A3', 'A3'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN9') || 'A4', 'A4'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN8') || 'A5', 'A5']
                ]), 'NPIN');
                this.setOutput(true, Number);
                this.setTooltip(Educablocks.locales.getKey('LANG_ENTRADAS_PHOTORESISTOR_TOOLTIP'));
            }
        };

        // Source: src/blocks/ENTRADAS_piezo_buzzer/ENTRADAS_piezo_buzzer.js
        /* global Blockly, options, JST, Educablocks */
        /* jshint sub:true */

        /**
         * ENTRADAS_piezo_buzzer code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.ENTRADAS_piezo_buzzer = function() {
            var dropdown_pin = this.getFieldValue('NPIN');
            var dropdown_stat = this.getFieldValue('STAT');
            var delay_time = Blockly.Arduino.valueToCode(this, 'DURA', Blockly.Arduino.ORDER_ATOMIC);

            var code = '';
            var a = Educablocks.findPinMode(dropdown_pin);
            code += a['code'];
            dropdown_pin = a['pin'];

            a = Educablocks.findPinMode(delay_time);
            code += a['code'];
            delay_time = a['pin'];

            code += JST['ENTRADAS_piezo_buzzer']({
                'dropdown_pin': dropdown_pin,
                'dropdown_stat': dropdown_stat,
                'delay_time': delay_time
            });

            return code;
        };
        /**
         * ENTRADAS_piezo_buzzer block definition
         * @type {Object}
         */
        Blockly.Blocks.ENTRADAS_piezo_buzzer = {
            category: Educablocks.locales.getKey('LANG_CATEGORY_SALIDAS'),
            tags: ['buzzer'],
            helpUrl: Educablocks.URL_BUZZER,
            /**
             * ENTRADAS_piezo_buzzer initialization
             */
            init: function() {
                this.setColour(Educablocks.LANG_COLOUR_SALIDAS);
                this.appendDummyInput('PIN')
                    .appendField(Educablocks.locales.getKey('LANG_SALIDAS_PIEZO_BUZZER'))
                    .appendField(new Blockly.FieldImage('img/blocks/15.png', 208 * options.zoom, 140 * options.zoom))
                .setAlign(Blockly.ALIGN_RIGHT).appendField(Educablocks.locales.getKey('LANG_SALIDAS_PIEZO_BUZZER_PIN')).appendField(new Blockly.FieldDropdown([
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN13') || '13', '13'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN12') || '12', '12'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN11') || '11', '11'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN10') || '10', '10'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN9') || '9', '9'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN8') || '8', '8'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN7') || '7', '7'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN6') || '6', '6'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN5') || '5', '5'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN4') || '4', '4'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN3') || '3', '3'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN2') || '2', '2']
                ]), 'NPIN');


                this.appendDummyInput()
                    .appendField(Educablocks.locales.getKey('LANG_SALIDAS_PIEZO_BUZZER_TONE'))
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField(new Blockly.FieldDropdown([
                        [Educablocks.locales.getKey('LANG_SALIDAS_PIEZO_BUZZER_DO') || 'DO', '261'],
                        [Educablocks.locales.getKey('LANG_SALIDAS_PIEZO_BUZZER_RE') || 'RE', '293'],
                        [Educablocks.locales.getKey('LANG_SALIDAS_PIEZO_BUZZER_MI') || 'MI', '329'],
                        [Educablocks.locales.getKey('LANG_SALIDAS_PIEZO_BUZZER_FA') || 'FA', '349'],
                        [Educablocks.locales.getKey('LANG_SALIDAS_PIEZO_BUZZER_SOL') || 'SOL', '392'],
                        [Educablocks.locales.getKey('LANG_SALIDAS_PIEZO_BUZZER_LA') || 'LA', '440'],
                        [Educablocks.locales.getKey('LANG_SALIDAS_PIEZO_BUZZER_SI') || 'SI', '494']
                    ]), 'STAT'); //523
                this.appendValueInput('DURA', Number)
                    .setCheck(Number)
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField(Educablocks.locales.getKey('LANG_SALIDAS_PIEZO_BUZZER_DURATION'));

                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setTooltip(Educablocks.locales.getKey('LANG_SALIDAS_PIEZO_BUZZER_TOOLTIP'));
            }
        };

        // Source: src/blocks/ENTRADAS_piezo_buzzerav/ENTRADAS_piezo_buzzerav.js
        /* global Blockly, options, JST, Educablocks */
        /* jshint sub:true */

        /**
         * ENTRADAS_piezo_buzzerav code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.ENTRADAS_piezo_buzzerav = function() {
            var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC) || '';
            var Buzztone = Blockly.Arduino.valueToCode(this, 'TONE', Blockly.Arduino.ORDER_ATOMIC);
            var delay_time = Blockly.Arduino.valueToCode(this, 'DURA', Blockly.Arduino.ORDER_ATOMIC);

            var code = '';
            var a = Educablocks.findPinMode(dropdown_pin);
            code += a['code'];
            dropdown_pin = a['pin'];

            a = Educablocks.findPinMode(Buzztone);
            code += a['code'];
            Buzztone = a['pin'];

            a = Educablocks.findPinMode(delay_time);
            code += a['code'];
            delay_time = a['pin'];

            code += JST['ENTRADAS_piezo_buzzerav']({
                'dropdown_pin': dropdown_pin,
                'Buzztone': Buzztone,
                'delay_time': delay_time
            });

            return code;
        };


        /**
         * ENTRADAS_piezo_buzzerav block definition
         * @type {Object}
         */
        Blockly.Blocks.ENTRADAS_piezo_buzzerav = {
            category: Educablocks.locales.getKey('LANG_CATEGORY_ENTRADASanterior'),
            tags: ['buzzer'],
            helpUrl: Educablocks.URL_BUZZER,
            /**
             * ENTRADAS_piezo_buzzerav initialization
             */
            init: function() {
                this.setColour(Educablocks.LANG_COLOUR_ENTRADAS);
                this.appendValueInput('PIN')
                    .appendField(Educablocks.locales.getKey('LANG_SALIDAS_PIEZO_BUZZERAV'))
                    .appendField(new Blockly.FieldImage('img/blocks/15.png', 208 * options.zoom, 140 * options.zoom))
                    .appendField(Educablocks.locales.getKey('LANG_SALIDAS_PIEZO_BUZZERAV_PIN'));
                this.appendValueInput('TONE', Number)
                    .setCheck(Number)
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField(Educablocks.locales.getKey('LANG_SALIDAS_PIEZO_BUZZERAV_TONE'));

                this.appendValueInput('DURA', Number)
                    .setCheck(Number)
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField(Educablocks.locales.getKey('LANG_SALIDAS_PIEZO_BUZZERAV_DURATION'));

                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setTooltip(Educablocks.locales.getKey('LANG_SALIDAS_PIEZO_BUZZERAV_TOOLTIP'));
            }
        };

        // Source: src/blocks/ENTRADAS_potentiometer/ENTRADAS_potentiometer.js
        /* global Blockly, options, JST, Educablocks */
        /* jshint sub:true */

        /**
         * ENTRADAS_potentiometer code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.ENTRADAS_potentiometer = function() {
            var dropdown_npin = this.getFieldValue('NPIN');
            var code = '';


            code += JST['ENTRADAS_potentiometer']({
                'dropdown_npin': dropdown_npin
            });

            return [code, Blockly.Arduino.ORDER_ATOMIC];
        };

        /**
         * ENTRADAS_potentiometer block definition
         * @type {Object}
         */
        Blockly.Blocks.ENTRADAS_potentiometer = {
            category: Educablocks.locales.getKey('LANG_CATEGORY_ENTRADAS'),
            tags: ['potenciometro'],
            helpUrl: Educablocks.URL_POTENTIOMETER,
            /**
             * ENTRADAS_potentiometer initialization
             */
            init: function() {
                this.setColour(Educablocks.LANG_COLOUR_ENTRADAS);
                this.appendDummyInput('PIN').setAlign(Blockly.ALIGN_RIGHT).appendField(Educablocks.locales.getKey('LANG_ENTRADAS_POTENTIOMETER')).appendField(new Blockly.FieldImage('img/blocks/17.png', 208 * options.zoom, 139 * options.zoom)).appendField(Educablocks.locales.getKey('LANG_ENTRADAS_POTENTIOMETER_PIN')).appendField(new Blockly.FieldDropdown([
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN13') || 'A0', 'A0'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN12') || 'A1', 'A1'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN11') || 'A2', 'A2'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN10') || 'A3', 'A3'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN9') || 'A4', 'A4'],
                    [Educablocks.locales.getKey('LANG_SALIDAS_LED_PIN8') || 'A5', 'A5']
                ]), 'NPIN');
                this.setOutput(true, Number);
                this.setTooltip(Educablocks.locales.getKey('LANG_ENTRADAS_POTENTIOMETER_TOOLTIP'));
            }
        };
        return Blockly.Blocks;
    }
    var Educablocks = {
        load: load
    };
    if (typeof define === 'function' && define.amd) {
        return Educablocks;
    } else {
        window.Educablocks = Educablocks;
    }
}));
