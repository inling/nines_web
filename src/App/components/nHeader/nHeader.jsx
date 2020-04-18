import React from 'react';
import './nHeader.less';

import { Button, Avatar, Dropdown, Menu, Popover, Input } from 'antd';
import {
    EditOutlined,
    CaretDownOutlined,
    HomeFilled,
    LogoutOutlined,
    SettingFilled,
    FontColorsOutlined,
    CompassOutlined,
    FundProjectionScreenOutlined,
    BellOutlined
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Search } = Input;
class nHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: true
        }
    }
    render() {
        const publc_url = process.env.PUBLIC_URL;
        const menu = (
            <Menu className="dropdown-menu">
                <Menu.Item>
                    <Link to="/">
                        <HomeFilled className="dropdown-item-icon" />
                        <span className="dropdown-item-icon-s">我的主页</span>
                    </Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/">
                        <SettingFilled className="dropdown-item-icon" />
                        <span className="dropdown-item-icon-s">设置</span>
                    </Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/">
                        <LogoutOutlined className="dropdown-item-icon" />
                        <span className="dropdown-item-icon-s">退出</span>
                    </Link>
                </Menu.Item>
            </Menu>
        );

        const text = <span>Title</span>;
        const content = (
            <div>
                <p>Content</p>
                <p>Content</p>
            </div>
        );

        return (
            <nav className="nHeader nHeader-default nHeader-fixed-top">
                <div className="width-limit">
                    <Link to="/" className="log">
                        清浅
                    </Link>
                    <Link to="/write" className="write-btn">
                        <Button shape="round" icon={<EditOutlined />} size="large" className="w-btn btn-theme">
                            写文章
                        </Button>
                    </Link>
                    {
                        !this.state.isLogin ? (
                            <div className="unlogin">
                                <Link to="/login" className="login-btn">
                                    登录
                                </Link>
                                <Link to="/register" className="register-btn">
                                    <Button shape="round" size="large" className="w-btn btn-theme">
                                        注册
                                    </Button>
                                </Link>
                            </div>
                        ) : (
                                <div className="user">
                                    <Dropdown overlay={menu} overlayClassName="user-dropdown">
                                        <div>
                                            <Avatar src={publc_url + '/20170729141852_HFzVE.jpeg'} size={40} className="user-ava" />
                                            <CaretDownOutlined className="ava-icon" />
                                        </div>
                                    </Dropdown>
                                </div>
                            )
                    }
                    <div className="style-mode">
                        <Popover placement="bottomRight" arrowPointAtCenter title={text} content={content} trigger="click">
                            <FontColorsOutlined />
                        </Popover>
                    </div>
                    <div className="container">
                        <div className="menu">
                            <ul>
                                <li className="tab">
                                    <Link to="/" className="active">
                                        <CompassOutlined className="m-icon" />
                                        <span className="m-icon-text">发现</span>
                                    </Link>
                                </li>
                                <li className="tab">
                                    <Link to="/">
                                        <FundProjectionScreenOutlined className="m-icon" />
                                        <span className="m-icon-text">关注</span>
                                    </Link>
                                </li>
                                <li className="tab">
                                    <Link to="/">
                                        <BellOutlined className="m-icon" />
                                        <span className="m-icon-text">消息</span>
                                    </Link>
                                </li>
                                <li>
                                    <Search
                                        placeholder="搜索"
                                        onSearch={value => console.log(value)}
                                        className="search-input"
                                        size="large"
                                    />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default nHeader;