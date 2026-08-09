const chooseScr=document.querySelector(".choose-screen");
const writeScr=document.querySelector(".write-screen");
const contBtn=document.querySelector(".continue-btn");
const hikariChoice=document.querySelector(".hikari-choice");
const msg=document.getElementById("msg");

const cards=document.querySelectorAll(".cards");
const continue2=document.querySelector(".continue2");
const animationScreen = document.querySelector(".animation-screen");
const lighter = document.querySelector(".lighter");
const paper = document.querySelector(".paper");
const fireP= new Audio('../../assets/sounds/fireP.mp3')
const paper2 = document.querySelector(".paper2");
const paperText = document.getElementById("paperText");




const finishScreen = document.querySelector(".finish-screen");

const blowScreen = document.querySelector(".blow-screen");
const paperTextBlow = document.getElementById("paperTextBlow");
const blowBtn=document.getElementById("blowBtn");
const windSound= new Audio('../../assets/sounds/windS.mp3');

const cutScreen = document.querySelector(".cut-screen");

const paperCut = document.querySelector(".paper-cut");
const paperTextCut = document.getElementById("paperTextCut");


const paperLeft = document.querySelector(".paper-left");
const paperRight = document.querySelector(".paper-right");
const cutS= new Audio('../../assets/sounds/cutS.mp3')

let isCut = false;
let scissorsActive = false;





const scissors = document.querySelector(".scissors");


//animation - burn *********************************************************

let lighterX=100;
let lighterY=400;
let fireX = 0;
let fireY = 0;
let isBurning = false;
let lastBurnTime = 0;
let burnTime = 0;
let userText = "";
let paperOpacity = 1;
let scissorsX = 100;
let scissorsY = 100;








// now just saving the position :

window.addEventListener("pointermove",(event)=>{

    lighterX=event.clientX;
    lighterY=event.clientY;





})


function animate(){
    lighter.style.left=(lighterX-40) +"px";
    lighter.style.top=(lighterY-40) +"px";
    
    const paperRect=paper2.getBoundingClientRect();
    const lighterRect=lighter.getBoundingClientRect();


    //collision : 

    if(lighterRect.right>paperRect.left 
        && lighterRect.left < paperRect.right
         &&lighterRect.bottom > paperRect.top 
         &&lighterRect.top < paperRect.bottom  && !isBurning){



 isBurning = true;
 fireX=lighterRect.left;
 fireY=lighterRect.top;
  fireP.play();

    






}


if(isBurning){
    burnTime++;

    if (burnTime > 400) {

        paper2.style.transition = "1s";
        paperOpacity -= 0.003;
        paper2.style.opacity = paperOpacity;

    }

    if (paperOpacity <= 0) {

    fireP.pause();
    fireP.currentTime = 0;

    animationScreen.classList.remove("show");
    finishScreen.classList.add("show");

}


 let now = Date.now();

    if(now-lastBurnTime>80){

        createBurnMark(
            lighterRect.left-paperRect.left,
            lighterRect.top-paperRect.top
        );

        lastBurnTime=now;


    }

    



}




    requestAnimationFrame(animate);

}





function createBurnMark(x, y){

    const burn = document.createElement("div");

    burn.classList.add("burnMark");

    burn.style.left = x + "px";
    burn.style.top = y + "px";

    paper2.appendChild(burn);
   

}








let selectedChoice = "";



console.log(contBtn);
contBtn.addEventListener('click',()=>{
   
writeScr.classList.add('hide');
userText=paper.value;

setTimeout(()=>{

    chooseScr.classList.add("show");



},300)



});


cards.forEach(c => {

    c.addEventListener("click",()=>{


     selectedChoice=c.classList[1]; 
     
     //using switch to choose between sentences :

     switch(selectedChoice){

        case "cut":
            msg.innerText="It's okay to let it fall apart."
            break;

        case "burn":
            msg.innerText="It's okay to let it burn.";
            break;
            
        case "blow":
            msg.innerText= "Let the wind carry away what no longer belongs to you.";
            break;     




     }



     hikariChoice.classList.add("show");

          setTimeout(()=>{

    

      continue2.classList.add("show");

},1000)


    })
    
});




continue2.addEventListener('click',()=>{
    

if(selectedChoice === "burn"){


continue2.classList.remove("show");  
hikariChoice.classList.remove("show");
chooseScr.classList.remove("show");

paperText.innerText = userText;
animationScreen.classList.add("show");

lighter.classList.add("show");

animate();

}

else if(selectedChoice === "blow"){
    continue2.classList.remove("show");  
    blowScreen.classList.add("show");
    chooseScr.classList.remove("show");
    hikariChoice.classList.remove("show");
    paperTextBlow.innerHTML = " ";
    let words=userText.split(" ");

    words.forEach(word=>{
        const span=document.createElement("span");
        span.innerText=word;
        span.classList.add("word");

        paperTextBlow.appendChild(span);





    })

}

else if(selectedChoice === "cut"){
 continue2.classList.remove("show"); 

 cutScreen.classList.add("show");  
 chooseScr.classList.remove("show");
hikariChoice.classList.remove("show");

paperTextCut.innerText = userText;
animateCut();









}





});


// end of animation - burn *********************************************************





// Start  of animation - Blow away ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^



blowBtn.addEventListener("click", () => {

    const allWords = document.querySelectorAll(".word");
    const lastWord = allWords[allWords.length - 1];


    allWords.forEach((word, index) => {

        setTimeout(() => {
            

            word.classList.add("fly");
            windSound.play();

        }, index * 180);
         
    

         
       

    });

   
    lastWord.addEventListener("transitionend", () => {
         

        finishScreen.classList.add("show");
         blowScreen.classList.remove("show");
        

    }, { once: true });


    });

    

    












/*********************************************Cut &&&&&&&&&&&&&&&&&&&&&&&& */
scissors.addEventListener("click", () => {
    scissorsActive = true;
});


window.addEventListener("pointermove",(e)=>{

    scissorsX = e.clientX;
    scissorsY = e.clientY;

});


function animateCut(){
      if (scissorsActive) {
scissors.style.left = (scissorsX - 70) + "px";
scissors.style.top  = (scissorsY - 70) + "px";

    const paperRect = paperCut.getBoundingClientRect();
    const scissorsRect = scissors.getBoundingClientRect();
    
      
    if(
        scissorsRect.top < paperRect.bottom &&
        scissorsRect.left < paperRect.right &&
        scissorsRect.bottom > paperRect.top &&
        scissorsRect.right > paperRect.left &&
        !isCut
    ){
           
        isCut = true;

        paperLeft.classList.add("cutLeft");
        paperRight.classList.add("cutRight");
        paperTextCut.classList.add("hide");
        cutS.play();

                setTimeout(() => {

        cutScreen.classList.remove("show");
        finishScreen.classList.add("show");

    }, 1500);

    }

      }


    requestAnimationFrame(animateCut);



}


