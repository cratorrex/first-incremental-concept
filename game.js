class Game {
    constructor() {
        this.version = "0.0.1";

        this.fpsLimit = 30;
        this.gameFrame = 0;
        this.frameCount = 0;
        this.frameSaveCount = 0;

        this.score = 0;
        this.scoreTotal = 0;

        this.scorePrestige = 0;
        this.scorePrestigeTotal = 0;
        this.prestigeBase = 1e9;

        this.up1Val = 1;
        this.up1Cost = 10;
        this.up1Level = 0;
        this.up1MinScore = 5;

        this.up1_1Cost = 50;
        this.up1_1MinScore = 200;
        this.up1_1Bought = false;

        this.up2Val = 0;
        this.up2Cost = 50;
        this.up2Level = 0;
        this.up2MinScore = 50;

        this.up3Val = 0;
        this.up3Cost = 175;
        this.up3Level = 0;
        this.up3Condition = false;

        this.gen1Gen = 0;
        this.gen1Cost = 25;
        this.gen1Own = 0;
        this.gen1MinScore = 20;

        this.gen2Gen = 0;
        this.gen2Cost = 1200;


        
        






        // Upgrades have Val, Cost, Level, MinScore, Mult, Condition,
        //               Max, Bought
        //
        // Generators have Gen, Cost, Own, MinScore, Mult, Condition,
        //                 
        // Prestige 

    }

    saveGame() {
        let gameData = JSON.stringify(this);
        localStorage.setItem("gameData", gameData);
        console.log("saved");
    }

    exportGame() {
        let gameData = JSON.stringify(this);
        localStorage.setItem("gameData", gameData);
        window.alert(gameData);
    }

    loadGame() {
        let gameData = localStorage.getItem("gameData");
        let savedGame = JSON.parse(gameData);
        Object.assign(this, savedGame);
        console.log(this);
        console.log("loaded");
    }

    importGame() {
        let gameData = prompt("Input your save data.");
        let savedGame = JSON.parse(gameData);
        Object.assign(this, savedGame);
        console.log(this);
        console.log("loaded");

    }

}