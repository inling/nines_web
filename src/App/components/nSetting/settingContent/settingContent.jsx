import React from 'react';
import { Row, Col, Avatar, Divider, Button } from 'antd';
import { MobileOutlined, LockOutlined,EditOutlined } from '@ant-design/icons';
import './settingContent.less';
const publc_url = process.env.PUBLIC_URL;
class settingContent extends React.Component {
    render() {
        return (
            <div className="settingContent">
                <Row style={{ padding: '0 0 0 25px' }}>
                    <Col span={4} style={{ padding: " 0 0 20px 0" }}>
                        <Avatar src={publc_url + '/20170729141852_HFzVE.jpeg'} size={106} alt="头像"></Avatar>
                    </Col>
                    <Col span={20}>
                        <h1>Nines</h1>
                        <h4 style={{ color: '#777777' }}>
                            博客号：154523
                        </h4>
                    </Col>
                </Row>
                <Row className="userInfoList">
                    <Col span={24}>
                        <Row className="title">
                            <Col span={2}>
                                基础信息
                            </Col>
                            <Col span={18}  style={{ padding:'0 12px'}}>
                                <Divider orientation="left"></Divider>
                            </Col>
                            <Col span={4} style={{ fontSize: '12px',padding:'0 12px',color:'#999'}}>
                                <EditOutlined style={{color:'#1890ff',fontSize:'14px'}}/>
                                编辑资料
                            </Col>
                        </Row>
                    </Col>
                    <Col span={12}>
                        <p>年龄：
                            <span>25岁</span>
                        </p>
                    </Col>
                    <Col span={12}>
                        <p>性别：
                            <span>男</span>
                        </p>
                    </Col>
                    <Col span={12}>
                        <p>所在地：
                            <span>上海</span>
                        </p>
                    </Col>
                    <Col span={12}>
                        <p>个性签名：
                            <span>你还没编辑个性签名。</span>
                        </p>
                    </Col>
                </Row>
                <Row className="accountInfo">
                    <Col span={24}>
                        <Row className="title">
                            <Col span={2}>
                                账号设置
                            </Col>
                            <Col span={22}   style={{ padding:'0 12px'}}>
                                <Divider orientation="left"></Divider>
                            </Col>
                        </Row>
                    </Col>
                    <Col span={12}>
                        <p>
                            <Row align="middle">
                                <Col span={3}>
                                    <MobileOutlined style={{ fontSize: '32px', color: '#999' }} />
                                </Col>
                                <Col span={13}>
                                    <p className="p1">修改绑定手机</p>
                                    <p className="p2">已绑定：
                                        <span>176****5739</span>
                                    </p>
                                </Col>
                                <Col span={8}  style={{ textAlign: 'center'}}>
                                    <Button size="small"  style={{ fontSize: '12px' }}>修改手机</Button>
                                </Col>
                            </Row>
                        </p>
                    </Col>
                    <Col span={12}>
                        <p>
                            <Row align="middle">
                                <Col span={3}>
                                    <LockOutlined style={{ fontSize: '32px', color: '#999' }} />
                                </Col>
                                <Col span={13}>
                                    <p className="p1">修改密码</p>
                                    <p className="p2">建议定期修改密码，保证账号安全</p>
                                </Col>
                                <Col span={8} style={{ textAlign: 'center'}}>
                                    <Button  size="small" style={{ fontSize: '12px' }}>修改密码</Button>
                                </Col>
                            </Row>

                        </p>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default settingContent;