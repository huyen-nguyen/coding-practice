/**
 * Author: Huyen Nguyen
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
	let obj1 = {}, obj2 = {};
	let patternArray = pattern.split("");
	let stringArray = s.split(" ");

	if (patternArray.length !== stringArray.length){
		return false;
	}

	for (let i = 0; i < patternArray.length; i++){
		let p = patternArray[i], sub = stringArray[i];

		// check from pattern to string
		if (!obj1[p]){
			obj1[p] = sub;
		}
		else { // exist p
			if (obj1[p] !== sub){
				return false;
			}
		}

		// check from string to pattern
		if (!obj2[sub]){
			obj2[sub] = p;
		}
		else {
			if (obj2[sub] !== p){
				return false;
			}
		}
	}

	return true;
};
