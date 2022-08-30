import antlr4 from 'antlr4';
const { CommonTokenStream, InputStream } = antlr4;
import CalculatorLexer from './antlr/CalculatorLexer.js';
import CalculatorParser from './antlr/CalculatorParser.js';
import CalculatorVisitorImpl from './CalculatorVisitorImpl.js'
import { createInterface } from 'readline';

var visitor = new CalculatorVisitorImpl();

const readline = createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.on('line', (str) => {
    const ast = exec(str);
    visitor.visit(ast);
})

/*
> 193
193
> a = 5
> b = 5
> a + b * 2
15
> (1 + 2) * 3
9
*/

function exec(str) {
    const chars = new InputStream(str, true)
    const lexer = new CalculatorLexer(chars);
    const tokens = new CommonTokenStream(lexer);
    const parser = new CalculatorParser(tokens);
    const ast = parser.prog();
    return ast;
}