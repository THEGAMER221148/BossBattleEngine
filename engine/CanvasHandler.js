// This is just code to control the canvas. It sets the size and position of it.
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
canvas.background = undefined;

function resize() {
    if(window.innerWidth / window.innerHeight < canvas.width / canvas.height){
        canvas.style.width = '100%';
        canvas.style.height = window.innerWidth / (canvas.width / canvas.height) + "px";
    }else{
        canvas.style.height = '100%';
        canvas.style.width = window.innerHeight * (canvas.width / canvas.height) + "px";
    }
}

function setBackgroundImage(imageSource) {
    const img = new Image()
    img.src = imageSource;
    canvas.background = img;
}

function setBackgroundColor (col) {
    canvas.background = col;
}

function setCanvasSize(width, height) {
    canvas.width = width;
    canvas.height = height;
    resize();
}

// Listen for the resize function
window.addEventListener("resize", resize);
resize();

export {setBackgroundImage, setBackgroundColor, setCanvasSize, canvas, ctx}