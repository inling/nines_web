import React from 'react';
import './register.less'
import { Layout, Form, Input, Button, Select, Checkbox,Spin } from 'antd';
import { Link } from 'react-router-dom';
import NHeader from '../../components/nHeader/nHeader';

import API from '../../../common/api/api';
import Tools from '../../../common/utils/tools';
import Key from '../../../common/utils/key';

const { Content } = Layout;
const { Option } = Select;
class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            provision: false,
            nickname:'',
            password:'',
            phone: '',
            smsText: '点击获取',
            smsCount: 0,
            vCode:'2121',
            //Error
            nickError: {},
            passwordError: {},
            phoneError: {},
            vCodeError: {},
            //加载框
            loading: false
        }
        this.checkNick.bind(this);
    }
    checkNick = e => {
        let cur_val = e.target.value;
        if (!cur_val) {
            return;
        }
        this.setState({
            nickname:cur_val
        })
        API.user_api.nickname(cur_val, res => {
            if (res.code === 0) {
                this.setState({ nickError: {} });
            } else {
                this.setState({
                    nickError: {
                        validateStatus: 'error',
                        help: res.message
                    },
                    agreeRequest: false
                });
            }
        })
    }
    checkPassword = e => {
        let cur_val = e.target.value;
        let res = Tools.checkPwd(cur_val);
        if (res.code === 0) {
            let level = Tools.securityLevel(cur_val);
            let errorInfo = {
                validateStatus
                    : level === 'LEVEL_ONE' ? 'error'
                        : level === 'LEVEL_TWO' ? 'warning'
                            : level === 'LEVEL_THREE' ? 'success'
                                : 'validating',
                help
                    : level === 'LEVEL_ONE' ? '安全等级：低'
                        : level === 'LEVEL_TWO' ? '安全等级：中'
                            : level === 'LEVEL_THREE' ? '安全等级：高'
                                : 'validating'
            }
            this.setState({
                password:cur_val,
                passwordError: {
                    validateStatus: errorInfo.validateStatus,
                    help: errorInfo.help
                }
            })
        } else {
            this.setState({
                passwordError: {
                    validateStatus: 'error',
                    help: res.message
                }
            })
        }
    }
    checkPhone = e => {
        let cur_val = e.target.value;
        let res = Tools.checkPhone(cur_val);
        if (!res) {
            this.setState({
                phoneError: {
                    validateStatus: 'error',
                    help: '手机号格式错误'
                }
            })
            return;
        }
        this.setState({
            phone: cur_val,
            phoneError: {}
        })
    } 
    smsClick = async () => {
        let phone = this.state.phone;
        let res = Tools.checkPhone(phone);
        if (!res) {
            return;
        }
        let checkPhoneRes = await API.user_api.phoneIsExist(phone, res => {
            switch(res.code){
                case 0:
                    this.setState({ phoneError: {} })
                    break;
                case 4600:
                    this.setState({
                        phoneError:{
                            validateStatus: 'error',
                            help: res.message
                        }
                    })
                    break;
                default:
                    break;
            }
            return res.code === 0 ? res : false
        })
        if(!checkPhoneRes){
            return;
        }
        await API.user_api.sendSMS(phone, res => {
            if (res.Code !== 'OK') {
                this.setState({
                    phoneError: {
                        validateStatus: 'error',
                        help: res.data.Message
                    },
                    agreeRequest: false
                })
            } else {
                this.setState({
                    smsCount: 60
                })
                let timer = setInterval(() => {
                    this.setState({
                        smsCount: this.state.smsCount - 1
                    })
                    if (this.state.smsCount === 0) {
                        clearTimeout(timer)
                    }
                }, 1000)
            }
        });
    } 
    checkVCode = e => {
        let cur_val = e.target.value
        let res = Tools.checkVCode(cur_val);
        if (!res) {
            this.setState({
                vCodeError: {
                    validateStatus: 'error',
                    help: '验证码格式错误'
                }
            })
            return;
        }
        this.setState({
            vCode: cur_val,
            vCodeError: {}
        })
    }
    checkProvision = e => {
        this.setState({
            provision: e.target.checked
        })
    }
    onFinish = async values => {
        let nickFlag = JSON.stringify(this.state.nickError) === '{}';
        let passwordFlag = this.state.passwordError.validateStatus === 'warning' || this.state.passwordError.validateStatus === 'success';
        let phoneFlag = JSON.stringify(this.state.phoneError) === '{}';
        let codeFlag = JSON.stringify(this.state.vCodeError) === '{}' || this.state.vCodeError.help === '验证码错误';
        let flag = nickFlag && passwordFlag && phoneFlag && codeFlag;
        if (!flag) {
            return;
        }
        this.setState({ loading: true });
        let smsRes = await API.user_api.checkSMS(this.state.vCode, res => {
            switch (res.code) {
                case 0:
                    break;
                case 4500:
                    this.setState({
                        loading: false,
                        vCodeError: {
                            validateStatus: 'error',
                            help: '验证码错误'
                        }
                    })
                    break;
                default:
                    break;
            }
            return res.code === 0 ? res : false;
        })
        if (!smsRes) {
            return;
        }
        let userObj = {
            nickname: this.state.nickname,
            phone: this.state.phone
        }
        let registerRes = await API.user_api.register(userObj, res => {
            return res.code === 0 ? res : false;
        })
        if (!registerRes) {
            return;
        }
        let passwordEncrypt = Key.encrypt(registerRes.pk, this.state.password);
        let userInfo = {
            nickname: this.state.nickname,
            password: passwordEncrypt
        }
        let setRes  = await API.user_api.setPassword(userInfo, res => {
            return res.code === 0 ? res : false;
        })
        if(!setRes){
            return;
        }
        this.setState({ loading: false });
    }
    onFinishFailed = errorInfo => {
        //console.log('Failed:', errorInfo);
    }
    render() {
        return (
            <Spin spinning={this.state.loading} size="large">
                <Layout>
                    <NHeader  history={this.props.history}/>
                    <Content className="register">
                        <div>
                            <div className="title-line">
                                <span className="tit">注册</span>
                            </div>
                        </div>
                        <Form name="dynamic_register_rule"
                            className="register-info"
                            onFinish={this.onFinish}
                            onFinishFailed={this.onFinishFailed}>
                            <Form.Item name="nickname" rules={[{ required: true, message: '请告诉我你的昵称吧' }]} {...this.state.nickError}>
                                <Input
                                    size="large"
                                    placeholder="昵称"
                                    onChange={this.checkNick}
                                />
                            </Form.Item>
                            <Form.Item name="password" rules={[{ required: true, message: '密码不能小于6个字符' }]} {...this.state.passwordError} className="registerPwd">
                                <Input.Password
                                    size="large"
                                    visibilityToggle={false}
                                    placeholder="密码（6-16个字符组成，区分大小写）"
                                    onChange={this.checkPassword}
                                />
                            </Form.Item>
                            <Form.Item {...this.state.phoneError} className="f66Explain">
                                <Input.Group compact>
                                    <Select size="large"
                                        defaultValue="CN"
                                        disabled
                                        style={{ width: '30%', fontSize: '14px' }} >
                                        <Option value="jack">Jack</Option>
                                    </Select>
                                    <Form.Item
                                        name="phone"
                                        rules={[{ required: true, message: '请输入手机号' }]}
                                        noStyle>
                                        <Input
                                            size="large"
                                            placeholder="填写常用手机号"
                                            onChange={this.checkPhone}
                                            style={{ width: '70%', textAlign: 'left', fontSize: '14px' }} />
                                    </Form.Item>
                                </Input.Group>
                            </Form.Item>
                            <Form.Item {...this.state.vCodeError} className="f66Explain">
                                <Input.Group compact>
                                    <Form.Item
                                        name="code"
                                        rules={[{ required: true, message: '请输入验证码' }]}
                                        noStyle>
                                        <Input
                                            size="large"
                                            placeholder="请输入短信验证码"
                                            onChange={this.checkVCode}
                                            style={{ width: '70%' }} />
                                    </Form.Item>
                                    <Button
                                        size="large"
                                        type="primary"
                                        disabled={this.state.smsCount !== 0}
                                        style={{ width: '30%', fontSize: '14px' }}
                                        className='setCenter'
                                        onClick={this.smsClick}
                                    >
                                        {this.state.smsCount === 0 ? this.state.smsText : <span>{this.state.smsCount}</span>}
                                    </Button>
                                </Input.Group>
                            </Form.Item>
                            <Form.Item style={{ marginBottom: 0 }}>
                                <Checkbox checked={this.state.provision} onChange={this.checkProvision}>我已同意</Checkbox>
                                <Link target="_blank" to="/">《NINE博客使用协议》</Link>
                                和
                            <Link target="_blank" to="/" style={{ marginRight: '10px' }}>《NINE隐私政策》</Link>
                            </Form.Item>
                            <div>
                                <Button
                                    block
                                    size="large"
                                    type="primary"
                                    htmlType="submit"
                                    disabled={!this.state.provision}
                                >
                                    注册
                            </Button>
                            </div>
                            <div className="register_direct_login">
                                <Link to="/login">已有账号，直接登录&gt;</Link>
                            </div>
                        </Form>
                    </Content>
                </Layout>
            </Spin>
        )
    }
}

export default Register;