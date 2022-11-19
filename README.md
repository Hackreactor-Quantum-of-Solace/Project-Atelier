# Project-Atelier
Front End Capstone for HackReactor

Initial install of dependencies:
1. npm install

Anytime you want to run development build
2. In one terminal window build webpack: npm run client-dev
3. In a separate terminal window start live-server: npm run server-dev
4. navigate to live-server designated url in browser (likely http://localhost:8080)

How to set up your own repo:
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
