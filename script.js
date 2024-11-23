/*    Logical Operators

let a=4;
let b=6;
console.log("a+b=",+a+b);
console.log("a-b=",+a-b);
console.log("a/b=",+a/b);
console.log("a%b=",+a%b);
console.log("a*b",a*b);

*/

//    Urinary Operator
/*
let a=5;
let b=2;

console.log("a=",a);
console.log("b=",b);

console.log("++a",++a);
console.log("--a",--a);

*/

/*     Assigment Operators

let a=5;
let b=4;
a **=b;
console.log("a=",a);

*/

//    Comparision Operators
/*
let a=5;
let b=2;

console.log("a==b",a==b);
console.log("!=",a!=b);
console.log("a===b",a===b);
console.log("a!==",a!==b);
*/


//    Logical Operator
/*

let a=5;
let b=2;

let cond1=a<b;
let cond2=a===5;
console.log(cond1 && cond2);
console.log(cond1 || a==5);

*/

/*   codition Statements 


let mode = "light";
let color;


if(mode==="black"){
    color="black";

}else{
   color="white";
}
console.log(color);

*/  
/* else if codition

let age=25;

if(age>18){
    console.log("Vote");
}else{
    console.log("Not vote");
}

*/

//  Odd or Even 

let n=prompt("Enter your score :");
let g;
 if(n>=100 && n<=90){
   g="A";
 }
 else if(n>=89 && n<=70){
    g="B";

 }else if(n>=59 && n>= 50){
      g="D"
 }else if(n>=0 && n<=49){
     g="F";
 }

 console.log("Scores :" ,g);