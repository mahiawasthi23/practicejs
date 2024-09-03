// const array = [1, 2, 4, 5, 6, 6];
// console.log(array.length);

// const fruits = ["Apple", "Orange", "Apple", "Mango"];
// let position = fruits.indexOf("Apple")+1;
// console.log(position);


// let arr = [1,2,3];
// console.log(arr.unshift(5));

// let arr = [2,3,4];
// arr.unshift(1);
// console.log(arr);
// console.log(arr.length);


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.toString());



// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.at(2));


// const fruits = ["Banana", "Orange", "Apple", "Mango"]
// console.log(fruits.join("*"));


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.pop();
// console.log(fruits);


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.push("Kiwi");
// console.log(fruits);



// function greet() {
//     console.log("Hello");
// }

// function ask() {
//     setTimeout(() => {
//         console.log("How are you?");
//     }, 10000);
// }

// function farewell() {
//     console.log("Goodbye");
// }

// greet();
// ask();
// farewell();


// function greet() {
//     console.log("Hello");
// }

// function ask() {
//     console.log("How are you?");
// }

// function farewell() {
//     console.log("Goodbye");
// }

// greet();
// ask();
// farewell();

// const val = ' ';
// const v = typeof(val);
// console.log(v);


// const fruits = ["Banana", "Orange", "Apple", "Mangol"];
// fruits.shift();
// console.log(fruits);


// const fruits = ["Banana","Orange", "Apple", "Mango"];
// console.log(delete fruits[0]);


// const first = ["Hello"];
// const second = ["Mahima"];
// const both = first.concat(second);
// console.log(both);


// const fruits = ["Bnana", "Orange", "Apple", "Mango"];
// fruits.copyWithin(3, 1);
// console.log(fruits);


// const array = [[1,2], [3,4], [5,6]];
// const newarray = array.flat();
// console.log(newarray);


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(0, 2, "gwhh","jj");
// console.log(fruits);


// const months = ["Jan", "Feb", "Mar", "Apr"];
// const spliced = months.toSpliced(0,3);
// console.log(spliced);


// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(1);
// console.log(citrus);


// const fruits = ["Apple", "Orange", "Apple", "Mango"];
// let position = fruits.indexOf("Apple")+1;
// console.log(position);

// const fruits = ["Apple","Orange", "Apple", "Mango"];
// let position = fruits.lastIndexOf("Apple")+1;
// console.log(position);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let boolean = fruits.includes("M");
// console.log(boolean);


// const numbers = [19,9,16,25,29];
// let first = numbers.find(myFunction);

// function myFunction(value, index, array){
//     return value > 18;
// }
// console.log(first);


// const numbers = [4,9,16,25,29];
// let first = numbers.findIndex(myFunction);

// function myFunction(value){
//     return value > 18;
// }
// console.log(first);


// const temp = [27,28,30,40,42,35,20];
// let high = temp.findLast(x=> x>10);
// console.log(high);


// const temp = [27,28,30,40,42,35,30];
// let pos = temp.findLastIndex(x => x > 10);
// console.log(pos);

// const fruits = ["Banana","Orange", "Apple","Mango"];
// fruits.sort();
// console.log(fruits);

// const fruits = ["Banana","Orange", "Apple","Mango"];
// fruits.reverse();
// console.log(fruits);

// const months = ["5","3","1","2"];
// const sorted = months.toSorted();
// console.log(sorted);
// console.log(months);

// const fruits = ["Banana","Orange", "Apple","Mango"];
// const chenged = fruits.toReversed();
// console.log(chenged);

// const cars = [{type:"Volvo", year:2016},{type:"Saab",year:2001},{type:"BMW",year:2010}];
// cars.sort(function(a, b){return a.year - b.year});
// console.log(cars);


// const cars = [
//     {type:"Volvo", year:2016},
//     {type:"Saab",year:2001},
//     {type:"BMW",year:2010}
// ];
// cars.sort(function(a, b){return a.year - b.year});
// console.log(cars);


// const points = [40,100,1,5,25,10];
// points.sort(function(a,b){return a - b});
// console.log(points);

// const char = ["a", "c", "b", "d"];
// char.sort();
// console.log(char);


// const points = [40,100,1,5,25,10];
// points.sort(function(){return 0.5 - Math.random()});
// console.log(points);


// const arr = [40,100,1,5,25,10];
// function MyArrayMin(arr){
//     return Math.min(...arr);
// }
// console.log(MyArrayMin(arr));


// const arr = [40, 100, 1,5,25,10];
// const a = Math.min(...arr);
// console.log(a);


// const arr = [40, 100, 1,5,25,10];
// const a = Math.max(...arr);
// console.log(a);

// const arr = [40, 100, 1,5,25,10];
// function myArrayMin(arr) {
//     let len = arr.length;
//     let min = Infinity;
//     while (len--) {
//       if (arr[len] < min) {
//         min = arr[len];
//       }
//     }
//     return min;
//   }
// console.log(myArrayMin(arr));

// let curenthours = new Date().getHours();
// let curentminuts = new Date().getMinutes();
// console.log(curenthours,curentminuts);


// let arr = [1,2,3,4,5];
// let myarr = arr.map(element => element*2);
// console.log(myarr);


// const student = [{name: "Punam", age: 19}, {name: "Mahima", age: 20}];
// let Name = student.map(element => element.name);
// console.log(Name);


