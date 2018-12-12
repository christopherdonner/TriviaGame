var questionTimoeout = 60;
var timer = 
{
    time: 60,
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
        timer.time--;
    },
    display: function()
    {
        $("#timer").text(timer.time)
    }
}

var currentQuestion
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
    var randomInt=Math.round(Math.random() *10)
    console.log(randomInt)
    currentQuestion=questionList[randomInt]
}

function drawQuestion(){

}
function questionExpires()
{

}



window.onload = function() {

$("#startButton").on("click", function(){
    console.log("start")
    //timer.start
    //timer.start()
    setInterval(function(){timer.time--}, 1000)
    $("#timer").text(timer.time)
    //setInterval(timer.count, 1000)
    //choose question at random
    pickQuestion()
    //display currentQuestion
    drawQuestion()
    //start 60 second timeout
    setTimeout(questionExpires, 60000)
    //start displaying countdown
})

while (timer.clockRunning){
    timer.display
    timer.count
}
setInterval(function(){timer.time--}, 1000)

}
