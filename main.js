$(document).ready(function() {
    console.log("Debug message");

    const mainButton = $("#btnPrimary");
    const up1Button = $("#up1");

    const scoreDisplay = $("#displayScore");
    const up1ValDisplay = $("#up1Value");
    const up1CostDisplay = $("#up1Cost");

    let score = 0;
    
    let up1Val = 1;
    let up1Cost = 10;

    mainButton.click(function() {
        score += up1Val;
        //console.log(score);
        scoreDisplay.html(score);
    });

    up1Button.click(function() {
        if(score>=up1Cost){
            up1Val += 1;
            score -= up1Cost;
            up1Cost = up1Cost + 2*up1Val;
            scoreDisplay.html(score);
            up1ValDisplay.html(up1Val);
            up1CostDisplay.html(up1Cost);
        }
    });





});