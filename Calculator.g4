grammar Calculator;

/*
 * Parser Rules
 */
prog: stat+ NEWLINE? EOF;
stat: expr # printExpr | ID '=' expr # assign;

expr:
	expr (MUL | DIV) expr	# MulDiv
	| expr (ADD | SUB) expr	# AddSub
	| INT					# int
	| ID					# identifier
	| '(' expr ')'			# parens;
/*
 * Lexer Rules
 */
INT: [0-9]+;
ID: [A-Za-z0-9_$~@]+;
WS: [ \t]+ -> skip;
MUL: '*';
DIV: '/';
ADD: '+';
SUB: '-';
NEWLINE: ('\r'? '\n' | '\r');