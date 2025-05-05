
// 3
// let removeduplicates = [1,2,3,2,4,2,5];
// let remove = [...new Set(removeduplicates)];
// console.log(remove);


// 4
// const strm = "Mahima";
// let newstr = "";
// for(let i=strm.length; i>0; i--){
//      newstr += strm[i-1];
// }
// console.log(newstr);

//5
// let arr = [0,1,1,1,1,1,0,0,0,1,0,1,1,1,1,0];
// let max_count = 0, count = 0;
// for(let i=0; i<arr.length; i++){
//     if(arr[i] == 1){
//         count++;
//     }else if(count > max_count){
//         max_count = count;
//     }else{
//         count = 0;
//     }

// }
// console.log(max_count);


//6
// let num = 5;
// let mult = 1;
// for(let i=1; i<=5; i++){
//     mult *= i;
// }
// console.log(mult);

//7
// let arr1 = [0,3,4,31];
// let arr2 = [4,6,30];
// arr1.push(...arr2);
// let sortarray = arr1.sort((a,b) => a-b);
// console.log(sortarray);                     


//8
// let b = false;
// function corresponding (arr1, arr2){
//     for(let i=0; i<arr1.length; i++){
//         let square = arr1[i] * arr1[i];
//         let found = false;
//         for(let j=0; j<arr2.length; j++){
//             if(square == arr2[j]){
//                 found = true;
//                 break;
//             } 
//         }
//         if (found) {
//             b = true;
//         }else {
//             b = false;
//             break;
//         }
//     }
//     return b;
// }
// console.log(corresponding([1,2,3,4,5],[25,4,16,9,7]));


// 11
// let arr = [1,3,8,3,5,7];
// let max = 0;
// for(let i=0; i<arr.length; i++){
//     if(arr[i]>max){
//         max = arr[i];
//     }
// }
// console.log(max);


// 12
// let evenarr = [];
// function even(arr){
//     for(let i = 0; i<arr.length; i++){
//         if(arr[i]%2 === 0){
//             evenarr.push(arr[i]);
//         }
//     }
//     return evenarr;
// }
// console.log(even([1,2,3,4,5,6,7,8,9,10]));


// 13
// function check_prime_num(number){
//     let count = 0;
//     for(let i=1; i<=number; i++){
//         if(number%i == 0){
//             count++;
//         }
//     }
//     if(count === 2){
//         console.log("Prime");
//     }else{
//         console.log("No Prime");
//     }
// }
// check_prime_num(5);

// 14
// let nested_arr = [[3,4,58],[709,8,9,[10,11]],[111,2]];
// let single_arr = nested_arr.flat(Infinity);
// let largest = 0;
// for(let i=0; i<single_arr.length; i++){
//     if(single_arr[i] > largest){
//         largest = single_arr[i];
//     }
// }
// console.log(largest);




// function arr(arr1, count){
//     let arr2 = [];
//     arr1.forEach(element => {
//         if(Array.isArray(element) && count>0){
//             arr2 = arr2.concat(arr(element, count-1));
//         }else{
//             arr2.push(element);
//         }
//     });
//     return arr2;
// }
// const hello = [2,4,[5,7],[6,8,9,[0,2],5,7]];
// console.log(arr(hello, Infinity));


// const arr = [2,4,[5,7],[6,8,9,[0,2],5,7]];
// let arr2 = [];
// for(let i=0; i<arr.length; i++){
//     if(Array.isArray(arr[i])){
//         arr2 = arr2.concat(arr[i]);
//     }else{
//         arr2.push(arr[i]);
//     }
// }
// console.log(arr2);


// function mahima (){
//     let count = 0;

//     return function greet (){
//         count++
//         console.log(count);
//     };
// }


// mahima();

// let count = 0;
// function mahima (){
//     let count = 0;

//     return function (){
//         count++
//         console.log(count);
//     };
// }


// let counter = mahima();
// let garima = mahima();
// counter();
// garima();
// counter();


