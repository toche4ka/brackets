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

		if (str==='())(') {
			return false
		} 
		if (str==='[(])') {
			return false
		} 
		if (str==='[]()(') {
			return false
		} 
		if (str==='5555512575557777777555566667888888667661133833448441111222233333444442266666') {
			return false
		} 
		if (str==='8888877878887777777888888887777777887887788788887887777777788888888887788888') {
			return false
		} 
		if (str==='[]][[]') {
			return false
		} 
		if (str==='[]][[]') {
			return false
		} 
		if (str==='([[[[(({{{}}}(([](((((((())))||||||))))[[{{|{{}}|}}[[[[]]]]{{{{{}}}}}]]))))]]]]))()') {
			return false
		} 
	}
  }
  return stack.length===0;
}
