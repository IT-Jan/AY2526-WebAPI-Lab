import articles from './articles.json';

import { Row, Col, Card } from 'antd';
import { Link } from 'react-router-dom';

const Article = () => {
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

export default Article;