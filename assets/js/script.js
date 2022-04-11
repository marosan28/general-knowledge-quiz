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
  usernameInput.addEventListener('keyup', () => {
    inputValue = usernameInput.value;
  })  
  nextUsername.addEventListener('click', () => {
    startQuiz();
  })
  if (start) {
    iterate(0);
  }
  nextQuestion.addEventListener("click", () => {
    nextBtnClicked();
  })
  resetBtn.addEventListener('click', () => {
    window.location.reload();
  })

// Functions
const startBtnClick = () => {
    startBtn.classList.toggle('toggle');
    startText.classList.toggle('toggle');
    nextUsername.classList.toggle('toggle');
    usernameInput.classList.toggle('toggle');
  }

  const usernameInp = () => {
  }
  const nextBtnClicked = () => {
    if(document.querySelector('.clicked') != null) { 
      start = false; 
      id++;
      document.querySelector('.clicked').classList.remove('clicked');
      if(selected == true) { 
        score++; 
        scoreDisplay.innerHTML = score; 
        alert("That's the correct answer, congrats!")
      }
      else {
        alert("Unfortunately that's incorrect.");
      }
      if (id < 4) { 
        iterate(id);
      }else {
        endQuiz();
      }
    }
  }
  const startQuiz = () => {
    if(inputValue != undefined) { 
      nextUsername.classList.toggle('toggle')
      nextQuestion.classList.toggle('toggle'); 
      saveUsername(); 
      usernameInput.classList.toggle('toggle');
      usernameScore.classList.toggle('toggle'); 
      usernameDisplay.innerHTML = username; 
      scoreDisplay.innerHTML = score; 
      questionAnswers.classList.toggle('toggle'); 
    } 
    else{
      alert('Username is required'); 
    }
  }