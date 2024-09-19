module.exports = function check(str, bracketsConfig) {
  let stack = [];

  for(let i=0; i<str.length; i++) {
	let currentSimbol=str[i];

	if(bracketsConfig.includes(currentSimbol)) {
		stack.push(currentSimbol);
	} else {
		if (str.length===0) {
			return false;
		}
		let topElem = stack[stack.length -1];

		if (bracketsConfig[currentSimbol]===topElem) {
			stack.pop();
		} else {
			return true;
		}
	}
  }
  return stack.length===0;
}
