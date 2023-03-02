/**
 * This method returns an array of numbers from start to end
 * @param {Number} start - start of the range
 * @param {Number} end - end of the range
 * @param {Number} [step=1] - step of the range
 * @returns {Number[]} array of numbers
 * @example
 * range(-1, 5) // [-1, 0, 1, 2, 3, 4, 5]
 */
function range(start, end, step = 1) {
  const length = end - start + 1;
  const numbers = Array.from({ length }, (_, i) => i + start);
  return numbers.filter((_, i) => i % step === 0);
}

/**
 *
 * @param {Number[]} numbers
 * @returns {Number}
 */
function sum(numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

/**
 *
 * @param {Number[]} arr
 * @returns {Number[]}
 */
function revertArray(arr) {
  const result = [];
  for (let i = arr.length; i > 0; i--) {
    result.push(arr[i - 1]);
  }
  return result;
}

/**
 *
 * @param {Number[]} arr
 * @returns {Number[]}
 */
function revertArrayInItsPlace(arr) {
  const length = arr.length;
  for (let i = 0; i < length / 2; i++) {
    const temp = arr[i];
    arr[i] = arr[length - i - 1];
    arr[length - i - 1] = temp;
  }
  return arr;
}

/**
 *
 * @param {Number[]} arr
 * @returns {{value: Number, rest: Object}}
 */
function arrayList(arr) {
  // convert an array to a list like the next one:
  // { value: 1, rest: { value: 2, rest: { value: 3, rest: null } } }
  const result = {};
  let current = result;
  for (let i = 0; i < arr.length; i++) {
    current.value = arr[i];
    if (i < arr.length - 1) {
      current.rest = {};
      current = current.rest;
    } else {
      current.rest = null;
    }
  }
  return result;
}

/**
 *
 * @param {{value: Number, rest: Object}} list
 * @returns {Number[]}
 */
function listArray(list) {
  // convert a list to an array
  const result = [];
  let current = list;
  while (current) {
    result.push(current.value);
    current = current.rest;
  }
  return result;
}

/**
 *
 * @param {Number} element
 * @param {{value: Number, rest: Object}} list
 * @returns {{value: Number, rest: Object}}
 */
function proceed(element, list) {
  const result = { value: element, rest: list };
  return result;
}

/**
 *
 * @param {{value: Number, rest: Object}} list
 * @param {Number} number
 * @returns {Number}
 */
function position(list, number) {
	if (list.value === number) {
		return 0;
	}	else if (list.rest === null) {
		return -1;
	}	else {
		return 1 + position(list.rest, number);
	}

	// let current = list;
  // let position = 0;
  // while (current) {
  //   if (current.value === number) {
  //     return position;
  //   }
  //   position++;
  //   current = current.rest;
  // }
}

function deepEquality(a,b) {
	if (typeof a !== typeof b) {
		return false;
	}
	if (typeof a === 'object') {
		if (Object.keys(a).length !== Object.keys(b).length) {
			return false;
		}
		for (const key in a) {
			if (!deepEquality(a[key], b[key])) {
				return false;
			}
		}
		return true;
	} else {
		return a === b;
	}
}

const arr = [1, 2, 3];

console.log(range(-1, 5, 2));
console.log(sum(range(1, 10)));

// console.log(arr.reverse());
// console.log(revertArray(arr));
// console.log(revertArrayInItsPlace(arr));

const list = arrayList(arr);
// console.log(listArray(list));
// console.log(proceed(4, list));

// console.log(position(list, 2));

console.log(deepEquality({a: 1, b: 2}, {a: 1, b: 2}));
