http://expressjs.com/
npm install express --save


http://handlebarsjs.com/
https://www.npmjs.com/package/hbs
npm install hbs --save


--Run with:
nodemon server.js -e

--Using GIT (local):
git init        -> creates local repository (creates .git folder)
git status      -> list of files/folders available to GIT
git add <file or folder>  -> add a file to git

touch .gitignore  -> Create a file to let git know witch files and folders to ignore
echo node_modules/ >> .gitignore
echo server.log >> .gitignore
echo package-lock.json >> .gitignore    -> add several files to be ignores

git commit -m "<message>"   -> commit file to local git

--setup ssh key:
https://www.udemy.com/the-complete-nodejs-developer-course-2/learn/v4/t/lecture/5525326

-- Create Github (or other) repository, then:
git remote add origin https://github.com/Paraiso83/node-course-2-web-server.git
git push -u origin master