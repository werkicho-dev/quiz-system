const newLocal = "";
const questions = [
    {
        question: "HTML stands for which one of the follwing?",
        answers: [
            { text: "A, hyper text markup la", correct: false},          
            { text: "B, hyper text markup lang", correct: false},
            { text: "C, hyper text markup language", correct: true},
            { text: "D, None", correct: false},
            
            
        ]
    },
    {
        question: "CSS used for?",
        answers: [
            { text: "structure", correct: false},          
            { text: "functionality", correct: false},
            { text: "style", correct: true},
            { text: "all", correct: false},
            
            
        ]
    },
    {
        question: "Used to write comment in HTML?",
        answers: [
            { text: ">>", correct: false},          
            { text: "<<", correct: false},
            { text: "!!", correct: true},
            { text: "--", correct: false},
            
            
        ]
    },
    {
        question: "To write comment in HTML?",
        answers: [
            { text: ">>", correct: false},          
            { text: "<<", correct: false},
            { text: "!!", correct: true},
            { text: "--", correct: false},
            
            
        ]
    },
    {
        question: "To write comment in HTML?",
        answers: [
            { text: ">>", correct: false},          
            { text: "<<", correct: false},
            { text: "!!", correct: true},
            { text: "--", correct: false},
            
            
        ]
    },
    {
        question: "To write comment in HTML?",
        answers: [
            { text: ">>", correct: false},          
            { text: "<<", correct: false},
            { text: "!!", correct: true},
            { text: "--", correct: false},
            
            
        ]
    },
    {
        question: "To write comment in HTML?",
        answers: [
            { text: ">>", correct: false},          
            { text: "<<", correct: false},
            { text: "!!", correct: true},
            { text: "--", correct: false},
            
            
        ]
    },
    {
        question: "To write comment in HTML?",
        answers: [
            { text: ">>", correct: false},          
            { text: "<<", correct: false},
            { text: "!!", correct: true},
            { text: "--", correct: false},
            
            
        ]
    },
    {
        question: "To write comment in HTML?",
        answers: [
            { text: ">>", correct: false},          
            { text: "<<", correct: false},
            { text: "!!", correct: true},
            { text: "--", correct: false},
            
            
        ]
    },
    {
        question: "To write comment in HTML?",
        answers: [
            { text: ">>", correct: false},          
            { text: "<<", correct: false},
            { text: "!!", correct: true},
            { text: "--", correct: false},
            
            
        ]
    },
    {
        question: "To write comment in HTML?",
        answers: [
            { text: ">>", correct: false},          
            { text: "<<", correct: false},
            { text: "!!", correct: true},
            { text: "--", correct: false},
            
            
        ]
    },
    {
        question: "To write comment in HTML?",
        answers: [
            { text: ">>", correct: false},          
            { text: "<<", correct: false},
            { text: "!!", correct: true},
            { text: "--", correct: false},
            
            
        ]
    },
    {
        question: "To write comment in HTML?",
        answers: [
            { text: ">>", correct: false},          
            { text: "<<", correct: false},
            { text: "!!", correct: true},
            { text: "--", correct: false},
            
            
        ]
    },
    {
        question: "To write comment in HTML?",
        answers: [
            { text: ">>", correct: false},          
            { text: "<<", correct: false},
            { text: "!!", correct: true},
            { text: "--", correct: false},
            
            
        ]
    },
    {
        question: "To write comment in HTML?",
        answers: [
            { text: ">>", correct: false},          
            { text: "<<", correct: false},
            { text: "!!", correct: true},
            { text: "--", correct: false},
            
            
        ]
    },
    
];
const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 30;
let timer;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState(); 
    startTimer();
    let currentQuestion = questions[currentQuestionIndex];
    let QuestionNO = currentQuestionIndex + 1;
    questionElement.innerHTML = QuestionNO + ". " + currentQuestion.question;   
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}
function resetState(){
    nextButton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    })
    nextButton.style.display = "block";
}
function showScore(){
    resetState();
    questionElement.innerHTML = `you scored ${score} out of ${questions.length}`;
    nextButton.innerHTML = "play again";
    nextButton.style.display = "block";
} 

function handleNextbutton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}
nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextbutton();
    }else{
        startQuiz();
    }

})
function startTimer(){
    timeLeft = 30;
    timer = setInterval(() => {
        document.getElementById("timer").innerHTML = timeLeft;
        timeLeft--
        if(timeLeft < 0){
            clearInterval(timer);
            handleNextbutton();
        }
    }, 1000);
}
startQuiz();