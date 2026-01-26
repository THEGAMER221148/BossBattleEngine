// async wait function
export function wait(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}
// key press boolean
export const keysDown = {};

window.addEventListener("keydown", (event) => {
    keysDown[event.key.toLowerCase()] = true;
});

window.addEventListener("keyup", (event) => {
    keysDown[event.key.toLowerCase()] = false;
});