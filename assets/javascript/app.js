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
	var gameOver;
	$('.scorecard').hide();
	var loadQuestion = function(){
		counter = setInterval(increment,1000);
		newQuestion(currentQuestion);
  	// 	$(".multi-choice").click(function(){

		//  clearTimeout(gameOver);
		//  reset();
		// });
	}
	function newQuestion(questionId){
		$("#question").html('<p>'+ game[questionId][0] + '</p>');
		$("#answers").empty();
		for(j=1; j<5;j++){
			$("#answers").append('<button class="multi-choice" id="'+ j +'">' + game[questionId][j] + '</button><br>');
		}
	}
	function increment(){
		number--;
		$("#timer").html('<h3>' + number + '</h3>');
		if(number === 0){
			stop();
			alert('Time up!');
		}
	}
	function stop(){
		clearInterval(counter);
	}
	function reset(){
		number = 30;
	}

	$("#start-button").click(function(){
		$(this).hide();
		$('.scorecard').slideDown("slow");
		loadQuestion();
	});

	$('.multi-choice').click(function(){
		console.log("$(this).attr('id')");
	});


//note: document.on function is needed here becuase the multi-choice class is not generated when the page first loads
	$(document).on('click', '.multi-choice', function(e){
		if ($(this).attr('id') == game[currentQuestion][5]) {
		//alert("Correct!!");
		 $("#correct-count").html(++winCount);
		 newQuestion(currentQuestion++);
		 console.log(currentQuestion);
	 }
	 else {
		//alert("Wrong!!");s
		 $("#incorrect-count").html(++lossCount);
		 newQuestion(currentQuestion++);
		 console.log(currentQuestion);
	 }
	 reset();
	});

	$(document).on('click', '#start-over', function(e){
		console.log("start over button clicked");
	});
});
