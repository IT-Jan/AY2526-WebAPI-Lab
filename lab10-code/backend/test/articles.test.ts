import Koa from "koa";
import json from "koa-json";
import passport from "koa-passport";
import { router } from "../src/routes/articles";
import request from "supertest";

const app:Koa = new Koa();

app.use(json());
app.use(passport.initialize());
app.use(router.middleware());

app.listen(3000);

describe('Get / - a simple api endpoint', () => {
    test('Get all article', async () => {
        const result = await request(app.callback()).get('/api/v1/articles');
        expect(result.statusCode).toEqual(200);
    })
})

describe('Post / - a simple api endpoint', () => {
    test('Post an article', async () => {
        const articleTestData = { title: "testing", allText: "testing content", authorID: 1 }
        const result = await request(app.callback()).post('/api/v1/articles')
                                .auth('alice', 'alice')
                                .set({ key: 'value' })
                                .send(articleTestData);
        expect(result.statusCode).toEqual(201);
    })
})