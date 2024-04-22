//Create array of objects for image questions and answers
const pictureArray = [{
        picture: 'Mount Fuji',
        img: 'assets/img/q-one.webp',
        answer: 'Japan',
        options: ['South Korea', 'Japan', 'China']
    },
    {
        picture: 'Perito Moreno Glacier',
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
        picture: 'Reynisfjara black sand Beaches',
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
    document.getElementById("playerName").innerHTML = user;
}

function displayMuteIcon(){
    document.getElementById("mute").style.display = "block";
}

function displayUnMuteIcon(){
    document.getElementById("unmute").style.display = "block";
}

function hideMuteIcon(){
    document.getElementById("mute").style.display = "none";
}

function hideUnMuteIcon(){
    document.getElementById("unmute").style.display = "none";
}

// mute and unmute sound
document.addEventListener('DOMContentLoaded', function () {
    let audioElements = document.querySelectorAll('audio');
    let muteButton = document.getElementById('muteButton');
    let isMuted = false;

    muteButton.addEventListener('click', function () {
        isMuted = !isMuted; // Toggle mute state
        if (isMuted) {
            displayMuteIcon();
            hideUnMuteIcon();
        } else {
            hideMuteIcon();
            displayUnMuteIcon();
        }

        audioElements.forEach(function (audio) {
            audio.muted = isMuted; // Set muted property of all audio elements
        });
    });
});

function displayScorePopup(){
    document.getElementById('scorePopup').style.display = "block";
    document.getElementById('scoreMsgbx').style.display = "block";
}

function displayScore(){
    document.getElementById('scoreDisplay').innerHTML = score;
}

function timeUp() {
    displayPlayerName();
    document.getElementById("gameText").innerHTML = "";
    document.getElementById('message').innerHTML = "Oops...Time Up! <br>Try your luck again!";
    displayScore();
    displayScorePopup();
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
                // document.getElementById('scorePopup').style.display = "block"
                // document.getElementById('scoreMsgbx').style.display = "block";
                displayScorePopup();
                // document.getElementById('scoreDisplay').innerHTML = score;
                displayScore();
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

function disableButtons(current) {
    document.querySelectorAll('.option').forEach(button => {
        if (button.innerText.toLowerCase() === current.answer.toLowerCase()) {
            button.style.backgroundColor = '#04D010';
        }
        button.disabled = true;
    });
}

function displayAlertPopup() {
    document.getElementById("alertPopup").style.display = "block";
    document.getElementById("alertMsgbx").style.display = "block";
}

function hideDisplayAlert() {
    document.getElementById("alertPopup").style.display = "none";
    document.getElementById("alertMsgbx").style.display = "none";
}

function displayRestart(){
    document.getElementById("restart").style.display = "block";
}

function checkAnswer(e) {
    if (startGame === false) {
        // add alert("Click start button to start");
        displayAlertPopup();
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
        disableButtons(current);
        audioCorrectAnswer();
        score = score + 1;
        scoreValue.innerHTML = score;
    } else {
        document.getElementById(buttonId).style.backgroundColor = '#FF0F39';
        disableButtons(current);
        audioWrongAnswer();
    }


    //if all quetions were answered
    if (questionNumber == 9) {
        //check score if 10
        if (score === 10) {
            displayPlayerName();
            document.getElementById("message").innerHTML = "Congratulations! <br>You nailed it!";
            
            displayRestart();
            document.getElementById("restart").innerHTML = "Go Back";
           
            displayScore();
        
            displayScorePopup();
            audioCongratulation();

        } else {
            displayPlayerName();
            document.getElementById("message").innerHTML = "Nice try! <br>Better luck next time!";
            
            displayScorePopup();
            
            displayScore();
            
            displayRestart();
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
        }, 3000);
    }
}

//Access pop-up elements and hide display

function hideStartPopup() {
    document.getElementById('startPopup').style.display = "none";
    document.getElementById('startMsgbx').style.display = "none";
}

function hideHowToPlay() {
    document.getElementById('howToPlayPopup').style.display = "none";
    document.getElementById('howToPlayMsgbx').style.display = "none";
}

function displayHowToPlay() {
    document.getElementById('howToPlayPopup').style.display = "block";
    document.getElementById('howToPlayMsgbx').style.display = "block";
}

function displayUserNamePopup(){
    document.getElementById('usernamePopup').style.display = "block";
    document.getElementById('usernameMsgbox').style.display = "block";
}
function start() {
    //displaying usernamePopup and usernameMsgbox
    displayUserNamePopup();
}

function restart() {
    window.location.reload();
}

function hideUserNamePopup(){
    document.getElementById('usernamePopup').style.display = "none";
    document.getElementById('usernameMsgbox').style.display = "none";
}

function enterUserName(){
    document.getElementById("error").innerHTML = "Please Enter Your Name";
}

function getName() {
    user = document.getElementById("name").value;
    if (user) {
       hideUserNamePopup();
        startGame = true;
        startInterval();
    } else {
        enterUserName();
    }

}

//Star rating feedback form

const allStar = document.querySelectorAll('.star-rating .star');
const ratingValue = document.querySelector('.star-rating input');
allStar.forEach((item, idx) => {
    item.addEventListener('click', function () {
        let click = 0;
        ratingValue.value = idx + 1;

        //if idx is 0 and first star is highlighted and previous is 1 then remove the star
        if (idx === 0 && allStar[idx].classList.contains('bxs-star') && ratingValue.prev == 1) {
            allStar[idx].classList.replace('bxs-star', 'bx-star');
            ratingValue.prev = "undefined";
            return;
        }

        allStar.forEach(i => {
            i.classList.replace('bxs-star', 'bx-star');
            i.classList.remove('active');
        });
        for (let i = 0; i < allStar.length; i++) {
            if (i <= idx) {
                allStar[i].classList.replace('bx-star', 'bxs-star');
                allStar[i].classList.add('active');
            } else {
                allStar[i].style.setProperty('--i', click);
                click++;
            }
        }
        ratingValue.prev = idx + 1;
    });

});

function removeRatingError() {
    document.getElementById("ratingError").innerHTML = "";
}

function removeStarRating() {
    allStar.forEach(i => {
        i.classList.replace('bxs-star', 'bx-star');
    });
}

function removeFeedbackError() {
    document.getElementById("feedbackError").innerHTML = "";
}

function displayFeedbackPopup() {
    document.getElementById("feedbackPopup").style.display = "block";
    document.getElementById("feedbackMsgbx").style.display = "block";
}

function displayFeedbackErrorMessage(){
    document.getElementById("feedbackError").innerHTML = "Please Enter Feedback";
}

function feedback(event) {
    event.preventDefault();
    let feedbackText = document.getElementById("feedbackText").value;
    if (typeof ratingValue.prev == "undefined" || ratingValue.prev == "undefined") {
        document.getElementById("ratingError").innerHTML = "Please give us a rating";
        return;
    }
    if (feedbackText) {
        removeRatingError();
        removeFeedbackError();
        displayFeedbackPopup();
        removeStarRating();
    } else {
        removeRatingError();
        displayFeedbackErrorMessage();
    }

}

function hideFeedbackPopup(){
    document.getElementById("feedbackPopup").style.display = "none";
    document.getElementById("feedbackMsgbx").style.display = "none";
}

function removeFeedbackText(){
    document.getElementById("feedbackText").value = "";
}

function closeDisplayFeedback() {
    hideFeedbackPopup();
    removeFeedbackText();
}