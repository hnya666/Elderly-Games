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
const questionTypeText =document.getElementById("question-type");
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
{
type:"synonym",
word:"HAPPY",
correctAnswer:"JOYFUL",
wrongAnswer:"SAD"
},

{
type:"synonym",
word:"BIG",
correctAnswer:"LARGE",
wrongAnswer:"SMALL"
},

{
type:"synonym",
word:"FAST",
correctAnswer:"QUICK",
wrongAnswer:"SLOW"
},

{
type:"synonym",
word:"ANGRY",
correctAnswer:"FURIOUS",
wrongAnswer:"CALM"
},

{
type:"synonym",
word:"SMART",
correctAnswer:"CLEVER",
wrongAnswer:"FOOLISH"
},

{
type:"synonym",
word:"BRAVE",
correctAnswer:"FEARLESS",
wrongAnswer:"COWARDLY"
},

{
type:"synonym",
word:"BEGIN",
correctAnswer:"START",
wrongAnswer:"END"
},

{
type:"synonym",
word:"COLD",
correctAnswer:"CHILLY",
wrongAnswer:"HOT"
},

{
type:"synonym",
word:"SMALL",
correctAnswer:"TINY",
wrongAnswer:"HUGE"
},

{
type:"synonym",
word:"FUNNY",
correctAnswer:"HUMOROUS",
wrongAnswer:"SERIOUS"
},

{
type:"synonym",
word:"RICH",
correctAnswer:"WEALTHY",
wrongAnswer:"POOR"
},

{
type:"synonym",
word:"QUIET",
correctAnswer:"SILENT",
wrongAnswer:"LOUD"
},

{
type:"synonym",
word:"NEAT",
correctAnswer:"TIDY",
wrongAnswer:"MESSY"
},

{
type:"synonym",
word:"STRONG",
correctAnswer:"POWERFUL",
wrongAnswer:"WEAK"
},

