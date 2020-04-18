import React from 'react';
import './right.less';
import { Row, Col, Avatar, Divider, Input, Menu, Dropdown } from 'antd';
import {
    SearchOutlined,
    HomeOutlined,
    EditOutlined,
    TagOutlined,
    UserOutlined,
    PoweroffOutlined,
    SmileOutlined
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
const publc_url = process.env.PUBLIC_URL;
class right extends React.Component {
    constructor(props) {
        super();
    }
    render() {
        const responsive = {
            responsiveLL: { xs: 0, sm: 0, md: 2, lg: 2, xl: 1, xxl: 1 },
            responsiveLeft: { xs: 0, sm: 0, md: 0, lg: 6, xl: 7, xxl: 7 },
            responsiveRight: { xs: 0, sm: 0, md: 20, lg: 14, xl: 14, xxl: 14 },
            responsiveRR: { xs: 24, sm: 24, md: 2, lg: 2, xl: 2, xxl: 2 }
        }
        const {toPCTR,loginOut} =this.props;
        const menu = (
            <Menu>
                <Menu.Item onClick={toPCTR}>
                    <SmileOutlined  />
                    <span>
                        个人中心
                    </span>
                </Menu.Item>
                <Menu.Item onClick={loginOut}>
                    <PoweroffOutlined />
                    <span>
                        注销
                    </span>
                </Menu.Item>
            </Menu>
        )
        return (
            <Row>
                <Col {...responsive.responsiveLL}>
                    <Divider type="vertical" style={{ 'height': '1.5em' }} />
                    <SearchOutlined style={{ 'marginLeft': '5px' }} />
                </Col>
                <Col {...responsive.responsiveLeft}>
                    <Input placeholder="搜索文章" className="searchInput" />
                </Col>
                <Col {...responsive.responsiveRight} style={{ 'textAlign': 'right' }}>
                    {this.props.isLogin ? (
                        <Menu mode="horizontal" selectable={false} className="rrBar">
                            <Menu.Item key="home">
                                <HomeOutlined />
                                    首页
                                </Menu.Item>
                            <Menu.Item key="mail2">
                                <EditOutlined />
                                    归档
                                </Menu.Item>
                            <Menu.Item key="classify">
                                <TagOutlined />
                                    分类
                                </Menu.Item>
                            <Menu.Item key="about">
                                <UserOutlined />
                                    关于
                                </Menu.Item>
                        </Menu>
                    ) : (
                            <></>
                        )}
                </Col>
                <Col {...responsive.responsiveRR} style={{ 'textAlign': 'center' }}>
                    {this.props.isLogin ? (
                        <Dropdown overlay={menu} overlayStyle={{minWidth:'150px'}} placement="bottomRight">
                            <Avatar src={publc_url + '/20170729141852_HFzVE.jpeg'} alt="logo"></Avatar>
                        </Dropdown>
                    ) : (
                            <div>
                                <Link to="/login">登录 / 注册</Link>
                            </div>
                        )}
                </Col>
            </Row>
        )
    }
}

export default right;