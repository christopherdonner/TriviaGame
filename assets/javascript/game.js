var questionTimoeout = 60;
var timer = 
{
    time: 0,
    intervalID: 0,
    clockRunning: false,
    start: function()
    {
        if(!clockRunning)
        {
            intervalID=setInterval(timer.count, 1000);
            clockRunning=true;
        }
    },
    stop: function()
    {
        clearInterval(intervalID);
        clockRunning=false;
    },
    count: function()
    {
        timer.time++;
    }
}

var questionList=[question0 ,question1, question2, question3, question4, question5, question6, question7, question8, question9];
var question0 = 
{
    question: "",
    possibleAnswers: [],
    correctAnswer: [],
    questionTimer: 60
}
var question1 = 
{
    question: "",
    possibleAnswers: [],
    correctAnswer: [],
    questionTimer: 60
}
var question2 = 
{
    question: "",
    possibleAnswers: [],
    correctAnswer: [],
    questionTimer: 60
}
var question3 = 
{
    question: "",
    possibleAnswers: [],
    correctAnswer: [],
    questionTimer: 60
}
var question4 = 
{
    question: "",
    possibleAnswers: [],
    correctAnswer: [],
    questionTimer: 60
}
var question5 = 
{
    question: "",
    possibleAnswers: [],
    correctAnswer: [],
    questionTimer: 60
}
var question6 = 
{
    question: "",
    possibleAnswers: [],
    correctAnswer: [],
    questionTimer: 60
}
var question7 = 
{
    question: "",
    possibleAnswers: [],
    correctAnswer: [],
    questionTimer: 60
}
var question8 = 
{
    question: "",
    possibleAnswers: [],
    correctAnswer: [],
    questionTimer: 60
}
var question9 = 
{
    question: "",
    possibleAnswers: [],
    correctAnswer: [],
    questionTimer: 60
}

function pickQuestion()
{
    //random number 0-9
}

function questionExpires()
{

}

function countDown()
{
    var timerInterval
}

window.onload = function() {

$("#startButton").on("click", function(){
    console.log("start")
    //choose question at random
    //display currentQuestion
    //start 60 second timeout
    //start displaying countdown
})

setInterval(timer.count, 1000)
timer.count--;
$("#timer").text("60")
}
