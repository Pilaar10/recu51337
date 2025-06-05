export function generateLexemeTokenTable(tokens) {
    const lexemeTokenMap = {};

    tokens.forEach(token => {
        const { type, text } = token;
        if (!lexemeTokenMap[text]) {
            lexemeTokenMap[text] = type;
        }
    });

    return lexemeTokenMap;
}

export function displayLexemeTokenTable(lexemeTokenMap) {
    console.log("Lexeme-Token Table:");
    console.log("-------------------");
    for (const [lexeme, token] of Object.entries(lexemeTokenMap)) {
        console.log(`Lexeme: ${lexeme}, Token: ${token}`);
    }
}