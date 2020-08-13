// Old system to declare a function::
/*function doubleIt(num) {
    return num * 2;
}
const double = doubleIt(11);
console.log(double);*/

// Old system to declare a function::
/*const doubleIt = function (num){
    return num * 2;
}
const double = doubleIt(11);
console.log(double);*/


// ES6 system to make a function more quickly:::
const doubleIt = num => num * 2;
const double = doubleIt(11);
console.log(double);

//If u have two input:::
const add = (num1, num2) => num1 + num2;
const result = add(40, 50);
console.log(result);

//Empty function by arrow system:::
const give5 = () => 5;
const result2 = give5();
console.log(result2); 

const doMath = (num1, num2) => {
    const sum = num1 + num2;
    const diff = num1 - num2;
    const result = sum * diff;
    return result;
}
const result3 = doMath(7, 5);
console.log(result3);