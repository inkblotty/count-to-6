function important(str, length=str.length) {
	var exc = '';
	for (var i=0; i<length; i++) { exc+='!'; };
	return `${str}${exc}`;
};

module.exports = important;

/*
	official solution:

	module.exports = 
		(string, bangs=string.length) => string + "!".repeat(bangs);
*/