const quizData = [
  {
    question: "What is the capital of Kenya?",
    options: ["Nairobi", "Kampala", "Dodoma", "Addis Ababa"],
    correct: "Nairobi"
  },
  {
    question: "Which language runs in a web browser?",
    options: ["Java", "C", "Python", "JavaScript"],
    correct: "JavaScript"
  },
  {
    question: "What does HTML stand for?",
    options: [
      "Hypertext Markup Language",
      "Hyper Transfer Markup Language",
      "Hyper Tool Multi Language",
      "HighText Machine Language"
    ],
    correct: "Hypertext Markup Language"
  },
  {
    question: "Who is the founder of Microsoft?",
    options: ["Steve Jobs", "Mark Zuckerberg", "Bill Gates", "Elon Musk"],
    correct: "Bill Gates"
  },
  {
    question: "What year was JavaScript created?",
    options: ["1995", "2005", "1989", "2015"],
    correct: "1995"
  }
];

const pElem=document.getElementById("question");
const answers=document.getElementById("answers");
const timer=document.getElementById("timer");
const results=document.getElementById("result-box");
const scores=document.getElementById("final-score");
const highest=document.getElementById("high-score");
const resultBtn=document.getElementById("restart-btn");
const timeDisplay=document.getElementById("time");
const submitBtn=document.getElementById("btnSend");
let highScore = localStorage.getItem("highScore") || 0;


let currentQuestion =0;
let currentTimer=15;
let currentScore=0;
let timeInterval;

const newQuizzData=[...quizData].sort(()=>Math.random()-0.5);
let correctOption;

// this forms a new array with questions randomly selected
function displayQuestions(){
    const questionObj=newQuizzData[currentQuestion];
    correctOption=questionObj.correct;
    pElem.textContent=questionObj.question;

    answers.innerHTML="";
    questionObj.options.forEach(option=>{
        const li=document.createElement("li");
        li.style.cursor="pointer";
        li.textContent=option;
        li.addEventListener("click",()=>selectAnswer(li, correctOption));
        answers.appendChild(li);
    });
    timerCountDown();


    
}
displayQuestions();



function selectAnswer(li, correctOption){
    clearInterval(timeInterval); // it stops count down immediately an answer has been chosen
    if(li.textContent===correctOption){
        li.style.color="green";
    }else{
        li.style.color="red";
    }
    const allOptions=answers.querySelectorAll("li");
    allOptions.forEach(option=>{
        if(option.textContent===correctOption){
            option.style.color="green";
            currentScore++;// upon choosing a correct answer, the current school should increase
        }
        option.style.pointerEvents="none";
    });
    submitBtn.style.display="flex"; // after selecting the option, the submit button should be displapyed

}

submitBtn.addEventListener("click", function(){
    currentQuestion++;// when next quiz button is clicked, it should go to next question
    if(currentQuestion<newQuizzData.length){
        displayQuestions(); // the function that displays questions is called
        submitBtn.style.display="none";// once the question is displayed, the next quiz button is hidden again


    }else{
        showResults();
    }
})

function timerCountDown(){
    currentTimer=15; // this resets the timer
    timeDisplay.textContent=currentTimer;

    timeInterval=setInterval(function(){
        currentTimer--; // the time should reduce repeatedly
        timeDisplay.textContent=currentTimer;

        if(currentTimer===0){
        clearInterval(timeInterval); // clearInterval stops the repetition

        autoSelectCorrect() // once the time has reached 0, the correct answer should be automatically highlighted.

    }
    
    }, 1000);
    // but upto where?
    

}
function autoSelectCorrect(){
    const allOptions=answers.querySelectorAll("li");
    allOptions.forEach(option=>{
        if(option.textContent===correctOption){
            option.style.color="green";
        }
        option.style.pointerEvents="none";
    });
    
}

function showResults(){
    if(currentScore>highScore){
        highScore=currentScore;
        // this just means that if the current score is higher than the highest score the current score now becomes the new highest score
        localStorage.setItem("highScore", highScore);
    }
    scores.textContent=`current score: ${currentScore}`;
    highest.textContent=`Highest score: ${highScore}`;

    results.style.display="block";
    

}

/**After the results are shown, the user should be able to retake
 * the quizz again. So we use add an event handler that resets everything back to the default state.
 */
resultBtn.addEventListener("click", function(){
    currentQuestion=0;
    currentScore=0;
    timeDisplay.style.display="none";
    results.style.display="none";
    submitBtn.style.display="none";
    displayQuestions()
})