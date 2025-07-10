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
         levelUp(); //when game is started then call levelup function
    }
});

function gameflash(btn)
{
  btn.classList.add("flash");
  setTimeout( function()
    {
       btn.classList.remove("flash");
    }, 250);
}

function userflash(btn)
{
    btn.classList.add("userflash");
    setTimeout(function()
   {
       btn.classList.remove("userflash");
   }, 250);
}

function levelUp()
{
    userseq=[];
    level++;
    h2.innerText=`Level ${level}`; //change h2 level wise i.e level 1 level 2 etc.

   let randidx=Math.floor(Math.random() * 3); //generate any random color
   let randcolor=btns[randidx];
   let randbtn=document.querySelector(`.${randcolor}`);
   gameseq.push(randcolor);
   console.log(gameseq);
   gameflash(randbtn);
}

function checkans(idx) //check levels
{   
    if(userseq[idx]===gameseq[idx])
    {
        if(userseq.length==gameseq.length)
        {
           setTimeout(levelUp, 1000);
        }
    }else{
        h2.innerHTML=`Game Over! Your score was <b>${level}</b> <br> Press any key to start game.`;
        document.querySelector("body").style.backgroundColor="crimson";
        setTimeout(function()
        {
            document.querySelector("body").style.backgroundColor="white";
        }, 150);
        reset();
    }
}