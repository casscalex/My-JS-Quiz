// Functions
(function(){
    function startQuiz(){   
    const output = [];
  
    quizQuestions.forEach(
      (currentQuestion, questionNumber) => {
  
        const answers = [];
  
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
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div>`
        );
      }
    );

    quizContainer.innerHTML = output.join('');
  }

function showResults(){
  const answerContainers = quizContainer.querySelectorAll('.answers');

  let numCorrect = 0;

  quizQuestions.forEach( (currentQuestion, questionNumber) => {

    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

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

// Variables
var quizContainer = document.getElementById("quiz");
var resultsContainer = document.getElementById("results");
var submitButton = document.getElementById("submit")
var quizQuestions = [
    //    first questions
        {
            question: "Who invented JavaSctript?",
        answers: {
            a: "Douglas Crokford",
            b: "Sheryl Sandberg",
            c: "Brendan Eich",
            d: "Robert Deckard"
        },
        correctAnswer: "c"
    },
    // second question
    {
            question: "Inside which HTML element do we put the JavaScript?",
            answers: {
                a: "<script>",
                b: "<scripting>",
                c: "<javascript>",
                d: "<js>"
        },
            correctAnswer: "a"
    },
    // third question
    {
            question: "How do you write 'Hello World' in an alert box?",
            answers: {
                a: "msg('Hello World');",
                b: "alertBox('Hello World);",
                c: "alert('Hello World')",
                d: "msgBox('Hellow World');"
        },
            correctAnswer: "c"
    },
    // fourth question
    {
            question: "Which event occurs when the user clicks on an HTML element?",
            answers: {
                a: "onchange",
                b: "onclick",
                c: "onmouseclick",
                d: "onmouseover"
        },
            correctAnswer: "b"
    },
    // fith question
    {
            question: "What is the correct way to write a JavaScript array?",
            answers: {
                a: "var colors = 1 =('red'), 2 = ('green'), 3 = ('blue')",
                b: "var colors = 'red','green','blue'",
                c: "var colors = (1:'red',2:'green',3:'blue'",
                d: "var colors = ['red', 'green', 'blue'"
        },
            correctAnswer: "d"
    }
 ];

// Kick things off
startQuiz();

// Event Listenrs
submitButton.addEventListener('click', showResults)
})();
