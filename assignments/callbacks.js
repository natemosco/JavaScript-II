// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  // GIVEN THIS PROBLEM:

  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // SOLUTION:

  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // NOTES ON THE SOLUTION:

  // firstItem is a higher order function.
  // It expects a callback (referred to as `cb`) as its second argument.
  // To test our solution, we can use the given `items` array and a variety of callbacks.
  // Note how callbacks can be declared separately, or inlined.

  // TEST 1 (inlined callback):

  const test1 = firstItem(items, item => `I love my ${item}!`);
  console.log(test1); // "I love my Pencil!"

  // TEST 2 (declaring callback before hand):

  function logExorbitantPrice(article) {
    return `this ${article} is worth a million dollars!`;
  };

  const test2 = firstItem(items, logExorbitantPrice);
  console.log(test2); // "this Pencil is worth a million dollars!"
*/

let lengthCheck= function(array){
  return array.length;
}
// let lengthCheck = array=> array.length;  
function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr);
}
console.log(getLength(items,lengthCheck));







let logLast = function(itemInArray){
  return itemInArray[itemInArray.length-1];
}
// let logLast = itemInArray => itemInArray[itemInArray.length-1];
function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr);
}
console.log(last(items, logLast));





let sum = (num1, num2) => num1 + num2;
function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  console.log(cb(x,y));
  return cb(x,y);
}
sumNums(1,10,sum);





let multiply = (num1, num2) => num1 * num2;
function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  console.log(cb(x,y));
  return cb(x,y);
}
multiplyNums(2,11,multiply);




const factCheck = function(item, arr){
	for(let i=0; i<arr.length; i++){
		if (arr[i] === 'Gum'){
		return `True! Item: '${item}' is on list: ${arr}`
		}
	}
}
function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  return cb(item,list);
}
console.log(contains("Gum",items,factCheck));




/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
