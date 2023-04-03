// Button declarations
const startBtn = document.getElementById('startBtn');
const nextUsername = document.getElementById('nextUsername');
const nextQuestion = document.getElementById('nextQuestion');
const resetBtn = document.getElementById('resetBtn');
const quitBtn = document.getElementById('quitBtn');
var btns = document.querySelectorAll('.btn');

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
const questionContainer = document.querySelector(".question-container");
const image = document.querySelector("img");
// Misc
let username;
let score = 0;
let start = true;
let id = 0;
let inputValue;
const progressBar = document.querySelector('.progress-bar');
const progress = document.querySelector('.progress');
const progressRow = document.querySelector('.progress-row');
const maxQuestions = 10;
let questionNumber = 1;


for (var i = 0; i < btns.length; i++) {
  btns[i].classList.remove('clicked');
}


// Questions object
const questions = [
    {
      question: 'Where in your body is your patella?',
      answers: [
        {
        text: 'Knee', isCorrect: true,
        },
        {
        text: 'Shoulders', isCorrect: false,
        },
        {
        text: 'Neck', isCorrect: false,
        },
        {
        text: 'Arms', isCorrect: false,
        },
      ]
    },
    {
      question: 'If you had pogonophobia what would you be afraid of?',
      answers: [
        {
        text: 'Dolly Parton', isCorrect: false,
        },
        {
        text: 'Beards', isCorrect: true,
        },
        {
        text: 'Spoons', isCorrect: false,
        },
        {
        text: 'Height', isCorrect: false,
        },
      ]
    },
    {
      question: 'What is a Winston Churchill?',
      answers: [
        {
        text: 'Cigar', isCorrect: true,
        },
        {
        text: 'Ant', isCorrect: false,
        },
        {
        text: 'Flower', isCorrect: false,
        },
        {
        text: 'Shoe', isCorrect: false,
        },
      ]
    },
    {
      question: 'La Giaconda is better known as what?',
      answers: [
        {
        text: 'The Last Supper', isCorrect: false,
        },
        {
        text: 'Marie Antoinette', isCorrect: false,
        },
        {
        text: 'Mona Lisa', isCorrect: true,
        },
        {
        text: 'Shakira', isCorrect: false,
        },
      ]
    },
    {
        question: 'Who composed the ballets Sleeping Beauty and The Nutcracker?',
        answers: [
          {
          text: 'Tchaikovsky', isCorrect: true,
          },
          {
          text: 'Schubert', isCorrect: false,
          },
          {
          text: 'Chopin', isCorrect: false,
          },
          {
          text: 'Brahms', isCorrect: false,
          },
        ]
      },
      {
        question: 'Which German word means lightning war used in WW2?',
        answers: [
          {
          text: 'Tiere', isCorrect: false,
          },
          {
          text: 'Kartofeln', isCorrect: false,
          },
          {
          text: 'Sehenswürdigkeiten', isCorrect: false,
          },
          {
          text: 'Blitzkrieg', isCorrect: true,
          },
        ]
      },
      {
        question: 'Where in France do claret wines come from?',
        answers: [
          {
          text: 'Paris', isCorrect: false,
          },
          {
          text: 'Bordeaux', isCorrect: true,
          },
          {
          text: 'Marseille', isCorrect: false,
          },
          {
          text: 'Toulouse', isCorrect: false,
          },
        ]
      },
      {
        question: 'What is the capital of Sicily?',
        answers: [
          {
          text: 'Syracuse', isCorrect: false,
          },
          {
          text: 'Catania', isCorrect: false,
          },
          {
          text: 'Palermo', isCorrect: true,
          },
          {
          text: 'Messina', isCorrect: false,
          },
        ]
      },
      {
        question: 'What links Brazil, Uruguay, Mozambique and Angola ?',
        answers: [
          {
          text: 'Colonies of Portugal', isCorrect: true,
          },
          {
          text: 'A River', isCorrect: false,
          },
          {
          text: 'Language', isCorrect: false,
          },
          {
          text: 'Flag color', isCorrect: false,
          },
        ]
      },
      {
        question: 'If you suffer from epistaxis what is wrong?',
        answers: [
          {
          text: 'Broken rib', isCorrect: false,
          },
          {
          text: 'A nosebleed', isCorrect: true,
          },
          {
          text: 'Iron deficiency', isCorrect: false,
          },
          {
          text: 'Concussion', isCorrect: false,
          },
        ]
      },
    ];

  startBtn.addEventListener('click', () => {
    startBtnClick();
  });
  usernameInput.addEventListener('keyup', () => {
    inputValue = usernameInput.value;
  });
  nextUsername.addEventListener('click', () => {
    inputValue = usernameInput.value;
    if (inputValue !== '') {
    // hide the image
      image.classList.add('toggle');
    
    // show the question container
      questionContainer.classList.remove('toggle');
      progress.classList.remove('toggle');
      progressRow.classList.remove('toggle');
      quitBtn.classList.remove('toggle');
    // call the startQuiz function
      startQuiz();
    }
    else {
      $('#myModal').modal('show'); 
      }
});

  if (start) {
    iterate(0);
  }
  nextQuestion.addEventListener("click", () => {
    nextBtnClicked();
  });
  resetBtn.addEventListener('click', () => {
    window.location.reload();
  });
  quitBtn.addEventListener('click', () => {
    window.location.reload();

  });
