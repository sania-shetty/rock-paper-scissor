let newbtn = document.createElement("button");
newbtn.innerText = "Click me!";
newbtn.style.color = "white";
newbtn.style.backgroundColor = "red";

document.querySelector("body").prepend(newbtn);

let para= document.querySelector("p");

let btn1 =document.querySelector("#btn1");
// btn1.onclick = (e) => {
//     console.log(e)
//     console.log("btn was clicked");
//     let a=25;
//     a++;
//     console.log(a);
// };

btn1.addEventListener("click",()=>{
    console.log("button was clicked");
});

let modebtn= document.querySelector("#mode");
let currMode = "light";
let body= document.querySelector("body");
modebtn.addEventListener("click",()=>{
    if(currMode=="light"){
        currMode="dark";
        body.style.backgroundColor = "black";
    }
    else{
        currMode="light";
        body.style.backgroundColor = "white";
    }
    console.log(currMode);
});