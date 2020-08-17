class SnakeGame {
    #_canvas = {
        c: null,
        x: null
    };
    #_lastRender = 0;
    #_fps = 0;
    #_frameCount = 0;
    #_timeAccum = 0;

    constructor(canvasElementID) {
       this.#_canvas.c = document.getElementById(canvasElementID);
       this.#_canvas.x = this.#_canvas.c.getContext("2d", {antialias: false});
       this.#_canvas.x.imageSmoothingEnabled = false;
    }

    startGame() {
        window.requestAnimationFrame((ts) => {this.gameLoop(ts)}); 
    }

    gameUpdate(progress) {

    }

    render() {
        this.#_canvas.x.fillStyle = "rgb(255,255,255)";
        this.#_canvas.x.font = '12px Arial';

        this.#_canvas.x.clearRect(0,0, this.#_canvas.c.clientWidth, this.#_canvas.c.clientHeight);
        this.#_canvas.x.fillRect(50,50,10,10);
        this.#_canvas.x.fillText('FPS: ' + this.#_fps,1,10);
    }

    gameLoop(timestamp) {
        var progress = timestamp - this.#_lastRender;

        this.gameUpdate(progress);
        this.render();

        this.#_lastRender = timestamp;

        this.#_frameCount++;
        this.#_timeAccum += progress;
        if (this.#_timeAccum >= 1000) {
            this.#_fps = this.#_frameCount;
            this.#_timeAccum = 0;
            this.#_frameCount = 0;
        }
        window.requestAnimationFrame((ts) => {this.gameLoop(ts)});
    }
}

export default SnakeGame;