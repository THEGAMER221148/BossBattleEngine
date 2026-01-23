// Import statements (DO NOT TOUCH THESE UNLESS YOU KNOW WHAT YOU'RE DOING!)
import DialogueBox from "./engine/DialogueBox.js";
// Put initialization stuff (charcter definitions, etc.) here!

// These dialogue boxes will be where most of the action happens.
new DialogueBox("Hey, bro!", undefined, undefined, "white", "Tiny5", 20, () => {
new DialogueBox("I was just playing zero build with my friends and I wanted to ask you something...", undefined, undefined, "white", "Tiny5", 20, () => {
new DialogueBox("Do you like Fortnite?", "Yes", "No", "white", "Tiny5", 20, () => {
    // Option 1 (u like Fortnite)
    new DialogueBox("That's awesome!", undefined, undefined, "white", "Tiny5", 20, () => {
    new DialogueBox("Do you want to join my squad?", "Yes!", "No", "white", "Tiny5", 20, () => {
        // Option 1-1: You want to join his squad
        new DialogueBox("Great! I'll be on my Xbox at 5 P.M. See you there!", undefined, undefined, "white", "Tiny5", 20, () => {
            // TODO: put ending here
        });
    }, () => {
        // Option 1-2: You dont want to join his squad
        new DialogueBox("Ok then, I'll see ya' around!", undefined, undefined, "white", "Tiny5", 20, () => {
            // TODO: put ending here
        });
    });
    });
}, () => {
    // Option 2 (u no like Fortnite)
});
});
});