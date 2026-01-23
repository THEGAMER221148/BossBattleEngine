// This is just code to control the canvas. It sets the size and position of it.
const canvas = document.getElementById("gameCanvas");

function resize() {
    if(window.innerWidth / window.innerHeight < canvas.width / canvas.height){
        canvas.style.width = '100%';
        canvas.style.height = window.innerWidth / (canvas.width / canvas.height) + "px";
    }else{
        canvas.style.height = '100%';
        canvas.style.width = window.innerHeight * (canvas.width / canvas.height) + "px";
    }
}

export default function setCanvasSize(width, height) {
    canvas.width = width;
    canvas.height = height;
    canvas.getContext("2d").fillRect(0, 0, canvas.width, canvas.height);
    resize();
}

// Listen for the resize function
window.addEventListener("resize", resize);
resize();