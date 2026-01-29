import Router, {RouterContext} from "koa-router";
import bodyParser from "koa-bodyparser";

const router = new Router({prefix: '/api/v1/articles'});

const articles = [
    {title:'hello article', fullText:'some text here to fill the body', view: 10, creationDate:'2026-01-28'},
    {title:'another article', fullText:'again here is some text here tofill', view: 1, creationDate: '2026-01-28'},
    {title:'coventry university ', fullText:'some news about coventry university', view: 8, creationDate: '2025-12-31'},
    {title:'smart campus', fullText:'smart campus is coming to IVE', view: 5, creationDate: '2026-1-1'}
];

interface Article {
    title: string,
    fullText: string,
    view: number,
    creationDate: string
}

const getAll = async (ctx: RouterContext, next:any) => {
    // Get All Article
    ctx.body = articles;
    await next();
}

const getById = async (ctx: RouterContext, next:any) => {
    // Get Article by Id
    const id = Number(ctx.params.id);

    if (!Number.isInteger(id) || id > articles.length || id <= 0) {
        ctx.status = 400;
        ctx.body = "Invalid ID!";
    } else{
        ctx.body = articles[id-1];
    }
    await next();
}

const createArticle = async (ctx: RouterContext, next:any) => {
    // Create an new article
    let {title, fullText, view, creationDate} = <Article> ctx.request.body;
    let newArticle = {title: title, fullText: fullText, view: view, creationDate: creationDate};

    articles.push(newArticle);

    ctx.status = 201;
    ctx.body = newArticle;

    await next();
}

const updateArticle = async (ctx: RouterContext, next:any) => {
    //Update article by Id
    const id = Number(ctx.params.id);
    if (!Number.isInteger(id) || id > articles.length || id <= 0) {
        ctx.status = 400;
        ctx.body = "Invalid ID!";
    } else{
        let article = <Article> ctx.request.body;

        articles[id-1].title = article.title;
        articles[id-1].fullText = article.fullText;
        articles[id-1].view = article.view;
        articles[id-1].creationDate = article.creationDate;

        ctx.status = 200;
        ctx.body = article;
    }
    await next();
}

const deleteArticle = async (ctx: RouterContext, next:any) => {
    // Delete article by Id

    const id = Number(ctx.params.id);

    if (!Number.isInteger(id) || id > articles.length || id <= 0) {
        ctx.status = 400;
        ctx.body = "Invalid ID!";
    } else{
        articles.splice(id-1, 1);
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