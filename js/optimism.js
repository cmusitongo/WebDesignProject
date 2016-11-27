function lifeTest() {
	alert("This small quiz will see if you have a positive outlook on life!");
	alert("Remember this quiz doesn't define you, you define you! Keep aiming higher!");
	confirm("Are you ready to take the quiz?");

	alert("Please rate each question from 1 - 5");
	alert("The maximum score achieveable is 25.");
	alert("Have fun and remember that only you have control of your future!");

	var choice1 = parseInt(prompt("I see the glass as half full."));
	var choice2 = parseInt(prompt("When I see an opportunity I take it."));
	var choice3 = parseInt(prompt("When I don't know something I say to myself that I can't do it."));
	var choice4 = parseInt(prompt("I treat others with respect as long as they return the favour."));
	var choice5 = parseInt(prompt("I have an idea where I'll be in the future."));

	var totalScore = choice1 + choice2 + choice3 + choice4 + choice5;


	if (totalScore >= 0 && totalScore < 5) {
	  alert("Your total score is: " +totalScore);
		alert("You have a negative outlook on life but that's okay! Work on yourself more and find your passion. Don't give up!");
	} else if (totalScore > 5 && totalScore < 10) {
	  alert("Your total score is: " +totalScore);
	  alert("You seem to have an idea but just not there yet! Work on yourself more and I'm sure your opinion will change!")
	} else if (totalScore > 10 && totalScore < 15 ) {
	  alert("Your total score is: " +totalScore);
	  alert("You almost have a positive outlook on life but don't let that stop you! You can definitely push yourself to do better!");
	} else if (totalScore > 15 && totalScore < 20) {
	  alert("Your total score is: " +totalScore);
	  alert("You have a positive outlook on life! Don't let things bring you down and remember to keep striving for better things!");
	} else if (totalScore > 20 && totalScore < 25) {
	  alert("Your total score is: " +totalScore);
	  alert("You have a very positive outlook on life! Keep going and don't give up! You will achieve greatness!")
	} else if (totalScore >= 25){
	  alert("Your total score is: " +totalScore);
	  alert("Congratulations for being so optimistic in life! I see you have a bright future ahead of you! Remember to stay focused and keep positive!");
	} 
	else {
	  alert("Your total score is: " +totalScore);
	  alert("ERROR: Something went wrong!");
	}

}
