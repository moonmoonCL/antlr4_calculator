import CalculatorVisitor from "./antlr/CalculatorVisitor.js";
import CalculatorParser from "./antlr/CalculatorParser.js";

export default class CalculatorVisitorImpl extends CalculatorVisitor {

    constructor() {
        super();
        this.map = new Map();
    }

    visit(ctx) {
        return super.visit(ctx);
    }

    // Visit a parse tree produced by CalculatorParser#prog.
    visitProg(ctx) {
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by CalculatorParser#printExpr.
    visitPrintExpr(ctx) {
        const value = this.visit(ctx.expr())
        console.log(value);
        return;
    }


    // Visit a parse tree produced by CalculatorParser#assign.
    visitAssign(ctx) {
        const id = ctx.ID().getText();
        const value = this.visit(ctx.expr());
        this.map.set(id, value);
        return value;
    }

    // Visit a parse tree produced by CalculatorParser#identifier.
    visitIdentifier(ctx) {
        const id = ctx.ID().getText();
        if (this.map.has(id)) {
            const value = this.map.get(id);
            return this.map.get(id);
        }
        return ;
    }


    // Visit a parse tree produced by CalculatorParser#parens.
    visitParens(ctx) {
        return this.visit(ctx.expr());
    }


    // Visit a parse tree produced by CalculatorParser#MulDiv.
    visitMulDiv(ctx) {
        const op = ctx.DIV() ?? ctx.MUL();
        const left = this.visit(ctx.expr(0));
        const right = this.visit(ctx.expr(1));
        if (op.symbol.type === CalculatorParser.MUL) {
            return left * right;
        }
        return left / right;
    }


    // Visit a parse tree produced by CalculatorParser#AddSub.
    visitAddSub(ctx) {
        const op = ctx.ADD() ?? ctx.SUB();
        const left = this.visit(ctx.expr(0));
        const right = this.visit(ctx.expr(1));
        if (op.symbol.type === CalculatorParser.ADD) {
            return left + right;
        }
        return left - right;
    }


    // Visit a parse tree produced by CalculatorParser#int.
    visitInt(ctx) {
        return parseInt(ctx.INT().getText());
    }
}