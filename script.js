

/*let Heading = document.getElementById("heading");

console.dir(Heading);
*/

/*
let h1=document.querySelector("h1");

console.dir(h1.innerText);

h1.innerText=h1.innerText+"From Apana Collage Student";

*/


/*
let newbtn=document.createElement("button");
newbtn.innerHTML="click me!";

newbtn.style.color="white";
newbtn.style.backgroundColor="red";

document.querySelector("body").prepend(newbtn);

*/

let modebtn=document.querySelector("#mode");
let body=document.querySelector("body");
let currMode="light";  //dark

modebtn.addEventListener("click",()=>{

    if(currMode==="light"){
        currMode="Dark";

        body.classList.add("dark");
        body.classList.remove("light");

    }else{

        currMode="light";
       body.classList.add("light");
       body.classList.remove("Dark");
    }
    console.log(currMode);

})