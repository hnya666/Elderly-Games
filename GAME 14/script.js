const questionText =document.getElementById("question");
const leftButton =document.getElementById("left-button");
const rightButton =document.getElementById("right-button");
const scoreText =document.getElementById("score");
const levelText =document.getElementById("level");
const messageText =document.getElementById("message");
const questionNumberText =document.getElementById("question-number");
const restartButton =document.getElementById("restart-button");
const finalScoreText =document.getElementById("final-score");
const bestScoreText =document.getElementById("best-score");
const nextLevelButton =document.getElementById("next-level-button");
const menuScreen =document.getElementById("menu-screen");
const gameScreen =document.getElementById("game-screen");
const levelButtons =document.querySelectorAll(".level-button");
const menuButton =document.getElementById("menu-button");
const mistakesText =document.getElementById("mistakes");
const timerContainer =document.getElementById("timer-container");
const timerBar =document.getElementById("timer-bar");
const timerText =document.getElementById("timer-text");
const correctSound =
document.getElementById("correct-sound");

const wrongSound =
document.getElementById("wrong-sound");

const levelSound =
document.getElementById("level-sound");

const gameoverSound =
document.getElementById("gameover-sound");

const levels =
[
[
{sequence:"■ ● ■ ● ?", correctAnswer:"■", wrongAnswer:"●", rule:"Alternate between square and circle"},
{sequence:"▲ ▼ ▲ ▼ ?", correctAnswer:"▲", wrongAnswer:"▼", rule:"Alternate between up and down triangles"},
{sequence:"★ ○ ★ ○ ?", correctAnswer:"★", wrongAnswer:"○", rule:"Alternate between star and circle"},
{sequence:"◆ ◇ ◆ ◇ ?", correctAnswer:"◆", wrongAnswer:"◇", rule:"Alternate between filled and empty diamond"},
{sequence:"⬛ ⬜ ⬛ ⬜ ?", correctAnswer:"⬛", wrongAnswer:"⬜", rule:"Alternate between black and white squares"},
{sequence:"♥ ♣ ♥ ♣ ?", correctAnswer:"♥", wrongAnswer:"♣", rule:"Alternate between heart and club"},
{sequence:"▲ ■ ▲ ■ ?", correctAnswer:"▲", wrongAnswer:"■", rule:"Alternate between triangle and square"},
{sequence:"● ★ ● ★ ?", correctAnswer:"●", wrongAnswer:"★", rule:"Alternate between circle and star"},
{sequence:"◆ ♥ ◆ ♥ ?", correctAnswer:"◆", wrongAnswer:"♥", rule:"Alternate between diamond and heart"},
{sequence:"○ □ ○ □ ?", correctAnswer:"○", wrongAnswer:"□", rule:"Alternate between circle and square"},
{sequence:"♠ ♥ ♠ ♥ ?", correctAnswer:"♠", wrongAnswer:"♥", rule:"Alternate between spade and heart"},
{sequence:"■ ◆ ■ ◆ ?", correctAnswer:"■", wrongAnswer:"◆", rule:"Alternate between square and diamond"},
{sequence:"★ ▲ ★ ▲ ?", correctAnswer:"★", wrongAnswer:"▲", rule:"Alternate between star and triangle"},
{sequence:"○ ♣ ○ ♣ ?", correctAnswer:"○", wrongAnswer:"♣", rule:"Alternate between circle and club"},
{sequence:"⬜ ⬛ ⬜ ⬛ ?", correctAnswer:"⬜", wrongAnswer:"⬛", rule:"Alternate between white and black squares"}
],
[
{sequence:"🔴 🔵 🔴 🔵 ?", correctAnswer:"🔴", wrongAnswer:"🟢", rule:"Alternate between red and blue circles"},
{sequence:"▲ ▼ ▲ ▼ ?", correctAnswer:"▲", wrongAnswer:"▼", rule:"Alternate between up and down triangles"},
{sequence:"⭐ 🌙 ⭐ 🌙 ?", correctAnswer:"⭐", wrongAnswer:"🌙", rule:"Alternate between star and moon"},
{sequence:"🔴▲ 🔵■ 🔴▲ 🔵■ ?", correctAnswer:"🔴▲", wrongAnswer:"🔵▲", rule:"Alternate between red triangle and blue square"},
{sequence:"🐶 🐱 🐶 🐱 ?", correctAnswer:"🐶", wrongAnswer:"🐱", rule:"Alternate between dog and cat"},
{sequence:"↑ → ↓ ← ?", correctAnswer:"↑", wrongAnswer:"→", rule:"Rotate clockwise through directions"},
{sequence:"❤️ 💙 ❤️ 💙 ?", correctAnswer:"❤️", wrongAnswer:"💚", rule:"Alternate between red and blue hearts"},
{sequence:"▶ ▼ ◀ ▲ ?", correctAnswer:"▶", wrongAnswer:"▼", rule:"Rotate through four directions"},
{sequence:"🍎 🍌 🍎 🍌 ?", correctAnswer:"🍎", wrongAnswer:"🍇", rule:"Alternate between apple and banana"},
{sequence:"🟢● 🟡★ 🟢● 🟡★ ?", correctAnswer:"🟢●", wrongAnswer:"🟡●", rule:"Alternate between green circle and yellow star"},
{sequence:"☀️ ☁️ ☀️ ☁️ ?", correctAnswer:"☀️", wrongAnswer:"🌧️", rule:"Alternate between sun and cloud"},
{sequence:"↗ ↘ ↙ ↖ ?", correctAnswer:"↗", wrongAnswer:"↘", rule:"Rotate through diagonal directions"},
{sequence:"■ ● ■ ● ?", correctAnswer:"■", wrongAnswer:"●", rule:"Alternate between square and circle"},
{sequence:"🚗 🚲 🚗 🚲 ?", correctAnswer:"🚗", wrongAnswer:"🚲", rule:"Alternate between car and bicycle"},
{sequence:"🔺 🔻 🔺 🔻 ?", correctAnswer:"🔺", wrongAnswer:"🔻", rule:"Alternate between up and down triangles"}
],
[
{sequence:"2 4 6 8 ?", correctAnswer:"10", wrongAnswer:"9", rule:"Add 2 each time"},
{sequence:"5 10 15 20 ?", correctAnswer:"25", wrongAnswer:"30", rule:"Add 5 each time"},
{sequence:"1 3 5 7 ?", correctAnswer:"9", wrongAnswer:"8", rule:"Add 2 each time"},
{sequence:"10 20 30 40 ?", correctAnswer:"50", wrongAnswer:"45", rule:"Add 10 each time"},
{sequence:"3 6 9 12 ?", correctAnswer:"15", wrongAnswer:"18", rule:"Add 3 each time"},
{sequence:"4 8 12 16 ?", correctAnswer:"20", wrongAnswer:"24", rule:"Add 4 each time"},
{sequence:"7 9 11 13 ?", correctAnswer:"15", wrongAnswer:"16", rule:"Add 2 each time"},
{sequence:"20 25 30 35 ?", correctAnswer:"40", wrongAnswer:"45", rule:"Add 5 each time"},
{sequence:"2 7 12 17 ?", correctAnswer:"22", wrongAnswer:"20", rule:"Add 5 each time"},
{sequence:"1 6 11 16 ?", correctAnswer:"21", wrongAnswer:"20", rule:"Add 5 each time"},
{sequence:"9 18 27 36 ?", correctAnswer:"45", wrongAnswer:"54", rule:"Add 9 each time"},
{sequence:"8 10 12 14 ?", correctAnswer:"16", wrongAnswer:"18", rule:"Add 2 each time"},
{sequence:"15 20 25 30 ?", correctAnswer:"35", wrongAnswer:"40", rule:"Add 5 each time"},
{sequence:"100 90 80 70 ?", correctAnswer:"60", wrongAnswer:"50", rule:"Subtract 10 each time"},
{sequence:"50 45 40 35 ?", correctAnswer:"30", wrongAnswer:"25", rule:"Subtract 5 each time"}
],
[
{sequence:"A B C D ?", correctAnswer:"E", wrongAnswer:"F", rule:"Move forward one letter each time"},
{sequence:"A C E G ?", correctAnswer:"I", wrongAnswer:"H", rule:"Skip one letter each time"},
{sequence:"B D F H ?", correctAnswer:"J", wrongAnswer:"K", rule:"Skip one letter each time"},
{sequence:"Z Y X W ?", correctAnswer:"V", wrongAnswer:"U", rule:"Move backward one letter each time"},
{sequence:"A D G J ?", correctAnswer:"M", wrongAnswer:"L", rule:"Move forward three letters each time"},
{sequence:"C F I L ?", correctAnswer:"O", wrongAnswer:"P", rule:"Move forward three letters each time"},
{sequence:"2 4 8 16 ?", correctAnswer:"32", wrongAnswer:"24", rule:"Double each number"},
{sequence:"1 1 2 3 5 ?", correctAnswer:"8", wrongAnswer:"10", rule:"Each number equals the sum of the previous two"},
{sequence:"20 18 16 14 ?", correctAnswer:"12", wrongAnswer:"10", rule:"Subtract 2 each time"},
{sequence:"100 90 80 70 ?", correctAnswer:"60", wrongAnswer:"50", rule:"Subtract 10 each time"},
{sequence:"M O Q S ?", correctAnswer:"U", wrongAnswer:"T", rule:"Move forward two letters each time"},
{sequence:"D G J M ?", correctAnswer:"P", wrongAnswer:"Q", rule:"Move forward three letters each time"},
{sequence:"5 10 20 40 ?", correctAnswer:"80", wrongAnswer:"60", rule:"Double each number"},
{sequence:"3 6 12 24 ?", correctAnswer:"48", wrongAnswer:"36", rule:"Double each number"},
{sequence:"11 22 44 88 ?", correctAnswer:"176", wrongAnswer:"132", rule:"Double each number"}
],
[
{sequence:"🔴■ 🔵● 🔴■ 🔵● ?", correctAnswer:"🔴■", wrongAnswer:"🔵■", rule:"Alternate between red square and blue circle"},
{sequence:"🟢▲ 🟡▼ 🟢▲ 🟡▼ ?", correctAnswer:"🟢▲", wrongAnswer:"🟡▲", rule:"Alternate between green up triangle and yellow down triangle"},
{sequence:"▲ ▼ ▲ ▼ ?", correctAnswer:"▲", wrongAnswer:"▼", rule:"Alternate between up and down triangles"},
{sequence:"A Z B Y C ?", correctAnswer:"X", wrongAnswer:"D", rule:"Alternate from the beginning and end of the alphabet"},
{sequence:"1 4 9 16 ?", correctAnswer:"25", wrongAnswer:"20", rule:"Square numbers"},
{sequence:"4 9 16 25 ?", correctAnswer:"36", wrongAnswer:"35", rule:"Square numbers"},
{sequence:"2 3 5 8 ?", correctAnswer:"13", wrongAnswer:"12", rule:"Each number equals the sum of the previous two"},
{sequence:"5 8 13 21 ?", correctAnswer:"34", wrongAnswer:"35", rule:"Each number equals the sum of the previous two"},
{sequence:"↗ ↘ ↙ ↖ ?", correctAnswer:"↗", wrongAnswer:"↘", rule:"Rotate through diagonal directions"},
{sequence:"↑ → ↓ ← ?", correctAnswer:"↑", wrongAnswer:"→", rule:"Rotate clockwise through directions"},
{sequence:"A C E G ?", correctAnswer:"I", wrongAnswer:"H", rule:"Skip one letter each time"},
{sequence:"B E H K ?", correctAnswer:"N", wrongAnswer:"M", rule:"Move forward three letters each time"},
{sequence:"10 20 40 80 ?", correctAnswer:"160", wrongAnswer:"120", rule:"Double each number"},
{sequence:"3 9 27 ?", correctAnswer:"81", wrongAnswer:"54", rule:"Multiply by 3 each time"},
{sequence:"2 6 18 ?", correctAnswer:"54", wrongAnswer:"36", rule:"Multiply by 3 each time"}
],
[
{sequence:"1 10 2 20 3 ?", correctAnswer:"30", wrongAnswer:"4", rule:"Two interleaved sequences: 1,2,3 and 10,20,30"},
{sequence:"A 1 B 2 C ?", correctAnswer:"3", wrongAnswer:"D", rule:"Alternate letters and numbers"},
{sequence:"2 4 7 11 ?", correctAnswer:"16", wrongAnswer:"15", rule:"Add 2, then 3, then 4, then 5"},
{sequence:"1 3 6 10 ?", correctAnswer:"15", wrongAnswer:"14", rule:"Add 2, then 3, then 4, then 5"},
{sequence:"2 5 9 14 ?", correctAnswer:"20", wrongAnswer:"19", rule:"Add 3, then 4, then 5, then 6"},
{sequence:"1 2 6 24 ?", correctAnswer:"120", wrongAnswer:"100", rule:"Multiply by 2, then 3, then 4, then 5"},
{sequence:"2 6 24 120 ?", correctAnswer:"720", wrongAnswer:"600", rule:"Multiply by 3, then 4, then 5, then 6"},
{sequence:"A B D G ?", correctAnswer:"K", wrongAnswer:"J", rule:"Move forward 1, then 2, then 3, then 4 letters"},
{sequence:"C E H L ?", correctAnswer:"Q", wrongAnswer:"R", rule:"Move forward 2, then 3, then 4, then 5 letters"},
{sequence:"🔴 ▲ 🔵 ▼ 🔴 ?", correctAnswer:"▲", wrongAnswer:"▼", rule:"Alternate colour and shape pattern"},
{sequence:"■ 1 ■ 2 ■ ?", correctAnswer:"3", wrongAnswer:"■", rule:"Alternate square and increasing numbers"},
{sequence:"↑ ↓ ↑ ↓ ?", correctAnswer:"↑", wrongAnswer:"↓", rule:"Alternate up and down arrows"},
{sequence:"1 4 2 8 3 ?", correctAnswer:"12", wrongAnswer:"4", rule:"Two interleaved sequences: 1,2,3 and 4,8,12"},
{sequence:"5 11 19 29 ?", correctAnswer:"41", wrongAnswer:"40", rule:"Add 6, then 8, then 10, then 12"},
{sequence:"3 7 13 21 ?", correctAnswer:"31", wrongAnswer:"30", rule:"Add 4, then 6, then 8, then 10"}
]
];

