// import articles from './articles.json';
import React from 'react';
import { Row, Col, Card, Spin } from 'antd';
import { Link } from 'react-router-dom';
import { api } from './common/http-common';
import { LoadingOutlined } from '@ant-design/icons';

import axios from 'axios';

const Article = () => {
    const [loading, setLoading] = React.useState(true)
    const [articles, setArticles] = React.useState(null)
    React.useEffect( () => {
        axios.get(`${api.uri}articles`)
        .then( (res) => {
            setArticles(res.data)
        }).then(() =>{setLoading(false)})
    }, [])

    if(loading) {
        const antIcon = <LoadingOutlined style={{ fontSize: 48 }} spin />;
        return ( <Spin indicator={antIcon} /> );

    } else {

        if(!articles){

            return (
                <div>There is no article avaiable now.</div>
            )
            
        } else {

            return (
                <Row justify="space-around">
                {
                    articles &&
                    articles.map( ({id, title, fullText}) => (
                        <Col span={8} key={id}>
                            <Card title={title} style={{ width: 300 }}>
                                <p>{fullText}</p>
                                <p></p>
                                <Link to={`/a/${id}`}>Details</Link>
                            </Card>
                        </Col>
                    ))
                }
                </Row>
            );
        }
    }
}

export default Article;