// Functions

//Button functions
const startBtnClick = () => {
    startBtn.classList.toggle('toggle');
    startText.classList.toggle('toggle');
    nextUsername.classList.toggle('toggle');
    usernameInput.classList.toggle('toggle');
  };


  //Username function
  const usernameInp = () => {
  };

  //Progress Bar
  const updateProgressBar = () => {
    const progress = (questionNumber / maxQuestions) * 100;
    progressBar.style.width = `${progress}%`;
    progressBar.setAttribute('aria-valuenow', progress);
  }

  //Next question function
  const nextBtnClicked = () => {
    if(document.querySelector('.clicked') != null) { 
      start = false; 
      id++;
      document.querySelector('.clicked').classList.remove('clicked');
      if(selected == true) { 
        score++; 
        scoreDisplay.innerHTML = score; 
        updateProgressBar();
      }
      if (id < 10) { 
        iterate(id);
        questionNumber++;
        updateProgressBar();
      } else {
        endQuiz();
      }
    }
  };

  const startQuiz = () => {
    if(inputValue !== undefined) { 
      nextUsername.classList.toggle('toggle');
      nextQuestion.classList.toggle('toggle'); 
      saveUsername(); 
      usernameInput.classList.toggle('toggle');
      usernameScore.classList.toggle('toggle'); 
      usernameDisplay.innerHTML = username; 
      scoreDisplay.innerHTML = score; 
      questionAnswers.classList.toggle('toggle'); 
    } 
    else{
      $('#myModal').modal('show'); 
    }
  };
  
  //Function for saving username 
  const saveUsername = () => {
    username = usernameInput.value;
  };
  const selection = (ans) => {
    selected = ans.value;
    if(document.querySelector('.clicked') == null){
      ans.classList.add('clicked');   
    }
    else if(document.querySelector('.clicked') != null){
      document.querySelector('.clicked').classList.remove('clicked'); 
      ans.classList.add('clicked');   
    }
  };
  function iterate(id) {

    const question = document.getElementById("question");
  
    question.innerHTML = questions[id].question;
  
    const ans1 = document.getElementById('answer1');
    const ans2 = document.getElementById('answer2');
    const ans3 = document.getElementById('answer3');
    const ans4 = document.getElementById('answer4');
  
   
    ans1.innerHTML = questions[id].answers[0].text;
    ans2.innerHTML = questions[id].answers[1].text;
    ans3.innerHTML = questions[id].answers[2].text;
    ans4.innerHTML = questions[id].answers[3].text;
   

    ans1.value = questions[id].answers[0].isCorrect;
    ans2.value = questions[id].answers[1].isCorrect;
    ans3.value = questions[id].answers[2].isCorrect;
    ans4.value = questions[id].answers[3].isCorrect;
  
   
    ans1.addEventListener("click", () => {
        selection(ans1);
    });

    ans2.addEventListener("click", () => {
      selection(ans2);
    });
  
    ans3.addEventListener("click", () => {
      selection(ans3);
    });
    ans4.addEventListener("click", () => {
      selection(ans4);
    });
  }

  // Ending Quiz function 


  const endQuiz = () => {
    if (score <= 4) {
      endMessage.innerHTML = "You can do better bestie";
    } else if (score <= 7) {
      endMessage.innerHTML = "Almost slayed";
    } else {
      endMessage.innerHTML = "Slayed";
    }
    
    questionAnswers.classList.toggle('toggle'); 
    nextQuestion.classList.toggle('toggle'); 
    resetBtn.classList.toggle('toggle'); 
    endScreen.classList.toggle('toggle'); 
    usernameScore.classList.toggle('toggle');
    endUsername.innerHTML = username; 
    endScore.innerHTML = score;
  };
  
  
      
