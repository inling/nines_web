import React from 'react';
import { Row, Col, Form, Input, Button } from 'antd';
import { LeftCircleOutlined } from '@ant-design/icons';
import './settingName.less';

class settingName extends React.Component {
    render() {
        const layout = {
            labelCol: { span: 4 },
            wrapperCol: { span: 8 },
        };
        const tailLayout = {
            wrapperCol: { offset: 4, span: 20 },
        };
        return (
            <div className="settingName">
                <Row>
                    <Col span={1}>
                        <LeftCircleOutlined style={{ fontSize: '30px', marginTop: '4px' }} />
                    </Col>
                    <Col span={23}>
                        <span style={{ fontSize: '24px', marginLeft: '10px' }}>
                            修改昵称
                        </span>

                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <div className="has-bind-title">
                            <p>当前昵称：<span id="oldNick">我是一颗小虎牙</span></p>
                            <div className="has-bind-recharge">
                                <p>本次修改
                                    <span>免费</span>
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form
                            {...layout}
                            name="basic"
                        >
                            <Form.Item
                                label="新昵称"
                                name="username"
                                rules={[{ required: true, message: 'Please input your username!' }]}
                            >
                                <Input size="large" />
                            </Form.Item>

                            <Form.Item {...tailLayout}>
                                <Button type="primary" htmlType="submit">
                                    确认
                            </Button>
                            </Form.Item>
                        </Form>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="nick-tips">
                            <p className="nick-tips-title">修改规则</p>
                            <p>1.每人拥有一次免费机会，往后每次改名需要49,000金豆/490,000银豆。</p>
                            <p>2.昵称长度建议在6-8个字为佳，最大长度不超过20个字符。</p>
                            <p>3.昵称只允许输入中英文、数字及符号“-”、“丶”、“【”、“】”。</p>
                            <p>4.昵称修改成功后，若经人工审核违规将被重置，且涉及费用不予退还。</p>
                            <p>5.如遇其它问题导致昵称修改失败，请联系客服。</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="nick-tips nick-tips-law">
                            <p className="nick-tips-title">温馨提示</p>
                            <p>根据《互联网用户账号名称管理规定》第六条规定，任何机构或个人注册和使用的互联网用户账号名称，不得有下列情形：</p>
                            <p>（一）违反宪法或法律法规规定的；</p>
                            <p>（二）危害国家安全，泄露国家机密，颠覆国家政权，破坏国家统一的；</p>

                            <div id="moreLaw" className="more-law">
                                <p>（三）损害国家荣誉和利益的，损害公共利益的；</p>
                                <p>（四）煽动民族仇恨、民族歧视，破坏民族团结的；</p>
                                <p>（五）破坏国家宗教政策，宣扬邪教和封建迷信的；</p>
                                <p>（六）散布谣言，扰乱社会秩序，破坏社会稳定的；</p>
                                <p>（七）散步淫秽、色情、赌博、暴力、凶杀、恐怖或者教唆犯罪的；</p>
                                <p>（八）侮辱或者诽谤他人，侵害他人合法权益的；</p>
                                <p>（九）含有法律、行政法规禁止的其他内容的。</p>
                                <p> 若出现上述情形或违反虎牙平台相关规定，平台将有权对昵称进行重置。</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default settingName;