const frame=document.querySelector(".frame");
const submit=document.getElementById("submit");
const addJournal=document.querySelector(".add-journal");

const historybtn=document.querySelector(".history-journal");
const area=document.getElementById("area");
const historyContainer=document.querySelector(".history-container");






let journals=[];



submit.addEventListener('click',()=>{
saveJournal();
    frame.classList.add("show");
    setTimeout(()=>{
       frame.classList.remove("show");
       




    },2000);
  


})


addJournal.addEventListener('click',()=>{
    mainScreen.classList.remove("show");
journalScreen.classList.add("show");
   




});



historybtn.addEventListener('click',()=>{

mainScreen.classList.remove("show");
historyScreen.classList.add("show");
showHistory();



});


function saveJournal(){



    let SavedText=area.value;

    journals.push(SavedText);
    localStorage.setItem("saved",JSON.stringify(journals));


    
   


}



function showHistory() {
  const savedJournals =
    JSON.parse(localStorage.getItem("saved")) || [];
    mainScreen.classList.add("hide");
    historyScreen.classList.add("show");
    historyContainer.textContent="";
    journals=savedJournals;
     journals.forEach(journal => {
        
        const card=document.createElement("div");
        card.classList.add("journal-card");
        card.textContent=journal;
        historyContainer.appendChild(card);
        
    });
   

    
}
