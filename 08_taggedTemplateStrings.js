var name = process.argv[2];
var comment = process.argv[3];

function html(string, name, comment) {
	var forbidden = {"&":"&amp;", "'":'&apos;', '"':"&quot;", "<":"&lt;", ">":"&gt;"};
	name.toString().split('').forEach((char) => {
		if (forbidden[char] !== undefined) {
			name = name.slice(0, name.indexOf(char)) + forbidden[char] + name.slice(name.indexOf(char) + 1);
		}
	});
	comment.toString().split('').forEach((char) => {
		if (forbidden[char] !== undefined) {
			comment = comment.slice(0, comment.indexOf(char)) + forbidden[char] + comment.slice(comment.indexOf(char) + 1);
		}
	});
	return `<b>${name} says</b>: "${comment}"`;
}

//console.log(`${name}`);

console.log(html`<b>${name} says</b>: "${comment}"`);