let game;
let Displays = {};
let Buttons = {};

$(document).ready(function() {
    console.log("Debug message");
    init();
    tick();
});

function init() {
    game = new Game();

    Displays.scoreDisplay = $("#displayScore");

    Displays.up1ValDisplay = $("#up1Value");
    Displays.up1CostDisplay = $("#up1Cost");

    Displays.up2ValDisplay = $("#up2Value");
    Displays.up2CostDisplay = $("#up2Cost");

    Displays.up3LevelDisplay = $("#up3Level");
    Displays.up3CostDisplay = $("#up3Cost");

    Displays.gen1GenDisplay = $("#gen1Gen");
    Displays.gen1BaseDisplay = $("#gen1Base");
    Displays.gen1CostDisplay = $("#gen1Cost");
    Displays.gen1OwnDisplay = $("#gen1Own");

    Displays.gen2CostDisplay = $("#gen2Cost"); //*8
    Displays.gen2OwnDisplay = $("#gen2Own");   //*8



    Buttons.main = $("#btnPrimary");

    Buttons.upg1 = $("#up1"); Buttons.upg1_1 = $("#up1_1");
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



    //let score = 0;

    Buttons.main.click(function() {
        game.score += game.up1Val;
        game.scoreTotal += game.up1Val;
        //console.log(score);
        Displays.scoreDisplay.html(Math.floor(game.score));
        
        
    });

    Buttons.upg1.click(function() {
        if(game.score>=game.up1Cost){
            game.score -= game.up1Cost;
            game.up1Level += 1; 
            game.up1Val = game.up1Level;
            game.up1Cost = Math.round(10 + game.up1Level**1.7) - game.up2Val;

            Displays.scoreDisplay.html(Math.floor(game.score));
            Displays.up1ValDisplay.html(game.up1Val);
            Displays.up1CostDisplay.html(game.up1Cost);
        }
    });

    Buttons.upg1_1.click(function() {
        if(game.score >= game.up1_1Cost && game.up1_1Bought == false){
            game.score -= game.up1_1Cost;
            game.up1_1Val = 1.5;
            game.gen1Base = 2*1.5;
            game.up1_1Bought = true; 
            game.up3Condition = true;
            console.log("bought");

            game.gen1Gen = game.gen1Own*2*game.up1_1Val;
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

    Buttons.gen1.click(function(){
        if(game.score>=game.gen1Cost){
            game.score -= game.gen1Cost;
            game.gen1Own += 1;
            game.gen1Gen = game.gen1Own*2*game.up1_1Val;
            game.gen1Cost = 25 + game.gen1Own**2;

            Displays.gen1CostDisplay.html(game.gen1Cost);
            Displays.gen1OwnDisplay.html(game.gen1Own);
        }
    })









    game.loadGame();
};







    function updateGeneration(game){

        let generation = (game.gen1Gen)/5;
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
            Buttons.upg1_1.show();
        }
        */

        condenseConditions(score, game.up1MinScore, Buttons.upg1);
        condenseConditions(score, game.up2MinScore, Buttons.upg2);

        condenseConditions(score, game.gen1MinScore, Buttons.gen1);
        condenseConditions(game.up3Level, 1, Buttons.gen2);
        condenseConditions(game.up3Level, 2, Buttons.gen3);
        condenseConditions(game.up3Level, 3, Buttons.gen4);
        
        condenseConditions(score, game.up1_1MinScore, Buttons.upg1_1);
        condenseConditions(game.up3Condition, false, Buttons.upg3);

        condenseBought(Buttons.upg1_1, game.up1_1Bought);

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

    }

    




    function updateData(Displays, game) {
        
        updateGeneration(game);

        Displays.scoreDisplay.html(Math.floor(game.score));
        
        Displays.up1ValDisplay.html(game.up1Val);
        Displays.up1CostDisplay.html(game.up1Cost);
        
        Displays.up2ValDisplay.html(game.up2Val);
        Displays.up2CostDisplay.html(game.up2Cost);

        Displays.up3LevelDisplay.html(game.up3Level);
        Displays.up3CostDisplay.html(game.up3Cost);

        Displays.gen1OwnDisplay.html(game.gen1Own);
        Displays.gen1BaseDisplay.html(game.gen1Base);
        Displays.gen1GenDisplay.html(game.gen1Gen);
        Displays.gen1CostDisplay.html(game.gen1Cost);
    }
    




    function tick() {
        game.frameCount++;
        game.frameSaveCount++;
    
        if (game.frameCount >= 60 / 5 /*/ game.fpsLimit*/) {  // Runs every 60 frames
            game.gameFrame++;
    
            updateData(Displays, game);
    
            game.frameCount = 0;
        }
        
        if(game.frameSaveCount >= 600){
            game.saveGame();

            game.frameSaveCount = 0;
        }

        requestAnimationFrame(tick);
    }

