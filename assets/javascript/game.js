// Document on Ready function to make sure page has loaded.
$(document).ready(function(){

    // Setting initial variables upon page load.
    var targetNumber = 0;
    var gemNumbers = [];
    var userTotal = 0;
    var userSelection = [];
    var gameContinue = true;
    var wins = 0;
    var losses = 0;

    // Defining gameReset Function - Game Reset initializes game and resets variables to initial state. Does not change wins/losses.
    function gameReset() {

        // Resets game variables
        targetNumber = 0;
        userTotal = 0;
        userSelection = [];
        gameContinue = true;
        gemNumbers = [];

        // Empties gem and user values
        $(".gemsToClick, #userTotal, #userSelection").empty();

        // Runs targetSelection and gemSelection functions.
        targetSelection();
        gemSelector();

    };

    // Defining a targetSelection Function - Selects target number that user is trying to match.
    function targetSelection() {

        // Selects target number
        targetNumber = Math.floor(Math.random() * 101) + 19;
        console.log("Target Number: " + targetNumber);

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
        
    };


    // Game Processes

    $(".gemsToClick").on("click", function() {
        var gemValue = ($(this)).("")
    });

    gameReset();

});