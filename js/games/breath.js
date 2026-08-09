const bigCircle=document.querySelector(".c1");
const smallCircle=document.querySelector(".c2");



smallCircle.addEventListener('click',()=>{

bigCircle.classList.add("breath-in");
smallCircle.innerText="Breath in";



setTimeout(()=>{


bigCircle.classList.remove("breath-in");

bigCircle.classList.add("hold");
smallCircle.innerText="Hold";



},4000)


setTimeout(()=>{

bigCircle.classList.remove("hold");

bigCircle.classList.add("breath-out");
smallCircle.innerText="Breath Out";



},8000)



setTimeout(()=>{



bigCircle.classList.remove("breath-out");
smallCircle.innerText="Press";

},14000)




});

