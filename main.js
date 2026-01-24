// Import statements (DO NOT TOUCH THESE UNLESS YOU KNOW WHAT YOU'RE DOING!)
import DialogueBox from "./engine/DialogueBox.js";
import Ending from "./engine/Ending.js";
import {setCanvasSize, setBackground} from "./engine/CanvasHandler.js";
import Sprite from "./engine/Sprite.js";

const GLOBAL_FONT = "Tiny5"; // This is the font name that will be used for everything. Import a font into "index.html" and change this name to change the font for dialogue and endings.
export default GLOBAL_FONT;

setCanvasSize(480, 360); // This sets the resolution of the canvas, the main part of the screen where sprites show up.

// Put initialization stuff (charcter definitions, etc.) here!
const ipadKid = new Sprite(["./images/IpadKid.png"], 100, 100, 100, 100, Math.PI / 2);
ipadKid.visible = false;
// These dialogue boxes will be where most of the action happens.

new DialogueBox("Hello developer, welcome to Low Quality Boss Battle Engine!", undefined, undefined, "white", 20, () => {
new DialogueBox("Check out an ending, or advance to a boss fight:", "See ending", "See Battle", "white", 20, () => {
    // Option 1: See ending
    new DialogueBox("Goodbye!", undefined, undefined, "white", 20);
    new Ending("Test Ending", "You just wanted to test the endings. If you're seeing this, it worked!");
}, () => {
    // Option 2: See battle
    new DialogueBox("Alright then, let's see how this works:", undefined, undefined, "lime", 20, () => {
        // Start battle
    });

});
});