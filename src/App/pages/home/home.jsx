import React from 'react';
import './home.less';

import { Layout, Row, Col } from 'antd';

import NContent from '../../components/nContent/nContent';
import NSider from '../../components/nSider/nSider';

class home extends React.Component {
    render() {
        return (
            <Layout className="home mainContainer">
                <Row>
                    <Col xs={16}>
                        <NContent />
                    </Col>
                    <Col xs={{span:7,offset:1}}>
                        <NSider />
                    </Col>
                </Row>
            </Layout>
        )
    }
}

export default home;