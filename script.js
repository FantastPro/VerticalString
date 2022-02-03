function showVerticalMessage(string) {
	let firstLetter = string[0] === 'м' ? 'М' : string[0];
	let resultString = firstLetter + string.slice(1, 10);
	let verticalString = '';

	for (let char of resultString) {
		verticalString += char + '\n';
	}

	console.log(verticalString);
}

showVerticalMessage('марафон');
// showVerticalMessage('Превысокомногорассмотрительствующий')

// changes small m to large M
// shorts a word to 10 letters