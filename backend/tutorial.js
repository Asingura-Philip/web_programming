// int
let number1 = 5
let number2 = 6


let sum = number1 + number2
let sub = number1 - number2
let multiply = number1 * number2
let divide = number1 / number2

// console.log(sum)
// console.log(sub)
// console.log(multiply)
// console.log(divide)

let fname = 'john'
let lname = 'doe'

let welcome = `welcome back ${fname}`

// console.log(welcome)


let isStudent = true
let isInHall = false


let form ={
    "fname": "john",
    lname: "doe",
    password:"11111",
    confirmPassword:"11111"
    
}

// console.log(form.fname)


//comparison operations

let age = 15

if(age < 12){
    console.log('you are a child')
}else if(age > 12 && age < 18){
    console.log('you are a teenager')
}else{
    console.log('you are an adult')
}

// loops
// let i = 0
// while(i<100){
//     console.log(i)
//     i++
// }


// for(let i=1;i<100;i++){
//     console.log(i)
// }

let array = [2,3,4,53,34,2]

// for(arr in array){
//     console.log(array[arr])
// }

for(let arr of array){
    console.log(arr)
}

//switch statement
let day = 3;
let dayName;

switch(day) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid day";
}

console.log(dayName);  
