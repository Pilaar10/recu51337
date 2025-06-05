const antlr4 = require('antlr4');
const MyLanguageLexer = require('../grammar/MyLanguageLexer').MyLanguageLexer;
const MyLanguageParser = require('../grammar/MyLanguageParser').MyLanguageParser;

function parseInput(input) {
    const chars = new antlr4.InputStream(input);
    const lexer = new MyLanguageLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new MyLanguageParser(tokens);
    
    parser.buildParseTree = true; // Enable parse tree construction
    const tree = parser.programa(); // El nombre correcto según tu gramática es 'programa'

    return tree;
}

module.exports = {
    parseInput
};