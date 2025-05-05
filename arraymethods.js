// const array = [1, 2, 4, 5, 6, 6];
// console.log(array.length);

// const fruits = ["Apple", "Orange", "Apple", "Mango"];
// let position = fruits.indexOf("Orange")+1;
// console.log(position);


// let arr = [1,2,3];
// console.log(arr.unshift(5));
// console.log(arr);

// let arr = [2,3,4];
// arr.unshift(1);
// console.log(arr);
// console.log(arr.length);


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.toString());



// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.at(2));


// let arr1 = [1,2,3,4,5];
// let arr2 = [6,7,8,9,10];
// let arr3 = arr1.concat(...arr2);
// console.log(arr3);

// const fruits = ["Banana", "Orange", "Apple", "Mango"]
// console.log(fruits.join("*"));


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.pop();
// console.log(fruits);


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.push("Kiwi","fjgk");
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
// fruits.copyWithin(3, 0);
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


// function countVowels(inputString){
//     const vowels = "aeiouAEIOU";
//     let count = 0;

//     for(let char of inputString){
//         if(vowels.includes(char)){
//             count++;
//         }
//     }
//     return count;
// }
// console.log(countVowels("mahimau"));


// function countone(one){
//     let ones = '1';
//     let count = 0;

//     for(let num of one){
//         if(ones.includes(num)){
//             count++;
//         }
//     }
//     return count;
// }
// let array = [1,0,6,0,7,1,8,0,1,0,9];
// console.log(countone(array));


// let arr = [1,3,10,8,5,9];
// let largest = Math.max(...arr);
// console.log(largest);


// function largest(arr){
//     let large = arr[0];

//     for(let i=1; i<arr.length; i++){
//         if(arr[i]>large){
//             large = arr[i];
//         }
//     }
//     return large;
// }
// const num = [12,45,87,98,34];
// console.log(largest(num));


// function generatenum(){
//     return Math.floor(Math.random()*100)+1;   
// }
// console.log(generatenum());


// function str(N,K,A){
//     for(let i=0; i<K; i++){
//         let min = A.shift();
//         let max = A.pop();

//         A.push(min+max);
//     }
//     return A;
// }

// const N=4;
// const K=2;
// const A=[1,2,3,4];

// const finalArray = str(N,K,A);
// console.log(finalArray);


// const arr = [1,2,2,4,2,6,5,1,5];
// console.log(arr.reverse());


// function sortArray(arr) {
//     return arr.sort((a, b) => a - b);
// }

// let numbers = [5, 3, 8, 1, 2];
// let sortedNumbers = sortArray(numbers);
// console.log(sortedNumbers);


// function sortarr(num){
//     return num.sort((a,b) => a-b);
// }
// let arr = [5,2,4,3,1];
// let sorti = sortarr(arr);
// console.log(sorti);


// let txt = "I can eat bananas all day";
// let x = txt.slice(10,17);
// console.log(x);




{/* <script>
document.getElementById("demo").innerHTML
 = "Hello";
</script> */}



// var a = 10; 
// (function () { 
//     console.log(a); var a = 9; 
// })
// ();


// let arr = [1, 2, 3, 4, 5]; 
// let result = arr.find(x => x > 3); 
// console.log(result);

// let person =  "Hege";
//   console.log(person);


// function greet(name, cb) { 
//     return `Hello, ${cb(name)}`; 
// } function upper(name) { 
//     return name.toUpperCase(); 
// } 
// console.log(greet("Mahi", upper));


// let x=5;
// let y=5;
// let z=6;
// console.log(x==y);
// console.log(x==z);


// let x=Math.sqrt(9);
// console.log(x);


// const name = "W3Schools";
// let letter = name.at(-2);
// console.log(letter);


// let text = "We are the\v so-called \"Vikings\" from\'s the north.\\";
// console.log(text);


// let sab = "Hello";
// let bas ="world";
// let asb = "god"
// console.log(sab.concat("  ",bas," ",asb));


// let numb = 5;
// let text = numb.toString();
// let padded = text.padStart(4,"0");
// console.log(padded);

// let str = "Mala Mahima Awasthi Hello good Mahima night";
// let index = str.indexOf("Mahima",15);
// console.log(index);


// let x = NaN;
// console.log(typeof x);

// let x = null;
// console.log(typeof x)

// let x = ['123'];
// console.log(typeof x);

// function hello(arr){
//    return [...new Set(arr)].sort((a,b)=>a-b);
// }
// console.log(hello([3,3,7,6,9,5,7,8,5,6,9,5,8,5,65,4,9,3]));


// console.log(1%1);

// function createCounter() {
//     let count = 0;
//     return function () {
//         count++;
//         return count;
//     };
// }
// const counter = createCounter();
// console.log(counter());
// console.log(counter());



// function arr (arr){
//     return Math.max(...arr);
// }
// console.log(arr([1,2,8,9,4,10,3,6,4]));


// const example = ({a,b,c})=>{
//     console.log(a,b,c);
// };
// example({a:1,b:2,c:3});

// console.log(0 == false);

// let b=10;
// b=5;
// console.log(b);

// {
//     var b=10;
    
// }
// console.log(b);


// function getrandomNumber(min,max){
//     return Math.floor(Math.random()*(max-min+1))+min;
// }

// console.log(getrandomNumber(1,10));
// console.log(getrandomNumber(1,10));

// console.log(b);
// var b = 5;

// function number_of_digits(a){
//     var count = a.lenght;
//     return count;
// }
// number_of_digits(1000);

// let a = ' mahima ';
// console.log(a.trimStart());


// let m = [1,2,3,4];
// let b = m.splice(0,2);
// console.log(b);

