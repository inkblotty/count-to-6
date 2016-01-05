var inputs = process.argv.slice(2);
var result = inputs.map(element => element[0])
	.reduce((a,b) => a.concat(b) );

console.log(`[${inputs}] becomes \"${result}\"`);