menuScreen.style.display = "block";
gameScreen.style.display = "none";
nextLevelButton.style.display = "none";

let questionStartTime;

let score = 0;

let correctSide;

let currentLevel = 0;

let mistakes = 0;

let timer;

let timeLeft;

let bestScore =Number(localStorage.getItem("bestScoreGame14")) || 0;
bestScoreText.textContent ="Best Score: " + bestScore;

let currentQuestion = 0;

let questions = levels[currentLevel];

function updateBestScore()
{
    if(score > bestScore)
    {
        bestScore = score;

        localStorage.setItem(
        "bestScoreGame14",
        bestScore
        );

        bestScoreText.textContent =
        "Best Score: " + bestScore;
    }
}


function loadQuestion()

{
    messageText.textContent = "";
    messageText.textContent = "";

    clearInterval(timer);

    timerContainer.style.display = "none";

    timerText.style.display = "none";

if(currentQuestion >= questions.length)
{

    
    currentLevel++;

   if(currentLevel < levels.length)
    {

    levelSound.play();
    questionText.textContent ="🎉 Level " + currentLevel + " Complete!";
    messageText.innerHTML ="Score: " + score +"<br><br>Great Work!<br>Ready for the next level?";
    leftButton.style.display = "none";
    rightButton.style.display = "none";
    nextLevelButton.style.display ="inline-block";

    return;

    }
   else
    {

        if(score > bestScore)
        {
        bestScore = score;

        localStorage.setItem("bestScore",bestScore);
        bestScoreText.textContent ="Best Score: " + bestScore;
        }

         let compliment = "";

        if(score >= 80)
            {
        questionText.textContent ="🏆 Outstanding!";
        compliment ="Amazing vocabulary skills!";
             }
        else if(score >= 60)
            {
        questionText.textContent ="🎉 Excellent Work!";
        compliment ="Excellent work! Keep it up!";
            }
        else if(score >= 40)
            {
        questionText.textContent ="👏 Well Done!";
        compliment ="Good job! You're improving!";
             }
        else
            {
        questionText.textContent ="🙂 Good Effort!";
        compliment ="Keep practicing and you'll get better!";
            }

    finalScoreText.innerHTML ="Final Score: " + score +"<br><br>" +"Best Score: " + bestScore +"<br><br>" +compliment;
    leftButton.style.display = "none";
    rightButton.style.display = "none";

    return;

    }
}
  
  levelText.textContent ="Level: " + (currentLevel + 1);
  questionText.textContent =questions[currentQuestion].sequence;
  questionNumberText.textContent ="Question: " +(currentQuestion + 1) +"/" +questions.length;
  if(Math.random() < 0.5)
    {

    correctSide = "left";

    leftButton.textContent =
    questions[currentQuestion].correctAnswer;

    rightButton.textContent =
    questions[currentQuestion].wrongAnswer;

    }
else
    {

    correctSide = "right";


    leftButton.textContent =
    questions[currentQuestion].wrongAnswer;

    rightButton.textContent =
    questions[currentQuestion].correctAnswer;

    }
if(currentLevel === 3)
{
    startTimer(12);
}
else if(currentLevel === 4)
{
    startTimer(10);
}
else if(currentLevel === 5)
{
    startTimer(8);
}
questionStartTime = Date.now();
}

