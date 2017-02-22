 $(document).ready(function(){
 var randomGen = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21"];
 var userAddedGuess;
 var wins; 
 var losses;
 var i;
 var randomNum;
 // var totalGuesses = userAddedGuessg + userAddedGuesso + userAddedGuessp + userAddedGuessb;
function randomSelect () {
			var i = Math.floor(Math.random() * 21) + 0;
			var randomNum = randomGen[i];
		};
		
function didYouWin () {
	if (totalGuesses === 39) {
		var wins = wins++
		};

	if (totalGuesses > 39) {
			var losses = losses++
		};
}

$(".ggem").on("click",function(e){
        var ggem = randomNum
        var userAddedGuessg = parseInt(userAddedGuess) + parseInt(ggem);
        console.log (randomNum);
    });
$(".ogem").on("click",function(e){
      	var ogem = randomNum
      	var userAddedGuesso = parseInt(userAddedGuess) + parseInt(ogem);
    });
$(".pgem").on("click",function(e){
		  	var pgem = randomNum;
		  	var userAddedGuessp = parseInt(userAddedGuess) + parseInt(pgem);
    });
$(".bluegem").on("click",function(e){
      	var bluegem = randomNum;
      	var userAddedGuessb = parseInt(userAddedGuess) + parseInt(bluegem);
    });

$(".wins").html(wins);

$(".losses").html(losses);

});