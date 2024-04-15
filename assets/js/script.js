//Create array of objects for image questions and answers
const pictureArray = [{
        picture: 'Mount Fuji',
        img: 'assets/img/q-one.webp',
        answer: 'Japan',
        options: ['South Korea', 'Japan', 'China']
    },
    {
        picture: 'Iguazufalls',
        img: 'assets/img/q-two.webp',
        answer: 'Argentina',
        options: ['USA', 'Chile', 'Argentina']
    },
    {
        picture: 'Gap-of-Dunloe',
        img: 'assets/img/q-three.webp',
        answer: 'Ireland',
        options: ['England', 'Scotland', 'Ireland']
    },
    {
        picture: 'Golden Temple',
        img: 'assets/img/q-four.webp',
        answer: 'India',
        options: ['India', 'Thailand', 'Bali']
    },
    {
        picture: 'Mombasa Tusk',
        img: 'assets/img/q-five.webp',
        answer: 'Kenya',
        options: ['Tanzania', 'Kuwait', 'Kenya']
    },
    {
        picture: 'machu-pichu',
        img: 'assets/img/q-six.webp',
        answer: 'Peru',
        options: ['Mexico', 'Peru', 'Brazil']
    },
    {
        picture: 'under sea waterfall',
        img: 'assets/img/q-seven.webp',
        answer: 'Mauritius',
        options: ['Seychelles', 'Maldives Island', 'Mauritius']
    },
    {
        picture: 'Sénanque-Abbey',
        img: 'assets/img/q-eight.webp',
        answer: 'France',
        options: ['France', 'Spain', 'Italy']
    },
    {
        picture: 'Skogafoss-waterfall',
        img: 'assets/img/q-nine.webp',
        answer: 'Iceland',
        options: ['Greenland', 'Iceland', 'USA']
    },
    {
        picture: 'Twelve-Apostles',
        img: 'assets/img/q-ten.webp',
        answer: 'Australia',
        options: ['USA', 'New Zealand', 'Australia']
    }
];

//created variable questionNumber and assigned 0 to get the first question

let questionNumber = 0;

let startGame = false;

let score = 0;

let setTimer;

let timer = 0;

let user;

//create variable landmarkElement to get img element in index.html

const landmarkElement = document.getElementById('landmark-img');
landmarkElement.src = pictureArray[questionNumber].img;
landmarkElement.alt = pictureArray[questionNumber].picture;

//initial score is 0

let scoreValue = document.getElementById('score');
scoreValue.innerHTML = score;

//initial timer is 0
let displayTimer = document.getElementById("timer");
displayTimer.innerHTML = 0;


let allOptions = document.getElementsByClassName("option");
for (let i = 0; i < allOptions.length; i++) {
    allOptions[i].innerHTML = pictureArray[questionNumber].options[i];
}

//to increment the timer value from 0 to 30 use javascript internal function called setInverval

function stopInterval() {
    clearInterval(setTimer);
}

function removeBackgroundColor() {
    document.querySelectorAll('.option').forEach(button => {
        button.style.backgroundColor = '';
        button.disabled = false;

    });
}

function displayPlayerName() {
    document.getElementById("playerName").innerHTML = user
}


// mute and unmute sound
document.addEventListener('DOMContentLoaded', function() {
    var audioElements = document.querySelectorAll('audio');
    var muteButton = document.getElementById('muteButton');
    var isMuted = false;

    muteButton.addEventListener('click', function() {
        isMuted = !isMuted; // Toggle mute state
        if(isMuted){
            document.getElementById("mute").style.display = "block";
            document.getElementById("unmute").style.display = "none";
        }else{
            document.getElementById("mute").style.display = "none";
            document.getElementById("unmute").style.display = "block";
        }
        
        audioElements.forEach(function(audio) {
            audio.muted = isMuted; // Set muted property of all audio elements
        });
    });
});



function timeUp() {
    displayPlayerName();
    document.getElementById("gameText").innerHTML = "";
    document.getElementById('message').innerHTML = "Oops...Time Up! <br>Try your luck again!";
    document.getElementById('scoreDisplay').innerHTML = score;
    document.getElementById('scorePopup').style.display = "block";
    document.getElementById('scoreMsgbx').style.display = "block";
    return true;
}

function disableButton() {
    document.querySelectorAll('.option').forEach(button => {
        button.disabled = true;
    });
}