loadQuestion();
nextLevelButton.style.display = "none";

leftButton.addEventListener("click",function()
{
     clearInterval(timer);
    leftButton.disabled = true;
    rightButton.disabled = true;

    if(correctSide === "left")
    {
        
        correctSound.play();
        score += 2;

        updateBestScore();

        let responseTime =
        (Date.now() - questionStartTime) / 1000;

        let bonusText = "";

        if(currentLevel >= 3 && responseTime <= 3)
            {
            score++;

            updateBestScore();

            bonusText =
            "<br><br>⚡ Fast Bonus +1";
        }

scoreText.textContent =
"Score: " + score;
        

        const goodMessages =
        [
            "✅ Great Job!",
            "✅ Excellent!",
            "✅ Well Done!",
            "✅ Fantastic!",
            "✅ Correct!"
        ];

        let randomMessage =
        goodMessages[
        Math.floor(Math.random() * goodMessages.length)
        ];

        messageText.innerHTML =
        randomMessage +
        "<br><br>+2 Points" +
        bonusText +
        "<br><br>Pattern: " +
        questions[currentQuestion].rule;
    }
    else
    {
        mistakes++;
        wrongSound.play();

        mistakesText.textContent =
        "Mistakes: " + mistakes + "/5";

        if(mistakes >= 5)
        {
            questionText.textContent =
            "❌ Game Over";

            gameoverSound.play();

            if(score > bestScore)
                {
                bestScore = score;

                localStorage.setItem("bestScoreGame14", bestScore);

                bestScoreText.textContent ="Best Score: " + bestScore;
                }

            finalScoreText.innerHTML =
            "You made 5 mistakes in this level." +
            "<br><br>" +
            "Final Score: " + score;        

            leftButton.style.display = "none";
            rightButton.style.display = "none";
            nextLevelButton.style.display = "none";

            leftButton.disabled = true;
            rightButton.disabled = true;

            return;
        }

        messageText.innerHTML =
        "❌ Not Quite." +
        "<br><br>" +
        questions[currentQuestion].correctAnswer +
        " is correct." +
        "<br><br>" +
        "Pattern: " +
        questions[currentQuestion].rule;
    }

    setTimeout(function()
    {
        currentQuestion++;

        leftButton.disabled = false;
        rightButton.disabled = false;

        loadQuestion();

    },1500);
});


