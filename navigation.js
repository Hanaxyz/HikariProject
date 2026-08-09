const backs = document.querySelectorAll(".go-back");
const homes =document.querySelectorAll(".home");
const journalScreen=document.querySelector(".journal-screen");

const mainScreen=document.querySelector(".main-screen");
const historybtn=document.querySelector(".history-journal");
const historyScreen =document.querySelector(".history-screen");


const page = window.location.pathname;



if(page.includes("fireflies")|| page.includes("bubble")){

document.querySelector(".nav-buttons").classList.add("light-nav");

}







backs.forEach((back) => {

    back.addEventListener("click", () => {

        if ( journalScreen &&journalScreen.classList.contains("show")) {

            journalScreen.classList.remove("show");
            mainScreen.classList.add("show");

        }

        else if (   historyScreen &&historyScreen.classList.contains("show")) {

            historyScreen.classList.remove("show");
            mainScreen.classList.add("show");

        }


        else if (page.includes("breath") || page.includes("bubble") || page.includes("draw") || page.includes("fireflies")|| page.includes("letgo")|| page.includes("untangle")){
         
           window.location.href="../../html/gamesMain.html";

        }

    });

});



if (homes) {
    homes.forEach((home) => {
    home.addEventListener("click", () => {
        window.location.href = home.dataset.home;
    });
       });
    }
