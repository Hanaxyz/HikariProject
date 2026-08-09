const userName=document.getElementById("area");

const start=document.getElementById("start");
const nameScreen=document.querySelector(".name-screen");
const homeContainer=document.querySelector(".home-container");



const hi = document.getElementById("hi");




function storeUserName(){
    


 const name=userName.value;




    if(name){
    
   
    localStorage.setItem("user",name);
    

    


    }







}






start.addEventListener('click',()=>{

storeUserName();
 checkUser();



});




function checkUser(){
   const name=localStorage.getItem("user");

if(name){

homeContainer.classList.remove("hide");
homeContainer.classList.add("show");

hi.textContent = "Hi, " + name;

nameScreen.classList.remove("show");

nameScreen.classList.add("hide");




}


else{


      homeContainer.classList.remove("show");
    homeContainer.classList.add("hide");

    nameScreen.classList.remove("hide");
    nameScreen.classList.add("show");




}



}


checkUser();