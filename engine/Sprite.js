export default class Sprite {
    constructor(images, x, y, dir, scale) {
        this.images = images; // This needs to be an ImageCollection (still need to make that class)
        this.x = x;
        this.y = y;
        this.d = dir;
        this.scale = scale;
        this.visible = true;

        function step() { // Step function to show sprite
            if (this.visible) {
                //TODO: Add image rendering code.
            }
        }
    }
}