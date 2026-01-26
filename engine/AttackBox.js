import * as Utils from "./Utils.js";
export default class AttackBox {
    constructor(x, y, width, height, playerImage, playerSpeed, playerScale) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.visible = false;
        this.plrImg = new Image();
        this.plrImg.src = playerImage;
        this.plrSpeed = playerSpeed;
        this.plrScale = playerScale;
        this.plrX = this.x;
        this.plrY = this.y;
        //Edit the element
        this.element = document.getElementById("gameCanvas").cloneNode(true);
        this.element.style.position = "fixed";
        this.element.style.zIndex = "2";
        this.element.style.pointerEvents = "none";
        document.body.appendChild(this.element);

        const ctx = this.element.getContext("2d");
        const edgeWidth = 4;
        ctx.lineWidth = edgeWidth;
        ctx.strokeStyle = "white";
        let lastTime = Date.now();
        // Draw the box and player
        const renderLoop = () => {
            ctx.clearRect(0, 0, this.element.width, this.element.height);
            if (this.visible) {
                ctx.drawImage(this.plrImg, this.plrX - (this.plrImg.width * this.plrScale) / 2, this.plrY - (this.plrImg.height * this.plrScale) / 2, this.plrImg.width * this.plrScale, this.plrImg.height * this.plrScale); // draw plr
                ctx.strokeRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height); // draw box
                // get movement working
                // vert movement
                if (Utils.keysDown['w']) {
                    this.plrY -= this.plrSpeed * (Date.now() - lastTime);
                } else if (Utils.keysDown['s']) {
                    this.plrY += this.plrSpeed * (Date.now() - lastTime);
                }
                //horiz movement
                if (Utils.keysDown['a']) {
                    this.plrX -= this.plrSpeed * (Date.now() - lastTime);
                } else if (Utils.keysDown['d']) {
                    this.plrX += this.plrSpeed * (Date.now() - lastTime);
                }
                // x-collision
                if (this.plrX > this.width / 2 + this.x - ((this.plrImg.width * this.plrScale) / 2)) {
                    this.plrX = this.width / 2 + this.x - ((this.plrImg.width * this.plrScale) / 2);
                } else if (this.plrX < this.x - this.width / 2 + ((this.plrImg.width * this.plrScale) / 2)) {
                    this.plrX = this.x - this.width / 2 + ((this.plrImg.width * this.plrScale) / 2);
                }
                // y-collision
                if (this.plrY > this.height / 2 + this.y - ((this.plrImg.width * this.plrScale) / 2)) {
                    this.plrY = this.height / 2 + this.y - ((this.plrImg.width * this.plrScale) / 2);
                } else if (this.plrY < this.y - this.height / 2 + ((this.plrImg.width * this.plrScale) / 2)) {
                    this.plrY = this.y - this.height / 2 + ((this.plrImg.width * this.plrScale) / 2);
                }
            }
            lastTime = Date.now();
            requestAnimationFrame(renderLoop);
        }

        renderLoop();
    }

    moveTo(x, y) {
        this.x = x;
        this.y = y;
    }

    setSize(width, height) {
        this.width = width;
        this.height = height;
    }
}