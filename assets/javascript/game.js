var questionTimoeout = 10;
var clockRunning=false
var count=questionTimoeout
var expired=false
var currentQuestion=""
var alreadySeen=[]


var question0 = 
{
    question: "question0",
    possibleAnswers: ["answerA", "answerB", "answerC", "answerD"],
    correctAnswer: 1,
}
var question1 = 
{
    question: "question1",
    possibleAnswers: ["answerA", "answerB", "answerC", "answerD"],
    correctAnswer: 2,
}
var question2 = 
{
    question: "question2",
    possibleAnswers: ["answerA", "answerB", "answerC", "answerD"],
    correctAnswer: 3,
}
var question3 = 
{
    question: "question3",
    possibleAnswers: ["answerA", "answerB", "answerC", "answerD"],
    correctAnswer: 0,
}
var question4 = 
{
    question: "question4",
    possibleAnswers: ["answerA", "answerB", "answerC", "answerD"],
    correctAnswer: 3,
}
var question5 = 
{
    question: "question5",
    possibleAnswers: ["answerA", "answerB", "answerC", "answerD"],
    correctAnswer: 2,
}
var question6 = 
{
    question: "question6",
    possibleAnswers: ["answerA", "answerB", "answerC", "answerD"],
    correctAnswer: 1,
}
var question7 = 
{
    question: "question7",
    possibleAnswers: ["answerA", "answerB", "answerC", "answerD"],
    correctAnswer: 0
}
var question8 = 
{
    question: "question8",
    possibleAnswers: ["answerA", "answerB", "answerC", "answerD"],
    correctAnswer: 3,
}
var question9 = 
{
    question: "question9",
    possibleAnswers: ["answerA", "answerB", "answerC", "answerD"],
    correctAnswer: 2,
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

function drawQuestion()
    {
        $("#question").text(currentQuestion.question)
        $("#possibleAnswer0.possibleAnswers").text(currentQuestion.possibleAnswers[0])
        $("#possibleAnswer1.possibleAnswers").text(currentQuestion.possibleAnswers[1])
        $("#possibleAnswer2.possibleAnswers").text(currentQuestion.possibleAnswers[2])
        $("#possibleAnswer3.possibleAnswers").text(currentQuestion.possibleAnswers[3])
    }

function pickQuestion()
{
    //random number 0-9
    var randomInt=Math.floor(Math.random() *10)
    console.log(randomInt)
    currentQuestion=questionList[randomInt]
    console.log(currentQuestion.question)
    expired=false
    alreadySeen.push(currentQuestion)
        for(i=0;i>alreadySeen.length;i++){
            if(currentQuestion==alreadySeen[i]){
                pickQuestion();
            }
        }
    setTimeout(function ()
        {
            questionExpired()
            //questionExpired=true; 
            //alert("expired")
            //pickQuestion();
        }, questionTimoeout*1000);
}



function questionExpired()
{
    //alert("too slow")
    expired=true;
    count=questionTimoeout;
    pickQuestion();
    drawQuestion();
}

window.onload = function() {

$("#startButton").on("click", function(){
    console.log("start");
    count=questionTimoeout;
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
    /*setTimeout(function ()
        {
            questionExpired()
            //questionExpired=true; 
            //alert("expired")
            //pickQuestion();
        }, questionTimoeout*1000);
    //start displaying countdown*/
})
//console.log(clockRunning)

$("#possibleAnswer0.possibleAnswers").on("click", function(){
    console.log("possibleAnswer0")
    if(currentQuestion.correctAnswer===0)
    {
        alert("correct!")
        pickQuestion()
    }
    else
    {
        alert("wrong!")
    }
});

$("#possibleAnswer1.possibleAnswers").on("click", function(){
    console.log("possibleAnswer1")
    if(currentQuestion.correctAnswer===1)
    {
        alert("correct!")
        pickQuestion()
    }
    else
    {
        alert("wrong!")
    }
});

$("#possibleAnswer2.possibleAnswers").on("click", function(){
    console.log("possibleAnswer2")
    if(currentQuestion.correctAnswer===2)
    {
        alert("correct!")
        pickQuestion()
    }
    else
    {
        alert("wrong!")
    }
});

$("#possibleAnswer3.possibleAnswers").on("click", function(){
    console.log("possibleAnswer3")
    if(currentQuestion.correctAnswer===3)
    {
        alert("correct!")
        pickQuestion()
    }
    else
    {
        alert("wrong!")
    }
});
//setInterval(function(){timer.time--}, 1000)
}

