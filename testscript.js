myitem = document.getElementById("firsttest");
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