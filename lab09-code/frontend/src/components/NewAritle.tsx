import React from "react";
import { Form, Input, Button } from 'antd';
import axios from "axios";
import { api } from "./common/http-common";
import { Base64 } from "js-base64";
import { useNavigate } from "react-router-dom";

const { TextArea } = Input

const NewArticle = () => {
    const navigate = useNavigate();
    const handleFormSumit = (values:any) => {
        const title = values.title;
        const allText = values.context;
        console.log(values, title, allText)
        const authorID = 1;
        const username = "alice";
        const password = "alice";
        const access_token = Base64.encode(`${username}:${password}`) //alice:alice YWxpY2U6YWxpY2U=
        const url = api.uri + 'articles'
        axios.post(url, {
            "title": title,
            "allText": allText,
            "authorID": authorID
        }, {
            headers: {
                'Authorization': `Basic ${access_token}`
            }
        }).then((res) => {
            if (res.status === 201) {
                alert("Successfully Created Artcle!");
                navigate('/article');
            } else {
                alert("Faile Create Article!");
            }
        })

    }
    const contentRules = [ {required: true, message: 'Please input data'} ]
    return (
        <Form name="article" onFinish={(values) => handleFormSumit(values)}>
            <Form.Item name="title" label="Title" rules={contentRules}>
                <Input />
            </Form.Item>
            <Form.Item name="context" label="Context" rules={contentRules} >
                <TextArea rows={4} />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">Submit</Button>
            </Form.Item>
        </Form>
    );
}

export default NewArticle;