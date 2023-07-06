let game;
let Displays = {};

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

    Displays.gen1CostDisplay = $("#gen1Cost");
    Displays.gen1OwnDisplay = $("#gen1Own");



    const mainButton = $("#btnPrimary");
    const up1Button = $("#up1");
    const up2Button = $("#up2");
    const gen1Button = $("#gen1");


    const btnSave = $("#btnSave");
    const btnLoad = $("#btnLoad");


    btnSave.click(function() {
        game.saveGame();
    });

    btnLoad.click(function() {
        game.loadGame();
    });





    //let score = 0;

    mainButton.click(function() {
        game.score += game.up1Val;
        //console.log(score);
        Displays.scoreDisplay.html(game.score);
        
        
    });

    up1Button.click(function() {
        if(game.score>=game.up1Cost){
            game.score -= game.up1Cost;
            game.up1Val += 1;
            game.up1Cost = Math.round(10 + game.up1Val**1.7) - game.up2Val;

            Displays.scoreDisplay.html(game.score);
            Displays.up1ValDisplay.html(game.up1Val);
            Displays.up1CostDisplay.html(game.up1Cost);
        }
    });


    up2Button.click(function(){
        if(game.score>=100&&game.score>=game.up2Cost&&game.up1Cost>1){
            game.score -= game.up2Cost;
            game.up1Cost = Math.floor(game.up1Cost / 2);
            game.up2Val += game.up1Cost;
            game.up2Cost = Math.round(50 + game.up2Val**1.2);

            Displays.scoreDisplay.html(game.score);
            Displays.up1CostDisplay.html(game.up1Cost);
            Displays.up2ValDisplay.html(game.up2Val);
            Displays.up2CostDisplay.html(game.up2Cost);
        }
        
    });

    gen1Button.click(function(){
        if(game.score>=game.gen1Cost){
            game.score -= game.gen1Cost;
            game.gen1Own += 1;
            game.gen1Gen = game.gen1Own*2;
            game.gen1Cost = 25 + game.gen1Own**2;

            Displays.gen1CostDisplay.html(game.gen1Cost);
            Displays.gen1OwnDisplay.html(game.gen1Own);
        }
    })










};





    function updateGeneration(game){

        let generation = game.gen1Gen;
        game.score = game.score + generation/60;


    }

    function updateData(Displays, game) {
        
        updateGeneration(game);

        Displays.scoreDisplay.html(Math.floor(game.score));
        Displays.up1ValDisplay.html(game.up1Val);
        Displays.up1CostDisplay.html(game.up1Cost);
        Displays.up2ValDisplay.html(game.up2ValDisplay);
        Displays.up2CostDisplay.html(game.up2CostDisplay);
    }
    
    function tick() {
        game.frameCount++;
    
        if (game.frameCount >= 60 / game.fpsLimit) {  // Runs every 60 frames
            game.gameFrame++;
    
            updateData(Displays, game);
    
            game.frameCount = 0;
        }
        requestAnimationFrame(tick);
    }

