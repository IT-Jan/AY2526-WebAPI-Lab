import React from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import { RollbackOutlined } from '@ant-design/icons';
import axios from "axios";
import { api } from "./common/http-common";


const DetailArticle = () => {
    const { aid } = useParams();
    const id = Number(aid)
    const navigate = useNavigate();

    const [article, setArticle] = React.useState<{
        id: number;
        title: string;
        alltext: string;
    } | null>(null);

    React.useEffect( () => {
        const url = `${api.uri}articles/${id}`
        axios.get(url)
        .then((res) => {
            setArticle(res.data);
        })
    });

    if (!article) {
        return <div>Article Not Found</div>;
    }

    return (
        <>
            <h1>{article.title}</h1>
            <p>{article.alltext}</p>
            <Button type="primary" icon={<RollbackOutlined />} onClick={() => navigate(-1)} />
        </>
    )

}

export default DetailArticle;