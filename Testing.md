<h1> PP2 Testing </h1>

![amiresponsive](assets/img/amresponsive.webp)

# Table of Contents
- [Table of Contents](#table-of-contents)
  - [Manual Testing](#manual-testing)
  - [Browser Testing](#browser-testing)
  - [Device Testing](#device-testing)
  - [Validator Testing](#validator-testing)
  - [Lighthouse Testing](#lighthouse-testing)
  - [Accessibility Testing](#accessibility-testing)

<hr>

## Manual Testing

| Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
| ------- | ---------- | ---------- | -------- | ------- |
| **START Button**| When clicked a pop-up window should appear requesting the user to enter their name which is required and upon doing so and clicking on **OK** button, pop-up closes and game starts with the time also beginning to tick. | Clicked START | Pop-up window showed up, input added, OK clicked, game started, timer ticking started. | Pass |
| **How to Play Button**| When clicked a pop-up window should show up in the center of the screen, containing step by step instruction on how to play the game with information on the allocated time to play. Clicking on **GOT IT!** button should close the modal window.| Clicked on How to Play | Pop-up window opened, GOT IT! clicked, window closed | Pass |
| **Mute/Unmute Button** | By default the button is on. When clicked, it should mute and to unmute, it should be clicked upon again. It should work only when the game is on and when the option buttons are clicked. | Clicked Mute/Unmute when game is on | Sound could be turned on/off anytime within game time. | Pass |
| **Option Buttons** | When clicked within 30 seconds of the starting of the game, the button should dislay correct answer by turning green in color and when incorrect button is clicked, it should turn red in color but also display the correct option button in green. | Clicked for all ten image questions, indicated green for correct answer while for wrong answer, it indicated red and also dislayed the correct answer in green | Started game and clicked on one of the options within 30 seconds, results as expected | Pass |
| **Timer** | When game is on and allocated 30 seconds are over without any activity by user, pop-up appears to inform the user that time is up and request the user to start the game again | Stayed inactive within 30 seconds of the start of the game | Pop up apeared indicating time was up and requested to start again. | Pass |
| **Score Indication** | When user starts guessing each image, score is automatically updated. | Started game and observed | Scores were updating | Pass |
| **Click Start Alert pop up** | At the beginning when user tries to directly start clicking on option button to play the game, this pop-u should appear at that time to inform the user that they should click on start button to begin the game. Upon clicking **OK** button, pop-up should disappear | Clicked on option buttons straightaway/Clicked on OK button in pop-up  | Pop-up appeared/ Pop-up disappeared | Pass |
| **Game over pop-up** | When user guesses the last image, game over pop-up should appear to inform the user about their score and to show appredciation. | Last image guessed | Game over pop up apeared with score indication and message | Pass |
| **Congratulations pop-up** | When user's guesses are all correct, at the end of the game congratulation pop-up should appear to show score and apreciation and also a winning sound should be heard if sound button is unmuted. | All guess correct | Congratulations pop up apeared with score indication and message | Pass |
| **Star Rating/Feedback** | User can click to mark stars and also click to unmark stars. Star rating is required to submit the form.  User can type their feedback in the text area provided and this is also required. After giving star rating and filling the form, then only submit button can be clicked. After that, Thank you pop-up should appear | Performed test accordingly | worked as expected otherwise warning showed up/ Could not submit form without star rating and filling feedback form/ Pop up appeared after submit was successful | Pass |
| **Social Media Icons** | When clicked the user will be redirected to the appropriate social media pages in a new window. | Clicked icons | Redirected to the social media page in a new window. | Pass |

<hr>

## Browser Testing 
The website was tested on the following browsers:

Browser Tested | Working Status
---------------|---------------
Chrome | Works as expected
Firefox | Works as expected
Microsoft Edge | Works as expected
Mac OS Safari | Works as expected

<hr>

## Device Testing
The website was tested on the following devices:

Device Tested | Working Status
--------------|---------------
iPhone 14 | Works as expected
Huawei Nova T5 | Works as expected
Samsung S23 fe | Works as expected
Huawei P30 Lite | Works as expected
Samsung A21s | Works as expected
iPhone SE 2020 | Works as expected
iPhone X | Works mostly as expected
iPad Pro (2018)| Works as expected
Samsung Galaxy S20 FE | As expected
iPhone 11 Pro | Mostly as expected
iPhone 11 | Mostly as expected
<hr>

## Validator Testing

### HTML Validation

![HTML Validation](assets/img/htmlvalidator.webp)

**404 HTML**
![HTML Validation](assets/img/404validation.png)

### CSS Validation

![CSS Validation](assets/img/cssvalidator.webp)

### JavaScript Validation
 I got few missing semi-colons errors that were fixed when validating my JavaScript codes in JShint validator. In the configure section in JSHint, I had turned on "New JavaScript features (ES6)" so the validator recognizes ES6 code.

![JS Validation](assets/img/jshintvalidator.webp)

The final metrics returned by JSHint are:

There are 51 functions in this file.
Function with the largest signature take 2 arguments, while the median is 0.
Largest function has 33 statements in it, while the median is 2.
The most complex function has a cyclomatic complexity value of 6 while the median is 1.

The results also show ten unused variables which actually have been used in the main html page as indicated below:

 Variables | Usage in index.html 
--------------|-----------------
257 hideDislayAlert | L235
266 checkAnswer | L82 - L85
347 hideStartPopup | L166
352 hideHowToPlay |  L157
357 dislayHowToPlay | L172
373 start | L169
391 restart | L209
404 getName | L192
473 feedback  | L107
501 closeDisplayFeedback | L222


## Lighthouse Testing

I carried out these tests many times, and I could improve the desktop performance to a greater extent, however for the mobile performance I was quite disappointed. 

**Desktop Performance**
![Lighthouse for desktop](assets/img/lighthouse-desktop.webp)

**Mobile Performance**
![Lighthouse for mobile](assets/img/mobile-lighthouse.webp)


### PSI Testing
Google PageSpeed Insights (PSI), a free tool was also utilized for gauging the performance and accessibility measures of the website. Initially, the performance and speed was not so highly rated generally because of the large images and lack of aria labels. I tried to compress and convert many of the images from jpeg format to png, and I added missing aria labels to elements for better accessibility which significantly improved the performance of my website. Below are the final PSI results:

![PSI results for Desktop](assets/img/psi-desktop.webp)

![PSI results for Mobile Device](assets/img/psi-mobile.webp)

## Accessibility Testing

I fixed few errors it was initially indicating and now it shows no errors.

**Wave Testing**

![wave-results](assets/img/wavetest.webp)