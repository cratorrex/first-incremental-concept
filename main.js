$(document).ready(function() {
    console.log("Debug message");

    const mainButton = $("#btnPrimary");
    const up1Button = $("#up1");
    const up2Button = $("#up2");


    const scoreDisplay = $("#displayScore");

    const up1ValDisplay = $("#up1Value");
    const up1CostDisplay = $("#up1Cost");

    const up2ValDisplay=$("#up2Value");
    const up2CostDisplay=$("#up2Cost");

    //let score = 0;
    let score = 200;
    
    let up1Val = 1;
    let up1Cost = 10;

    let up2Val = 0;
    let up2Cost = 50;

    mainButton.click(function() {
        score += up1Val;
        //console.log(score);
        scoreDisplay.html(score);
        
        
    });

    up1Button.click(function() {
        if(score>=up1Cost){
            score -= up1Cost;
            up1Val += 1;
            up1Cost = Math.round(10 + up1Val**1.7 - up2Val);

            scoreDisplay.html(score);
            up1ValDisplay.html(up1Val);
            up1CostDisplay.html(up1Cost);
        }
    });


    up2Button.click(function(){
        if(score>=100){
            score -= up2Cost;
            up1Cost = Math.round(up1Cost / 2);
            up2Val += up1Cost;
            up2Cost = Math.round(50 + up2Val**1.2);

            scoreDisplay.html(score);
            up1CostDisplay.html(up1Cost);
            up2ValDisplay.html(up2Val);
            up2CostDisplay.html(up2Cost);
        }
        
    });







});