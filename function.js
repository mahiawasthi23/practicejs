// function addTonumber(a,b){
//     return a+b
// }
// console.log(addTonumber(25,7));


// function Hello(){
//     return "hello"
// }
// console.log(Hello());



// function Name(tajmahel){
//     tajmahel();
//     console.log("Mahima");
// }

// function message(){
//     console.log("Good Night");
// }
// Name(message);



// function sum(){
//     function printfunction(a,b){
//         return a + b;
//     }
//    return printfunction;
// }

// const add  = sum();   
// console.log(add(5 ,6));


// let Number = function(){
//     return 5;
// }

// console.log(Number());



// let numbers_array = [1, 2, 3, 4, 5];
// numbers_array.reverse();
// console.log(numbers_array);

// let array = [1, 2, 3, 4, 5];
// let num = array.length;
// while(num>=0){
//     console.log(array[num]);
//     num = num-1;
// }

// let array = [1, 2, 3, 4, 5];
// let p = " ";
// let num = array.length;
// while(num>0){
//     p += num;
//     num = num-1;
// }
// console.log(p);



// object

// const  name = {
//     "mahima" : "alka",
//     "anjali" : "sushmita",
//     "poonam" : "priyanka",
// };
// let c=0;
// for(let num in name){
//     c+=1;
// }
// console.log(c);

// const obj = {
//     name: "rani",
//     age: 16,
// };

// let count = 0;
// for (let key in obj) {
//     c=+1;
// }

// console.log(c);


// let array = 53;
// let sum =0;
// while(array>0){
//     let num = array%10;
//     sum = sum + num;
//     array = parseInt(array/10);
// }
// console.log(sum);


// let input = 'below';
// let input1 = 'elbow';
// let f = 0;
// for(let i = 0; i < input.length; i++){
//     if(input.length !== input1.length){
//         f=1;
//         break;
//     }else if(input1.includes(input[i])){
//         continue;
//     }else{
//         f=1;
//         break;
//     }
// }
// if(f === 1){
//     console.log('false');
// }else{
//     console.log('true');
// }


// let array1 = ["javascript", "react", "node"];
// let result = "";
// for(let i = 0; i < array1.length; i++) {
//     if(array1[i] === "javascript") {
//         result = result + " true";
//     } else {
//         result = result + " false";
//     }
// }
// console.log(result);




// function show(num) {
//     if (num <= 10) {
//         console.log("Hi ", num);
//         num++;
//         show(num); 
//     }
// }
// show(1); 



// function printTable(number, multiplier) {
//     if (multiplier > 10) {
//         return;
//     }
//     console.log(`${number * multiplier}`);
//     printTable(number, multiplier + 1);
// }

// function printTables() {
//     for (let i = 2; i <= 5; i++) {
//         printTable(i, 1);
//         console.log('\n'); 
//     }
// }
// printTables();



// function factorial(n) {
//     if (n === 0) {
//         return 1;
//     }
//     else {
//         return n * factorial(n - 1);
//     }
// }

// console.log(factorial(5)); 




// function printTables(number, multiplier) {
//     if (multiplier > 10) {
//         return;
//     }

//     let row = '';
//     for (let i = 2; i <= number; i++) {
//         row += `${i * multiplier}\t`;
//     }
//     console.log(row);

//     printTables(number, multiplier + 1);
// }

// printTables(5,1);



let treet = new Promise(function(resoleve,reject){
    let party = true;
    let gift = true;
if(gift){
    if(party){
        resoleve ("Today have a party");
    }
    else{
        reject ("No have a party")
    }
}else {
    reject("no party");
} 

});

treet.then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log(error);
})



