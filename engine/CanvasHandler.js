// This is just code to control the canvas. It sets the size and position of it.
const canvas = document.getElementById("gameCanvas");
const spriteCanvas = document.getElementById("spriteCanvas");
const ctx = canvas.getContext("2d");
ctx.imageSmoothingEnabled = false;
document.getElementById("spriteCanvas").getContext("2d").imageSmoothingEnabled = false;

function resize() {
    if(window.innerWidth / window.innerHeight < canvas.width / canvas.height){
        canvas.style.width = '100%';
        canvas.style.height = window.innerWidth / (canvas.width / canvas.height) + "px";
    }else{
        canvas.style.height = '100%';
        canvas.style.width = window.innerHeight * (canvas.width / canvas.height) + "px";
    }
    for (const v of document.body.getElementsByTagName("canvas")) {
        v.style.width = canvas.style.width;
        v.style.height = canvas.style.height;
    }
}

function setCanvasSize(width, height) {
    canvas.width = width;
    canvas.height = height;
    for (const v of document.body.getElementsByTagName("canvas")) {
        v.width = canvas.width;
        v.height = canvas.height;
    }
    resize();
}

// Listen for the resize function
window.addEventListener("resize", resize);
resize();

export {setCanvasSize, canvas, ctx}