import { Game } from "./game.js";
import { notification } from "./notification.js";



let Displays = {};
let Buttons = {};
let tabIndex = 0;


$(document).ready(function() {
    console.log("Debug message");
    init();
    tick();
    
    //setInterval(tick,50);
});

function init() {
    //game = new Game();

    window.game = new Game();

    Displays.scoreDisplay = $("#displayScore");
    
    Displays.MainDisplay = $("#mainTab");
    Displays.PrestigeDisplay = $("#prestigeTab");

    Displays.up1ValDisplay = $("#up1Value");
    Displays.up1CostDisplay = $("#up1Cost");

    Displays.up2ValDisplay = $("#up2Value");
    Displays.up2CostDisplay = $("#up2Cost");

    Displays.up3LevelDisplay = $("#up3Level");
    Displays.up3CostDisplay = $("#up3Cost");

    Displays.gen1GenDisplay =  $("#gen1Gen");
    Displays.gen1BaseDisplay = $("#gen1Base");
    Displays.gen1CostDisplay = $("#gen1Cost");
    Displays.gen1OwnDisplay =  $("#gen1Own");

    Displays.gen2GenDisplay =  $("#gen2Gen");
    Displays.gen2BaseDisplay = $("#gen2Base");
    Displays.gen2CostDisplay = $("#gen2Cost");
    Displays.gen2OwnDisplay =  $("#gen2Own");

    Displays.gen3GenDisplay =  $("#gen3Gen");
    Displays.gen3BaseDisplay = $("#gen3Base");
    Displays.gen3CostDisplay = $("#gen3Cost");
    Displays.gen3OwnDisplay =  $("#gen3Own");

    Displays.gen4GenDisplay =  $("#gen4Gen");
    Displays.gen4BaseDisplay = $("#gen4Base");
    Displays.gen4CostDisplay = $("#gen4Cost");
    Displays.gen4OwnDisplay =  $("#gen4Own");


    Buttons.MainTab = $("#btnMainTab");
    Buttons.PrestigeTab = $("#btnPrestigeTab");

    Buttons.Primary = $("#btnPrimary");

    Buttons.upg1 = $("#up1"); Buttons.upg1A = $("#up1A");
    Buttons.upg2 = $("#up2");
    Buttons.upg3 = $("#up3");

    Buttons.gen1 = $("#gen1");
    Buttons.gen2 = $("#gen2");
    Buttons.gen3 = $("#gen3");
    Buttons.gen4 = $("#gen4");
    Buttons.gen5 = $("#gen5");
    


    Buttons.Save = $("#btnSave");
    Buttons.Load = $("#btnLoad");
    Buttons.Export = $("#btnExport");
    Buttons.Import = $("#btnImport");
    Buttons.DebugReset = $("#btnDebugReset");
    
    Buttons.Version = $("#btnVersion");


    Buttons.MainTab.click(function(){
        tabIndex = 0;
    });

    Buttons.PrestigeTab.click(function(){
        tabIndex = 1;
    });



    Buttons.Save.click(function() {
        game.saveGame();
    });

    Buttons.Load.click(function() {
        game.loadGame();
    });

    Buttons.Export.click(function() {
        game.exportGame();
    });

    Buttons.Import.click(function() {
        game.importGame();
    });

    Buttons.Version.click(function() {
        game.versionGame();
    });


    //let score = 0;

    Buttons.Primary.click(function() {
        game.score += game.up1Val;
        game.scoreTotal += game.up1Val;
        //console.log(score);
        Displays.scoreDisplay.html(Math.floor(game.score));
        
        
    });

    Buttons.upg1.click(function() {
        if(game.score>=game.up1Cost){
            game.score -= game.up1Cost;
            game.up1Level += 1; 
            game.up1Val = game.up1Level + 1;
            game.up1Cost = Math.round(10 + game.up1Level**1.7) - game.up2Val;

            Displays.scoreDisplay.html(Math.floor(game.score));
            Displays.up1ValDisplay.html(game.up1Val);
            Displays.up1CostDisplay.html(game.up1Cost);
        }
    });

    Buttons.upg1A.click(function() {
        if(game.score >= game.up1ACost && game.up1ABought == false){
            game.score -= game.up1ACost;
            game.up1AVal = 1.5;
            game.gen1Base = 2*1.5;
            game.up1ABought = true; 
            game.up3Condition = true;
            console.log("bought");

            game.gen1Gen = game.gen1Own*2*game.up1AVal;
            Displays.gen1GenDisplay.html(game.gen1Gen);
        }
    })

    Buttons.upg2.click(function(){
        if(game.score>=100&&game.score>=game.up2Cost&&game.up1Cost>1){
            game.score -= game.up2Cost;
            game.up1Cost = Math.floor(game.up1Cost / 2);
            game.up2Val += game.up1Cost;
            game.up2Cost = Math.round(50 + game.up2Val**1.2);

            Displays.scoreDisplay.html(Math.floor(game.score));
            Displays.up1CostDisplay.html(game.up1Cost);
            Displays.up2ValDisplay.html(game.up2Val);
            Displays.up2CostDisplay.html(game.up2Cost);
        }
        
    });

    Buttons.upg3.click(function(){
        if(game.score>=game.up3Cost && game.up3Level<3){
            game.score -= game.up3Cost;
            game.up3Level += 1;
            game.up3Cost = Math.round((175 ** (1 + game.up3Level * 0.75)).toPrecision(4));

            Displays.scoreDisplay.html(Math.floor(game.score));
            Displays.up3LevelDisplay.html(game.up3Level);
            Displays.up3CostDisplay.html(game.up3Cost.toLocaleString("en-US"));
        }
    });

    Buttons.gen1.click(function(){
        if(game.score>=game.gen1Cost){
            game.score -= game.gen1Cost;
            game.gen1Own += 1;
            game.gen1Gen = game.gen1Own * game.gen1Base * game.up1AVal;
            game.gen1Cost = 25 + game.gen1Own ** 2;

            Displays.gen1CostDisplay.html(game.gen1Cost);
            Displays.gen1OwnDisplay.html(game.gen1Own);
        }
    })

    Buttons.gen2.click(function(){
        if(game.score>=game.gen2Cost){
            game.score -= game.gen2Cost;
            game.gen2Own += 1;
            game.gen2Gen = game.gen2Own * game.gen2Base;
            game.gen2Cost = Math.floor(   1200 + (game.gen2Own ** 2.1) *   100);

            Displays.gen2CostDisplay.html(game.gen2Cost);
            Displays.gen2OwnDisplay.html(game.gen2Own);
        }
    })

    Buttons.gen3.click(function(){
        if(game.score>=game.gen3Cost){
            game.score -= game.gen3Cost;
            game.gen3Own += 1;
            game.gen3Gen = game.gen3Own * game.gen3Base;
            game.gen3Cost = Math.floor(  57600 + (game.gen3Own ** 2.2) *  1000);

            Displays.gen3CostDisplay.html(game.gen3Cost);
            Displays.gen3OwnDisplay.html(game.gen3Own);
        }
    })

    Buttons.gen4.click(function(){
        if(game.score>=game.gen4Cost){
            game.score -= game.gen4Cost;
            game.gen4Own += 1;
            game.gen4Gen = game.gen4Own * game.gen4Base;
            game.gen4Cost = Math.floor(2764800 + (game.gen4Own ** 2.3) * 10000);

            Displays.gen4CostDisplay.html(game.gen4Cost);
            Displays.gen4OwnDisplay.html(game.gen4Own);
        }
    })







    game.loadGame();
    game.frameSaveCount = 0;
    notification("You are seeing this notification as the game just loaded :D", 
    $("#main-container"));

};





    function updateGeneration(game){

        let generation = (game.gen1Gen + game.gen2Gen + game.gen3Gen 
            + game.gen4Gen)/10;
        game.score = game.score + generation;
        game.scoreTotal = game.scoreTotal + generation;

        updateConditions(game)

    }


    function updateConditions(game){
        let score = game.scoreTotal;
        /*
        if(game.scoreTotal >= game.up1MinScore){
            Buttons.upg1.show();
        }
        else {Buttons.upg1.hide();}

        if(game.scoreTotal >= game.up2MinScore){
            Buttons.upg2.show();
        }
        else {Buttons.upg2.hide();}

        if(game.scoreTotal >= game.gen1MinScore){
            Buttons.gen1.show();
        }
        else {Buttons.gen1.hide();}

        if(game.up3Condition > false){
            Buttons.upg1A.show();
        }
        */

        condenseConditions(score, game.up1MinScore, Buttons.upg1);
        condenseConditions(score, game.up2MinScore, Buttons.upg2);

        condenseConditions(score, game.gen1MinScore, Buttons.gen1);
        condenseConditions(game.up3Level, 0, Buttons.gen2);
        condenseConditions(game.up3Level, 1, Buttons.gen3);
        condenseConditions(game.up3Level, 2, Buttons.gen4);
        
        condenseConditions(score, game.up1AMinScore, Buttons.upg1A);
        condenseConditions(game.up3Condition, false, Buttons.upg3);

        condenseBought(Buttons.upg1A, game.up1ABought);

        function condenseConditions(score, minScore, button){
            if(score > minScore){
                button.show();
            }
            else { button.hide(); }
    }

        function condenseBought(button, bought){
            if(bought == true) { button.addClass("bought"); }
            else { button.removeClass("bought"); }
        }



        //condenseConditions(game.scorePrestigeTotal, 0, Buttons.PrestigeTab)

        switch(tabIndex){
            case 0:
                Displays.MainDisplay.show();        
                 Buttons.MainTab.addClass       ("inTab");
                Displays.PrestigeDisplay.hide();
                 Buttons.PrestigeTab.removeClass("inTab");
break;

            case 1:
                Displays.MainDisplay.hide(); 
                 Buttons.MainTab.removeClass    ("inTab");
                Displays.PrestigeDisplay.show();
                 Buttons.PrestigeTab.addClass   ("inTab");
            break;

            default:
                Displays.MainDisplay.show();        
                 Buttons.MainTab.addClass       ("inTab");
                Displays.PrestigeDisplay.hide();
                 Buttons.PrestigeTab.removeClass("inTab");
            break;
        }
    }

    




    function updateData(Displays, game) {
        
        updateGeneration(game);

        Displays.scoreDisplay.html(Math.floor(game.score.toPrecision(10)).toLocaleString("en-US"));
        
        Displays.up1ValDisplay.html(game.up1Val);
        Displays.up1CostDisplay.html(game.up1Cost);
        
        Displays.up2ValDisplay.html(game.up2Val);
        Displays.up2CostDisplay.html(game.up2Cost);

        Displays.up3LevelDisplay.html(game.up3Level);
        Displays.up3CostDisplay.html(game.up3Cost);

        Displays.gen1OwnDisplay.html (game.gen1Own);
        Displays.gen1BaseDisplay.html(game.gen1Base);
        Displays.gen1GenDisplay.html (game.gen1Gen);
        Displays.gen1CostDisplay.html(game.gen1Cost);

        Displays.gen2OwnDisplay.html (game.gen2Own);
        Displays.gen2BaseDisplay.html(game.gen2Base);
        Displays.gen2GenDisplay.html (game.gen2Gen);
        Displays.gen2CostDisplay.html(game.gen2Cost);

        Displays.gen3OwnDisplay.html (game.gen3Own);
        Displays.gen3BaseDisplay.html(game.gen3Base);
        Displays.gen3GenDisplay.html (game.gen3Gen);
        Displays.gen3CostDisplay.html(game.gen3Cost);

        Displays.gen4OwnDisplay.html (game.gen4Own);
        Displays.gen4BaseDisplay.html(game.gen4Base);
        Displays.gen4GenDisplay.html (game.gen4Gen);
        Displays.gen4CostDisplay.html(game.gen4Cost);

    }
    




    function tick() {
        game.frameCount++;
        game.frameSaveCount++;
    
        if (game.frameCount >= 60 / 6 /*/ game.fpsLimit*/) {  // Runs every 60 frames
            game.gameFrame++;
    
            updateData(Displays, game);
    
            game.frameCount = 0;
        }
        
        if(game.frameSaveCount >= 600){
            game.saveGame();
            notification("Auto Saved.")

            game.frameSaveCount = 0;
        }

        requestAnimationFrame(tick);
    }


