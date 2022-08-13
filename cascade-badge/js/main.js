//Arrays
// Your pokemon party order which is a list of pokemon has been leaked to Misty. 
// Please create a function that reverses your list and prints it to the console. 
function reversesList(pokeList){
    return pokeList.reverse();
}
reversesList(['pikachu', 'charzard', 'blastoid']);
// Given two integer arrays a, b, both of length >= 1, create a program 
// that returns true if the sum of the squares of each element in a is strictly 
// greater than the sum of the cubes of each element in b.
let arrayA = [2, 10, 7];
let arrayB = [3, 2, 1];

function returnsTrueIfSumOfSquaresIsGreaterThanSumOfCubes(arr1, arr2){
    return arr1.reduce((acc, c) => acc + c**2, 0) > arr2.reduce((acc, c) => acc + c**3, 0);
}
console.log(returnsTrueIfSumOfSquaresIsGreaterThanSumOfCubes(arrayA, arrayB));
// Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
// [68, -1, 1, -7, 10, 10] => [-1, 10]
function filtersNumberByIndex(anArr){
    return anArr.filter((num, i) => Math.abs(num) % i === 0);
}
console.log(filtersNumberByIndex([22, -6, 32, 82, 9, 25]));
console.log(filtersNumberByIndex([68, -1, 1, -7, 10, 10]));
// Given an array of integers as strings and numbers, return the sum of the 
// array values as if all were numbers.Return your answer as a number.
function returnsArraySum(anArr){
    return anArr.reduce((acc, c) => acc + Number(c), 0);
}
console.log(returnsArraySum(['22', -6, '32', '82', 9, 25]));
console.log(returnsArraySum([22, -6, 32, 82, 9, 25]));