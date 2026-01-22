// Import statements (DO NOT TOUCH THESE UNLESS YOU KNOW WHAT YOU'RE DOING!)
import DialogueBox from "./engine/DialogueBox.js";

new DialogueBox("Hello, world!", "ok", "I don't accept", "white", "Tiny5", 20, () => {
    new DialogueBox("Bye!", undefined, undefined, "yellow", "Tiny5", 20);
}, () => {
    new DialogueBox("You don't want to see me angrey...", undefined, undefined, "red", "Tiny5", 20);
});