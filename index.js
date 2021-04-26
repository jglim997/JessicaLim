const text = ['websites','illustrations','pancakes'];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type(){

    if(count === text.length){
        count = 0;


    }
    currentText = text[count];
    letter = currentText.slice(0,++index);
    document.querySelector('.typing').textContent = letter;
    if(letter.length === currentText.length){
        count++;
        index = 0;
        
    }
    setTimeout(type,350);
    
    
    

}());








function newtrashtalk(){
    document.getElementById("img1").src = "images/Group 294.svg";

}

function trashtalk(){
    document.getElementById("img1").src = "images/Group 288.svg";

}

function newpega(){
    document.getElementById("img2").src = "images/group 2933.svg";
}

function pega(){
    document.getElementById("img2").src = "images/group 289.svg";


}

function newdou(){
    document.getElementById("img3").src = "images/group 2955.svg";
}

function dou(){
    document.getElementById("img3").src = "images/group 290.svg";


}

// function newred(){
//     document.getElementById("img6").src = "images/more to come2.svg";
// }
// function red(){
//     document.getElementById("img6").src = "images/more to come.svg";

// }

// function myFunction() {
//     var element = document.body;
//     element.classList.toggle("dark-mode");
// }