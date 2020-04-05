import React from 'react';
import { Avatar, Row, Col } from 'antd';
import {
    GithubFilled,
    WeiboCircleFilled,
    TwitterCircleFilled,
    QqCircleFilled,
} from '@ant-design/icons';
import './identity.less'
const publc_url = process.env.PUBLIC_URL;
class identity extends React.Component {
    render() {
        let logo = publc_url + "/20170729141852_HFzVE.jpeg"
        return (
            <div className="identity">
                <p>
                    <Avatar src={logo} size={128} className="ava" />
                </p>
                <h1>Nines</h1>
                <h5>一声梧叶一声秋，一点芭蕉一点愁，三更归梦三更后。</h5>
                <h3>
                    <Row justify="center">
                        <Col span={4}>
                            <GithubFilled />
                        </Col>
                        <Col span={4}>
                            <WeiboCircleFilled style={{ color: '#fa5a3c' }} />
                        </Col>
                        <Col span={4}>
                            <TwitterCircleFilled style={{ color: '#1da1f2' }} />
                        </Col>
                        <Col span={4}>
                            <QqCircleFilled />
                        </Col>
                    </Row>
                </h3>
            </div>
        )
    }
}

export default identity;