export class Game {
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

        this.up1AVal = 1;
        this.up1ACost = 50;
        this.up1AMinScore = 200;
        this.up1ABought = false;

        this.up2Val = 0;
        this.up2Cost = 50;
        this.up2Level = 0;
        this.up2MinScore = 120;

        this.up3Val = 0;
        this.up3Cost = 175;
        this.up3Level = 0;
        this.up3Condition = false;

        this.gen1Gen = 0;
        this.gen1Base = 2;
        this.gen1Cost = 25;
        this.gen1Own = 0;
        this.gen1MinScore = 20;

        this.gen2Gen = 0;
        this.gen2Base = 120;
        this.gen2Cost = 1200;
        this.gen2Own = 0;
        this.gen2Condition = 1;

        this.gen3Gen = 0;
        this.gen3Base = 7200;
        this.gen3Cost = 57600;
        this.gen3Own = 0;
        this.gen3Condition = 2;

        this.gen4Gen = 0;
        this.gen4Base = 432000;
        this.gen4Cost = 2764800;
        this.gen4Own = 0;
        this.gen4Condition = 3;

        this.gen5Gen = 0;
        this.gen5Base = 0;
        this.gen5Cost = 1000000000;
        this.gen5Own = 0;
        this.gen5Condition = 4;
        



        
        






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

    loadGame() {
        let gameData = localStorage.getItem("gameData");
        let savedGame = JSON.parse(gameData);

        if(savedGame!=null){
            if (savedGame.version !== this.version) {
                for (const key in savedGame) {
                    if (savedGame.hasOwnProperty(key) && !this.hasOwnProperty(key)) {
                        this[key] = savedGame[key];
                    }
               }
            }
        }
        Object.assign(this, savedGame);
        //this.convertDecimal();
        console.log(this);
        console.log("loaded");
    }

    exportGame() {
        let gameData = JSON.stringify(this);
        localStorage.setItem("gameData", gameData);
        prompt("Exported Game Data:",gameData);
    }

    importGame() {
        let gameData = prompt("Input your save data.");
        let savedGame = JSON.parse(gameData);
        Object.assign(this, savedGame);
        console.log(this);
        localStorage.setItem("gameData", gameData);

        console.log("imported");
        
    }

    versionGame(div) {
        /* alert("Version 0.3.G4:\n" + "Implemented Upgrade 3 and "
        +"Generators 2 to 4.\n" 
        +"Hot fix for new saves causing a null error." 
        +"\n\nVersion 0.2.U1a:\n"
        +"Changed Naming Convention for U1-1 to U1a, and added "
        +"another ability to U1a."
        +"\n\nVersion 0.2.U1-1:\n" + "Implemented Upgrade 1-1."); */
        div.html("<p><b>Version 0.4.U2a</b><br/>"+
        "<br/>Implemented Upgrade 4 and Upgrade 2a.</p>"+
        "<hr/><p><b>Version 0.3.G4</b><br/>"+
        "<br/>Implemented Upgrade 3 and Generators 2 to 4."+
        "<br/>Hot fix for new saves causing a null error.</p>"+
        "<hr/><p><b>Version 0.2.U1a</b><br/>"+
        "<br/>Changed Naming Convention for U1-1 to U1a, and added "+
        "another ability to U1a.</p>"+
        "<hr/><p><b>Version 0.2.U1-1</b><br/>"+
        "<br/>Implemented Upgrade 1-1.</p>")
    }
}