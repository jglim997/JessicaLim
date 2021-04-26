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








// function newtrashtalk(){
//     document.getElementById("img1").src = "images/trashtalk22.svg";
//     // 204 IS ORIGINAL
// }

// function trashtalk(){
//     document.getElementById("img1").src = "images/trashtalk.svg";

// }

// function newpega(){
//     document.getElementById("img2").src = "images/pega22.svg";
// }

// function pega(){
//     document.getElementById("img2").src = "images/intern.svg";
//     // 194 is org

// }

// function newdou(){
//     document.getElementById("img3").src = "images/dou22.svg";
// }

// function dou(){
//     document.getElementById("img3").src = "images/do u.svg";
//     // 194 is org

// }

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