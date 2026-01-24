// Import statements (DO NOT TOUCH THESE UNLESS YOU KNOW WHAT YOU'RE DOING!)
import DialogueBox from "./engine/DialogueBox.js";
import Ending from "./engine/Ending.js";
import {setCanvasSize, setBackground} from "./engine/CanvasHandler.js";
import Sprite from "./engine/Sprite.js";
const GLOBAL_FONT = "Tiny5"; // This is the font name that will be used for everything. Import a font into "index.html" and change this name to change the font for dialogue and endings.
export default GLOBAL_FONT;
setCanvasSize(480, 360); // This sets the resolution of the canvas, the main part of the screen where sprites show up.
setBackground("./images/New Thumbnail bg4.png");

// Put initialization stuff (charcter definitions, etc.) here!
const ipadKid = new Sprite(["./images/IpadKid.png"], 100, 100, 100, 100, Math.PI / 2);
ipadKid.visible = false;
// These dialogue boxes will be where most of the action happens.
new DialogueBox("Hey, bro!", undefined, undefined, "white", 20, () => {
new DialogueBox("I was just playing zero build with my friends and I wanted to ask you something...", undefined, undefined, "white", 20, () => {
new DialogueBox("Do you like Fortnite?", "Yes", "No", "white", 20, () => {
    // Option 1 (u like Fortnite)
    new DialogueBox("That's awesome!", undefined, undefined, "white", 20, () => {
    new DialogueBox("Do you want to join my squad?", "Yes!", "Not really...", "white", 20, () => {
        // Option 1-1: You want to join his squad
        new DialogueBox("Great! I'll be on my Xbox at 5 P.M. See you there!", undefined, undefined, "white", 20, () => {
            new Ending("Good Ending", "You've built a stronger friendship with Fortnite Kid.");
        });
    }, () => {
        // Option 1-2: You dont want to join his squad
        new DialogueBox("Ok then, I'll see ya' around!", undefined, undefined, "white", 20, () => {
            new Ending("Neutral Ending", "You're still friends with Fortnite Kid.");
        });
    });
    });
}, () => {
    // Option 2 (u no like Fortnite)
    //new Ending("Bad Ending", "Fortnite Kid killed you instantly. You are now dead.");
    ipadKid.visible = true;
    setInterval(() => {
        ipadKid.dir += 0.01;
        ipadKid.vx += Math.random() - 0.5;
    }, 8);
});
});
});