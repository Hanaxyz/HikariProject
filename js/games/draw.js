const ui = {
    canvas: document.querySelector(".canvas"),
    title: document.querySelector(".title"),
    toolbar: document.querySelector(".tap"),
    drawtools:document.querySelectorAll(".draw-tool"),
    colors: document.querySelectorAll(".color"),
    sizes: document.querySelectorAll(".size"),
    save:document.querySelector(".save"),
    eraser: document.querySelector(".eraser"),
    clear: document.querySelector(".clear")
};


function getCanvasPosition(event) {
    const rect = canvas.getBoundingClientRect();

    return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
    };
}

const canvas = ui.canvas;
const pencil = canvas.getContext("2d");

console.log(ui.colors);
let currentColor="";


let isDrawing=false;
let lastX = 0;
let lastY = 0;

canvas.width = canvas.clientWidth;
canvas.height = canvas.clientHeight;

pencil.fillStyle="white";
pencil.fillRect(0,0,canvas.width,canvas.height);


pencil.lineWidth = 10;
pencil.lineCap = "round";



ui.drawtools.forEach((button)=>{

  button.addEventListener('click',()=>{


     ui.drawtools.forEach((btn)=>{

      btn.classList.remove("active");


  });

  button.classList.add("active");

  if(button.classList.contains("eraser")){
    currentColor="white";
  }else{

 currentColor=button.classList[2];


  }
  pencil.strokeStyle = currentColor;

  });





  });


  ui.save.addEventListener('click',()=>{

    const image=canvas.toDataURL("image/png");
    const link =document.createElement("a");

    link.href=image;
    link.download="my-drawing.png";

    link.click();
 





  })

 








ui.clear.addEventListener("click",(event)=>{

  ui.clear.classList.add("active");
    pencil.fillStyle = "white";
  pencil.fillRect(
    0,
    0,
    canvas.width,
    canvas.height
);

  setTimeout(()=>{
    ui.clear.classList.remove("active");
  },300);


});




canvas.addEventListener("pointermove", (event) => {

    if (!isDrawing) return;

    const pos = getCanvasPosition(event);

    pencil.beginPath();
    pencil.moveTo(lastX, lastY);
    pencil.lineTo(pos.x, pos.y);
    pencil.stroke();

    lastX = pos.x;
    lastY = pos.y;
});



  ui.sizes.forEach((button)=>{

   button.addEventListener("click", () => {
    ui.sizes.forEach((btn)=>{
  
  btn.classList.remove("active");



});

  button.classList.add("active");

pencil.lineWidth=Number(button.dataset.size);
console.log(pencil.lineWidth);

   });

})


canvas.addEventListener("pointerdown", (event) => {

    const pos = getCanvasPosition(event);

    isDrawing = true;

    lastX = pos.x;
    lastY = pos.y;
});

canvas.addEventListener("pointerup", () => {
    isDrawing = false;
});


console.log(canvas.getBoundingClientRect());