rightButton.addEventListener("click",function()
{
     clearInterval(timer);
    leftButton.disabled = true;
    rightButton.disabled = true;

    if(correctSide === "right")
    {
    correctSound.play();

    score += 2;

    updateBestScore();

    let responseTime =
    (Date.now() - questionStartTime) / 1000;

    let bonusText = "";

    if(currentLevel >= 3 && responseTime <= 3)
    {
    score++;

    updateBestScore();
    
    bonusText =
    "<br><br>⚡ Fast Bonus +1";
    }
    scoreText.textContent ="Score: " + score;

        const goodMessages =
        [
            "✅ Great Job!",
            "✅ Excellent!",
            "✅ Well Done!",
            "✅ Fantastic!",
            "✅ Correct!"
        ];

        let randomMessage =
        goodMessages[
        Math.floor(Math.random() * goodMessages.length)
        ];

        messageText.innerHTML =randomMessage +"<br><br>+2 Points" +bonusText +"<br><br>Pattern: " +questions[currentQuestion].rule;
    }
    else
    {
        wrongSound.play();
        mistakes++;

        mistakesText.textContent =
        "Mistakes: " + mistakes + "/5";

        if(mistakes >= 5)
        {
            questionText.textContent =
            "❌ Game Over";

            gameoverSound.play();

            if(score > bestScore)
                {
                bestScore = score;

                localStorage.setItem("bestScoreGame14", bestScore);

                bestScoreText.textContent ="Best Score: " + bestScore;
                }

            finalScoreText.innerHTML ="You made 5 mistakes in this level." +"<br><br>" +"Final Score: " + score;

            leftButton.style.display = "none";
            rightButton.style.display = "none";
            nextLevelButton.style.display = "none";

            leftButton.disabled = true;
            rightButton.disabled = true;

            return;
        }

        messageText.innerHTML =
        "❌ Not Quite." +
        "<br><br>" +
        questions[currentQuestion].correctAnswer +
        " is correct." +
        "<br><br>" +
        "Pattern: " +
        questions[currentQuestion].rule;
    }

    setTimeout(function()
    {
        currentQuestion++;

        leftButton.disabled = false;
        rightButton.disabled = false;

        loadQuestion();

    },1500);
});


