export default class DialogueBox { // class for dialogue boxes

    deleteBox() {
        this.box.remove();
    }

    constructor(text, textOption1, textOption2, color, font, delay, defaultOption, option2){
        // Create HTML element
        const box = document.createElement("div");
        let option1TextBox;
        let option2TextBox;
        box.style.position = "fixed";
        box.style.width = "90%";
        box.style.left = "5%";
        box.style.color = color;
        box.style.backgroundColor = "black";
        box.style.borderWidth = "10px";
        box.style.borderStyle = "solid";
        box.style.borderColor = "white";
        box.style.marginLeft = "-10px";
        box.style.marginBottom = "-10px";
        box.style.paddingLeft = "10px";
        box.style.fontSize = "4vh";
        box.style.fontFamily = font;
        if (textOption1 == undefined) {
            box.style.height =  "30%";
            box.style.bottom = "5%";
            document.body.append(box);
        } else {
            box.style.height =  "25%";
            box.style.bottom = "10%";
            document.body.append(box);

            option1TextBox = box.cloneNode();
            option1TextBox.style.height = "5%";
            option1TextBox.style.bottom = "5%";
            option1TextBox.style.width = "45%";
            option1TextBox.innerHTML = "[Q] " + textOption1;
            option1TextBox.style.color = "rgb(255, 255, 0)";
            box.append(option1TextBox);

            option2TextBox = option1TextBox.cloneNode();
            option2TextBox.style.left = "50%";
            option2TextBox.innerHTML = "[E] " + textOption2;
            option2TextBox.style.color = "rgb(255, 255, 0)";
            box.append(option2TextBox);
        }
        this.box = box;
        // function to run when a key is pressed
        const listenerFunction = function(event){
            console.log(event.key.toLowerCase());

            if(event.key.toLowerCase() == "e"){ // advance / option 2

                window.removeEventListener("keypress", listenerFunction);

                document.body.removeChild(box);
                if(typeof option2 == "function"){option2()}else if(typeof defaultOption == "function"){defaultOption()};

            }else if(event.key.toLowerCase() == "q"){ // option 1

                window.removeEventListener("keypress", listenerFunction);

                document.body.removeChild(box);
                if(typeof defaultOption == "function"){defaultOption()};

            }
        };

        // function to show the text
        function speak(dialogue){
            if(dialogue.length > 0){
                box.innerHTML += dialogue.charAt(0);
                dialogue = dialogue.substring(1, dialogue.length);
                setTimeout(() => {
                    speak(dialogue);
                }, delay);
            }
        }

        speak(text);
        setTimeout(() => { // Adds a delay to the dialogue advancing
            window.addEventListener("keypress", listenerFunction);
        }, 250);
    }
}