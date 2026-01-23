import GLOBAL_FONT from "../main.js";
export default class Ending {
    constructor(name, description){
        // Delete any other ending boxes
        try {
            document.getElementById("EndingTitle").remove();
            document.getElementById("EndingSubtitle").remove();
        } catch {
            console.log("ok good ending can continue");
        }
        // Create and style title div
        const titleBox = document.createElement("div");
        titleBox.id = "EndingTitle";
        titleBox.style.position = "absolute";
        titleBox.style.display = "flex";
        titleBox.style.color = "white";
        titleBox.style.backgroundColor = "black";
        titleBox.style.left = "0";
        titleBox.style.top = "0";
        titleBox.style.width = "100%";
        titleBox.style.height = "50%";
        titleBox.style.marginRight = "0";
        titleBox.style.marginTop = "0";
        titleBox.style.zIndex = "999";
        titleBox.style.fontFamily = GLOBAL_FONT;
        titleBox.style.alignItems = "center";
        titleBox.style.justifyContent = "center";
        titleBox.style.fontSize = "16vh";
        titleBox.style.opacity = "0";
        titleBox.innerHTML = "<span style='text-align: center;'>" + name + "</span>";

        const subBox = titleBox.cloneNode(true);
        subBox.style.top = "50%";
        subBox.style.fontSize = "8vh";
        subBox.innerHTML = "<span style='text-align: center;'>" + description + "</span>";
        subBox.id = "EndingSubtitle";

        document.body.append(titleBox);
        document.body.append(subBox);

        let lastTime = Date.now();
        
        function stepFade(){
            titleBox.style.opacity = String(Number(titleBox.style.opacity) + (Date.now() - lastTime)/1000);
            subBox.style.opacity = titleBox.style.opacity
            lastTime = Date.now();
            if (Number(titleBox.style.opacity) == 1) {return}
            requestAnimationFrame(stepFade);
        }

        stepFade();
    }
}