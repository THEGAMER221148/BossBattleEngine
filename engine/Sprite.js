const canvas = document.getElementById("spriteCanvas");
const ctx = canvas.getContext("2d");
ctx.imageSmoothingEnabled = false;

export default class Sprite {

    static allSprites = [];
    static lastTime = Date.now();

    static renderAll() { // Render all the sprites
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (const sprite of Sprite.allSprites) {
            if (sprite.visible) {
                ctx.save();
                ctx.translate(Math.floor(sprite.x), Math.floor(sprite.y));
                ctx.rotate(sprite.dir);
                ctx.drawImage(sprite.images[sprite.currentImage], -sprite.width / 2, -sprite.height / 2, sprite.width, sprite.height);
                ctx.restore();
            }
            sprite.x += sprite.vx * (Date.now() - Sprite.lastTime);
            sprite.y += sprite.vy * (Date.now() - Sprite.lastTime);
        }
        Sprite.lastTime = Date.now();
        requestAnimationFrame(Sprite.renderAll);
    }
    
    constructor(images, x, y, width, height, dir) {
        this.images = images; // This needs to be an array
        this.x = x;
        this.y = y;
        this.vx = 0; // x-velocity
        this.vy = 0; // y-velocity
        this.width = width;
        this.height = height;
        this.dir = dir;
        this.visible = true;
        this.currentImage = 0;

        for (let i = 0; i < this.images.length; i++) {
            const img = new Image();
            img.src = this.images[i];
            this.images[i] = img;
        }

        Sprite.allSprites.push(this);
        console.log(Sprite.allSprites);
    }

}

Sprite.renderAll();