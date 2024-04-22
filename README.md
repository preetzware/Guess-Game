# Portfolio Project 2
##  Guess the Country
Guess the Country is a free multi-landmark guessing game where a landmark image is shown and three options or hints are given to the player to guess the exact country name corresponding to the landmark within a 30 seconds alloted time. The main objective of this website is to create a fully functional guessing game that will help increase general knowledge about geography, the world and its amazing places, and help improve deductive reasoning, social skills and memory recognition.

![AmIResponsiveImage](assets/img/amresponsive.webp)
[View the live website here.] <a href="https://preetzware.github.io/guess-the-country/" target="_blank">Guess the Country</a>


## Table Of Content
- [User Experience](#user-experience)
  - [Target Audience](#target-audience)
  - [User Stories](#user-stories)
- [Design](#design)
  - [Colour Scheme](#colour-scheme)
  - [Typography](#typography)
  - [Images](#images)
  - [Wireframes](#wireframes)
  - [Mockups](#mockups)
- [Features](#features)
  - [Game Screen](#Game-Screen)
  - [Modals](#Modals)
  - [404 Page](#404-page)
- [Future Features](#future-features)
- [Testing](#testing)
- [Technologies And Languages](#technologies-and-languages)
- [Deployment](#deployment)
  - [Creating A Fork](#creating-a-fork)
  - [Cloning Repository](#cloning-repository)
- [Credits](#credits)
  - [Media](#media)
  - [Code](#code)
  - [Acknowledgements](#acknowledgements)
  - [Comments](#comments)


## User Experience
###  Target Audience
- People who like geography and are fascinated by stunning places and the wonders of the world.
- People who love travelling and might come across places they have visited already or might discover their next travel destination through this game.
- Children who want to play an interesting game that increases their geographical knowledge about countries and places.
- Visually impaired people who can also enjoy this guessing game.
- This game can inspire and motivate any audience to travel and witness the beauty of the world.

###  User Stories

As a first time user, my aim is to:

1. Be able to easily access the website and understand the purpose of its existence.
2. Be able to learn how to play the game and understand the rules or instructions set for guiding me through. 
3. Find good quality images to be able to better see the landmark and better guess the answer through legible options provided.
4. Be able to acknowledge if I answered the correct/wrong answer when clicking on the option buttons.
5. Be able to see the timer to know how much time I have left to guess the answer.
6. Be able to acknowledge my actual score.
7. Be able to acknowledge my final score when the game is over.
8. Be able to provide my experience about the game and my feedback to improve certain features in the game.
9. Be able to rate the game as per my liking.
10. Be able to turn off the game sound.
10. Be able to navigate through the links provided.


## Design

### Color Scheme
The color scheme for this website was greatly inspired by the background image that was downloaded from unsplash.com website and the logo that was downloaded from ios icon gallery. From background color, the other colors were chosen to create a good contrast and a dynamic effect throughout the website. The rest colors were generated from Coolors palette generator and the following pleasing color combinations were created in hex value: 

![Coolers palette generator results](assets/img/coolers.webp)


### Typography

Built-in font family Verdana was used throughout this website, with fallback fonts such as Sans-serif and Tahoma. 

![Fonts used in the project](assets/img/verdana.webp)

## Imagery
The background image was downloaded from <a href="https://unsplash.com/photos/assorted-color-hot-air-balloons-during-daytime-DuBNA1QMpPA" target="_blank">unsplash.com</a> and the logo was taken from <a href="https://www.iosicongallery.com/" target="_blank">ios icon gallery</a> while the landmark images were wisely chosen from Pinterest with the exception of Sénanque Abbey (France) imagery which was taken from Shutterstock website. After Lighthouse testing, all images were converted into webp format to improve the website's performance.

## Wireframes
The first and foremost wireframes for this website were made using paper and pencil. Thereafter they were digitally designed using Balsamiq.com with some light modifications. Guess the Country is a one page website consisting of six modals used to keep vistors engaged. 
1. *Homepage Wireframe*
![Wireframe used for Homepage](assets/img/Wireframe1.jpeg)

2. *Menu Page Wireframe*

![Wireframe used for Menu page](assets/img/Wireframe2.jpeg)

3. *Gallery Page Wireframe*

![Wireframe used for gallery page](assets/img/Wireframe3.jpeg)

4. *Sign-Up Page Wireframe*

![Wireframe used for sign-up page](assets/img/Wireframe4.jpeg)

5. *Thank You Page Wireframe*

![Wireframe used for Thank you page](assets/img/Wireframe5.jpeg)

## Features

### Game Screen Components

**1.** <u>**Logo and Buttons**</u>

Guess the Country is a one page website designed simply, with some amount of interactivity and a touch of elegance. The desktop game screen features the 'guessing cat' logo in the top-center and two buttons on its either side - a start button and a 'How to Play' button. While the mobile game screen features the logo on the very top and the same two buttons below it, styled differently.

![Logo and buttons component](assets/img/Navbar.png)

**2.** <u>**Title**</u>

The title has been styled into a gorgeous text animation effect. Credit goes to <a href="https://alvarotrigo.com/blog/css-text-animations/" target="_blank">alvarotrigo.com</a>

![Title](assets/img/Hamburger.jpg)

**3.** <u>**Sound/Timer/Score Components**</u>

A mute and unmute icon from frontawesome website can be found on left below the title. Special sound effects from Pixabay have been added in addition to the color transform effect on option buttons when clicked. An enthusiastic sound can be heard when the right answer is clicked and if the sound is on unmute mode, else if wrong answer is clicked, a disappointing tune can be heard. The sound can be muted or unmuted as per the visitor's preference.

The Score is positioned on the right side below the title and it will keep updating when the game is on. 

The timer is placed in the middle of the mute/unmute button and the score so that all three major components are visible on the user's screen when playing the game. 

**4.** <u>**Landmark Images**</u>
Landmark images situated below the sound/timer/score components will appear back-to-back when the game will be on.

**5.** <u>**Option Buttons**</u>
Three option buttons are featured below each landmark image.

**4.** <u>**Star Rating and form**</u>

- ### Footer
The footer sits at the bottom of each page, adding spotlight to the operating days and hours of business, the contact information of the business such as email, address and phone number, and the social media links like Facebook, Instagram, Twitter and Yelp to connect to the business.
 
 ![Footer for website](assets/img/Footer.png)


- ## 404 page

Eventually, when clicking on the sign up button in the registration form, the user will land on the thank you page where they will also find their 15% discount code for their first purchase in store.

![Thank you page](assets/img/Thankyou-page.png)

## Future Implementations

At some point in the future, I would like to add a welcome page that will feature two more topics aside landmarks like 'People' and 'Food' so when the user will click in one of these category, the game screen will open up displaying related images and options with all the rest components. I will also add a score track and a star rating track to render the game more interesting.

## Accessibility

Generally, aria labels have been placed in all the pages as well as alt text on images to make it more accessible for users with low vision, users with mobility disabilities and users with memory loss. 

## Technologies Used

1. **Github** - used for version control, site storage and for deploying my project.
2. **Gitpod** - the IDE I have used to write, edit, commit and push my code to Github.
3. **HTML 5** - language used to build the core of my website.
4. **CSS** - the style sheet language I have used to style all the elements of my website.
5. **JavaScript** - used to add interactivity in the website.
5. **DevTools** - used for Lighthouse testing, to test the responsiveness of my website and to check for bugs.
7.  **PageSpeed Insights** - used to test the performance of the website.
6. **Font Awesome** - used to import social media and other icons.
8. **Pinterest** - used to source website's imageries.
10. **TinyPNG** - used to compress my website's imageries.
11. **Favicon.io** - used to create favicon for my website.
12. **Balsamiq** - used to create the wireframes for the initial design process of my website.
13. **Am I Responsive?** - used to test the responsiveness of the website.

## Languages Used
HTML 5, CSS, JavaScript

## Libraries and programmes
Github was used for version control, site storage and for deploying my project to Github pages. Gitpod is the IDE I used to write, edit, commit and push my code to Github.

## Deployment
The website was deployed on Github pages. The steps are as follows:

1. Go to Github repository and open the repository
2. Click on the settings option in the repository 
3. Select the branch from where you want to host your project 
4. Click on the save option and the link will be available in some time
5. Open the project in any browser 

### Local Deployment 

**Steps to clone:**

1. Navigate to GitHub repository.
2. Go to the repository of this project https://github.com/preetzware/Bubble-Tea-Project.git
3. Click on the code button, and copy your preferred clone link.
4. Open the repo in Gitpod by prefixing the URL with: gitpod.io/#.
5. Confirm the workspace creation.

## Testing

### Manual Testing
**Jigsaw CSS Validator was used to validate the CSS codes written for my website**

![CSS Validator results](assets/img/ValidatedCSS.png)

**W3C Validator was used to validate the HTML 5 code written on all pages for my website**

![W3C Overall HTML Validator results](assets/img/HTMLchecker.png)

![W3C HTML Checker results for Homepage](assets/img/index.png)

![W3C HTML Checker results for Menu page](assets/img/Menu-checker.png)

![W3C HTML Checker results for Gallery page](assets/img/Gallery-checker.png)

![W3C HTML Checker results for Sign Up page](assets/img/Form-checker.png)

![W3C HTML Checker results for Thank You page](assets/img/Thankyou-checker.png)

### PSI Testing
Google PageSpeed Insights (PSI), a free tool was utilized for gauging the performance and accessibility measures of the website. Initially, the performance and speed was not so highly rated generally because of the large images and lack of aria labels. I tried to compress and convert many of the images from jpeg format to png, and I added missing aria labels to elements for better accessibility which significantly improved the performance of my website. Below are the final PSI results:

![PSI results for Desktop](assets/img/PSI-1.png)

![PSI results for Mobile Device](assets/img/PSI-2.png)

### Device Testing ###
The website was tested on the following devices:

iPhone 12 Pro

iPhone 14

iPhone 15 Pro

iPad Air 11"

Macbook Pro 13"

The website was tested on the following browsers:

Google Chrome

Safari

Microsoft Edge

**Additional testing was done on a variety of devices and screen sizes.**

| Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
| --- | --- | --- | --- | --- |
| `Buttons` |
|  |  |  |  |  |
| START | When clicked a pop-up window will appear requesting the user to enter their name which is required and upon doing so and clicking on **OK** button, pop-up closes and game starts with time ticking. | Clicked START | Pop-up window show up, input added, OK clicked, game starts, timer ticking starts. | Pass |
| How to Play | When clicked a pop-up window will show up in the center of the screen, containing step by step instruction on how to play the game with information on the allocated time to play. Clicking on **GOT IT!** button will close the modal window.| Clicked How to Play | Pop-up window opens, GOT IT! clicked, window closed | Pass |
| Menu Link | When clicked the user will be redirected to the Menu page. | Clicked link | Redirected to the About page. | Pass |
| Gallery Link | When clicked the user will be redirected to the Gallery page. | Clicked link | Redirected to the Portfolio page. | Pass |
| Sign Up Link | When clicked the user will be redirected to the Sign Up page. | Clicked link | Redirected to the Contact page. | Pass |
| --- | --- | --- | --- | --- |
| `Footer` |
|  |  |  |  |  |
| Social Media Icons | When clicked the user will be redirected to the appropriate social media pages in a new window. | Clicked icon | Redirected to the social media page in a new window. | Pass |
| Address Link | When clicked the user will be directed to the external link in Google maps.| Clicked link | directed to the Google maps exact location. | Pass |
| --- | --- | --- | --- | --- |
| `Home Page` |
|   |   |   |   |
| Menu button | When clicked the user will be redirected to the Menu page. | Clicked button | Redirected to the Menu page. | Pass |
| Offers Link | When clicked the user will be redirected to the Menu page.| Clicked link | Redirected to the Menu page. | Pass |
| 15% Discount Link | When clicked the user will be redirected to the Sign Up page. | Clicked link | Redirected to the Sign Up page. | Pass |
| --- | --- | --- | --- | --- |
| `Menu Page` |
|   |   |   |   |
| 15% Discount Link | When clicked the user will be redirected to the Sign Up page. | Clicked link | Redirected to the Sign Up page. | Pass |
| --- | --- | --- | --- | --- |
| `Sign Up Page` |
|   |   |   |   |
| Sign Up form | Required fields and correct email address format needed in order to submit.| Clicked submit while leaving form unfillled | Form will not submit without a name, a last name and a correctly formatted email address. | Pass |
| Sign Up button | Upon filling the form correctly and clicking on the Sign Up button, the user is redirected to the Thank You page. | Form completed, sign up button clicked | User redirected to Thank You page. | Pass |
|   |   |   |   |


## Known Bugs

When scrolling on mobile devices, the menu page was displaying white space on the right side and I took tutor support to resolve that. It has now been removed.

There was an issue with the responsiveness of the Menu page as well. The images would not wrap when adjusting them in media queries for screen max-size 594px. With tutor's assistance, that was fixed as well. 

At the initial stage of the project there were issues with Codeanywhere not loading up for hours and that was so frustrating because it was time wasting. I then decided to work on VS Code but at a later stage when I got stuck with few sections in my project, I needed tutor support, and then I was advised to shift to Gitpod cloud IDE. Hence, I copied my progress to Gitpod and worked from there to have a workspace that I knew would load for me every time, and also make use of the tutoring facility. 

However, just few days before I complete my project, there was an unusual change with Gitpod - I could not see the changes I made in the browser in realtime, even though I was clearing the cache. This was again so frustrating because I was very close to the finish. I had to use Gitpod from another laptop to be able to complete my work and I had student care support as well.

I came across semantic errors after validating my HTML and CSS codes, and all of them were fixed.

## Credits

- YouTube video tutorials:
 - How to create Star Rating form: 
 <https://www.youtube.com/watch?v=lqrsLpcGTes&t=3s> 
 - Creating page title CSS animation:
 <https://alvarotrigo.com/blog/css-text-animations/>
- My mentor, 
- Brian McConway, for sharing tips and tricks throughout the project.

## Acknowledgements

- Friends, family and colleagues, for testing my project at every stage, and also for their feedback.
- My Mentor for constructive feedback and direction.
- My tutors from Code Institute, for their valuable assistance.
- Student Care for their valuable support.
- The Code Institute, for all the facilities and support.