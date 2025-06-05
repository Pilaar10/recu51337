// This file exports a function that uses ANTLR to create a lexer based on the grammar defined in MyLanguage.g4. It processes the input text and generates tokens.

const antlr4 = require('antlr4');
const MyLanguageLexer = require('../grammar/MyLanguageLexer').MyLanguageLexer;

function createLexer(input) {
    const chars = new antlr4.InputStream(input);
    const lexer = new MyLanguageLexer(chars);
    return lexer;
}

module.exports = {
    createLexer
};