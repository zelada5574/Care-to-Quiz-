// initialize variables
const startEl = document.getElementById("start-btn");
const nextEl = document.getElementById("next-btn");
const answerscontainerEl = document.getElementById("answergrid");
const questionEl = document.getElementById("question");
const timerEl = document.getElementById("timeleft");
const scoreEl = document.getElementById("score");
const footerEl = document.getElementById("correctorwrong");
const quizEl = document.getElementById("quiz");
const containerEl = document.getElementById("container");
const againEl = document.getElementById("again-btn");
const highscoreEl = document.getElementById("highscore");
const listingsEl = document.getElementById("listings");

// set start lets to their values
let currentQuestionIndex = 0;
let score = 0;
let secondsLeft = 75;


// starts game when user hit the starts button and is presented with the first question
// There should be a timer that starts at 75 seconds that begins to countdown
startEl.addEventListener("click", startGame);

function startGame() {
  secondsLeft = 75
  quizEl.classList.remove('hide')
  questionEl.classList.remove('hide')
  againEl.classList.add('hide')
  listingsEl.classList.add('hide')
  setTime();
  console.log("Started");
  startEl.classList.add("hide");
  answerscontainerEl.classList.remove("hide");
  nextEl.classList.remove("hide");

  score = 0;
  scoreEl.classList.remove("hide");

  currentQuestionIndex = 0;

  setnextQuestion([currentQuestionIndex]);
}

function setTime() {
  // Sets interval in variable
  let timerInterval = setInterval(function () {
    secondsLeft--;
    timerEl.textContent = secondsLeft + " seconds left";

    if (secondsLeft === 0 || secondsLeft < 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      submitInitials();
    }
  }, 1000);
}

// populates next question when user either correctly or incorrectly selects an answer.
// Should uptick score by 1
function setnextQuestion() {
  resetstate();
  showQuestion();
}

function showQuestion(question) {
  questionEl.innerText = questions[currentQuestionIndex].question;

  for (let i = 0; i < questions[currentQuestionIndex].answers.length; i++) {
    const button = document.createElement("button");
    button.innerText = questions[currentQuestionIndex].answers[i];
    button.classList.add("btn");
    button.addEventListener("click", function (e) {
      let question = questions[currentQuestionIndex];
      const thisAnswerIndex = i;
      const isCorrectAnswer = thisAnswerIndex === question.answer;
      if (isCorrectAnswer) {
        console.log("right");
        score++;
        footerEl.classList.remove("hide");
        footerEl.innerText = "Correct!";
        scoreEl.innerText = "Your score is: " + score;
      } else {
        console.log("wrong");
        footerEl.classList.remove("hide");
        footerEl.innerText = "Incorrect!";
        secondsLeft -= 10;
      }
      nextEl.classList.remove("hide");
      currentQuestionIndex++;
      if (currentQuestionIndex === 4) {
        submitInitials();
      }
    });

    answerscontainerEl.appendChild(button);
  }
}

nextEl.addEventListener("click", setnextQuestion);

function resetstate() {
  nextEl.classList.add("hide");
  footerEl.classList.add("hide");
  answerscontainerEl.innerHTML = "";
}

// Once the user has gone through all questions OR time hits 0
// The User is then can then save their initials and score.
// There should be a box for the user to input their initials
// Once they hit submit, it should take them to a highscore screen
function submitInitials() {
  quizEl.classList.add("hide");
  questionEl.classList.add("hide");
  answerscontainerEl.classList.add("hide");
  startEl.classList.add("hide");
  nextEl.classList.add("hide");
  const askInitials = prompt(
    "Please enter your initials for the highscores",
    "Enter Initials"
  );
  if(!askInitials) {
    alert("Please enter your initials")
    submitInitials()
  }
  let scoreEntry = document.createElement("p");
  scoreEntry.textContent = "User " + askInitials + " with a score of " + score;
  listingsEl.appendChild(scoreEntry);
  scoreEntry.classList.add("entry");
  listingsEl.classList.remove('hide')
  againEl.classList.remove("hide");
  footerEl.classList.add('hide')
}

// I need this function to run after submit initials
// and if the user is on the first page. it'll take them to this one.

highscoreEl.addEventListener("click", viewHighscores);

function viewHighscores() {
  quizEl.classList.add("hide");
  questionEl.classList.add("hide");
  answerscontainerEl.classList.add("hide");
  startEl.classList.add("hide");
  nextEl.classList.add("hide");
  againEl.classList.remove("hide");
  listingsEl.classList.remove("hide");
}

againEl.addEventListener('click', startGame) 


const questions = [
  {
    question:
      "Which of the following is true about variable naming conventions in JavaScript?",
    answers: [
      "They must begin with a letter or underscore",
      "They are case sensitive",
      "Both",
      "Neither",
    ],
    answer: 2,
  },
  {
    question:
      "Which of the following is a valid type of function javascript supports?",
    answers: ["Named function", "Anonymous function", "Both", "Neither"],
    answer: 2,
  },
  {
    question:
      "Which of the following type of variable is visible only within a function where it is defined?",
    answers: ["Global variable", "Local variable", "Both", "Neither"],
    answer: 1,
  },
  {
    question:
      "Which built-in method returns the calling string value converted to lower case?",
    answers: [
      "toLowerCase()",
      "toLower()",
      "changeCase(case)",
      "none of the above",
    ],
    answer: 0,
  },
];