{
type:"synonym",
word:"SAFE",
correctAnswer:"SECURE",
wrongAnswer:"DANGEROUS"
}
],
[
{
type:"antonym",
word:"HOT",
correctAnswer:"COLD",
wrongAnswer:"WARM"
},

{
type:"antonym",
word:"DAY",
correctAnswer:"NIGHT",
wrongAnswer:"SUN"
},

{
type:"antonym",
word:"HAPPY",
correctAnswer:"SAD",
wrongAnswer:"JOYFUL"
},

{
type:"antonym",
word:"FAST",
correctAnswer:"SLOW",
wrongAnswer:"QUICK"
},

{
type:"antonym",
word:"BIG",
correctAnswer:"SMALL",
wrongAnswer:"LARGE"
},

{
type:"antonym",
word:"OPEN",
correctAnswer:"CLOSED",
wrongAnswer:"DOOR"
},

{
type:"antonym",
word:"UP",
correctAnswer:"DOWN",
wrongAnswer:"HIGH"
},

{
type:"antonym",
word:"EARLY",
correctAnswer:"LATE",
wrongAnswer:"SOON"
},

{
type:"antonym",
word:"STRONG",
correctAnswer:"WEAK",
wrongAnswer:"POWERFUL"
},

{
type:"antonym",
word:"RICH",
correctAnswer:"POOR",
wrongAnswer:"WEALTHY"
},

{
type:"antonym",
word:"SAFE",
correctAnswer:"DANGEROUS",
wrongAnswer:"SECURE"
},

{
type:"antonym",
word:"LOUD",
correctAnswer:"QUIET",
wrongAnswer:"NOISY"
},

{
type:"antonym",
word:"FRIENDLY",
correctAnswer:"HOSTILE",
wrongAnswer:"KIND"
},

{
type:"antonym",
word:"LIGHT",
correctAnswer:"DARK",
wrongAnswer:"BRIGHT"
},

{
type:"antonym",
word:"FULL",
correctAnswer:"EMPTY",
wrongAnswer:"FILLED"
}
],
[
{type:"synonym",word:"BRAVE",correctAnswer:"COURAGEOUS",wrongAnswer:"COWARDLY"},
{type:"antonym",word:"ANCIENT",correctAnswer:"MODERN",wrongAnswer:"AGED"},
{type:"synonym",word:"GIFT",correctAnswer:"PRESENT",wrongAnswer:"WRAP"},
{type:"antonym",word:"EXPAND",correctAnswer:"SHRINK",wrongAnswer:"GROW"},
{type:"synonym",word:"SMART",correctAnswer:"INTELLIGENT",wrongAnswer:"SILLY"},
{type:"antonym",word:"GENEROUS",correctAnswer:"MISERLY",wrongAnswer:"KIND"},
{type:"synonym",word:"ERROR",correctAnswer:"MISTAKE",wrongAnswer:"ANSWER"},
{type:"antonym",word:"SUCCESS",correctAnswer:"FAILURE",wrongAnswer:"WIN"},
{type:"synonym",word:"REPAIR",correctAnswer:"FIX",wrongAnswer:"BREAK"},
{type:"antonym",word:"CREATE",correctAnswer:"DESTROY",wrongAnswer:"BUILD"},
{type:"synonym",word:"RAPID",correctAnswer:"QUICK",wrongAnswer:"SLOW"},
{type:"antonym",word:"ARRIVE",correctAnswer:"DEPART",wrongAnswer:"VISIT"},
{type:"synonym",word:"ODD",correctAnswer:"STRANGE",wrongAnswer:"EVEN"},
{type:"antonym",word:"NOISY",correctAnswer:"QUIET",wrongAnswer:"LOUD"},
{type:"synonym",word:"ASSIST",correctAnswer:"HELP",wrongAnswer:"IGNORE"}
],
[
{type:"synonym",word:"CAUTIOUS",correctAnswer:"CAREFUL",wrongAnswer:"RECKLESS"},
{type:"antonym",word:"TRANSPARENT",correctAnswer:"OPAQUE",wrongAnswer:"CLEAR"},
{type:"synonym",word:"BENIGN",correctAnswer:"HARMLESS",wrongAnswer:"HARMFUL"},
{type:"antonym",word:"ABUNDANT",correctAnswer:"SCARCE",wrongAnswer:"PLENTIFUL"},
{type:"synonym",word:"THRIFTY",correctAnswer:"FRUGAL",wrongAnswer:"WASTEFUL"},
{type:"antonym",word:"RIGID",correctAnswer:"FLEXIBLE",wrongAnswer:"STIFF"},
{type:"synonym",word:"VERBOSE",correctAnswer:"WORDY",wrongAnswer:"SHORT"},
{type:"antonym",word:"TEMPORARY",correctAnswer:"PERMANENT",wrongAnswer:"BRIEF"},
{type:"synonym",word:"VIGOROUS",correctAnswer:"ENERGETIC",wrongAnswer:"TIRED"},
{type:"antonym",word:"OPTIMISTIC",correctAnswer:"PESSIMISTIC",wrongAnswer:"HOPEFUL"},
{type:"synonym",word:"DILIGENT",correctAnswer:"HARDWORKING",wrongAnswer:"LAZY"},
{type:"antonym",word:"EXPENSIVE",correctAnswer:"CHEAP",wrongAnswer:"COSTLY"},
{type:"synonym",word:"WARY",correctAnswer:"CAUTIOUS",wrongAnswer:"TRUSTING"},
{type:"antonym",word:"ASCEND",correctAnswer:"DESCEND",wrongAnswer:"CLIMB"},
{type:"synonym",word:"MODEST",correctAnswer:"HUMBLE",wrongAnswer:"PROUD"}
],
[
{type:"synonym",word:"ELOQUENT",correctAnswer:"ARTICULATE",wrongAnswer:"SILENT"},
{type:"antonym",word:"OBSCURE",correctAnswer:"FAMOUS",wrongAnswer:"UNCLEAR"},
{type:"synonym",word:"PRUDENT",correctAnswer:"WISE",wrongAnswer:"FOOLISH"},
{type:"antonym",word:"HOSTILE",correctAnswer:"FRIENDLY",wrongAnswer:"ANGRY"},
{type:"synonym",word:"METICULOUS",correctAnswer:"CAREFUL",wrongAnswer:"CARELESS"},
{type:"antonym",word:"FRAGILE",correctAnswer:"DURABLE",wrongAnswer:"DELICATE"},
{type:"synonym",word:"AMIABLE",correctAnswer:"FRIENDLY",wrongAnswer:"RUDE"},
{type:"antonym",word:"VISIBLE",correctAnswer:"INVISIBLE",wrongAnswer:"CLEAR"},
{type:"synonym",word:"RESILIENT",correctAnswer:"TOUGH",wrongAnswer:"WEAK"},
{type:"antonym",word:"GENUINE",correctAnswer:"FAKE",wrongAnswer:"REAL"},
{type:"synonym",word:"SERENE",correctAnswer:"PEACEFUL",wrongAnswer:"CHAOTIC"},
{type:"antonym",word:"MINOR",correctAnswer:"MAJOR",wrongAnswer:"SMALL"},
{type:"synonym",word:"CANDID",correctAnswer:"HONEST",wrongAnswer:"SECRETIVE"},
{type:"antonym",word:"FERTILE",correctAnswer:"BARREN",wrongAnswer:"RICH"},
{type:"synonym",word:"ASTUTE",correctAnswer:"SHREWD",wrongAnswer:"NAIVE"}
],
[
{
type:"synonym",
word:"FRUGAL",
correctAnswer:"THRIFTY",
wrongAnswer:"EXPENSIVE"
},

{
type:"synonym",
word:"BENIGN",
correctAnswer:"HARMLESS",
wrongAnswer:"DANGEROUS"
},

{
type:"synonym",
word:"VERBOSE",
correctAnswer:"WORDY",
wrongAnswer:"SILENT"
},

{
type:"synonym",
word:"WARY",
correctAnswer:"CAUTIOUS",
wrongAnswer:"CARELESS"
},

{
type:"synonym",
word:"ABUNDANT",
correctAnswer:"PLENTIFUL",
wrongAnswer:"SCARCE"
},

{
type:"antonym",
word:"OPAQUE",
correctAnswer:"TRANSPARENT",
wrongAnswer:"CLOUDY"
},

{
type:"antonym",
word:"RIGID",
correctAnswer:"FLEXIBLE",
wrongAnswer:"STIFF"
},

{
type:"antonym",
word:"TEMPORARY",
correctAnswer:"PERMANENT",
wrongAnswer:"BRIEF"
},

{
type:"antonym",
word:"SCARCE",
correctAnswer:"ABUNDANT",
wrongAnswer:"LIMITED"
},

{
type:"antonym",
word:"EXPAND",
correctAnswer:"SHRINK",
wrongAnswer:"GROW"
},

{
type:"synonym",
word:"COMMENCE",
correctAnswer:"BEGIN",
wrongAnswer:"FINISH"
},

{
type:"synonym",
word:"INTELLIGENT",
correctAnswer:"CLEVER",
wrongAnswer:"FOOLISH"
},

{
type:"antonym",
word:"ANCIENT",
correctAnswer:"MODERN",
wrongAnswer:"AGED"
},

{
type:"antonym",
word:"GENEROUS",
correctAnswer:"MISERLY",
wrongAnswer:"KIND"
},

{
type:"synonym",
word:"TRANQUIL",
correctAnswer:"PEACEFUL",
wrongAnswer:"NOISY"
}
]

];

