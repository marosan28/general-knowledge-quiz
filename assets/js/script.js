// Button declarations
const startBtn = document.getElementById('startBtn');
const nextUsername = document.getElementById('nextUsername');
const nextQuestion = document.getElementById('nextQuestion');
const resetBtn = document.getElementById('resetBtn');
// Text elements
const startText = document.getElementById('startText');
const usernameDisplay = document.getElementById('usernameDisplay');
const scoreDisplay = document.getElementById('scoreDisplay');
const endUsername = document.getElementById('usernameEnd');
const endScore = document.getElementById('scoreEnd');
// Sections
const usernameInput = document.getElementById('usernameInput');
const usernameScore = document.getElementById('usernameScore');
const questionAnswers = document.getElementById('questionAnswers');
const endScreen = document.getElementById('endScreen');
// Misc
let username;
let score = 0;
let start = true;
let id = 0;
let inputValue;
// Questions object
const questions = [
    {
      question: 'Question one',
      answers: [
        {
        text: 'Answer 1', isCorrect: true,
        },
        {
        text: 'Answer 2', isCorrect: false,
        },
        {
        text: 'Answer 3', isCorrect: false,
        },
        {
        text: 'Answer 4', isCorrect: false,
        },
      ]
    },
    {
      question: 'Question two',
      answers: [
        {
        text: 'Answer 1', isCorrect: false,
        },
        {
        text: 'Answer 2', isCorrect: true,
        },
        {
        text: 'Answer 3', isCorrect: false,
        },
        {
        text: 'Answer 4', isCorrect: false,
        },
      ]
    },
    {
      question: 'Question three',
      answers: [
        {
        text: 'Answer 1', isCorrect: false,
        },
        {
        text: 'Answer 2', isCorrect: false,
        },
        {
        text: 'Answer 3', isCorrect: true,
        },
        {
        text: 'Answer 4', isCorrect: false,
        },
      ]
    },
    {
      question: 'Question four',
      answers: [
        {
        text: 'Answer 1', isCorrect: false,
        },
        {
        text: 'Answer 2', isCorrect: false,
        },
        {
        text: 'Answer 3', isCorrect: false,
        },
        {
        text: 'Answer 4', isCorrect: true,
        },
      ]
    },
  ]
  startBtn.addEventListener('click', () => {
    startBtnClick();
  })
  