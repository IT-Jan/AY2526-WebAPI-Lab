**WebAPI-Lab**

<b>Packages installation:</b><br />

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

<br />

<b>Setup the Web Server:</b><br />
    1. npx tsc -init<br />
    2. Create "out" folder<br />
    3. Set up the database<br />
    4. edit "tsconfig.json"<br />
    
        "outDir": "./out",
        ...
        "verbatimModuleSyntax": false,
        
<br />

<b>Running the code:</b><br />
    tsc<br />
    node .\out\ <br />
<br />
