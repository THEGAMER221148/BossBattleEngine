// Import statements (DO NOT TOUCH THESE UNLESS YOU KNOW WHAT YOU'RE DOING!)
import DialogueBox from "./engine/DialogueBox.js";
import Ending from "./engine/Ending.js";

new DialogueBox("Hello, world!", "ok", "I don't accept", "white", "Tiny5", 20, () => {
    new DialogueBox("Bye!", undefined, undefined, "yellow", "Tiny5", 20, () => {
        new Ending("Ending 1", "Yay u made it to the end!");
    });
}, () => {
    new DialogueBox("You don't want to see me angrey...", undefined, undefined, "red", "Tiny5", 20);
});