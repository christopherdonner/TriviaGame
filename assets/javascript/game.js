var questionTimoeout = 10;
var clockRunning=false
var count=questionTimoeout
var expired=false
var currentQuestion=""
var alreadySeen=[]
var correct=0
var incorrect=0
var currentGuess=""
var questionTimeoutCounter

var question0 = 
{
    question: "What is Sailor Moon's real name?",
    possibleAnswers: ["Selena", "Serena", "Missy", "Sarah"],
    correctAnswer: 1,
    alreadyUsed: false
}
var question1 = 
{
    question: "What are Sailor Moon's cats named?",
    possibleAnswers: ["Lilu and Aphrodite", "Lunar and Astro", "Luna and Artemis", "Tony and Monica"],
    correctAnswer: 2,
    alreadyUsed: false
}
var question2 = 
{
    question: "Who calls Sailor Moon Meatball head?",
    possibleAnswers: ["Rocket", "Sailor Mars", "Tuxedo Mask", "Darien Shields"],
    correctAnswer: 3,
    alreadyUsed: false
}
var question3 = 
{
    question: "What is the name of Sailor Moon's little sister",
    possibleAnswers: ["Cibi Moon", "Sunny Moon", "Luna", "Star Moon"],
    correctAnswer: 0,
    alreadyUsed: false
}
var question4 = 
{
    question: "Who is the main bad guy in Sailor Moon",
    possibleAnswers: ["Princess Barrow", "Queen Barrel", "Dutchess Rhodes", "Queen Beryl"],
    correctAnswer: 3,
    alreadyUsed: false
}
var question5 = 
{
    question: "Who is the most spiritual Sailor Scout?",
    possibleAnswers: ["Sailor Moon", "Sailor Venus", "Sailor Mars", "Sailor Jupiter"],
    correctAnswer: 2,
    alreadyUsed: false
}
var question6 = 
{
    question: "Who is the most athletic Sailor Scout?",
    possibleAnswers: ["Sailor Moon", "Sailor Jupiter", "Sailor Neptune", "Sailor Uranus"],
    correctAnswer: 1,
    alreadyUsed: false
}
var question7 = 
{
    question: "Who is the clumsiest Sailor Scout?",
    possibleAnswers: ["Sailor Moon", "Sailor Mars", "Sailor Mercury", "Sailor Neptune"],
    correctAnswer: 0,
    alreadyUsed: false
}
var question8 = 
{
    question: "What character frequently saves the day and leaves a rose?",
    possibleAnswers: ["Artemis", "Prince Rose", "Mister Mask", "Tuxedo Mask"],
    correctAnswer: 3,
    alreadyUsed: false
}
var question9 = 
{
    question: "What Sailor Scout had her own TV show before being discovered by the others?",
    possibleAnswers: ["Sailor Neptune", "Sailur Uranus", "Sailor Venus", "Sailor Jupiter"],
    correctAnswer: 2,
    alreadyUsed: false
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
        $("#question").css("color", "white");
        $("#question").text(currentQuestion.question)
        $("#possibleAnswer0.possibleAnswers").text(currentQuestion.possibleAnswers[0])
        $("#possibleAnswer1.possibleAnswers").text(currentQuestion.possibleAnswers[1])
        $("#possibleAnswer2.possibleAnswers").text(currentQuestion.possibleAnswers[2])
        $("#possibleAnswer3.possibleAnswers").text(currentQuestion.possibleAnswers[3])
        $("#right").text(`Correct: ${correct}`)
        $("#wrong").text(`Incorrect: ${incorrect}`)
    }

function pickQuestion()
{
    //random number 0-9
    var randomInt=Math.floor(Math.random() *10)
    console.log(randomInt)
    currentQuestion=questionList[randomInt]
    questionList[randomInt].alreadyUsed=true
    console.log(currentQuestion.question)
    expired=false
    alreadySeen.push(currentQuestion)
    count=questionTimoeout
        for(i=0;i>alreadySeen.length;i++){
            if(currentQuestion==alreadySeen[i]){
                pickQuestion();
            }
        }
        clearTimeout();
    setTimeout(function ()
        {questionExpired();
        }, questionTimoeout*1000);
}

function rightAnswer(){
    expired=true;
    correct++;
    count=questionTimoeout;
    pickQuestion();
    drawQuestion();
    
}

function wrongAnswer(){
    $("#timer").empty();
    expired=true;
    count=questionTimoeout;
    incorrect++;

    //console.log(currentQuestion.possibleAnswers[currentQuestion.correctAnswer])
    $("#question").css("color","red").text(`no, ${currentQuestion.possibleAnswers[currentQuestion.correctAnswer]} is the correct answer`)
    clearInterval();
    clearTimeout();
    setTimeout(function(){pickQuestion(); drawQuestion()}, 3000)
}

function questionExpired()
{
    expired=true;
    count=questionTimoeout;
    incorrect++;
    pickQuestion();
    drawQuestion();
}

window.onload = function() {

$("#startButton").on("click", function(){
    console.log("start");
    count=questionTimoeout;
    clockRunning=true;
    console.log(clockRunning);
    setInterval(function(){
        count--;
        $("#timer").text(count);
    }, 1000);
    $("#timer").text(count);
    //choose question at random
    pickQuestion();
    drawQuestion();
    $("#timer").text(count);


$("#possibleAnswer0.possibleAnswers").on("click", function(){
    console.log("possibleAnswer0")
    if(currentQuestion.correctAnswer===0)
    {
        rightAnswer();
    }
    else
    {
        wrongAnswer();
    }
});

$("#possibleAnswer1.possibleAnswers").on("click", function(){
    console.log("possibleAnswer1")
    if(currentQuestion.correctAnswer===1)
    {
        //alert("correct!")
        rightAnswer();
    }
    else
    {
        //alert("wrong!")
        wrongAnswer();
    }
});

$("#possibleAnswer2.possibleAnswers").on("click", function(){
    console.log("possibleAnswer2")
    if(currentQuestion.correctAnswer===2)
    {
        rightAnswer();
    }
    else
    {
        wrongAnswer();
    }
});

$("#possibleAnswer3.possibleAnswers").on("click", function(){
    console.log("possibleAnswer3")
    if(currentQuestion.correctAnswer===3)
    {
        rightAnswer();
    }
    else
    {
        wrongAnswer();
    }
});
//setInterval(function(){timer.time--}, 1000)
})
}
