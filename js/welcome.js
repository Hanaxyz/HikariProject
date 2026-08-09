const body=document.body;
const textWelcome=document.getElementById('welcome');
const background= document.querySelector(".main-background")
const begin =document.getElementById("begin");


setTimeout(()=>{

  
    background.classList.add("hide");


    textWelcome.innerHTML = "Let's find the light together.";
    textWelcome.classList.add("second-message");

 




},5000)


setTimeout(() => {
    begin.classList.add("show");
}, 8000);



begin.addEventListener("click", () => {

    window.location.href="home.html";



});
