import React from 'react';
import './articleList.less';
import { Row, Col, List } from 'antd';
import { StarOutlined, LikeOutlined, MessageOutlined } from '@ant-design/icons';
class articleList extends React.Component {
    state = {
        loading: true,
    };
    onChange = checked => {
        this.setState({ loading: !checked });
    }
    render() {
        const listData = [];
        for (let i = 0; i < 23; i++) {
            listData.push({
                href: 'http://ant.design',
                title: `ant design part ${i}`,
                avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                description:
                    'Ant Design, a design language for background applications, is refined by Ant UED Team.',
                content:
                    'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
            });
        }
        const IconText = ({ icon, text }) => (
            <span>
                {React.createElement(icon, { style: { marginRight: 8 } })}
                {text}
            </span>
        );

        return (
            <div className="articleList">
                <Row>
                    <Col span={24}>
                        <div className="result">

                            <div>
                                <List
                                    itemLayout="vertical"
                                    size="large"
                                    pagination={{
                                        onChange: page => {
                                            console.log(page);
                                        },
                                        pageSize: 6,
                                    }}
                                    dataSource={listData}
                                    footer={
                                        <div>
                                            <b>ant design</b> footer part
                                        </div>
                                    }
                                    renderItem={item => (
                                        <List.Item
                                            key={item.title}
                                            actions={[
                                                <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                                                <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                                                <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
                                            ]}
                                            extra={
                                                <img
                                                    width={150}
                                                    alt="logo"
                                                    src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                                                />
                                            }
                                        >
                                            <List.Item.Meta
                                                title={<a href={item.href} style={{fontWeight: '700',fontSize: '18px',color:'#333'}}>{item.title}</a>}
                                                description={item.description}
                                            />
                                            
                                        </List.Item>
                                    )}
                                />,
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}
export default articleList;