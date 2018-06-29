### Dependencies
http://expressjs.com/ <br/>
`npm install express --save`<br/>


http://handlebarsjs.com/ <br/>
https://www.npmjs.com/package/hbs <br/>
`npm install hbs --save`


#### Run with:
`nodemon server.js -e`

---
## GIT:

#### Using GIT (local):
`git init`        -> creates local repository (creates .git folder) <br/>
`git status`      -> list of files/folders available to GIT <br/>
`git add <file or folder>`  -> add a file to git <br/>

`touch .gitignore`  -> Create a file to let git know witch files and folders to ignore <br/>

### Add several files to be ignores:
```
echo node_modules/ >> .gitignore
echo server.log >> .gitignore
echo package-lock.json >> .gitignore
```

`git commit -m "<message>"`   -> commit file to local git

#### Setup ssh key:
https://www.udemy.com/the-complete-nodejs-developer-course-2/learn/v4/t/lecture/5525326

### Create Github (or other) repository, then:
```
git remote add origin https://github.com/Paraiso83/node-course-2-web-server.git
git push -u origin master
```