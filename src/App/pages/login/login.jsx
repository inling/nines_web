import React from 'react';
import './login.less'
import { Layout, Form, Input, Button, Checkbox, message } from 'antd';
import { Link } from 'react-router-dom';
import {
    QqOutlined,
    WechatOutlined
} from '@ant-design/icons';
import NHeader from '../../components/nHeader/nHeader';

import API from '../../../common/api/api';
import Key from '../../../common/utils/key';

const { Content } = Layout;
class login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            provision: true,
            loginError: {
                phoneError: {},
                passwordError: {}
            }
        }
    }
    checkRem = e => {
        this.setState({
            provision: e.target.checked
        })
    }
    onFinish = async values => {
        console.log(values)
        //获取用户公钥，并判断用户是否存在
        let pk = await API.user_api.pk(values.phone, (res) => {
            return res.code === 0 ? res.pk : undefined;
        })
        if (!pk) {
            this.setState({
                loginError: {
                    phoneError: {
                        validateStatus: 'error',
                    },
                    passwordError: {
                        validateStatus: 'error',
                        help: '账号或密码错误'
                    }
                }
            })
            return;
        }
        this.setState({
            loginError: {
                phoneError: {},
                passwordError: {}
            }
        })

        let userInfo = {
            phone: values.phone,
            password: Key.encrypt(pk, values.password)
        }
        await API.user_api.login(userInfo, res => {
            if (res.code === 0) {
                message.success('登陆成功');
                localStorage.setItem('token', res.token);
                document.cookie = `token=${res.token};expires=Sun, 31 Dec 2040 12:00:00 UTC; path=/`;
                this.props.history.push('/');
            } else {
                message.error('登陆失败');
            }
        })
    }
    onFinishFailed = async ({ values, errorFields, outOfDate }) => {
        console.log(values)
    }
    directRegister = () => {
        this.props.history.push('/register');
    }
    render() {
        return (
            <Layout>
                <NHeader  history={this.props.history}/>
                <Content className="login">
                    <div>
                        <div className="title-line">
                            <span className="tit">登录</span>
                        </div>
                    </div>
                    <Form
                        name="dynamic_login_rule"
                        className="login-info"
                        onFinish={this.onFinish}
                        onFinishFailed={this.onFinishFailed}>
                        <Form.Item name="phone" rules={[{ required: true, message: '请输入注册时用的邮箱或者手机号呀' }]} {...this.state.loginError.phoneError}>
                            <Input
                                size="large"
                                placeholder="你的手机号/邮箱" />
                        </Form.Item>
                        <Form.Item name="password" rules={[{ required: true, message: '喵，你没输入密码么？' }]} {...this.state.loginError.passwordError}>
                            <Input.Password
                                size="large"
                                visibilityToggle={false}
                                placeholder="密码" />
                        </Form.Item>
                        <Form.Item className="remember">
                            <Checkbox
                                className="me"
                                checked={this.state.provision}
                                onClick={this.checkRem}>
                                记住我
                                <span className="bigscreen" style={{ color: ' #bbb', marginLeft: '10px' }}>不是自己的电脑上不要勾选此项</span>
                            </Checkbox>
                            <Link target="_blank" to="/">忘记密码?</Link>
                            <Link target="_blank" to="/" style={{ marginRight: '10px' }}>无法验证?</Link>
                        </Form.Item>
                        <div className="btn-box">
                            <Button
                                size="large"
                                type="primary"
                                style={{ width: '45%' }}
                                htmlType="submit">
                                登录
                            </Button>
                            <Button
                                size="large"
                                onClick={this.directRegister}
                                style={{ width: '45%' }}>
                                注册
                            </Button>
                        </div>
                        <div className="sns">
                            <a href="/" className="wechat-href">
                                <WechatOutlined className="wechat" />
                                微信账号登录
                            </a>
                            <a href="/" className="qq-href">
                                <QqOutlined className="qq" />
                                QQ账号登录
                            </a>
                        </div>
                    </Form>
                </Content>
            </Layout>
        )
    }
}

export default login;