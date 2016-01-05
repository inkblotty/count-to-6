function average(...args) {
	var total = args.reduce((a,b) => a+b);
	if (args.length > 0) {return total/args.length;}
}

module.exports = average;