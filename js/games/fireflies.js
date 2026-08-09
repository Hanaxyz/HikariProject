 const canvas = document.querySelector(".canvas");


//Fireflies V1 

// Learned:
// - Canvas
// - Class
// - Constructor
// - this
// - Animation Loop
// - requestAnimationFrame

 function resizeCanvas() {
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
}

resizeCanvas();

window.addEventListener("resize", resizeCanvas);



const circle=canvas.getContext("2d");



const x = canvas.width / 2;
const y = canvas.height / 2;



// moving logic :


// creating a class for the fireflies :
class Firefly{

    // we should add the attributes to a "Costructer" like pos and spd
constructor(x,y){

    //position : x,y
    this.x=x;
    this.y=y;

    // speed for animation (using math.random for different speeds and directions)

let speedR=Math.random()*2-1;

    this.speedX=speedR;
    this.speedY=speedR;





}


// Now , i added update to simply update the position and speed when appplying the animation later,

update(){


this.x+=this.speedX;
this.y+=this.speedY;




}


// i used gradient to create a firefly in js instead of div in html , 

 draw(){


const gradient = circle.createRadialGradient(
   this.x, this.y, 0,      //start
    this.x, this.y, 60     //end
);

gradient.addColorStop(0, "rgba(255,255,220,1)"); //___
gradient.addColorStop(0.15, "rgba(240,255,180,0.8)");//_____
gradient.addColorStop(0.4, "rgba(220,255,150,0.35)");//__________________
gradient.addColorStop(1, "rgba(220,255,150,0)");//0__________________100

 
circle.beginPath(); //start drawing
circle.arc(this.x, this.y, 60, 0, Math.PI * 2);// instead of x, y now I'm using this.x ,y to control all the fireflies positions. 60 is radius , and then start and end angles.
//fill it with teh gradient i made earlier 
circle.fillStyle = gradient;
circle.fill();





}



}


// End of class .



// array for all the objects (fireflies):

const fireflies=[];


// when the user click , touch teh screen we need to create the firefly :




// push the object from class to the array with adding position :(then we will pass it to the constructer)
canvas.addEventListener("pointerdown", (event) => {

    const rect = canvas.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    fireflies.push(new Firefly(x, y));




// finally , for each object in the array ,(invoking the methods) we're gonna apply the class attributes , for every single object .






});


function animate(){

circle.clearRect(

0,
0,
canvas.width,
canvas.height,




);


fireflies.forEach(f => {
    f.update();
    f.draw();
    
});


requestAnimationFrame(animate);


}







animate();