// const arr = [{name: "Punam", age: 18}, {name: "Mahima", age: 19},{name:"Shikha" , age: 20}];
// function object (obj){
//    return obj.age > 18;
// }
// console.log(arr.filter(object))

// const arr = [1,2,3,4,5];
// function sumarr(num, num1){
//     return num + num1;
// }
// console.log(arr.reduce(sumarr));


// const arr = [1,2,3,4,5];
// const newarr = arr.map(value => value*2);
// console.log(newarr);

// const str = [{name:"Mahima",age : 20, city : "raebarey"},{name : "sayali", age : 22, city : "pune"}];
// function newstr(ob){
//     return ob.age > 20;
// }
// console.log(str.filter(newstr));


// let arrayIntegers = [1, 2, 3, 4, 5];
// let arrayIntegers1 = arrayIntegers.slice(0, 2); 
// let arrayIntegers2 = arrayIntegers.slice(2, 3); 
// let arrayIntegers3 = arrayIntegers.slice(4);
// let arrayIntegers4 = arrayIntegers.slice(-2, -0);
// console.log(arrayIntegers1);
// console.log(arrayIntegers2);
// console.log(arrayIntegers3);
// console.log(arrayIntegers4);


// const arr = [1,2,3,4,5];
// function sum(num, num1){
//     return num + num1;
// }
// console.log(arr.reduce(sum));



// const arr = [1,2,3,4,5];
// const num = arr.reduce((a,b)=>{
//     return a+''+b;
// });
// console.log(num);

//this code for sorted arrays by teakes itself array
// let arr1 = [1,2,3,4,5];
// let arr2 = [6,7,8,9,10];
// let merges= arr1.concat(...arr2);
// console.log(merges);



//this code for sorted arrays
// function mergeSortedArrays(arr1 = [], arr2 = []) {
//     let mergedArray = [], i = 0, j = 0;
//     while (i < arr1.length && j < arr2.length) (
//     mergedArray.push(arr1[i] < arr2[j] ? arr1[i++] : arr2[j++])
//     );
//     return mergedArray.concat(arr1.slice(i)).concat(arr2.slice(j));
// }

// console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6]));






//this code for unsorted arrays
// function mergeSortedArrays(arr1 = [], arr2 = []) {
//     arr1.sort((a,b)=> a-b);
//     arr2.sort((a,b)=>a-b);
//     let mergedArray = [], i = 0, j = 0;
//     while (i < arr1.length && j < arr2.length) {
//         mergedArray.push(arr1[i] < arr2[j] ? arr1[i++] : arr2[j++]);
//     }
//     return mergedArray.concat(arr1.slice(i)).concat(arr2.slice(j));
// }

// console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6, 9, 7, 8, 11]));




// let arr = [1,2,4];
// let arrage = arr.pop();
// console.log(arrage);


// let arr = [1,2,3,4].push(...[5,6,7,8,9,11]);
// console.log(arr);

// let arr = [1,2,3,4,5];
// let arr1 = [6,7,8,9,10];
// let empatearr = [];
// empatearr.push(...arr,...arr1);
// console.log(empatearr);


// let array = [1,2,2,3,3,4,4,5,6,6];
// let dublicate = [...new Set(array)];
// console.log(dublicate);


// let array = [5,2,6,1,9,4,7];
// let short = array.sort();
// console.log(short);


// function array(arr=[]){
//     arr.sort((a,b)=> a-b);
//     return arr;
// }
// console.log(array([1,7,4,9,6,3,8,2,5,10]));


// function array(arr = [], a) {
//     let f = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === a) {
//             return i;
//         }
//     }
//     return -1;
// }
// console.log(array([1,2,3,4,9,6,9],2));


// let num = 123;
// while(num>0){
//     console.log(num%10);
//     num = parseInt(num/10);
// }


// let number = 567865;
// let last = number%10;
// while(number >= 10){
//     let first = Math.floor(number/10);
// }
// console.log(last+first);


// let number = 567861;
// let last = number % 10;
// while (number >= 10) {
//     number = Math.floor(number / 10);  
// }
// console.log(last + number); 


// let num = 4;
// let num1 = 5;
// let num2 = num;
// num = num1;
// num1 = num2;
// console.log(num);
// console.log(num1);



// function reverseString(str){
//     return str.split("").reverse().join("");
// }

// const string = "Hello,World!";
// const reversed = reverseString(string);
// console.log(reversed);


// let string = "hello";
// console.log(string.split("").reverse().join(""));


// let num = 6;
// let num1 = 4;
// num = num+num1;
// num1 = num-num1;
// num = num-num1;
// console.log(num);
// console.log(num1);


// let str = "mahima";
// let Hello = str.toUpperCase();
// console.log(Hello);


// function capitalizeFirstLetter(str) {
//     if (!str) return str;  
//     return str.charAt(0).toUpperCase() + str.slice(1);
// }

// console.log(capitalizeFirstLetter("hello"));  
// console.log(capitalizeFirstLetter("javaScript"));


// let str = "mahima";
// let hello = str.toUpperCase();
// console.log(hello);


// function str(string){
//     let check = string.split("").reverse().join("");
//     if(string===check){
//         return "yes";
//     }else{
//         return "no";
//     }
// }
// console.log(str("rar"));


function countVowels(inputString){
    const vowels = "aeiouAEIOU";
    let count = 0;

    for(let char of inputString){
        if(vowels.includes(char)){
            count++;
        }
    }
    return count;
}
console.log(countVowels("mahimau"));