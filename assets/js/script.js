//Create array of objects for image and answers
const pictureArray = [{
        picture: 'Mount Fuji',
        img: 'assets/img/q1.jpeg',
        answer: 'Japan',
        options: ['South Korea', 'Japan', 'China']
    },
    {
        picture: 'Iguazufalls',
        img: 'assets/img/q2.jpg',
        answer: 'Argentina',
        options: ['USA', 'Chile', 'Argentina']
    },
    {
        picture: 'Gap-of-Dunloe',
        img: 'assets/img/q3.jpg',
        answer: 'Ireland',
        options: ['England', 'Scotland', 'Ireland']
    },
    {
        picture: 'Golden Temple',
        img: 'assets/img/q4.png',
        answer: 'India',
        options: ['India', 'Thailand', 'Bali']
    },
    {
        picture: 'Mombasa Tusk',
        img: 'assets/img/q5.jpg',
        answer: 'Kenya',
        options: ['Tanzania', 'Kuwait', 'Kenya']
    },
    {
        picture: 'machu-pichu',
        img: 'assets/img/q6.png',
        answer: 'Peru',
        options: ['Mexico', 'Brazil', 'Peru']
    },
    {
        picture: 'under sea waterfall',
        img: 'assets/img/q7.jpg',
        answer: 'Mauritius',
        options: ['Seychelles', 'Maldives Island', 'Mauritius']
    },
    {
        picture: 'Sénanque-Abbey',
        img: 'assets/img/q8.webp',
        answer: 'France',
        options: ['France', 'Spain', 'Italy']
    },
    {
        picture: 'Skogafoss-waterfall',
        img: 'assets/img/q9.jpg',
        answer: 'Iceland',
        options: ['Greenland', 'USA', 'Iceland']
    },
    {
        picture: 'Twelve-Apostles',
        img: 'assets/img/q10.jpeg',
        answer: 'Australia',
        options: ['USA', 'New Zealand', 'Australia']
    }
];

//created variable questionNumber and assigned 0 to get the first question

let questionNumber = 0;

let startGame = false;

//create variable landmarkElement to get img element in index.html

const landmarkElement = document.getElementById('landmark-img');
landmarkElement.src = pictureArray[questionNumber].img;
landmarkElement.alt = pictureArray[questionNumber].picture;

let allOptions = document.getElementsByClassName("option");
console.log("allOptions", allOptions);
for (let i = 0; i < allOptions.length; i++) {
    allOptions[i].innerHTML = pictureArray[questionNumber].options[i];
}

//initial score is 0
let score = 0;

let scoreValue = document.getElementById('score');
scoreValue.innerHTML = score;

//initial timer is 0
let timer = 0;
let displayTimer = document.getElementById("timer");
displayTimer.innerHTML = 0;

//to increment the timer value from 0 to 30 use javascript internal function called setInverval

function displayScore() {
    console.log("test");
}

let setTimer;

function stopInterval() {
    clearInterval(setTimer);
}

function removeBackgroundColor() {
    document.querySelectorAll('.option').forEach(button => {
        button.style.backgroundColor = '';
        button.disabled = false;

    });
}

function timeUp() {
    document.getElementById("gameText").innerHTML = "";
    document.getElementById('message').innerHTML = "Time Up! <br>Better luck next time!";
    document.getElementById('scoreDisplay').innerHTML = score;
    document.getElementById('scorePopup').style.display = "block";
    document.getElementById('scoreMsgbx').style.display = "block";
    return true;
}

function disableButton(){
    document.querySelectorAll('.option').forEach(button => {        
        button.disabled = true;
    });
}

function startInterval() {
    setTimer = setInterval(function () {
        timer = timer + 1;
        // console.log("timer", timer)
        displayTimer.innerHTML = timer;
        if (timer === 30) {
            stopInterval();
            //displayScore();
            // alert("test")
            let value = timeUp();            
            if(value){
                disableButton();
                return;
            }
            nextQuestion();
            removeBackgroundColor();
            timer = 0;
            if (questionNumber === 9) {
                // document.getElementById('startPopup').style.display=document.getElementById('startMsgbx').style.display ="block";
                document.getElementById('scorePopup').style.display = document.getElementById('scoreMsgbx').style.display = "block";
                // document.getElementById('popupContainer').style.display = "block";
                document.getElementById('scoreDisplay').innerHTML = score;
                return;
            }
            startInterval();

        }
    }, 1000);
}

//created nextQuestion function to increment the questionNumber by 1
function nextQuestion() {
    //if all the questions were answered return
    if (questionNumber === 9) {
        // alert("test");     
        return;
    }

    //if questions are in between 1 to 10 these lines will be executed
    questionNumber = questionNumber + 1;
    console.log("questionNumber", questionNumber);
    landmarkElement.src = pictureArray[questionNumber].img;
    landmarkElement.alt = pictureArray[questionNumber].picture;

    //when question increased then next question options are updated
    for (let i = 0; i < allOptions.length; i++) {
        allOptions[i].innerHTML = pictureArray[questionNumber].options[i];
    }
}

//Audio for correct Answer
function audioCorrectAnswer() {
    console.log("audio correct answer");
    let correctAnswer = document.getElementById("correctAnswer");
    correctAnswer.play();
}

//Audio for wrong Answer
function audioWrongAnswer() {
    let wrongAnswer = document.getElementById("wrongAnswer");
    wrongAnswer.play();
}

function audioCongratulation() {
    let congratulation = document.getElementById("congratulations");
    congratulation.play();
}

