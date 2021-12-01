// Functions
(function(){
    function startQuiz(){   
    var output = [];
  
    quizQuestions.forEach(
      (currentQuestion, questionNumber) => {
  
        var answers = [];
  
        for(letter in currentQuestion.answers){
            answers.push(
                `<label>
                    <input type="radio" name="question${questionNumber}" value="${letter}">
                    ${letter} :
                    ${currentQuestion.answers[letter]}
                </label>`
          );
        }
  
        output.push(
          `<div class="slide">
          <div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div>
          </div>`
        );
      }
    );

    quizContainer.innerHTML = output.join('');
  }

function showResults(){
  var answerContainers = quizContainer.querySelectorAll('.answers');

  var numCorrect = 0;

  quizQuestions.forEach( (currentQuestion, questionNumber) => {

    var answerContainer = answerContainers[questionNumber];
    var selector = `input[name=question${questionNumber}]:checked`;
    var userAnswer = (answerContainer.querySelector(selector) || {}).value;

    if(userAnswer === currentQuestion.correctAnswer){
      numCorrect++;
      answerContainers[questionNumber].style.color = 'lightgreen';
    }
    else{
      answerContainers[questionNumber].style.color = 'red';
    }
  });

  resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
}

function showSlide(n) {
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;
    if(currentSlide === 0){
      previousButton.style.display = 'none';
    }
    else{
      previousButton.style.display = 'inline-block';
    }
    if(currentSlide === slides.length-1){
      nextButton.style.display = 'none';
      submitButton.style.display = 'inline-block';
    }
    else{
      nextButton.style.display = 'inline-block';
      submitButton.style.display = 'none';
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

// Variables
var quizContainer = document.getElementById("quiz");
var resultsContainer = document.getElementById("results");
var submitButton = document.getElementById("submit");
var quizQuestions = [
    //    first questions
        {
            question: "Who invented JavaSctript?",
            answers: {
            a: "Douglas Crokford",
            b: "Sheryl Sandberg",
            c: "Brendan Eich",
            d: "Robert Deckard",
        },
        correctAnswer: "c"
    },

    {
        question: "How do you write 'Hello World' in an alert box?",
        answers: {
        a: "msg('Hello World');",
        b: "alertBox('Hello World);",
        c: "alert('Hello World')",
        d: "msgBox('Hellow World');",
    },
    correctAnswer: "c"
},

{
    question: "Which operator is used to assign a value to a variable?",
    answers: {
    a: "=",
    b: "X",
    c: "-",
    d: "*",
},
correctAnswer: "a"
},

    // fourth question
    {
            question: "Which event occurs when the user clicks on an HTML element?",
            answers: {
                a: "onchange",
                b: "onclick",
                c: "onmouseclick",
                d: "onmouseover",
        },
            correctAnswer: "b"
    },
    // fith question
    {
            question: "What is the correct way to write a JavaScript array?",
            answers: {
                a: "var colors = 1 =('red'), 2 = ('green'), 3 = ('blue')",
                b: "var colors = 'red','green','blue'",
                c: "var colors = (1:'red',2:'green',3:'blue')",
                d: "var colors = ['red', 'green', 'blue']",
        },
            correctAnswer: "d"
    }
 ];

// Kick things off
startQuiz();

const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

showSlide(currentSlide);

// Event Listenrs
submitButton.addEventListener('click', showResults)
previousButton.addEventListener("click", showPreviousSlide);
nextButton.addEventListener("click", showNextSlide);
})();
