// const array = [1, 5, 6, 3, 5, 6];
// let c = 0;
// for (let i=0; i<array.length; i++){
//     if(array[i] >= 0){
//         c++;
//     }
//     else{
//         break;
//     }
// }
// console.log(c);


// const array = [3, 6, 2, 1, 7, 2, 5, 6, 1];
// let sum = 0;
// for (let i=0; i<array.length-1; i=i+2){
//     if(array[i+1]-array[i]===1){
//         sum = sum+(array[i+1]+array[i]);
//     }
// }
// console.log(sum);




// function hierOrderFunction(num , callback){
//     console.log(num);
// }


// function callbackFunction(num){
//     console.log(num);
// }
// hierOrderFunction(5, callbackFunction);


// hierOrderFunction(10, function(num){
//     console.log(num);
// });


// hierOrderFunction(4, function(num){
//     console.log(num * num);
// });




// hierOrderFunction(3, 7, function(num1, num2){
//     console.log(num1 + num2);
// });



// let arr = [5, 5, 2, 11, 11, 2];
// let count = 0;
// let maxcount = 0
// let element = 0;
// for (let i=0; i<arr.length-1; i++){
//     if(arr[i] == arr[i+1]){
//         count++;
//     }
//     if(count>maxcount){
//         let f = maxcount;
//         maxcount = count;
//         count = " ";
//         element = arr[i];
//     }
// }
// console.log(element);


// var count = 1;
// function counter(){
//     return function increment(){
//         if(count == 3){
//             return ("Mahima");
//         }
//         count++;
//     }
// }

// let result = counter();
// console.log(result());
// console.log(result());
// console.log(result());


// const globalVar = "I'm global!";


// function outer() {
//   var outerVar = "I'm from outer!";


//   function inner() {
//     var innerVar = "I'm from inner!";
//     console.log(innerVar); 
//     console.log(outerVar); 
//     console.log(globalVar);
//   }

//   inner();

// }

// outer();
// console.log(outer)


// let symbol1 = Symbol('description');
// let symbol2 = Symbol('description');
// let sy = symbol1;
// console.log(sy);


// let string = "programming";
// for(let i=0; i<string.length-1; i++){
//   for(let j=i+1; j<string.length; j++){
//     if(string[i]===string[j]){
//         string = string.slice(0, j) + string.slice(j + 1);
//         j--;
//     }
//   }
// }
// console.log(string);


// const array = [5,4,7,8,4,6,11,7];
//  let duplicate = null;
// for(let i=0; i<array.length-1; i++){
//     for(let j=i+1; j<array.length; j++){
//         if(array[i]===array[j]){
//             duplicate = array[i];
//             break;
//         }
//     }
//     if(duplicate!==null){
//         break;
//     }
// }
// if(duplicate!==null){
//     console.log(duplicate);
// }else{
//     console.log("No");
// }


// var symbol1 = Symbol('symbol');
// let c = typeof(symbol1);
// console.log(c);

// var str = "mahima";
// console.log(typeof(str));

// var obj1 = {
//     x:  43,
//     y:  "Hello world!",
//     z: function(){
//        return this.x;
//     }
//  }
// console.log(obj1.x);
// console.log(obj1.z());

// var obj = {x: 34, y:"hello", z:"bay"}
// console.log(obj.x);


// class Stack {
//     constructor() {
//         this.items = [];
//     }

//     push(element) {
//         this.items.push(element);
//     }

//     pop() {
//         if (this.isEmpty())
//             return "Underflow";
//         return this.items.pop();
//     }

//     isEmpty() {
//         return this.items.length === 0;
//     }

//     peek() {
//         return this.items[this.items.length - 1];
//     }
// }

// let stack = new Stack();
// stack.push(10);
// stack.push(20);
// stack.push(30);

// console.log(stack.peek());
// console.log(stack.pop());
// console.log(stack.isEmpty());


// let a = () => {
//     console.log(this);
// };
// a();

// let x = "false";
// let y = !x;
// console.log(y);

// let x = 3>2>1;
// console.log(x);


// const curring =(num) =>{
//     return(num1)=>{
//         return(num2)=>{
            
//         }
//     }
// }


// function factorialIterative(n) {
//     if (n < 0) return "Invalid input";
//     let result = 1;
//     for (let i = 1; i <= n; i++) {
//         result *= i;
//     }
//     return result;
// }

// console.log(factorialIterative(5));


// function factorial(n){
//     let res = 1;
//     for(let i=1; i<=n; i++){
//         res *= i;
//     }
//     return res;
// }
// console.log(factorial(5));


// const arr = [1,2,2,3,2,1,4,5];
// const newarr = [...new Set(arr)];
// console.log(newarr);


// let a = () => {
//     console.log(this);
// };
// a();

// let x = "false";
// let y = !x;
// console.log(y);

const numbers = [1, 2, 3, 4];
numbers.forEach(num => console.log(num));
// Output: 1, 2, 3, 4
