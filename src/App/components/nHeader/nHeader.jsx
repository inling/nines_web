import React from 'react';
import './nHeader.less';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

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

import { logoutAction, getUserInfoAction } from '../../../store/user/action';

const { Search } = Input;
class nHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {}
        }
    }
    componentDidMount() {
        this.props.dispatchGetUserInfo();
    }
    toPCTR = () => {
        this.props.history.push('/u');
    }
    render() {
        const { dispatchLogout } = this.props;
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
                    <Link to="/u">
                        <SettingFilled className="dropdown-item-icon" />
                        <span className="dropdown-item-icon-s">设置</span>
                    </Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/" onClick={dispatchLogout}>
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

        let { isLogin } = this.props;
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
                        !isLogin ? (
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
                                <div className="user" >
                                    <Dropdown overlay={menu} overlayClassName="user-dropdown" getPopupContainer={triggerNode => triggerNode.parentNode}>
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

let mapStateToProps = (state) => {
    return {
        isLogin: state.user.isLogin
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        dispatchLogout: () => dispatch(logoutAction()),
        dispatchGetUserInfo: () => dispatch(getUserInfoAction())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(nHeader);