function checkAnswer(e) {
    console.log("check answer clicked", e.innerHTML, questionNumber);
    if (startGame === false) {
        alert("Click start button to start");
        return;
    }

    let answer = e.innerHTML;
    //when any of the options is clicked setTimeOut will be activated
    const current = pictureArray[questionNumber];
    let buttonId = e.id;
    console.log("buttonId", buttonId);
    if (answer === current.answer) {
        document.getElementById(buttonId).style.backgroundColor = '#04D010';
        audioCorrectAnswer();
        score = score + 1;
        scoreValue.innerHTML = score;
    } else {
        document.getElementById(buttonId).style.backgroundColor = '#FF0F39';
        document.querySelectorAll('.option').forEach(button => {
            console.log("button.innerText", button.innerText.toLowerCase())
            console.log("current.answer", current.answer.toLowerCase())
            if (button.innerText.toLowerCase() === current.answer.toLowerCase()) {
                button.style.backgroundColor = '#04D010';
            }
            button.disabled = true;
        });
        audioWrongAnswer();
    }

    console.log("questionNumber", questionNumber);

    if (questionNumber == 9) {
        console.log("questionNumber", questionNumber, "inside")

        if (score === 10) {
            document.getElementById("message").innerHTML = "Congratulation"
            document.getElementById("restart").style.display = "none"
            document.getElementById('scoreDisplay').innerHTML = score;
            document.getElementById('scorePopup').style.display = "block";
            document.getElementById('scoreMsgbx').style.display = "block";
            audioCongratulation();

        } else {
            document.getElementById("message").innerHTML = "Better luck next time do you want to replay"
            // document.getElementById('startPopup').style.display=document.getElementById('startMsgbx').style.display ="block";
            document.getElementById('scorePopup').style.display = document.getElementById('scoreMsgbx').style.display = "block";
            // document.getElementById('popupContainer').style.display = "block";
            document.getElementById('scoreDisplay').innerHTML = score;
            document.getElementById("restart").style.display = 'block';
        }

        stopInterval();
        timer = 0;
        return;
    } else {
        setTimeout(function () {
            stopInterval();
            //displayScore();
            nextQuestion();
            removeBackgroundColor();
            timer = 0;
            startInterval();
        }, 2000)
    }
}

//Access pop-up elements and hide display
console.log("document.getElementById('startPopup')", document.getElementById('startPopup'));
// document.getElementById('usernamePopup').style.display = "none";
// document.getElementById('usernameMsgbox').style.display = "none";

// document.getElementById('startPopup').style.display = "none";
// document.getElementById('startMsgbx').style.display = "none";

// document.getElementById('howToPlayPopup').style.display =  "none";
// document.getElementById('howToPlayMsgbx').style.display = "none";

// document.getElementById('scorePopup').style.display = "none";
// document.getElementById('scoreMsgbx').style.display = "none";

//create functions and block of codes for pop-ups

function displayPop() {
    document.getElementById('scorePopup').style.display = document.getElementById('scoreMsgbx').style.display = "none";
}

function startDisplayPopup() {
    document.getElementById('startPopup').style.display = document.getElementById('startMsgbx').style.display = "none";
}

function displayHow() {
    document.getElementById('howToPlayPopup').style.display = document.getElementById('howToPlayMsgbx').style.display = "none";
}

function howToPlay() {
    console.log("how to play");
    document.getElementById('howToPlayPopup').style.display = "block";
    document.getElementById('howToPlayMsgbx').style.display = "block";
}

function howToPlayDisplay() {
    console.log("how to play text");
    document.getElementById('startPopup').style.display = document.getElementById('startMsgbx').style.display = "none";
    document.getElementById('howToPlayPoup').style.display = document.getElementById('howToPlayMsgbx').style.display = "none";
}

function start() {
    console.log("start");

    document.getElementById('usernamePopup').style.display = "block";
    document.getElementById('usernameMsgbox').style.display = "block";

    document.getElementById('startPopup').style.display = "none";
    document.getElementById('startMsgbx').style.display = "none";
    document.getElementById('howToPlayPopup').style.display = "none";
    document.getElementById('howToPlayMsgbx').style.display = "none";
    document.getElementById('scorePopup').style.display = "none";
    document.getElementById('scoreMsgbx').style.display = "none";
}

function restart() {
    window.location.reload();   
}

let user;

function getName() {
    document.getElementById('usernamePopup').style.display = "none";
    document.getElementById('usernameMsgbox').style.display = "none";

    user = document.getElementById("name").value;
    document.getElementById("player-name").innerHTML = user;

    startGame = true;
    startInterval();
}

//Star rating feedback form

const allStar = document.querySelectorAll('.star-rating .star')
const ratingValue = document.querySelector('.star-rating input')
allStar.forEach((item, idx) => {
    item.addEventListener('click', function () {
        let click = 0
        // console.log("idx", idx)
        ratingValue.value = idx + 1

        //if idx is 0 and first star is highlighted and previous is 1 then remove the star
        if (idx === 0 && allStar[idx].classList.contains('bxs-star') && ratingValue.prev == 1) {
            console.log("test");
            allStar[idx].classList.replace('bxs-star', 'bx-star');
            return;
        }

        allStar.forEach(i => {
            i.classList.replace('bxs-star', 'bx-star')
            i.classList.remove('active')
        })
        for (let i = 0; i < allStar.length; i++) {
            if (i <= idx) {
                allStar[i].classList.replace('bx-star', 'bxs-star')
                allStar[i].classList.add('active')
            } else {
                allStar[i].style.setProperty('--i', click)
                click++
            }
        }
        ratingValue.prev = idx + 1
        console.log("ratingValue.prev", ratingValue.prev)
    })

})

function feedback(event) {
    event.preventDefault();
    document.getElementById("feedbackPopup").style.display = "block";
    document.getElementById("feedbackMsgbx").style.display = "block";
}

function displayFeedback() {
    document.getElementById("feedbackPopup").style.display = "none";
    document.getElementById("feedbackMsgbx").style.display = "none";
}