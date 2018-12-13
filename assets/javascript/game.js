var questionTimoeout = 10;
var clockRunning=false
var count=questionTimoeout
var questionExpired=false
var currentQuestion=""

var question0 = 
{
    question: "question0",
    possibleAnswers: ["answerA", "answerB", "answerC", "answerD"],
    correctAnswer: [],
}
var question1 = 
{
    question: "question1",
    possibleAnswers: ["answerA", "answerB", "answerC", "answerD"],
    correctAnswer: [],
}
var question2 = 
{
    question: "question2",
    possibleAnswers: ["answerA", "answerB", "answerC", "answerD"],
    correctAnswer: [],
}
var question3 = 
{
    question: "question3",
    possibleAnswers: ["answerA", "answerB", "answerC", "answerD"],
    correctAnswer: [],
}
var question4 = 
{
    question: "question4",
    possibleAnswers: ["answerA", "answerB", "answerC", "answerD"],
    correctAnswer: [],
}
var question5 = 
{
    question: "question5",
    possibleAnswers: ["answerA", "answerB", "answerC", "answerD"],
    correctAnswer: [],
}
var question6 = 
{
    question: "question6",
    possibleAnswers: ["answerA", "answerB", "answerC", "answerD"],
    correctAnswer: [],
}
var question7 = 
{
    question: "question7",
    possibleAnswers: ["answerA", "answerB", "answerC", "answerD"],
    correctAnswer: [],
}
var question8 = 
{
    question: "question8",
    possibleAnswers: ["answerA", "answerB", "answerC", "answerD"],
    correctAnswer: [],
}
var question9 = 
{
    question: "question9",
    possibleAnswers: ["answerA", "answerB", "answerC", "answerD"],
    correctAnswer: [],
}
var questionList=[question0 ,question1, question2, question3, question4, question5, question6, question7, question8, question9];

var questionObject = {
    "question1": question1,
    "question1": question2,
    "question1": question3,
    "question1": question4,
    "question1": question5,
    "question1": question6,
    "question1": question7,
    "question1": question8,
    "question1": question9,
    "question1": question0,
    }
function pickQuestion()
{
    //random number 0-9
    var randomInt=Math.round(Math.random() *10)
    console.log(randomInt)
    currentQuestion=questionList[randomInt]
    //console.log(questionList)
    console.log(currentQuestion.question)
}

function drawQuestion()
{
    $("#question").text(currentQuestion.question)
    $("#possibleAnswer1").text(currentQuestion.possibleAnswers[0])
    $("#possibleAnswer1").text(currentQuestion.possibleAnswers[1])
    $("#possibleAnswer1").text(currentQuestion.possibleAnswers[2])
    $("#possibleAnswer1").text(currentQuestion.possibleAnswers[3])
}

window.onload = function() {

$("#startButton").on("click", function(){
    console.log("start");
    clockRunning=true;
    console.log(clockRunning)
    setInterval(function(){
        count--;
        $("#timer").text(count)
    }, 1000);
    $("#timer").text(count);
    //choose question at random
    pickQuestion();
    drawQuestion();
    $("#timer").text(count);
    //display currentQuestion
    //console.log(currentQuestion)
    //start 60 second timeout
    setTimeout(function ()
        {
            //questionExpired
            questionExpired=true; 
            alert("expired")
            pickQuestion();
        }, questionTimoeout*1000);
    //start displaying countdown
})
console.log(clockRunning)


//setInterval(function(){timer.time--}, 1000)
}

