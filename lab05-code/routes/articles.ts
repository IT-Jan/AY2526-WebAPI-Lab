import Router, {RouterContext} from "koa-router";
import bodyParser from "koa-bodyparser";
import * as model from '../models/articles';

const router = new Router({prefix: '/api/v1/articles'});

// interface Article {
//     title: string,
//     fullText: string,
//     view: number,
//     creationDate: string
// }

const getAll = async (ctx: RouterContext, next:any) => {
    // Get All Article
    let articles = await model.getAll();
    if (articles.length) {
        ctx.body = articles;
    } else{
        ctx.body = {}
    }
    await next();
}

const getById = async (ctx: RouterContext, next:any) => {
    let articles = await model.getAll();
    // Get Article by Id
    const id = Number(ctx.params.id);

    if (!Number.isInteger(id) || id > articles.length || id <= 0) {
        ctx.status = 400;
        ctx.body = "Invalid ID!";
    } else{
        let article = await model.getById(id);
        if (article.length) {
            ctx.body = article[0];
        } else {
            ctx.status = 404;
        }
    }
    await next();
}

const createArticle = async (ctx: RouterContext, next:any) => {
    // Create an new article
    const body = ctx.request.body;
    let result = await model.add(body);
    if (result.status == 201) {
        ctx.status = 201;
        ctx.body = body;
    } else {
        ctx.status = 500;
        ctx.body = {err: "insert data failed"};
    }

    await next();
}

const updateArticle = async (ctx: RouterContext, next:any) => {
    //Update article by Id
    let articles = await model.getAll();
    const id = Number(ctx.params.id);
    if (!Number.isInteger(id) || id > articles.length || id <= 0) {
        ctx.status = 400;
        ctx.body = "Invalid ID!";
    } else{
        //do somethign here
    }
    await next();
}

const deleteArticle = async (ctx: RouterContext, next:any) => {
    // Delete article by Id
    let articles = await model.getAll();
    const id = Number(ctx.params.id);
    
    if (!Number.isInteger(id) || id > articles.length || id <= 0) {
        ctx.status = 400;
        ctx.body = "Invalid ID!";
    } else{
        // do something here
        ctx.status = 200;
        ctx.body = {
            message: `Removed article ${id}`
        }
    }

    await next();
}

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', bodyParser(), createArticle);
router.put('/:id', bodyParser(), updateArticle);
router.delete('/:id', deleteArticle);

export { router };