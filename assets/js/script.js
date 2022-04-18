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
    startQuiz();
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

  //Next question function
  const nextBtnClicked = () => {
    if(document.querySelector('.clicked') != null) { 
      start = false; 
      id++;
      document.querySelector('.clicked').classList.remove('clicked');
      if(selected == true) { 
        score++; 
        scoreDisplay.innerHTML = score; 
        alert("That's the correct answer, congrats!");
      }
      else {
        alert("Unfortunately that's incorrect.");
      }
      if (id < 10) { 
        iterate(id);
      }else {
        endQuiz();
      }
    }
  };
  const startQuiz = () => {
    if(inputValue != undefined) { 
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
      alert('Username is required'); 
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
    questionAnswers.classList.toggle('toggle'); 
    nextQuestion.classList.toggle('toggle'); 
    resetBtn.classList.toggle('toggle'); 
    endScreen.classList.toggle('toggle'); 
    usernameScore.classList.toggle('toggle');
    endUsername.innerHTML = username; 
    endScore.innerHTML = score;
  };
      
