let gameseq=[];
let userseq=[];

let btns=["pink","green","orange","blue"];

let started=false;
let level=0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function() //keypress is the event in the event listener
 //keypress is use to check anyone key is pressed or not
{
    if(started==false)
    {
        console.log("game is started");
        started=true; //game is started only one time

    }
});