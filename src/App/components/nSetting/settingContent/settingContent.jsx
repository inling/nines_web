import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Avatar, Divider, Button } from 'antd';
import { MobileOutlined, LockOutlined, EditOutlined, ReadOutlined, UserSwitchOutlined } from '@ant-design/icons';
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
                        <Row>
                            <Col span={24} className="user_info_p">
                                <span className="uesr_n">Nines</span>
                                <span className="c-lv">LV2</span>
                                <Link to="/u/editNick">
                                    <EditOutlined className="user_edit" />
                                </Link>
                            </Col>
                            <Col span={24} className="user_info_p">
                                <div className="user_msg">
                                    博客号：
                                    <span className="blog_num">154523</span>
                                </div>
                            </Col>
                            <Col span={24} className="user_art">
                                <Row>
                                    <Col span={4}>
                                        <ReadOutlined  className="user_art_icon"/>
                                        <span className="user_art_icon_msg">12</span>
                                    </Col>
                                    <Col span={4}>
                                        <Divider type="vertical" />
                                        <UserSwitchOutlined  className="user_art_icon" />
                                        <span className="user_art_icon_msg">12</span>
                                    </Col>
                                </Row> 
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="userInfoList">
                    <Col span={24}>
                        <Row className="title">
                            <Col span={2}>
                                基础信息
                            </Col>
                            <Col span={18} style={{ padding: '0 12px' }}>
                                <Divider orientation="left"></Divider>
                            </Col>
                            <Col span={4} style={{ fontSize: '12px', padding: '0 12px', color: '#999' }}>
                                <Link to="/u/editInfo">
                                    <EditOutlined style={{ color: '#1890ff', fontSize: '16px' }} />
                                    <span style={{ marginLeft: '5px' }}>编辑资料</span>
                                </Link>
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
                            <Col span={22} style={{ padding: '0 12px' }}>
                                <Divider orientation="left"></Divider>
                            </Col>
                        </Row>
                    </Col>
                    <Col span={12}>

                        <Row align="middle">
                            <Col span={3}>
                                <MobileOutlined style={{ fontSize: '32px', color: '#999' }} />
                            </Col>
                            <Col span={12} className="msg">
                                <p className="msg_1">修改绑定手机</p>
                                <p className="msg_2">已绑定：
                                        <span>176****5739</span>
                                </p>
                            </Col>
                            <Col span={9} style={{ textAlign: 'center' }}>
                                <Button size="small" style={{ fontSize: '12px' }}>修改手机</Button>
                            </Col>
                        </Row>

                    </Col>
                    <Col span={12}>

                        <Row align="middle">
                            <Col span={3}>
                                <LockOutlined style={{ fontSize: '32px', color: '#999' }} />
                            </Col>
                            <Col span={12} className="msg">
                                <p className="msg_1">修改密码</p>
                                <p className="msg_2">建议定期修改密码，保证账号安全</p>
                            </Col>
                            <Col span={9} style={{ textAlign: 'center' }}>
                                <Button size="small" style={{ fontSize: '12px' }}>修改密码</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default settingContent;