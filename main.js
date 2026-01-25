// Import statements (DO NOT TOUCH THESE UNLESS YOU KNOW WHAT YOU'RE DOING!)
import DialogueBox from "./engine/DialogueBox.js";
import Ending from "./engine/Ending.js";
import {setCanvasSize, canvas, ctx} from "./engine/CanvasHandler.js";
import Sprite from "./engine/Sprite.js";
import * as Utils from "./engine/Utils.js";

const GLOBAL_FONT = "Tiny5"; // This is the font name that will be used for everything. Import a font into "index.html" and change this name to change the font for dialogue and endings.
export default GLOBAL_FONT;

setCanvasSize(480, 360); // This sets the resolution of the canvas, the main part of the screen where sprites show up.

// Put initialization stuff (charcter definitions, etc.) here!
const boss = new Sprite(["./images/LQBBE-Logo.png"], 240, 50, 100, 100, 0);
boss.visible = false;
const voice1 = "./sounds/chirp.wav";
// These dialogue boxes will be where most of the action happens.

new DialogueBox("Hello developer, welcome to Low Quality Boss Battle Engine!", undefined, undefined, "white", 20, voice1, () => {
new DialogueBox("Check out an ending, or advance to a boss fight:", "See ending", "See Battle", "white", 20, voice1, () => {
    // Option 1: See ending
    new DialogueBox("Goodbye!", undefined, undefined, "white", 20, voice1, );
    new Ending("Test Ending", "You just wanted to test the endings. If you're seeing this, it worked!");
}, () => {
    // Option 2: See battle
    new DialogueBox("Alright then, let's see how this works:", undefined, undefined, "lime", 20, voice1, async () => { // The "async" is critical for the wait() function to work.
        // Start battle
        // Fade effect
        let value = 0;
        ctx.fillStyle = "rgba(255, 255, 255, 0.02)";
        while (value < 255) {
            value ++;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            await Utils.wait(10);
        }
        // Show sprites
        boss.visible = true
        new Audio("./sounds/vine-boom.mp3").play();
        // another fade
        while (value > 0) {
            value --;
            ctx.fillStyle = `rgb(${value}, ${value}, ${value})`;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            await Utils.wait(10);
        }
        ctx.fillStyle = "rgba(0, 0, 0, 1)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        // More yap
        new DialogueBox("IT IS I, LOW QUALITY BOSS BATTLE ENGINE LOGO.PNG!", undefined, undefined, "red", 20, voice1, () => {
        new DialogueBox("Look, it's not my fault I was drawn with only 64 pixels, okay? Some people are just low-quality, ya' know.", undefined, undefined, "white", 20, voice1, async () => {
        await Utils.wait(1000);
        new DialogueBox("alright can we get some music going?", undefined, undefined, "white", 20, voice1, async () => {
        await new Audio("./sounds/omniscient message.wav").play();
        await Utils.wait(11000);
        new DialogueBox("Wow omniscient observer, you're lame.", undefined, undefined, "white", 20, voice1, () => {
        new DialogueBox("Ok who am I kidding I'm just gonna start attacking you now.", undefined, undefined, "red", 20, voice1, () => {

        });
        });
        });
        });
        });
    });

});
});