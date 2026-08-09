
const moods=document.querySelectorAll(".mood");
const displayMsg=document.getElementById("message");

const messages = {
    happy: "I'm so happy you're Happy today!",
    smile: "Keep that beautiful smile with you.",
    mad: "It's okay to feel frustrated sometimes.",
    sad: "I'm here with you. You're not alone.",
    cry: "Take your time. I'll stay with you."
};




moods.forEach(mood=>{

mood.addEventListener('click',()=>{

const feeling=mood.dataset.mood;
const message=messages[feeling];





//
moods.forEach(face=>{
    if(face===mood){
    displayMsg.innerHTML=message;
    mood.classList.add('selected');

    }

    else{


        face.classList.add('fade');
    }


    setTimeout(()=>{
    mood.classList.remove('selected');    
    face.classList.remove('fade');
    displayMsg.classList.add('fadeM');


    },2000);

   
displayMsg.classList.remove("fadeM");



})

//




});


})




