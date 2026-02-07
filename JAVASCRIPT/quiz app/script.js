const questions =[
    {
        question: "Which is the largest animal in the world?",
        answers: [
                {text: "Shark", correct: false},
                {text: "Blue Whale", correct: true},
                {text: "Elephant", correct: false},
                {text: "Giraffe", correct: false}     
        ]
    },
    {
        question: "which is the smallest country in the world?",
        answers: [
                {text: "Vatican city", correct: true},
                {text: "Bhutan", correct: false},
                {text: "Nepa;", correct: false},
                {text: "Shri Lanka", correct: false}     
        ]
    },
    {
        question: "Which is the largest desert in the world?",
        answers: [
                {text: "Kalahari", correct: false},
                {text: "Gobi", correct: false},
                {text: "Sahara", correct: false},
                {text: "Antartica", correct: true}     
        ]
    },
    {
        question: "Which is the smallest continent in the world?",
        answers: [
                {text: "Asia", correct: false},
                {text: "Australia", correct: true},
                {text: "Artic", correct: false},
                {text: "Africa", correct: false}     
        ]
    },
    {
        question: "Which is the largest mountain in the world?",
        answers: [
                {text: "Cameroon", correct: false},
                {text: "Kilimanjaro", correct: false},
                {text: "Elbrus", correct: false},
                {text: "Everest", correct: true}     
        ]
    }
]

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");


let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){

    

    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    resetState();

    currentQuestion.answers.forEach(answer => {
        const buttoning = document.createElement("button");
        buttoning.innerHTML = answer.text;
        buttoning.classList.add("btn");
        answerButtons.appendChild(buttoning);
    });

    
}



function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }

}


startQuiz();










