const newAffirmation=document.querySelector(".new-affirmation");
const affDisplay=document.querySelector(".display");
const mainContainer = document.querySelector(".main-container");
const user=localStorage.getItem("user");


const affirmations = [


];


fetch("../CVS Hikari affirmations.csv").then (response=> response.text()).then (data=>{

    const rows = data.split("\n");
    rows.forEach((row , index)=>{
        if (index===0) return ;

    const columns = row.split(";");
    const color=columns[3].trim();

    affirmations.push({content: columns[2].trim(),color:color.startsWith('#')? color: '#'+color});

    })
   



})




newAffirmation.addEventListener('click',()=>{
const randomNum=Math.floor(Math.random()*affirmations.length);

const chosenAffirm=affirmations[randomNum];

const text=chosenAffirm.content.replace("{user}", user);

affDisplay.innerHTML=text;
console.log(chosenAffirm.content);

mainContainer.style.backgroundColor=chosenAffirm.color;
console.log(chosenAffirm);

})




