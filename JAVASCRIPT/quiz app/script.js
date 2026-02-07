



const questions =[
    {
        question: "Which is the largest animal in the world?",
        answers: [
                {text: "Shark", correct: false},
                {text: "Blue Whale", correct: true},
                {text: "Elephant", correct: false},
                {text: "Giraffe", correct: false},     
        ]
    },
    {
        question: "which is the smallest country in the world?",
        answers: [
                {text: "Vatican city", correct: true},
                {text: "Bhutan", correct: false},
                {text: "Nepa;", correct: false},
                {text: "Shri Lanka", correct: false},    
        ]
    },
    {
        question: "Which is the largest desert in the world?",
        answers: [
                {text: "Kalahari", correct: false},
                {text: "Gobi", correct: false},
                {text: "Sahara", correct: false},
                {text: "Antartica", correct: true},   
        ]
    },
    {
        question: "Which is the smallest continent in the world?",
        answers: [
                {text: "Asia", correct: false},
                {text: "Australia", correct: true},
                {text: "Artic", correct: false},
                {text: "Africa", correct: false},    
        ]
    },
    {
        question: "Which is the largest mountain in the world?",
        answers: [
                {text: "Cameroon", correct: false},
                {text: "Kilimanjaro", correct: false},
                {text: "Elbrus", correct: false},
                {text: "Everest", correct: true},   
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");


let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    //nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){

    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
    });

    
}

startQuiz();

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }

}


console.log("testing linkage");







// Global variable to store the element
    let answerButton; // Declare it here

    // Ensure the DOM is fully loaded before trying to access elements
    document.addEventListener('DOMContentLoaded', (event) => {
        // Initialize answerButton once the DOM is ready
        answerButton = document.getElementById('answer-buttons'); // Or use querySelector
        // Now you can safely call startQuiz or other functions that use answerButton
        startQuiz();
    });

    function showQuestion(){
        let currentQuestion = questions[currentQuestionIndex];
        let questionNo = currentQuestionIndex + 1;
        // Assuming questionElement is also properly initialized,
        // e.g., questionElement = document.getElementById('question-element');
        questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

        currentQuestion.answers.forEach(answer => {
            const button = document.createElement("button");
            button.innerHTML = answer.text;
            button.classList.add("btn");
            if (answerButton) { // Optional: Add a check for robustness
                answerButton.appendChild(button);
            } else {
                console.error("Error: answerButton element not found in the DOM.");
            }
        });
    }

    // startQuiz() should only be called after answerButton is initialized,
    // which is why it's moved inside the DOMContentLoaded listener.
    function startQuiz(){
        // ... quiz logic ...
        showQuestion(); // This will now safely use answerButton
    }

    function resetState(){
        nextButton.style.display = "none";
        // Assuming answerButtons is a NodeList or similar that gets updated,
        // or it should refer to the same 'answerButton' element.
        // If it's intended to be the same element, use 'answerButton' here.
        while(answerButton && answerButton.firstChild){ // Added check for answerButton
            answerButton.removeChild(answerButton.firstChild);
        }
    }

    console.log("testing linkage");









