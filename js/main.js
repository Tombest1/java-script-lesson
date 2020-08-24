// let name1 = "Caleb";
// name1 = "micheal";
// console.log(name1);

// let name2 = "Sam";
// console.log(name2);

// let name3 = "Toba";
// console.log(name3);

// let name4 = "Scam";
// console.log(name4);

// let name5 = "Simple";
// console.log(name5);

// let name = "Utibe"; 
// console.log('the name is '+ name);

// let age = 22;
// console.log(age);

// let address = "No.2 olawale street";
// console.log(address);

// let favouritefood = "Yam";
// console.log(`this is favouritefood ${favouritefood}`);

// let favouriteDrink ="Tiger nut";
// console.log(favouriteDrink);

// let name1 = "Sam";

// let name2 = "Noah";
// // console.log(`fullname is ${name1} ${name2}`);
// console.log('fullname is' + " " (name1) + "" (name2));

// let a = 10
// let b = 20
// console.log (`a+b= ${a+b}`);

// let a = 2;
// let b = 3;
// let c = 5
// let total = a*b+c
// console.log(total);

// let a = 4;
// console.log(a**2);

// let a= 3.142;
// let b= 7**2;
// let c= a*b;
// console.log(c);

// let d= 0.5;
// let e= 3;
// let f= 8;
// let g= d*e*f;
// console.log(g)

// let m= 6;
// let n= 5;
// let v= n*m;
// console.log(v)

// let l= 3.142;
// let o= 7;
// let p= l*o**2;
// console.log(p);

// let a = 1;
// let b = 2;
// let c = 3;
// console.log(`the total is ${a+b+c}`);

// const pi = 3.14;
// let r = 4;
// let rs = r**2
// console.log(`area of circle is ${pi*rs}`);


// // let temp = 37;
// // if (temp == 37){
// //     console.log('stay outside');
// // }else{
// //     console.log('come inside');
// // }

// // let a = 10;
// // let b = 7;
// // if(a == b){
// //     console.log( 'print b');
// // } else{
// //     console.log( 'print a');
// // }

// // let age = 25;
// // if (age > 25){
// //     console.log('apply');
// // }else{
// //     console.log('cant apply');
// // }

// // let a = 3;
// // let b = 5;
// // let c = 10;
// // if(a > b || c < a){
// //     console.log('print yes');
// // }else{
// //     console.log('print no');
// // }

// // let age = 25;
// // if(age >= 25 && age <= 30) {
// //     console.log('congrat your age is between 25 and 30');

// // }else {
// //     console.log('application is regerted')
// }

// let lowestage = 25;
// let highestage = 30;
// if (lowestage >=  highestage ){
//     console.log('acept');
// }else{
//     console.log('deny');
// }

// let price = 300;
// let dis = price * 0.1;
// let disc = price * 0.2;
// let qt = 4;
// if( qt == 1){
//     console.log(`you bought 1 your price is ${price} you dont have discount`);
// }
// else if (qt > 1 && qt <= 5){
//     console.log(` you bought 2 and above your price is ${ qt * (price - dis)} your discount is 10% for one`);
// }
// else if ( qt > 5){
//     console.log(`you bought 6 and above your price is ${price - disc}your discount is 20%`);
// }


// let ProductName = 'undefined';
// let price = undefined;
// let dis1 = price * 0.1;
// let dis2 = price * 0.2;
// let dis3 = price * 0.3;
// let dis4 = price * 0.4;
// let qt = -1  ;
//  if (qt >= 1 && qt <= 3){
//     console.log(`you bought ${qt} ${ProductName} the price is ${price} per item, you have a discount of 30% you are to pay ${qt * (price - dis1)} `);
// }
// else if ( qt >= 4 && qt <=6){
//     console.log(`you bought ${qt} ${ProductName} the price is ${price} per item, you have a discount of 30% you are to pay ${qt * (price - dis2)} `);
// }
// else if ( qt >= 7 && qt <= 8){
//     console.log(`you bought ${qt} ${ProductName} the price is ${price} per item, you have a discount of 30% you are to pay ${qt * (price - dis3)} `);
// }else if ( qt >= 9 && qt <= 10){
//     console.log(`you bought ${qt} ${ProductName} the price is ${price} per item, you have a discount of 40% you are to pay ${qt * (price - dis4)} `);

// }

// function add (){
// let a= 3;
// let b= 7;
// let c= a + b;
// console.log(c);
// }
// add();
// add();

// function add (a,b){
//     let c= a + b;
//     console.log(c);
//     return c;
//     }
//     add(10,20);
//     add(30,50);
//     console.log(add(50,50));

// function greetuser(firstname,lastname) {
//     console.log(`welcome ${firstname} ${lastname}`);
// }
// greetuser('sam','tolu');



// let password = 'cal'
// function greetuser(firstname,lastname) {
//     let password ='tam'
//     console.log(`welcome ${firstname} ${lastname} your pass id ${password}`);
// }

// greetuser('sam','tolu');

// console.log(`your pass is ${password}`);
 

let myBtn = document.getElementById("btn");
myBtn.addEventListener("click" , calpro);
function calpro(e) {
    e.preventDefault();
let name = document.getElementById("name").value;
let qt = document.getElementById("cal").value;

// i want to add my code 
let price = 300;
let dis1 = price * 0.1;
let dis2 = price * 0.2;
let dis3 = price * 0.3;
let dis4 = price * 0.4;
 if (qt >= 1 && qt <= 3){
    console.log(`you bought ${qt} ${name} the price is ${price} per item, you have a discount of 30% you are to pay ${qt * (price - dis1)} `);
}
else if ( qt >= 4 && qt <=6){
    console.log(`you bought ${qt} ${name} the price is ${price} per item, you have a discount of 30% you are to pay ${qt * (price - dis2)} `);
}
else if ( qt >= 7 && qt <= 8){
    console.log(`you bought ${qt} ${name} the price is ${price} per item, you have a discount of 30% you are to pay ${qt * (price - dis3)} `);
}else if ( qt >= 9 && qt <= 10){
    console.log(`you bought ${qt} ${name} the price is ${price} per item, you have a discount of 40% you are to pay ${qt * (price - dis4)} `);

}
    
}



// pname.addEventListener("mousedown", mine);

// function mine() {
//     prompt("");
    
// }