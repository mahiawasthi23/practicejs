// let date = new Date();
// let options = {year: 'numeric', month: 'long', day:'numeric'};
// let formattedDate = new Intl.DateTimeFormat('en-us', options).format(date);
// console.log(formattedDate);

// let D = new Date("october 13, 2014 11:13:00");
// console.log(D);

// const d = new Date("2022-03-25");
// console.log(d);


// const d = new Date(2018, 11, 24, 10, 33, 30, 0);
// console.log(d);

// const d = new Date();
// let fullyear = d.getFullYear();
// console.log(fullyear);


// const d = new Date();
// let date = d.getDate();
// console.log(date);

// const yymmdd = new Date();
// let  month = yymmdd.getMonth();
// console.log(month+1);


// const d = new Date();
// let day = d.getDay();
// console.log(day+1);


// const h = new Date();
// let hours = h.getHours();
// console.log(hours);

// const m = new Date();
// let minute = m.getMinutes();
// console.log(minute);


// const s = new Date();
// let second = s.getSeconds();
// console.log(second);


// const mi = new Date();
// let millisecond = mi.getMilliseconds();
// console.log(millisecond);


// const t = new Date();
// let Time = t.getTime();
// console.log(Time);


// function num (n){
//     if(num > 10){
//         return 1;
//     }
//     return (num+1);
// }
// console.log(1);



// function find(num){
//     let sum =1;
//     for(let i = num; i>=1; i--){
//         sum = sum*i;
//     }
//     console.log(sum);
// }
// find(5);


// function power(num,p){
//     if(num === 0){
//         return 1;
//     }
//     return Math.pow(num,p);

// }
// console.log(power(5,3));



// function sum (arr){
//    if (arr.length === 0){
//     return 0;
//    }
//    return arr[0] + sum(arr.slice(1));
// }
// const arr = [1,5,2];
// console.log(sum(arr));



// function Array(arr,i=0){
//     if (i>=arr.length){
//         return 0;
        
//     }
//     return arr[i]+Array(arr,i+1)
    
// }      
// let output = Array([1,2,3,5]);
// console.log(output);


// function preparedFood(foodDelivered){
//     setTimeout(()=>{
//         console.log("Food is being prepared");
//         console.log("Food is ready");
//         foodDelivered(eatingFood);
//     }, 10000);

// }

// function deliveredFood(foodeating){
//     setTimeout(()=>{
//         console.log("Food is delivered to your table");
//         foodeating(payment);
//     }, 5000)

// }

// function eatingFood(pay){
//     setTimeout(()=>{
//         console.log("Eating Food");
//         pay(leaveHotel);
//     }, 20000)
// }

// function payment(hotelleave){
//     setTimeout(()=>{
//         console.log("Payment");
//         hotelleave();
//     }, 1000)
// }
// function leaveHotel(){
//     console.log("Leave the Hotel");
// }


// function visitingHotel(){
//     console.log("Entering the Hotel");
//     console.log("Order Food - Biryani ");
//     preparedFood(deliveredFood);
    
// }

// visitingHotel();


// ATM
// Enter ATM
// Insert Card
// Processing - 5 seconds
// Enter Pin - 2 seconds
// Withdraw Money - 5 seconds
// Collect Cash - 1 second
// Leave ATM


function ATM(enter){
    console.log("visit Atm");
    enter();
}

function Enteratm(insert){
    console.log("enter atm");
    insert();
}

function Insertcart(processing){
    console.log("insert the card");
    processing();
}

function Processing(pin){
    setTimeout(()=>{
        console.log("processing for withdraw");
        pin();
    },5000)
}


function Enterpin(withdraw){
    setTimeout(()=>{
        console.log("Please enter the pin");
        withdraw();
    },2000)
}


function Withdrawmoney(cash){
    setTimeout(()=>{
        console.log("With draw the money");
        cash();
    },5000)
}


function CollectCash(Leave){
    setTimeout(()=>{
        console.log("Collect the cash");
        Leave();
    },1000);
} 


function LeaveATM(leavATM){
    setTimeout(()=>{
        console.log("Leave the Atm");
        leavATM()
        

    },2000)
}


ATM(()=>{
    Enteratm(()=>{
        Insertcart(()=>{
            Processing(()=>{
                Enterpin(()=>{
                    Withdrawmoney(()=>{
                        CollectCash(()=>{
                            LeaveATM(()=>{
                                console.log("Thank you visit again");
                            })
                        })
                    })
                })
            })
        })
    })
});