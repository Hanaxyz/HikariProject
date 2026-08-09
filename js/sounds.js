
const buttons = document.querySelectorAll(".btn");





buttons.forEach(button=>{

const playIcon=button.querySelector(".play-icon");
const soundName=button.classList[1];
const newSound=new Audio(`../assets/sounds/${soundName}.mp3`)

button.addEventListener("click", () => {


    if(newSound.paused){
 
          newSound.currentTime=0;
          newSound.play();
          
          newSound.loop=true;
          playIcon.src = "../assets/icons/pause.svg";


    }

    else{

     playIcon.src = "../assets/icons/play.svg";
     newSound.pause();


    }


  



    
});

})