restartButton.addEventListener("click", function()
{
    if(score > bestScore)
                {
                bestScore = score;

                localStorage.setItem("bestScoreGame14", bestScore);

                bestScoreText.textContent ="Best Score: " + bestScore;
                }
    currentQuestion = 0;

    score = 0;

    mistakes = 0;

    mistakesText.textContent =
    "Mistakes: 0/5";

    scoreText.textContent =
    "Score: 0";

    finalScoreText.textContent = "";

    messageText.textContent = "";

    leftButton.style.display = "";

    rightButton.style.display = "";

    nextLevelButton.style.display = "none";

    leftButton.disabled = false;

    rightButton.disabled = false;

    loadQuestion();
});

nextLevelButton.addEventListener("click",function()

{
     if(score > bestScore)
                {
                bestScore = score;

                localStorage.setItem("bestScoreGame14", bestScore);

                bestScoreText.textContent ="Best Score: " + bestScore;
                }
    questions = levels[currentLevel];
    currentQuestion = 0;
    leftButton.style.display = "";
    rightButton.style.display = "";
    nextLevelButton.style.display ="none";
    mistakes = 0;
    mistakesText.textContent = "Mistakes: 0/5";

    loadQuestion();

});

levelButtons.forEach(function(button)
{

    button.addEventListener("click", function()
    {

        currentLevel =
        Number(button.dataset.level);

        questions =
        levels[currentLevel];

        currentQuestion = 0;

        menuScreen.style.display = "none";

        gameScreen.style.display = "block";

        loadQuestion();

    });

});

