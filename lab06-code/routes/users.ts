import Router, {RouterContext} from 'koa-router';
import bodyParser from 'koa-bodyparser';
import * as model from '../models/users';
import { basicAuth } from '../controllers/auth';

const router = new Router({prefix: '/api/v1/users'});

const getAll = async (ctx: RouterContext, next: any) => {
    let users = await model.getAll();
    if (users.length) {
        ctx.body = users;
    }else {
        ctx.body = {}
    }
    await next();
}

const getById = async (ctx:RouterContext, next: any) => {
    let id = Number(ctx.params.id);
    let users = await model.getAll();

    if (!Number.isInteger(id) || id > users.length || id <= 0) {

        ctx.status = 400;
        ctx.body = "Invild ID";

    }
    else {
        let user = await model.getById(id);
        if (users.length){
            ctx.body = user[0];
        } else {
            ctx.status = 404;
        }
    }
    await next();
}


const createUser = async (ctx:RouterContext, next: any) => {
    const body = ctx.request.body;
    let result = await model.add(body);
    if (result.status == 201) {
        ctx.status = 201;
        ctx.body = body;
    }else {
        ctx.status = 500;
        ctx.body = {err: "insert data failed"}
    }
    await next();
}

const updateUser = async (ctx: RouterContext, next: any) => {
    const body = ctx.request.body;
    const id = Number(ctx.params.id);
    let users = await model.getAll();

    if (!Number.isInteger(id) || id > users.length || id <= 0) {

        ctx.status = 400;
        ctx.body = "Invild ID";

    }
    else {
        let result = await model.update(id,body);
        if(result.status == 201){
            ctx.status = 201;
            ctx.body = body;
        }else{
            ctx.status = 500;
            ctx.body = {err: "update data failed"};
        }
    }

    await next();
}

const deleteUser = async (ctx: RouterContext, next: any) => {
    const id = Number(ctx.params.id);
    let users = await model.getAll();

    if (!Number.isInteger(id) || id > users.length || id <= 0) {

        ctx.status = 400;
        ctx.body = "Invild ID";

    }
    else {
        let result = await model.del(id);
        if(result.status == 201){
            ctx.status = 201;
            ctx.body = {
                message: "Removed user " + id
            };
        }else{
            ctx.status = 500;
            ctx.body = {err: "delete data failed"};
        }
    }
    await next();
}

// List the routes here

router.get('/', basicAuth, getAll);
router.get('/:id', basicAuth, getById);
router.post('/', bodyParser(), createUser);
router.put('/:id', basicAuth, bodyParser(), updateUser);
router.delete('/:id', basicAuth, deleteUser);

export { router };