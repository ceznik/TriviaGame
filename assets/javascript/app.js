$( document ).ready(function(){

	var number = 30;
	var game = [["Q1","A1","A2","A3","A4",2], 	//Q1-Q10 are questions
				["Q2","B1","B2","B3","B4",2],	//A1-J4 are possible answers to questions Q1-Q10
				["Q3","C1","C2","C3","C4",2],	//the integer at the end of the array represents
				["Q4","D1","D2","D3","D4",2],	//the position of the CORRECT answer to the question
				["Q5","E1","E2","E3","E4",2],	//in its array and has values from 1-4.
				["Q6","F1","F2","F3","F4",2],
				["Q7","G1","G2","G3","G4",2],
				["Q8","H1","H2","H3","H4",2],
				["Q9","I1","I2","I3","I4",2],
				["Q10","J1","J2","J3","J4",2]
				];
  var currentQuestion = 0;
	var winCount = 0;
	var lossCount = 0;
	var noAnsCount = 0;
	var gameOver;
	$('.scorecard').hide();
	$('#timer-container').hide();
	function newQuestion(questionId){
		reset();
		counter = setInterval(increment,1000);
		console.log("loading question: " + questionId);
		$("#question").html('<p>'+ game[questionId][0] + '</p>');
		$("#answers").empty();
		for(j=1; j<5;j++){
			$("#answers").append('<button class="multi-choice btn-primary" id="'+ j +'">' + game[questionId][j] + '</button><br>');
		}
	}
	function increment(){
		number--;
		$("#timer").html('<h3>' + number + '</h3>');
		if(number === 0){
			console.log('Time up!');
			stop();
			if(currentQuestion == game.length - 1){
				results();
			}
			else{
				$("#result-panel").html('<h2>TIME\'s UP!!!</h2>');
				$("#result-panel").append('<h3>The correct answer was ' + game[currentQuestion][game[currentQuestion][5]] + '</h3>');
				$("#result-panel").append('<img src="http://lorempixel.com/400/200/">');
				$("#unanswered-count").html(++noAnsCount);
				setTimeout(function(){
					$("#result-panel").empty();
					newQuestion(++currentQuestion);
				},3*1000);
				console.log(currentQuestion);
			}
		}
	}
	function stop(){
		clearInterval(counter);
	}
	function reset(){
		number = 30;
	}

  function results(){
		console.log("show results");
		$('.play-area').fadeOut("slow");
	  $('.scorecard').slideDown("slow");
		$('.game-container').append('<button class="btn-success" id="start-over">Start Over</button>');
	}

	$("#start-button").click(function(){
		$(this).hide();
		$('#timer-container').fadeIn("slow");
		newQuestion(currentQuestion);
	});



//note: document.on function is needed here becuase the multi-choice class is not generated when the page first loads
	$(document).on('click', '.multi-choice', function(e){
		stop();
		if ($(this).attr('id') == game[currentQuestion][5]) {
		//Correct Answer
		$("#result-panel").html('<h2>CORRECT!!</h2>');
		$("#result-panel").append('<img src="http://lorempixel.com/400/200/">');
		$("#correct-count").html(++winCount);
		setTimeout(function(){
			$("#result-panel").empty();
			if(currentQuestion == game.length - 1){
				results();
			}
			else{
			newQuestion(++currentQuestion);
		  }
		},3*1000);
    console.log(currentQuestion);
	 }
	 else {
		//Incorrect answer
		$("#result-panel").html('<h2>INCORRECT!!</h2>');
		$("#result-panel").append('<img src="http://lorempixel.com/400/200/">');
		$("#incorrect-count").html(++lossCount);
		setTimeout(function(){
			$("#result-panel").empty();
			if(currentQuestion == game.length -1){
				results();
			}
			else{
			newQuestion(++currentQuestion);
		  }
		},3*1000);
		console.log(currentQuestion);
	 }
	});

	$(document).on('click', '#start-over', function(e){
		console.log("start over button clicked");
		currentQuestion = 0;
	  winCount = 0;
		lossCount = 0;
		noAnsCount = 0;
		$('.play-area').show("slow");
		$(this).hide();
		$('.scorecard').hide();
		newQuestion(currentQuestion);
	});

});
