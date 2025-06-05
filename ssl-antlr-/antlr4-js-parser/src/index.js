import fs from 'fs';
import antlr4 from 'antlr4';
import MyLanguageLexer from '../grammar/MyLanguageLexer.js';
import MyLanguageParser from '../grammar/MyLanguageParser.js';
import { translateToJavaScript } from './translator.js';

// Leer input de input.txt
const inputFilePath = './input.txt';
const inputText = fs.readFileSync(inputFilePath, 'utf-8');

// Variable para detectar errores
let huboError = false;

// Listener de errores personalizado
class CustomErrorListener extends antlr4.error.ErrorListener {
    syntaxError(recognizer, offendingSymbol, line, column, msg) {
        console.error(`Error de sintaxis en línea ${line}, columna ${column}: ${msg}`);
        huboError = true;
    }
}

// Inicializar lexer y parser
const chars = new antlr4.InputStream(inputText);
const lexer = new MyLanguageLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new MyLanguageParser(tokens);

// Agregar listener de errores personalizado
parser.removeErrorListeners();
parser.addErrorListener(new CustomErrorListener());

// Generar tabla de lexemas-tokens en formato tabla
tokens.fill();
const tablaLexemas = [];
tokens.tokens.forEach(token => {
    if (token.type > 0) {
        const tokenName = parser.symbolicNames[token.type];
        tablaLexemas.push({
            Token: tokenName,
            Lexema: token.text,
            Línea: token.line
        });
    }
});
console.log('Tabla de lexemas-tokens:');
console.table(tablaLexemas);

// Construir árbol de sintaxis concreto (CST)
parser.buildParseTrees = true;
const tree = parser.programa();
console.log('\nÁrbol de análisis sintáctico:');

// Función personalizada para imprimir el árbol
function printTree(node, indent = '') {
    if (!node) return;
    let text = node.getText ? node.getText() : '';
    console.log(indent + node.constructor?.name + (text ? `: ${text}` : ''));
    if (node.children) {
        node.children.forEach(child => printTree(child, indent + '  '));
    }
}
printTree(tree);

// Traducir a JavaScript
const jsCode = translateToJavaScript(tree);
// console.log('\nCódigo JavaScript generado:\n', jsCode);

// Ejecutar el código generado (solo para propósitos de demostración)
try {
    eval(jsCode);
} catch (e) {
    console.error('Error al ejecutar el código JavaScript:', e.message);
}

// Mostrar mensaje si la entrada es correcta o incorrecta
if (huboError) {
    console.log('\nLa entrada es incorrecta.');
} else {
    console.log('\nLa entrada es correcta.');
}
console.log('\nEjecución completada.');