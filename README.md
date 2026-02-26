**WebAPI-Lab**

<b>Packages installation:</b><br />

        npm i koa koa-bodyparser koa-json koa-logger <br />
        npm i koa-router<br />
        npm i @types/koa<br />
        npm i @types/koa-bodyparser<br />
        npm i @types/koa-json<br />
        npm i @types/koa-logger<br />
        npm i @types/koa-router<br />
        npm i sequelize<br/>
        npm i @types/sequelize<br/>
        npm i pg pg-hstore<br/>
        npm i koa-passport<br/>
        npm i @types/koa-passport<br/>
        npm i passport-http<br/>
        npm i @types/passport-http<br/>

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
