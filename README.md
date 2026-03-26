**WebAPI-Lab**

<b>Setup the Web Server:</b><br />
    1. initialize env: npx tsc -init<br />
    2. Create "out" folder<br />
    3. Copy the Packages installation section to install the packages in VSCode
    3. Set up the database pgAdmin4 & import sql files<br />
    4. edit "tsconfig.json"<br />
    
        "outDir": "./out",
        ...
        "verbatimModuleSyntax": false,
        
<br />

<b>Backend Packages installation:</b><br />

        npm i koa koa-bodyparser koa-json koa-logger
        npm i koa-router
        npm i @types/koa
        npm i @types/koa-bodyparser
        npm i @types/koa-json
        npm i @types/koa-logger
        npm i @types/koa-router
        npm i sequelize
        npm i @types/sequelize
        npm i pg pg-hstore
        npm i koa-passport
        npm i @types/koa-passport
        npm i passport-http
        npm i @types/passport-http
        npm i jsonschema
        npm i @type\jsonschema
        npm i koa-static
        npm i @types/koa-static
        
<br />

<b>Start your backend:</b><br />

        tsc
        node .\out\
    
<br />

<b>Initiate your frontend:</b><br />

        npm init vite@latest frontend
            > React
            > Typescript + React complier
    
<br />

<b>Start your frontend:</b><br />

        npm init vite@latest frontend
            > Ignore files and continue
            > React
            > Typescript + React complier
        cd frontend
        npm run dev
    
<br />

<b>Frontend Packages installation:</b><br />

        npm install -g npm@latest
        npm i antd
        npm i react-router-dom
        npm i axios
        npm i js-base64
        
<br />

<b>Set up the database pgAdmin4 & import sql file (Steps):</b><br />
1. Download provided SQL
2. Open pgAdmin4 and Login (postgres:postgres)
3. Select Tools > Query Tool
   <img width="465" height="283" alt="image" src="https://github.com/user-attachments/assets/20c9cda5-4a75-46a0-8953-b2aa17d39440" />
4. Select Article.sql and User.sql and Click Run
   <img width="1425" height="677" alt="image" src="https://github.com/user-attachments/assets/f59e7293-8210-4758-b882-3b3d49ae1e67" />
6. View and Edit data in table
   <img width="840" height="869" alt="image" src="https://github.com/user-attachments/assets/e346a8f5-2fe4-426d-91db-38b1ecb323ae" />
7. Set the password for users and click save to database
   <img width="825" height="268" alt="image" src="https://github.com/user-attachments/assets/636e7b55-bf9c-4bff-b09d-7887c7266718" />