menuScreen.style.display = "block";
gameScreen.style.display = "none";
nextLevelButton.style.display = "none";

let score = 0;

let questionStartTime;

let correctSide;

let mistakes = 0;

let currentLevel = 0;

let timer;

let timeLeft;

let bestScore =Number(localStorage.getItem("bestScore")) || 0;
bestScoreText.textContent ="Best Score: " + bestScore;

let currentQuestion = 0;

let questions = levels[currentLevel];


function loadQuestion()

{
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
  if(questions[currentQuestion].type === "synonym")
    {
    questionTypeText.textContent =
    "SAME MEANING AS:";
    }
  else
    {
    questionTypeText.textContent =
    "OPPOSITE OF:";
    }

  levelText.textContent ="Level: " + (currentLevel + 1);
  questionText.textContent =questions[currentQuestion].word; 
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
if(currentLevel === 2)
{
    startTimer(12);
}
else if(currentLevel === 3)
{
    startTimer(10);
}
else if(currentLevel === 4)
{
    startTimer(8);
}
else if(currentLevel === 5)
{
    startTimer(6);
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
    score += 2;
    correctSound.play();

    let responseTime =
    (Date.now() - questionStartTime) / 1000;

    let bonusText = "";

    if(currentLevel >= 2 && responseTime <= 3)
    {
        score++;

        bonusText =
        "<br><br>⚡ Fast Bonus +1";
    }

    scoreText.textContent ="Score: " + score;

let goodMessages =
    [
        "✅ Great Job!",
        "✅ Excellent!",
        "✅ Well Done!",
        "✅ Fantastic!",
        "✅ Nice Work!"
    ];

    let randomMessage =
    goodMessages[
    Math.floor(Math.random() * goodMessages.length)
    ];

    if(questions[currentQuestion].type === "synonym")
    {
        messageText.innerHTML =
        randomMessage +
        "<br><br>+2 Points" +
        bonusText +
        "<br><br>" +
        questions[currentQuestion].correctAnswer +
        " is the correct synonym for " +
        questions[currentQuestion].word + ".";
    }
    else
    {
        messageText.innerHTML =
        randomMessage +
        "<br><br>+2 Points" +
        bonusText +
        "<br><br>" +
        questions[currentQuestion].correctAnswer +
        " is the correct antonym of " +
        questions[currentQuestion].word + ".";
    }
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

        wrongSound.play();

        finalScoreText.innerHTML ="You made 5 mistakes in this level." +"<br><br>" +"Final Score: " + score;

        leftButton.style.display = "none";
        rightButton.style.display = "none";
        nextLevelButton.style.display = "none";

        leftButton.disabled = true;
        rightButton.disabled = true;

        return;
    }

    if(questions[currentQuestion].type === "synonym")
    {
        messageText.innerHTML =
        "❌ Not Quite." +
        "<br><br>" +
        questions[currentQuestion].correctAnswer +
        " is the correct synonym for " +
        questions[currentQuestion].word + ".";
    }
    else
    {
        messageText.innerHTML =
        "❌ Incorrect." +
        "<br><br>" +
        questions[currentQuestion].correctAnswer +
        " is the correct antonym of " +
        questions[currentQuestion].word + ".";
    }
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
    score += 2;
    correctSound.play();

    let responseTime =
    (Date.now() - questionStartTime) / 1000;

    let bonusText = "";

    if(currentLevel >= 2 && responseTime <= 3)
    {
        score++;

        bonusText =
        "<br><br>⚡ Fast Bonus +1";
    }

    scoreText.textContent =
    "Score: " + score;


    let goodMessages =
    [
        "✅ Great Job!",
        "✅ Excellent!",
        "✅ Well Done!",
        "✅ Fantastic!",
        "✅ Nice Work!"
    ];

    let randomMessage =
    goodMessages[
    Math.floor(Math.random() * goodMessages.length)
    ];

    if(questions[currentQuestion].type === "synonym")
    {
        messageText.innerHTML =
        randomMessage +
        "<br><br>+2 Points" +
        bonusText +
        "<br><br>" +
        questions[currentQuestion].correctAnswer +
        " is the correct synonym for " +
        questions[currentQuestion].word + ".";
    }
    else
    {
        messageText.innerHTML =
        randomMessage +
        "<br><br>+2 Points" +
        bonusText +
        "<br><br>" +
        questions[currentQuestion].correctAnswer +
        " is the correct antonym of " +
        questions[currentQuestion].word + ".";
    }
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

        wrongSound.play();

        finalScoreText.innerHTML ="You made 5 mistakes in this level." +"<br><br>" +"Final Score: " + score;

        leftButton.style.display = "none";
        rightButton.style.display = "none";
        nextLevelButton.style.display = "none";

        leftButton.disabled = true;
        rightButton.disabled = true;

        return;
    }

    if(questions[currentQuestion].type === "synonym")
    {
        messageText.innerHTML =
        "❌ Not Quite." +
        "<br><br>" +
        questions[currentQuestion].correctAnswer +
        " is the correct synonym for " +
        questions[currentQuestion].word + ".";
    }
    else
    {
        messageText.innerHTML =
        "❌ Incorrect." +
        "<br><br>" +
        questions[currentQuestion].correctAnswer +
        " is the correct antonym of " +
        questions[currentQuestion].word + ".";
    }
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

        mistakes++;

        wrongSound.play();

        mistakesText.textContent =
        "Mistakes: " + mistakes + "/5";

        messageText.innerHTML =
        "⏰ Time's Up!" +
        "<br><br>" +
        "Correct Answer: " +
        questions[currentQuestion].correctAnswer +
        "<br><br>";

            if(mistakes >= 5)
            {
            questionText.textContent =
            "❌ Game Over";

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