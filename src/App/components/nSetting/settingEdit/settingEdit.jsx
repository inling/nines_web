import React from 'react';
import { Link } from 'react-router-dom';
import {
    Row, Col, Form, Input, Button, Radio, DatePicker, Select
} from 'antd';
import { LeftCircleOutlined } from '@ant-design/icons';
import './settingEdit.less';
import API from '../../../../common/api/api';
const { TextArea } = Input;
const provinceData = ['Zhejiang', 'Jiangsu'];
const cityData = {
    Zhejiang: ['Hangzhou', 'Ningbo', 'Wenzhou'],
    Jiangsu: ['Nanjing', 'Suzhou', 'Zhenjiang'],
};
class settingEdit extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cities: cityData[provinceData[0]],
            secondCity: cityData[provinceData[0]][0],
        };
    }
    handleProvinceChange = value => {
        this.setState({
            cities: cityData[value],
            secondCity: cityData[value][0],
        });
    };

    onSecondCityChange = value => {
        this.setState({
            secondCity: value,
        });
    };

    onFinish = values => {
        var aa= new Date(values.birthday.toString());
        values.birthday = aa.getTime()/1000;
        API.user_api.editUserInfo(values,function(res){
            console.log(res)
        })
    }
    render() {
        const layout = {
            labelCol: { span: 4 },
            wrapperCol: { span: 8 },
        };
        const tailLayout = {
            wrapperCol: { offset: 4, span: 20 },                                                                                                                                                                    
        };
        return (
            <div className="settingEdit">
                <Row>
                    <Col span={1}>
                        <Link to="/u">
                            <LeftCircleOutlined style={{ fontSize: '30px', marginTop: '4px' }} />
                        </Link>                       
                    </Col>
                    <Col span={23}>
                        <span style={{ fontSize: '24px', marginLeft: '10px' }}>
                            编辑资料
                        </span>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form className="editForm" initialValues={{'gender':1}} onFinish={this.onFinish} {...layout}>
                            <Form.Item label="昵称">
                                <span style={{color:'#777'}}>鹿角</span>
                            </Form.Item>
                            <Form.Item label="个性签名" name="signature">
                                <TextArea />
                            </Form.Item>
                            <Form.Item label="性别" name="gender">
                                <Radio.Group >
                                    <Radio value={1}>男</Radio>
                                    <Radio value={0}>女</Radio>
                                </Radio.Group>
                            </Form.Item>
                            <Form.Item label="生日" name="birthday">
                                <DatePicker />
                            </Form.Item>
                            <Form.Item label="所在地" name="location">
                                <Select>
                                    <Select.Option value={1}>123</Select.Option>
                                    <Select.Option value={2}>23</Select.Option>
                                </Select>
                            </Form.Item>
                            <Form.Item {...tailLayout}>
                                <Button type="primary" htmlType="submit">
                                确定
                                </Button>
                            </Form.Item>
                        </Form>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default settingEdit;