# Project-Atelier
Front End Capstone for HackReactor

Initial install of dependencies:
1. npm install

## To Interact with the API:
1. Copy the example.env file, and rename the copy '.env'
2. Add your API Key to the .env file

Anytime you want to run development build:
1. In one terminal window build webpack: npm run client-dev
2. In a separate terminal window start server: npm run server-dev
3. navigate to designated url in browser (likely http://localhost:3000)

## How to set up your own repo:
1. go to your local folder of this repo (cli: cd <FolderName>)
2. clone it from remote to your local(cli: git clone https://github.com/Hackreactor-Quantum-of-Solace/Project-Atelier.git)
3. set up the upstream to your local main branch(cli: git remote add upstream https://github.com/Hackreactor-Quantum-of-Solace/Project-Atelier.git)
the main branch is used to pull data from remote main branch
4. set up the branch of your own work and change to it(cli: git checkout -b <your branch name>)
if you do it first time it is empty now!
5. change to your local main branch and get data from remote(cli: git pull upstream main)
you should see the change of your main branch if there's some new code on remote main
6. change to your local branch and merge data from your local main branch to your own local branch
git checkout <your branch name>
git merge main
7. write on your own branch and push it to <remote your branch>
git push -u origin <branch name you want to create on remote>
8. pull request to merge your code into main
work it on remote your own branch, find merge button, write commit

## How to set up a new test:
1. create a new file in testing/src with the format *tested_component*.test.js. ex: Overview.test.js

2. set up the imports as in the App.test.js and make sure you have at least a relative path to your tested component where 'App' is

3. documentation for writing tests can be found here https://jestjs.io/

## Ratings and Reviews:

This is the section where the User will be able to read reviews written by purchasers of the product.

Currently, the maximum number of reviews is set to 5 but this can be increased or decreased. Additionally, only two reviews will upload initially. If the user would like to see more reviews, they can click on the 'More Reviews' button (see screenshot below).

<insert screenshot>

The User may also sort the reviews by making a selection from the dropdown menu. The options are (1) by relevance which is the default sorting algorithm or (2) by date by selecting 'newest' or (3) by helpfulness by selecting 'helpful'.  (see screenshot below).

<insert screenshot>

Finally, the User may also click on 'Helpful? Yes' and this will increase the number to reflect the User finding the review helpful. (see screenshot below).

<insert screenshot>