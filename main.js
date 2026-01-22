// Import statements (DO NOT TOUCH THESE UNLESS YOU KNOW WHAT YOU'RE DOING!)
import DialogueBox from "./engine/DialogueBox.js";

// Start function - runs before the first frame
function start() { 
    // Put code to run on the first frame here!
    new DialogueBox("Hello, world!", "white", "Tiny5", 20, () => {
        new DialogueBox("Bye!", "yellow", "Tiny5", 20, () => {
        
        });
    });
}

// Update function - runs every frame
function update() {
    // Put update code here!
    requestAnimationFrame(update); //DO NOT REMOVE THIS LINE! it loops the update function
}

// Call the functions (DO NOT TOUCH)
start();
update();