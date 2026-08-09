const canvas = document.getElementById("gameCanvas");
console.log(canvas.getBoundingClientRect());

const pen = canvas.getContext("2d");

const pop= new Audio('../../assets/sounds/pop1.mp3');

canvas.width=700;
canvas.height=500;

let isDragging = false;
let selectedNode = null;


const nodes = [

    // Left
    { x:100, y:70,  r:20 },
    { x:120, y:170, r:20 },
    { x:90,  y:270, r:20 },
    { x:130, y:370, r:20 },
    { x:100, y:470, r:20 },

    // Right
    { x:600, y:70,  r:20 },
    { x:580, y:170, r:20 },
    { x:610, y:270, r:20 },
    { x:570, y:370, r:20 },
    { x:600, y:470, r:20 }

];
const lines = [

    { from:0, to:8 },
    { from:1, to:9 },
    { from:2, to:5 },
    { from:3, to:7 },
    { from:4, to:6 },

    { from:0, to:6 },
    { from:1, to:5 },
    { from:2, to:8 },
    { from:3, to:9 },
    { from:4, to:7 }

];

const StartText=document.querySelector(".start-text");


function showIntro() {
setTimeout(()=>{


StartText.classList.add("fade");



},3000);

setTimeout(()=>{

    StartText.style.display = "none";

    canvas.style.display = "block";

},4000);

}

showIntro();



// Start the game logic : 

// Drawing the Nodes : ****************************************************
function drawNodes(){


for(const node of nodes){
    pen.beginPath();

pen.arc( node.x,//x
    node.y,//y
    node.r,//radius
    0,//start angle
    Math.PI * 2);//end angle 360 deg

pen.fillStyle = "#ffffff";
pen.fill();

}

}




// drawing the lines ________________________________________________________________________





function drawLines(){
for(const line of lines){

const start=nodes[line.from];
const end=nodes[line.to];

  pen.beginPath();


  pen.moveTo(
start.x,start.y


  )

pen.lineTo(
end.x,
end.y



)


   pen.strokeStyle = "#ffffff";
        pen.lineWidth = 3;

        pen.stroke();

}





}


// animation function &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&: 


function animate(){

    pen.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    drawLines();

    drawNodes();

    requestAnimationFrame(animate);

}


animate();



canvas.addEventListener("pointerdown", (e) => {

    const { x: mouseX, y: mouseY } = getPointerPosition(e);

    for (const node of nodes) {

        let dx = mouseX - node.x;
        let dy = mouseY - node.y;

        let distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < node.r) {

            isDragging = true;
            selectedNode = node;

            canvas.setPointerCapture(e.pointerId);

            break;
        }
    }

});


canvas.addEventListener("pointermove", (e) => {

    if (!isDragging) return;

    const { x: mouseX, y: mouseY } = getPointerPosition(e);

    const r = selectedNode.r;

    selectedNode.x = Math.max(
        r,
        Math.min(canvas.width - r, mouseX)
    );

    selectedNode.y = Math.max(
        r,
        Math.min(canvas.height - r, mouseY)
    );
});


canvas.addEventListener("pointerup", (e) => {

    if (isDragging) {
        pop.play();
    }

    isDragging = false;
    selectedNode = null;

    canvas.releasePointerCapture(e.pointerId);

});


function getPointerPosition(e) {

    const rect = canvas.getBoundingClientRect();

    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    return {
        x: (e.clientX - rect.left) * scaleX,
        y: (e.clientY - rect.top) * scaleY
    };
}