// let a = [1,2,3,4];
// let c = a.slice(0,2);
// console.log(c);


// let a = [1,2,3,4];
// let c = a.slice(0,2);
// console.log(a);

// let b = [1,2,3,4];
// let d = b.splice(0,2);
// console.log(b);



// let a = 10;
// for(let i=1; i<=a; i++){
//      if(a%i==0){
//         let count = 0;
//         for(let j=1; j<=i; j++){
//             count++
//         }
//         if(count<=2){
//             console.log(i);
//         }
//      }
// }


// var age = 16; 
// if (age >= 18) { 
//     console.log("You are eligible to vote"); 
// } else { 
//     console.log("You are not eligible to vote"); 
// }

// const obj = { a: 1, b: 2 };
// const a = {...obj};
// console.log(a);



// function removeDuplicates(arr) {
//     return [...new Set(arr)];
// }

// const number = [1,1,2,3,2,3,4,3,5,6,5,5];
// console.log(removeDuplicates(number));


// let a = null;
// console.log(a);
// console.log(typeof(a));


// function greet(name) {
//     console.log(`Hello, ${name}. My name is ${this.name}.`);
// }
// const person = { name: "Mahima" };
// greet.call(person, "Alice"); 
// // Output: Hello, Alice. My name is Mahima.



// Regular function
// function greet() { 
//     return "Hello!"; 
// }
// console.log(greet());

// Arrow function
// const greetArrow = () => "Hello!";
// console.log(greetArrow());



// const s = ["Hello","How", "are","You"];
// s.reverse();
// console.log(s);


// const s = [Hello,How,are, you];
// s.reverse();
// console.log(s);


// function foo() {
//     return{
//       message: "Hello World",
//     };
//   }
//   console.log(foo());


// function hello(a, b) {
//     return {
//          a,
//          b
//     };
// }

// Example usage:
// const d = hello("a.b.c", "gjipok");
// console.log(d);



// function counter(){
//     let count = 0;
//     function ineear(){
//         count++;
//         if(count === 4){
//             console.log(count);
//         }
//     }
//     return ineear;
// }
// let newCount = counter();
// newCount();
// newCount();
// newCount();


// var object = {
// };
// console.log(object);

// var object = new Object();
// console.log(object);


// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// let p1 = new Person("Mahima", 25);
// let p2 = new Person("Amit", 30);

// console.log(p1.name);




// let arr = [1,2,3,4,5];
// let arr1 = arr.map(num => num*2)
// console.log(arr1);


// let even = [1,2,3,4,5];
// let even1 = even.filter(num => num%2 === 0);
// console.log(even1);


// let arr = [1,2,3,4,5];
// let sum = arr.reduce((a,b)=> a+b, 10);
// console.log(sum);




// function hello(a){
//     return function mahima(b){
//         return a + b;
//     }
// }
// let d = hello(5)(4);  
// console.log(d);




// let arr = [1,5,3,2,4];
// let max = 0;
// let smax = 0;
// for (let i=0; i<arr.length; i++){
//     if(arr[i]>max){
//         let t = max;
//         max = arr[i];
//         smax = t;
//     }else if(arr[i]>smax){
//         let t = smax;
//         smax = arr[i];
//     }
// }
// console.log(smax);


// let a=0,b=1,sum,i=1;
// while(i<10){
//     console.log(a);
//     sum = a+b;
//     a=b;
//     b=sum;
//     i++;
// }


// let arr = [1, 2, 0, 4, 0, 6, 0, 3, 5, 0];
// let arr1 = []; 
// let arr2 = [];

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 0) {
//         arr1.push(arr[i]);
//     } else {
//         arr2.push(arr[i]);
//     }
// }

// let b = arr2.concat(arr1);
// console.log(b);


// var x = 5;
// var x = 10
// console.log(x);


// let x = 5;
//  x = 10
// console.log(x);


// let mahima;

// function hello(a){
//   mahima = setInterval(()=>{
//         console.log(a);
//     },5000);
// }
// function clear(){
//     clearInterval(mahima)
// }

// hello(5);

// setTimeout(clear, 15000);



// let numbers = [1, 2, 3, 4,2,5,7,9];
// let dubal = numbers.reduce((acc, num) => num + acc, 10);
// console.log(dubal);


// let numbers = [1, 2, 3, 4,2, 5,7,9];
// let dublicate = [...new Set(numbers)];
// console.log(dublicate);


// let str = "madam";
// if(str === str.split('').reverse().join('')){
//     console.log(true)
// }else{
//     console.log(false);
// }



// let str = "mahima";
// let reversestr = str.split('').reverse().join('');
// console.log(reversestr);


// function hello(num){
//     if(num === 0) return 1;
//     return num * hello(num - 1);
// }

// console.log(hello(5));


// function mahima(num){
//     let a = 0, b = 1;
//     for(let i=0; i<num; i++){
//         console.log(a);
//         [a,b] = [b, a+b];
//     }
// }
// mahima(5);


// function finMax(arr){
//     return Math.max(...arr);
// }

// console.log(finMax([2,6,8,9,35,87,0]));


// const user = {
//     name: "Mahima",
//     age: 25,
//     name: "garima",
//     age:26,
//   };
  
 
//   const { name, age } = user;
  
//   console.log(name); 
//   console.log(age);
  


//  const a = 5;
//  const b = a;
// console.log(a);
// console.log(typeof a);
// console.log(b);


let m = [1,2,5,6];
let n = [3,4,7,9];
let a = m.concat(n);
for(let i=0; i<=a.length/2; i++){
    for(let j=a.length/2; j<a.length; j++){
        if(a[j]<a[i]){
            let b = a[i];
            a[i] = a[j];
            a[j] = b;
        }break;
    }
}
console.log(a);
