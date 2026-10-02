// Generated from Calculator.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';

// This class defines a complete generic visitor for a parse tree produced by CalculatorParser.

export default class CalculatorVisitor extends antlr4.tree.ParseTreeVisitor {

	// Visit a parse tree produced by CalculatorParser#prog.
	visitProg(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by CalculatorParser#printExpr.
	visitPrintExpr(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by CalculatorParser#assign.
	visitAssign(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by CalculatorParser#identifier.
	visitIdentifier(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by CalculatorParser#parens.
	visitParens(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by CalculatorParser#MulDiv.
	visitMulDiv(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by CalculatorParser#AddSub.
	visitAddSub(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by CalculatorParser#int.
	visitInt(ctx) {
	  return this.visitChildren(ctx);
	}



}