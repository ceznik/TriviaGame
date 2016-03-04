$( document ).ready(function(){

	var number = 25;
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
	var startGame = function(){
		for (i=0;i < game.length; i++){
			counter = setInterval(increment,1000);
			$("#question").html('<p>'+ game[i][0] + '</p>');
			for(j=1; j<5;j++){
				$("#answers").append('<button id="multi-choice">' + game[i][j] + '</button>');
			}
			setTimout(timeUp,25000);


			//show the question

			//start the timer

			//listen for the click

			//when user clicks, check their answer

			//if their answer is correct, congratulate them;

			//if their answer is incorrect, hit the buzzer and show them the correct answer 

			// then show the next question
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
		number = 5;
	}

	$("#start-button").click(startGame);
});



