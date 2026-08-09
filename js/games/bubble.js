
const popSound=new Audio("../../assets/sounds/popS.mp3");
const playGround=document.querySelector(".play-ground");






function createBubble() {

    const bubble=document.createElement("div");
      bubble.classList.add("bubble");

 
   let randomHeight=Math.random()*playGround.clientHeight;
   let randomWidth=Math.random()*playGround.clientWidth;
   bubble.style.top=`${randomHeight}px`
   bubble.style.left=`${randomWidth}px`


   playGround.appendChild(bubble);

bubble.addEventListener('click',()=>{

    bubble.classList.add("pop");
    popSound.currentTime=0;
    popSound.play();
     

    setTimeout(()=>{

     bubble.remove();

     setTimeout(()=>{
      createBubble();
     },3000);


    },1000);



});
 


}



for (let i=0; i<25;i++){

createBubble()


}