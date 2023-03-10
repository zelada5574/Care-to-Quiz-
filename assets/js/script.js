const startEl = document.getElementById('start-btn')
const nextEl = document.getElementById('next-btn')
const answerscontainerEl = document.getElementById('answergrid')
const questionEl = document.getElementById('question')
const timerEl = document.getElementById('timeleft')
const scoreEl = document.getElementById('score')
const button1El =document.getElementsByClassName('btn-1')
const button2El =document.getElementsByClassName('btn-2')
const button3El =document.getElementsByClassName('btn-3')
const button4El =document.getElementsByClassName('btn-4')

let currentQuestionIndex = 0
let score = 0

startEl.addEventListener('click', startGame)
// starts game when user hit the starts button and is presented with the first question
// There should be a timer that starts at 60 seconds that begins to countdown

// startEl.addEventListener('click', startGame())

function startGame() {
  console.log('Started')
  startEl.classList.add('hide')
  answerscontainerEl.classList.remove('hide')
  nextEl.classList.remove('hide')
  
  score = 0
  scoreEl.classList.remove('hide')
  
  currentQuestionIndex = 0
  
  setnextQuestion([currentQuestionIndex])
  
}

// populates next question when user either correctly or incorrectly selects an answer. 
// Should uptick score by 1 
function setnextQuestion(){
  showQuestion()
}

// Once the user has gone through all questions OR time hits 0
// The User is then can then save their initials and score.
// There should be a box for the user to input their initials
// Once they hit submit, it should take them to a highscore screen

function showQuestion(question) {
  questionEl.innerText = questions[currentQuestionIndex].question
  
  questions.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerscontainerEl.appendChild(button)
  });



  function selectAnswer(){

  }
 
  
}

function submitInitials() {

}

// I need this function to run after submit initials
// and if the user is on the first page. it'll take them to this one.
function viewHighscores() {

}

const questions = [
  {
    question: 'Which of the following is true about variable naming conventions in JavaScript?',
    answer: [
      { text: 'They must begin with a letter or underscore', correct: false },
      { text: 'They are case sensitive', correct: false },
      { text: 'both', correct: true},
      { text: 'neither', correct: false }
    ]
  },
  {
    question: 'Which of the following is a valid type of function javascript supports?',
    answer: [
      { text: 'named function', correct: false },
      { text: 'anonymous function', correct: false },
      { text: 'both', correct: true },
      { text: 'Neither', correct: false }
    ]
  },
  {
    question: 'Which of the following type of variable is visible only within a function where it is defined?',
    answer: [
      { text: 'global variable', correct: false },
      { text: 'local variable', correct: true },
      { text: 'both', correct: false },
      { text: 'neither', correct: false }
    ]
  },
  {
    question: 'Which built-in method returns the calling string value converted to lower case?',
    answer: [
      { text: 'toLowerCase()', correct: true },
      { text: 'toLower()', correct: false },
      { text: 'changeCase(case)', correct: false },
      { text: 'none of the above', correct: false }
    ]
  }
]
