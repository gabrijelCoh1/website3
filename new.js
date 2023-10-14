let username
let password
let someText
var x
var y
var ranNum
var max


document.getElementById("button1").onclick = function(){
    username = document.getElementById("text1").value;
    console.log("user ", username);
    document.getElementById("text1").value = ""
}


function leak(){
    document.getElementById("h1.2").innerHTML = username + ", " + password
    console.log("leaked")

}

function showHidePass(){
    x = document.getElementById("password")

    if (x.type === "text"){
        x.type = "password"
    }else{
        x.type = "text"
    }
}


document.getElementById("button2").onclick = function(){
    password = document.getElementById("password").value
    console.log("pass ", password)
    document.getElementById("password").value = ""

}

function showDate(){

    document.getElementById("dateh2").innerHTML = Date()
    console.log("date shown")

}

function clicked(){

    if (username === undefined || username === "undefined"){

        document.getElementById("clickh1").innerHTML = "you clicked the button!!!!"

    }else{
        document.getElementById("clickh1").innerHTML = username + ", you clicked the button!!!!"
        
                
    }

    console.log("button clicked")


}

document.getElementById("textSubmit").onclick = function(){
    someText = document.getElementById("someText").value
    console.log("text ", someText)
    document.getElementById("someText").value = ""
}


function makeBold(){
    document.getElementById("h1B").innerHTML = someText
}

function makeItalic(){
    document.getElementById("h1I").innerHTML = someText
}

// function makeMarked(){
//     document.getElementById("h1Mark").innerHTML = someText
// }

function makeIns(){
    document.getElementById("h1Ins").innerHTML = someText
}

function makeDel(){
    document.getElementById("h1Del").innerHTML = someText
}

function showHideText(){

    y = document.getElementById("someText")

    if (y.type === "text"){
        y.type = "password"
    }else{
        y.type = "text"
    }
}  

document.getElementById("rannumsubmit").onclick=function(){
    max = document.getElementById("upperbound").value
    ranNum = Math.floor(Math.random() * max)
    
    document.getElementById("ranh1").innerHTML = ranNum
}
  
  