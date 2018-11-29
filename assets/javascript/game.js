// Setting initial variables upon page load.
var targetNumber = 0;
var gemNumbers = [];
var userTotal = 0;
var userSelection = [];
var gameContinue = true;
var wins = 0;
var losses = 0;
    
// Document on Ready function to make sure page has loaded.
$(document).ready(function(){

    // Defining gameReset Function - Game Reset initializes game and resets variables to initial state. Does not change wins/losses.
    function gameReset() {

        // Resets game variables
        targetNumber = 0;
        userTotal = 0;
        userSelection = [];
        gameContinue = true;
        gemNumbers = [];

        // Empties gem and user values
        $(".gemsToClick, #userTotal-text, #userSelection").empty();

        // Runs targetSelection and gemSelection functions.
        targetSelection();
        gemSelector();
        $("#wins-text").text(wins);
        $("#losses-text").text(losses);    
        $("#userTotal-text").text(0);
        $("#gameState-text").text("Click a gem to get started!");

    };

    // Defining a targetSelection Function - Selects target number that user is trying to match.
    function targetSelection() {

        // Selects target number
        targetNumber = Math.floor(Math.random() * 101) + 19;
        console.log("Target Number: " + targetNumber);
        $("#targetNumber-text").text(targetNumber);

    };

    // Defining a gemSelector Function - to select a random number for each gem

    function gemSelector() {

        // Selecting random numbers and pushing them into the Gem Number array.
        let x = 0;
        while (gemNumbers.length < 4) {
            x = Math.floor(Math.random() * 12) + 1;
            if (gemNumbers.includes(x) === false) {
                gemNumbers.push(x); 
            };
        }
        console.log("Gem values: " + gemNumbers);

        // Pushing values onto gems.
        $("#gemZero").attr("gem-Value", gemNumbers[0]);
        $("#gemOne").attr("gem-Value", gemNumbers[1]);
        $("#gemTwo").attr("gem-Value", gemNumbers[2]);
        $("#gemThree").attr("gem-Value", gemNumbers[3]);

    };


    // Game Processes

    // Click Function
    $(".gemsToClick").on("click", function() {
        var gemValue = ($(this).attr("gem-Value"));
        gemValue = parseInt(gemValue);
        userTotal += gemValue;
        console.log("New Total: " + userTotal);
        $("#userTotal-text").text(userTotal);

        if (userTotal === targetNumber) {
            console.log("You Win!");
            wins += 1;
            gameReset();
            $("#gameState-text").text("You Won! Click a gem to play again!")

        } else if ( userTotal > targetNumber) {
            console.log("You Lose!");
            losses += 1;
            gameReset();
            $("#gameState-text").text("You Lost. Click a gem to play again!")

        } else {
            $("#gameState-text").text("Keep Going!")

        }

    });

    // Starting Game
    gameReset();

});