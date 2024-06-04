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
//     callback(num);
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