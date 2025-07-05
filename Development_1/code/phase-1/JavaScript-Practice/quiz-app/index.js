/**Complete the design of a Quiz App.
✅ Develop the Quiz App with the following features:
✅ Show Random Questions for the Quiz.
✅ Start a timer for the X(say 15) seconds for user to answer a question.
✅ After 15 seconds a Next button should appear to navigate to the next question.
✅ If user is not selecting an answer within the 15 seconds, the right answer should be selected by default.
✅ When user selects a wrong answer, the right answer should be shown.
✅ A result should be shown at the end of all the questions.
✅ The result should also store the highest scorer and show that.
✅ There shold be a way to restart the game at the end.
✅ Non Functional Requirements:
✅ Good Look and Feel.
✅ Optimal usages of the timer.
✅ Clean code.
 * 
 */
const quizzData=[
    {
        question:"What does DOM stand for?",
        options:[
            "Document Order Model",
          "Document Object Model",
          "Data Object Method",
          "Direct Object Management"
        ],
        correct:1
    },
    {
        question:"Which method selects by ID?",
        options:[
             "getElementById()",
        "querySelectorAll()",
        "getElement()",
        "getElementsByClassName()"
        ],
        correct: 0
    },
    {
        question:"Which event fires on input change?",
        options: ["click", "submit", "change", "keydown"],
        correct: 2
    }
];


const timerDiv = document.getElementById("timer");
const divQuestions=document.getElementById("questions");
const optionElem=document.getElementById("options");
const buttonElem=document.getElementById(button);
 // now we start with displaying the questions but we want to make
 // the questions appear randomly
 // first make a copy of the array to avoid mutating the original copy using rest parameter

 let questions=[...quizzData].sort(function(){
    Math.random()-0.5
 });
 let currentQuestion =0;
 questions.forEach(obj)=>{
   const questionKey=obj[0];
    const li=document.createElement("li"):
    li.textContent=questionKey;
    
 }
 
 