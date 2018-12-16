var messageTimeout=2
var questionTimeout=15
var clockRunning=false
var count=questionTimeout
var expired=false
var currentQuestion=""
var alreadySeen=[]
var correct=0
var incorrect=0
var currentGuess=""
var mainQuestionTimeout
var timerInterval
var totalQuestions=0


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

    


function gameOver()
{
    console.log("game over")
    clearInterval(timerInterval);
    clearTimeout(mainQuestionTimeout);
    count=0;
    clockRunning=false
    $("timer").empty();
    $("#question").empty();
    $("#possibleAnswer0.possibleAnswers").empty();
    $("#possibleAnswer1.possibleAnswers").empty();
    $("#possibleAnswer2.possibleAnswers").empty();
    $("#possibleAnswer3.possibleAnswers").empty();
    $("question").text("game over!")
    $("#resetButton").css("visibility", "visible")
    $("#resetButton").on("click", function(){reset();})
}

function reset()
{
    $("#question").empty();
    $("#question").empty();
    $("#timer").empty();
    $("#possibleAnswer0.possibleAnswers").empty();
    $("#possibleAnswer1.possibleAnswers").empty();
    $("#possibleAnswer2.possibleAnswers").empty();
    $("#possibleAnswer3.possibleAnswers").empty();
    $("#right").empty();
    $("#wrong").empty();
    $("#startButton").css("visibility", "visible")
    totalQuestions=0;
    incorrect=0;
    correct=0;
    currentQuestion=""
    alreadySeen=[]
    clearInterval(timerInterval);
    clearTimeout(mainQuestionTimeout);
    $("resetButton").css("visibility", "hidden")
}

function pickQuestion()
{
    totalQuestions++;
    console.log(totalQuestions)
    if(totalQuestions>=questionList.length){gameOver()}
    var randomInt=Math.floor(Math.random() *10)
    console.log(randomInt)
    for(i=0;i<alreadySeen.length;i++){
        if(randomInt===alreadySeen[i]){
            while(randomInt===alreadySeen[i]){
        randomInt=Math.floor(Math.random() *10)
            }
        }
    }
    alreadySeen.push(randomInt)
    currentQuestion=questionList[randomInt]
    questionList[randomInt].alreadyUsed=true
    console.log(currentQuestion.question)
    expired=false
    count=questionTimeout
    clearTimeout(mainQuestionTimeout);
    mainQuestionTimeout = setTimeout(function ()
        {questionExpired();
        }, questionTimeout*1000);
    clearInterval(timerInterval)
    timerInterval = setInterval(function(){
            count--;
            $("#timer").text(count);
        }, 1000);
}

function rightAnswer(){
    $("#timer").empty();
    expired=true;
    count=questionTimeout;
    correct++;
    $("#question").css("color","green").text(`yeah! ${currentQuestion.possibleAnswers[currentQuestion.correctAnswer]} is correct!`)
    clearInterval(timerInterval);
    clearTimeout(mainQuestionTimeout);
    var wrongAnswerTimer = setTimeout(function(){pickQuestion(); drawQuestion(); $("#timer").text(count)}, messageTimeout*1000)
    
}

function wrongAnswer(){
    $("#timer").empty();
    expired=true;
    count=questionTimeout;
    incorrect++;
    $("#question").css("color","red").text(`no, the correct answer is ${currentQuestion.possibleAnswers[currentQuestion.correctAnswer]}`)
    clearInterval(timerInterval);
    clearTimeout(mainQuestionTimeout);
    var wrongAnswerTimer = setTimeout(function(){pickQuestion(); drawQuestion(); $("#timer").text(count)}, messageTimeout*1000)
}

function questionExpired()
{
    $("#timer").empty();
    expired=true;
    count=questionTimeout;
    incorrect++;
    $("#question").css("color","red").text(`too slow. the answer is ${currentQuestion.possibleAnswers[currentQuestion.correctAnswer]}`)
    clearInterval(timerInterval);
    clearTimeout(mainQuestionTimeout);
    var expiredNoticeTimer = setTimeout(function(){pickQuestion(); drawQuestion(); $("#timer").text(count)}, messageTimeout*1000)
}

window.onload = function() {

$("#resetButton").css("visibility", "hidden")

$("#startButton").on("click", function(){
    console.log("start");
    count=questionTimeout;
    clockRunning=true;
    console.log(clockRunning);
    $("#timer").text(count);
    $("#startButton").css("visibility", "hidden")
    pickQuestion();
    drawQuestion();

//intent to re-factor this later
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
})
}
