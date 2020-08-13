const firstName = 'Justin';
const lastName = 'TimberLake';
const fullName = firstName + " " + lastName + " is a good singer";
const fullName2 = `${firstName} ${lastName} ${10+20+30} is a good Singer`;
console.log(fullName2);



function add(num1, num2 = 0) {
    return `Total amount for your provided numbers is ${num1+num2} !`;
}
const result = add(12, 13);
console.log(result);

//Old process to write multiline was difficult
const multiline = "I love you\n" 
+ "I miss you\n" 
+ "I need you";
console.log(multiline);

//Modern system to write multiline by ES6
const multiline2 = `I love you
I miss you
But I don't need you anymore`;
console.log(multiline2);