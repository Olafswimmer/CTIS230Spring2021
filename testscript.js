myitem = document.getElementById("firsttest");
olafimg = document.getElementById("olafimage");
//This method can return a single element by that element's id, in this case "firsttest", which provides as an arguement for the method
myitem.addEventListener("click", onClick);
//This element serves as a way to bind the "click" command with myitem, and the name onClick, so that when "myitem" is clicked, a function occurs.
function onClick() {  
//this tells the program that the function being completed is the "onClick" function, which was defined as occuring when a "click" occurs
    myitem.style.color = "green";  
    myitem.style.fontSize = "1.5em"
}
//This tells what occurs when the onClick function is completed.  In this case, the color of "myitem" is changed when clicked.
myitem.addEventListener("mouseout", offClick);

function offClick() {  

    myitem.style.color = "royalblue";  
    myitem.style.fontSize = "1em"
}
thebutton = document.getElementById("thebutton");  
otheritem = document.getElementById("buttontest");
thebutton.addEventListener("click", onButtonClick);
function onButtonClick() {  
    otheritem.style.color = "orange";  
    otheritem.style.fontSize = "1.5em";
    otheritem.style.fontStyle = "normal";
}
anotherbutton = document.getElementById("anotherbutton");  
anotheritem = document.getElementById("anotherbuttontest");
anotherbutton.addEventListener("click", onButtonClick2);
function onButtonClick2() {  
    anotheritem.style.color = "green";  
    anotheritem.style.fontSize = "1.5em";
}
textentry = document.getElementById("myinput");  
textentry.addEventListener("change", onChange);
function onChange() {  
    newtext = myinput.value;  
    otheritem.innerHTML = newtext;  
}
imgbutton = document.getElementById("imgbutton");  
imgbutton.addEventListener("click", onButtonClick3);
function onButtonClick3() {
    olafimg.style.display = "block";
}

remydiv = document.getElementById("remy");
remyimage = document.getElementById("remyimg");
remydiv.addEventListener("click", makeBigImage);
theLargeView = document.getElementById("largeview");
theLargeView.addEventListener("click", hideBigImage);

function hideBigImage() {
    theLargeView.classList.add("dontshow");
    theLargeView.innerHTML = "";
}
function makeBigImage(event) {
    console.log(event);
    bigimage = document.createElement("img");
    bigimage.src = event.target.src;
    theLargeView.appendChild(bigimage);
    theLargeView.classList.remove("dontshow");
}