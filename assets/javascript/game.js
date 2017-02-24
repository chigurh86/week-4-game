 var userAddedGuess = 0;
 var wins = 0; 
 var losses = 0;
 var totalGuesses = 0;
 var ggem = 0;
 var ogem = 0;
 var pgem = 0;
 var bluegem = 0;

 // all functions

 function startGame () {
	
	ggem = Math.floor(Math.random() * 21) + 1;
 	ogem = Math.floor(Math.random() * 21) + 1;
 	pgem = Math.floor(Math.random() * 21) + 1;
 	bluegem = Math.floor(Math.random() * 21) + 1;
 	mainVar = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
 	totalGuesses = 0;
 	$(".main-var").html(mainVar);
 	$(".score-point").html(0);
 	$(".losses").html(0);
 	$(".wins").html(0);
	wins = 0 ;
	losses = 0 ;
 }

 function reset (){
 	totalGuesses = 0;
 	$(".score-point").html(0);
 	return;
 }

 function totalUp(gemvalue){
 		totalGuesses += gemvalue;
 		$(".score-point").html(totalGuesses);

	if (totalGuesses === mainVar) {
		reset ();
		$(".wins").html(wins++ + 1);
		console.log(wins);
		};

	if (totalGuesses > mainVar) {
		reset ();
		$(".losses").html(losses++ + 1);
		console.log(losses);
		};

}
function gameOver (){
 	if (wins === 5) {
 		alert("You Won! Play again?");
 		startGame ();
 	};
 	if (losses === 5) {
 		alert("You Lost! Play again?");
 		startGame ();
 	}
};

 $(document).ready(function(){
	startGame ();

// all keys

$(".ggem").on("click",function(e){
        totalUp(ggem);
        gameOver ();
    });

$(".ogem").on("click",function(e){
      	totalUp(ogem);
      	gameOver ();
    });

$(".pgem").on("click",function(e){
	  	totalUp(pgem);
	  	gameOver ();
    });

$(".bluegem").on("click",function(e){
      	totalUp(bluegem);
      	gameOver ();
    });


});