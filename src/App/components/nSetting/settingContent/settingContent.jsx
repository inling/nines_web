import React from 'react';
import { Row, Col,Avatar,Divider } from 'antd';
import './settingContent.less';
const publc_url = process.env.PUBLIC_URL;
class settingContent extends React.Component {
    render() {
        return (
            <div className="settingContent">
                <Row style={{    padding: '0 0 0 25px'}}>
                    <Col span={4} style={{padding:" 0 0 20px 0"}}>
                        <Avatar src={publc_url + '/20170729141852_HFzVE.jpeg'} size={106} alt="头像"></Avatar>
                    </Col>
                    <Col span={20}>
                        <h1>Nines</h1>
                        <h6 style={{color:'#777777'}}>
                            博客号：154523
                        </h6>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <Divider orientation="left">基础信息</Divider>
                    </Col>
                    <Col span={12}>
                        1
                    </Col>
                    <Col span={12}>
                        2
                    </Col>
                    <Col span={12}>
                        3
                    </Col>
                    <Col span={12}>
                        4
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <Divider orientation="left">账号设置</Divider>
                    </Col>
                    <Col span={12}>
                        1
                    </Col>
                    <Col span={12}>
                        2
                    </Col>
                </Row>
            </div>
        )
    }
}

export default settingContent;