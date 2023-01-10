# Atelier
- RPP2207 Front End Capstone Project
- Authors: Nate Foster, Debra Zhang, Michaelangelo Bellinghausen, Mary Ann Hereford
- Quantum of Solace
- Deployed @http://localhost:3000/?id=71704 (parameter id change when product change)

## Widge Leaders:
- Overview - Nate Foster
- Questions and Answers - Michaelangelo Bellinghausen
- Ratings and Reviews - Mary Ann Hereford
- Related Items - Debra Zhang

## Description:
Welcome to Team Quantum of Solace's Atelier FEC Project! This is a front-end shopping page getting data from given API and render page with function below:
- Overview: Image Gallery, star rating by quarter number( e.g. 3.75), zoom in and out production image, quantity selector, add to cart, style selector
- Question and Answers: post questions, question search, question list
- Ratings and reviews: new review form, review list, ratings
- Related Items: See related single product's information, comparison modal pop up, add to outfit list into cookie to record every customer's unique outfit list

## Screenshots
<img width="1599" alt="Screen Shot 2023-01-09 at 10 24 00" src="https://user-images.githubusercontent.com/104948556/211382450-332ab3da-7a16-4b1f-9dbc-b4883e8b18f7.png">
<img width="1599" alt="Screen Shot 2023-01-09 at 10 24 12" src="https://user-images.githubusercontent.com/104948556/211382836-c996ae99-d399-4f8c-a3fe-90f2ef469e4d.png">
<img width="1605" alt="Screen Shot 2023-01-09 at 10 24 29" src="https://user-images.githubusercontent.com/104948556/211383027-29a18ab6-6b8b-48fa-923b-d11ddcf78de9.png">
<img width="1605" alt="Screen Shot 2023-01-09 at 10 24 39" src="https://user-images.githubusercontent.com/104948556/211383155-b87114a3-0159-47e9-8d2e-105c604a2129.png">

## To Interact with the API:
1. Copy the example.env file, and rename the copy '.env'
2. Add your API Key to the .env file

Anytime you want to run development build:
1. In one terminal window build webpack: npm run client-dev
2. In a separate terminal window start server: npm run server-dev
3. navigate to designated url in browser (likely http://localhost:3000)

## Questions and Answers guide section

The Questions and Answers section in this project is intended to be easy to understand from a parent to children perspective. QuestionsAnswers.jsx makes a single API call with the product tag passed into it from App.jsx.

From QuestionsAnswers.jsx the requested data is processed into a master array in state and a visibleQuestions array which is sliced from the incoming data at a specified 'listEnd' number.

The visibleQuestions are passed into QuestionsList.jsx along with the increaseQuestionView method via props.

The bound filterQuestions method is passed into QuestionSearch.jsx via props and passes state data upwards where QuestionsAnswers.jsx uses it to manage the filtered list.

This is demonstrated below.

### Search Functionality Demonstration
![Search Functionality demonstration](readmeImageHosting/SearchFunctionality.gif)


The increaseQuestionView modifies the listEnd state when the MORE ANSWERED QUESTIONS button is pressed, changing props passed down and triggering a rerender.

A similar functionality can be found in Questions.jsx with the showMoreAnswers method where the answerEnd state is modified when the LOAD MORE ANSWERS underlined text is pressed.

both are demonstrated below. The LOAD MORE ANSWERS trigger disappears when no more answers are present for a question.

### More Questions and More Answers Demonstration
![More Questions and More Answers demonstration](readmeImageHosting/moreQuestionsAndAnswers.gif)

One last demonstratable point remains. In the QuestionSearch.jsx there is a span containing the class name "img-magnify-glass", this span contains the unicode for the magnifying glass.

While the icon serves no purpose in and of itself, the icon does contain a tab index for the purposes of intuitive navigation via keyboard. From the typing field, if the user were to tab, they would be taken to this icon before a second press would then take them to the MORE ANSWERED QUESTIONS button.

this is demonstrated below

### Tab Index Demonstration
![Tab Index Demonstration](readmeImageHosting/tabIndexDemo.gif)

Any CSS classes found in the HTML can be found in the styles.css in 1 of three comment titles.

-QUESTIONS ANSWERS: for the main flex container.
-Q&A Search Bar: for the search bar and related styles.
-Questions: for all remaining styles.

### Questions And Answers Relationship Map

App __ QuestionsAnswers __ QuestionsList __ Questions __ Answers
                        |                |_ PostQuestions
                        |_ QuestionSearch