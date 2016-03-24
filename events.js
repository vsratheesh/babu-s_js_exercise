$(document).ready(function () {

    function knowMyId(elem){    
    
    document.getElementById("para1").style.color = "blue" ; console.log(elem.parentNode.id);
}
​
function knowMyClass(elem){                
 
    
    elem.parentNode.style.color = "red"; console.log(elem.parentNode.className);
}

function knowbytagName(elem){         
    ​
    elem.parentNode.style.color = "grey"; console.log(elem.parentNode.tagName);
}

function changeMycolor(){
   
   document.getElementById("block1").style.cssText = "background-Color:blue; color:white;";
   ​
}

function fontsizea(){
   
   document.getElementById("block2").style.cssText = "font-size:3em; color:red;";
}

function mouseover(){
   
   document.getElementById("block3").style.cssText = "background-Color:black; color:green;";
}

function mouseout(){
   
    document.getElementById("block3").style.cssText = "background-Color:red; color:black;";
}

function hideme(){
   
    document.getElementById("block4").style.visibility= "hidden";
}
function boxcolor1(){           
    document.getElementsByClassName("box1")[0].style.backgroundColor = "green";         
}

function boxcolor2(){           
    
    document.getElementsByClassName("box1")[1].style.backgroundColor = "green";         
    
}
function boxcolor3(){             
   
    document.getElementsByClassName("box1")[2].style.backgroundColor = "green";         
}



function myFunction() {
    var x = document.getElementById("fname");
    x.value = x.value.toUpperCase();
}

function chageon() {
    var y = document.getElementById("fname1");
    y.value = y.value.toUpperCase();
}

function preferedBrowser() {
    prefer = document.forms[0].browsers.value;
    alert("You prefer browsing internet with " + prefer);
}


function color(x) {
    x.style.background = "yellow";
}

function inputxt() {
    document.getElementById("demo").innerHTML = "You selected some text";
}

function confirmInput() {
    fname = document.forms[0].fname.value;
    alert("Hello " + fname + "! You will now be redirected to www.w3Schools.com");
}

function message() {
    alert("This alert box was triggered by the onreset event handler");
}

function keydown() {
    alert("You pressed a key inside the input field");
}
function keypress() {
    alert("You pressed a key inside the input field");
}
function keyup() {
    var x = document.getElementById("fname2");
    x.value = x.value.toUpperCase();
}
function writeMessage() {
    document.forms[0].mySecondInput.value = document.forms[0].myInput.value;
}
})