import React from 'react';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card, Row, Col } from 'antd';
import 'antd/dist/reset.css';

function App() {
    
    const { Meta } = Card;


    return (
        <>
            <Row type="flex" justify="space-around">
                <Col span={6}>

                <Cards
                style={{ width: 300 }}
                cover={
                <img
                    draggable={false}
                    alt="example"
                    src="https://static.scientificamerican.com/sciam/cache/file/B07A9B97-D5F0-4907-963699423F51C6AB_source.jpg?crop=1%3A1%2Csmart&w=1000"
                />
                }
                actions={[
                <SettingOutlined key="setting" />,
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />,
                ]}
                >
                    <Meta
                    avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
                    title="Article 1"
                    description="This is the article 1"
                    />

                </Card>
                </Col>

                <Col span={6}>
                <Card
                style={{ width: 300 }}
                cover={
                <img
                    draggable={false}
                    alt="example"
                    src="https://thumbs.dreamstime.com/b/four-cute-little-emperor-penguin-chicks-stand-snow-near-frozen-iceberg-black-white-birds-look-camera-antarctic-wildlife-367407171.jpg"
                />
                }
                actions={[
                <SettingOutlined key="setting" />,
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />,
                ]}
                >
                    <Meta
                    avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
                    title="Article 2"
                    description="This is the article 2"
                    />

                </Card>
                </Col>

                <Col span={6}>
                <Card
                style={{ width: 300 }}
                cover={
                <img
                    draggable={false}
                    alt="example"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRtqtCNtQ1Dpy9hSRVRdMRdOqN0dTDK57KOw&s"
                />
                }
                actions={[
                <SettingOutlined key="setting" />,
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />,
                ]}
                >
                    <Meta
                    avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
                    title="Article 3"
                    description="This is the article 3"
                    />

                </Card>
                </Col>
            </Row>
            <Row type="flex" justify="space-around">
                <Col span={6}>
                <Card
                style={{ width: 300 }}
                cover={
                <img
                    draggable={false}
                    alt="example"
                    src="https://antarctic-logistics.com/wp-content/uploads/2016/08/24139187889_ddbfb87b83_h.jpg"
                />
                }
                actions={[
                <SettingOutlined key="setting" />,
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />,
                ]}
                >
                    <Meta
                    avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
                    title="Article 4"
                    description="This is the article 4"
                    />

                </Card>
                </Col>
            </Row>
        </>
    )
}

export default App