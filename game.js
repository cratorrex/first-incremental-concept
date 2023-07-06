class Game {
    constructor() {
        this.version = "0.0.1";

        this.fpsLimit = 30;
        this.gameFrame = 0;
        this.frameCount = 0;

        this.score = 0;

        this.up1Val = 1;
        this.up1Cost = 10;
        this.up1Level = 0;

        this.up2Val = 0;
        this.up2Cost = 50;
        this.up2Level = 0;

        this.gen1Gen = 0;
        this.gen1Cost = 25;
        this.gen1Own = 0;
    
    }

    saveGame() {
        let gameData = JSON.stringify(this);
        localStorage.setItem("gameData", gameData);
        console.log("saved");
    }

    loadGame() {
        let gameData = localStorage.getItem("gameData");
        let savedGame = JSON.parse(gameData);
        Object.assign(this, savedGame);
        console.log(this);
        console.log("loaded");
    }
}