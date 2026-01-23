export default class Ending {
    constructor(name, description){
        // Create and style title div
        const titleBox = document.createElement("div");
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
        titleBox.style.fontFamily = "Tiny5";
        titleBox.style.alignItems = "center";
        titleBox.style.justifyContent = "center";
        titleBox.style.fontSize = "16vh";
        titleBox.innerHTML = "<span>" + name + "</span>";

        const subBox = titleBox.cloneNode(true);
        subBox.style.top = "50%";
        subBox.style.fontSize = "8vh";
        subBox.innerHTML = "<span>" + description + "</span>";

        document.body.append(titleBox);
        document.body.append(subBox);
    }
}