menuButton.addEventListener("click", function()
{

    gameScreen.style.display = "none";

    menuScreen.style.display = "block";

});

document.addEventListener("keydown", function(event)
{

    if(leftButton.style.display === "none")
    {
        return;
    }

    if(event.key === "ArrowLeft")
    {
        leftButton.click();
    }

    if(event.key === "ArrowRight")
    {
        rightButton.click();
    }

});

function startTimer(seconds)
{
    clearInterval(timer);

    timeLeft = seconds;

    timerContainer.style.display = "block";

    timerText.style.display = "block";

    timerBar.style.width = "100%";

    timerBar.style.background = "#10b981";

    timerText.textContent =
    "Time Left: " + timeLeft + "s";

    timer = setInterval(function()
    {
        timeLeft--;

        timerText.textContent =
        "Time Left: " + timeLeft + "s";

        let percentage =
        (timeLeft / seconds) * 100;

        timerBar.style.width =
        percentage + "%";

        if(timeLeft <= seconds / 2)
        {
            timerBar.style.background =
            "#f59e0b";
        }

        if(timeLeft <= 3)
        {
            timerBar.style.background =
            "#ef4444";
        }
        if(timeLeft <= 0)
    {
        clearInterval(timer);
        wrongSound.play();

        mistakes++;

        mistakesText.textContent =
        "Mistakes: " + mistakes + "/5";

        messageText.innerHTML =
        "⏰ Time's Up!" +
        "<br><br>" +
        "Correct Answer: " +
        questions[currentQuestion].correctAnswer +
        "<br><br>" +
        "Pattern: " +
        questions[currentQuestion].rule +
        "<br><br>";

            if(mistakes >= 5)
            {
            questionText.textContent =
            "❌ Game Over";
            
            if(score > bestScore)
                {
                bestScore = score;

                localStorage.setItem("bestScoreGame14", bestScore);

                bestScoreText.textContent ="Best Score: " + bestScore;
                }

            finalScoreText.innerHTML =
            "You made 5 consecutive incorrect answers." +
            "<br><br>" +
            "Final Score: " + score;

            leftButton.style.display = "none";
            rightButton.style.display = "none";

            return;
            }
        setTimeout(function()
        {
        currentQuestion++;
        loadQuestion();
        },2000);
    }
},1000);
}