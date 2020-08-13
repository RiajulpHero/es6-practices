// ager amoler niyom
function add(num1, num2){
    if(num2 == undefined){                
        num2 = 0;
    }
    return num1 + num2;
}
const result = add(23);
console.log(result);

// ager amoler niyom but little smarter
function addition(num1, num2){ 
    num2 = num2 || 0;                      
    return num1 + num2;                                     
}
const summation = addition(32);
console.log(summation);


// ES6 niyom akhane default hisebe num2 er value 0 dhora hoyese 
// that means num2 er value input na dile se atake 0 dhore nibe
function sum(num1, num2 = 0){
    return num1 + num2;
}
const getResult = sum(45);
console.log(getResult);