function startInterval() {
    setTimer = setInterval(function () {
        //increment timer
        timer = timer + 1;
        displayTimer.innerHTML = timer;
        if (timer === 30) {
            stopInterval();
            let value = timeUp();
            if (value) {
                disableButton();
                return;
            }
            nextQuestion();
            removeBackgroundColor();
            timer = 0;
            if (questionNumber === 9) {
                document.getElementById('scorePopup').style.display = document.getElementById('scoreMsgbx').style.display = "block";
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
        return;
    }

    //if questions are in between 1 to 10 these lines will be executed
    questionNumber = questionNumber + 1;
    landmarkElement.src = pictureArray[questionNumber].img;
    landmarkElement.alt = pictureArray[questionNumber].picture;

    //when question increased then next question options are updated
    for (let i = 0; i < allOptions.length; i++) {
        allOptions[i].innerHTML = pictureArray[questionNumber].options[i];
    }
}

//Audio for correct Answer
function audioCorrectAnswer() {
    const correctAnswer = document.getElementById("correctAnswer");
    correctAnswer.play();
}

//Audio for wrong Answer
function audioWrongAnswer() {
    const wrongAnswer = document.getElementById("wrongAnswer");
    wrongAnswer.play();
}

//Audio for congratulations to best scorer
function audioCongratulation() {
    const congratulation = document.getElementById("congratulations");
    congratulation.play();
}

function checkAnswer(e) {
    if (startGame === false) {
        alert("Click start button to start");
        return;
    }

    //e.innerHTML will get the clicked element text of option
    let answer = e.innerHTML;
    //when any of the options is clicked setTimeOut will be activated
    //questionNumber is passed as array index of pictureArray and the corresponding
    //object is checked
    const current = pictureArray[questionNumber];
    // buttonId is used change the color of the button
    //correct answer turns green else wrong answer red
    let buttonId = e.id;
    //check whether clicked answer is correct with respect the current object
    //in pictureArray
    //answer is the clicked value from the given option
    if (answer === current.answer) {
        document.getElementById(buttonId).style.backgroundColor = '#04D010';
        audioCorrectAnswer();
        score = score + 1;
        scoreValue.innerHTML = score;
    } else {
        document.getElementById(buttonId).style.backgroundColor = '#FF0F39';
        document.querySelectorAll('.option').forEach(button => {
            if (button.innerText.toLowerCase() === current.answer.toLowerCase()) {
                button.style.backgroundColor = '#04D010';
            }
            button.disabled = true;
        });
        audioWrongAnswer();
    }


    //if all quetions were answered
    if (questionNumber == 9) {
        //check score if 10
        if (score === 10) {
            displayPlayerName()
            document.getElementById("message").innerHTML = "Congratulations!"
            document.getElementById("restart").style.display = "block"
            document.getElementById("restart").innerHTML = "Back to Home Page"
            document.getElementById('scoreDisplay').innerHTML = score;
            document.getElementById('scorePopup').style.display = "block";
            document.getElementById('scoreMsgbx').style.display = "block";
            audioCongratulation();

        } else {
            displayPlayerName()
            document.getElementById("message").innerHTML = "Better luck next time do you want to replay"            
            document.getElementById('scorePopup').style.display = document.getElementById('scoreMsgbx').style.display = "block";            
            document.getElementById('scoreDisplay').innerHTML = score;
            document.getElementById("restart").style.display = 'block';
        }

        stopInterval();
        timer = 0;
        return;
    } else {
        setTimeout(function () {
            stopInterval();            
            nextQuestion();
            removeBackgroundColor();
            timer = 0;
            startInterval();
        }, 2000)
    }
}

//Access pop-up elements and hide display

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
    document.getElementById('howToPlayPopup').style.display = "block";
    document.getElementById('howToPlayMsgbx').style.display = "block";
}

function howToPlayDisplay() {
    document.getElementById('startPopup').style.display = document.getElementById('startMsgbx').style.display = "none";
    document.getElementById('howToPlayPoup').style.display = document.getElementById('howToPlayMsgbx').style.display = "none";
}

function start() {
    //we are displaying usernamePopup and usernameMsgbox
    document.getElementById('usernamePopup').style.display = "block";
    document.getElementById('usernameMsgbox').style.display = "block";

    //we are hiding startPopup and startMsgbx, howToPlayPopup, howToPlayMsgbx
    //scorePopup, scoreMsgbx
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


function getName() {
    user = document.getElementById("name").value;
    if (user) {
        document.getElementById('usernamePopup').style.display = "none";
        document.getElementById('usernameMsgbox').style.display = "none";        

        startGame = true;
        startInterval();
    } else {
        document.getElementById("error").innerHTML = "Please Enter Your Name"
    }

}

//Star rating feedback form

const allStar = document.querySelectorAll('.star-rating .star')
const ratingValue = document.querySelector('.star-rating input')
allStar.forEach((item, idx) => {
    item.addEventListener('click', function () {
        let click = 0
        ratingValue.value = idx + 1

        //if idx is 0 and first star is highlighted and previous is 1 then remove the star
        if (idx === 0 && allStar[idx].classList.contains('bxs-star') && ratingValue.prev == 1) {
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
    })

})

function feedback(event) {
    event.preventDefault();
    let feedbackText = document.getElementById("feedbackText").value
    if (feedbackText) {
        document.getElementById("feedbackError").innerHTML = ""
        document.getElementById("feedbackPopup").style.display = "block";
        document.getElementById("feedbackMsgbx").style.display = "block";
    } else {
        document.getElementById("feedbackError").innerHTML = "Please Enter Feedback"
    }

}

function displayFeedback() {
    document.getElementById("feedbackPopup").style.display = "none";
    document.getElementById("feedbackMsgbx").style.display = "none";
}