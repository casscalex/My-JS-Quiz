var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit')

function startQuiz(){
    
}

function showResults() {

}

// start quiz 1st
startQuiz();

// on submit, show results
submitButton.addEventListener('click', showResults)

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
// second question
{
    question: "Inside which HTML element do we put the JavaScript?",
    answers: {
        a: "<script>",
        b: "<scripting>",
        c: "<javascript>",
        d: "<js>",
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
        d: "msgBox('Hellow World');",
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
        c: "var colors = (1:'red',2:'green',3:'blue'",
        d: "var colors = ['red', 'green', 'blue'",
    },
    correctAnswer: "d"
}
];