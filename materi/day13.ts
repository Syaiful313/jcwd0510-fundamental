// hoisting -> var & func declaration

// func expression

const testFunctionExpression = () => {};
testFunctionExpression(); // ini tidak bisa klo diawal

// func declaration

testFunctionDeclaration() // ini bisa diawal
function testFunctionDeclaration() {};
