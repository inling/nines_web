import React from 'react';
import './login.less'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { Layout, Form, Input, Button, Checkbox } from 'antd';
import {
    QqOutlined,
    WechatOutlined
} from '@ant-design/icons';

import Tools from '../../../common/utils/tools';
import { loginAction } from '../../../store/user/action';

const { Content } = Layout;

const Login = (props) => {
    const [form] = Form.useForm();
    const { checkStatus, dispatchLogin } = props;
    const onLogin = async () => {
        try{
            const values = await form.validateFields();
            await dispatchLogin(values)
            await form.validateFields();
        }catch(err){
            console.log(err)
        }   
    }
    return (
        <Content className="login">
            <div>
                <div className="title-line">
                    <span className="tit">登录</span>
                </div>
            </div>
            <Form
                form={form}
                name="dynamic_login_rule"
                className="login-info">
                <Form.Item
                    name="phone"
                    rules={[
                        () => ({
                            validator(rule, value) {
                                if(checkStatus === '输入验证'){
                                    if (value.trim().length === 0) {
                                        return Promise.reject('请输入注册时用的昵称或者手机号呀')
                                    }
                                    let res1 = Tools.checkPhone(value);
                                    let res2 = Tools.checkNick(value);
                                    if (res1 || res2) {
                                        return Promise.resolve()
                                    } else {
                                        return Promise.reject('格式错误')
                                    }
                                }else if(checkStatus === '登录失败'){                              
                                    return Promise.reject('')
                                }else{
                                    return Promise.reject('')
                                }                         
                            }
                        })
                    ]}
                >
                    <Input
                        size="large"
                        placeholder="你的手机号/昵称" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        () => ({
                            validator(rule, value) {
                                if(checkStatus === '输入验证'){
                                    if (value.trim().length === 0) {
                                        return Promise.reject('喵，你没输入密码么？')
                                    }
                                    let res = Tools.checkPwd(value);
                                    if (res.code === 0) {
                                        return Promise.resolve()
                                    } else {
                                        return Promise.reject('密码错误')
                                    }
                                }else if(checkStatus === '登录失败'){                              
                                    return Promise.reject('密码错误')
                                }else{
                                    return Promise.reject('未知错误')
                                }  
                            }
                        })
                    ]}
                >
                    <Input.Password
                        size="large"
                        visibilityToggle={false}
                        placeholder="密码" />
                </Form.Item>
                <Form.Item className="remember">
                    <Checkbox
                        className="me"
                    >
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
                        onClick ={onLogin}
                    >
                        登录
                            </Button>
                    <Button
                        size="large"
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
    )
}

let mapStateToProps = (state) => {
    return {
        userInfo: state.user.userInfo,
        checkStatus:state.user.checkStatus
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        dispatchLogin: (params) => dispatch(loginAction(params)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);