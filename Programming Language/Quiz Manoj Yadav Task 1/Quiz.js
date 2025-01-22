let correctAnswers = 0;

// Start Quiz: Display Rules Page
function startRulesPage() {
    document.getElementById('startQuizPage').style.display = 'none';
    document.getElementById('rulesPage').style.display = 'block';
}

// Start the quiz by hiding the rules page and showing the first question
function startQuiz() {
    document.getElementById('rulesPage').style.display = 'none';
    document.getElementById('question1').style.display = 'block';
}

// Show the next question and hide the current one
function nextQuestion(questionNumber) {
    var currentQuestionElement = document.getElementById('question' + questionNumber);
    var nextQuestionElement = document.getElementById('question' + (questionNumber + 1));

    var selectedAnswer = document.querySelector(`input[name="q${questionNumber}"]:checked`);

    // Check if the answer is selected
    if (!selectedAnswer) {
        alert("Please select an answer before proceeding.");
        return;
    }

    // Check the correctness of the answer
    if ((questionNumber === 1 && selectedAnswer.value === 'b') ||
        (questionNumber === 2 && selectedAnswer.value === 'b') ||
        (questionNumber === 3 && selectedAnswer.value === 'b') ||
        (questionNumber === 4 && selectedAnswer.value === 'a') ||
        (questionNumber === 5 && selectedAnswer.value === 'b')) {
        correctAnswers++;
    }

    // Hide the current question and show the next one
    currentQuestionElement.style.display = 'none';
    if (nextQuestionElement) {
        nextQuestionElement.style.display = 'block';
    }
}

// Submit the answer for the last question
function submitAnswer(questionNumber) {
    var selectedAnswer = document.querySelector(`input[name="q${questionNumber}"]:checked`);

    if (!selectedAnswer) {
        alert("Please select an answer before submitting.");
        return;
    }

    // Check the correctness of the last question's answer
    if ((questionNumber === 5 && selectedAnswer.value === 'b')) {
        correctAnswers++;
    }

    // Move to the result page
    document.getElementById('question5').style.display = 'none';
    document.getElementById('result').style.display = 'block';
    document.getElementById('resultMessage').innerText = `You answered ${correctAnswers} out of 5 questions correctly.`;
}

// Finish the quiz, show the result and allow restarting
function finishQuiz() {
    document.getElementById('result').style.display = 'none';
    // Optionally, show a final message and reset the quiz for a new start if needed
    alert("Thank you for taking the quiz!");
    restartQuiz();
}

// Restart the quiz
function restartQuiz() {
    correctAnswers = 0;

    // Hide the result and questions
    document.getElementById('result').style.display = 'none';
    for (let i = 1; i <= 5; i++) {
        document.getElementById('question' + i).style.display = 'none';
    }

    // Show the start page again
    document.getElementById('startQuizPage').style.display = 'block';
}
