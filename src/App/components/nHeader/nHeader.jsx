import React from 'react';
import './nHeader.less';
import { Layout, Row, Col, Popover } from 'antd';
import {
    UnorderedListOutlined
} from '@ant-design/icons';
import Left from './left/left.jsx';
import Right from './right/right.jsx';

import API from '../../../common/api/api';

const { Header } = Layout;
class nHeader extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isLogin: false,
            userInfo: {}
        }
    }
    componentDidMount() {
        API.user_api.getUserInfo(res => {
            switch(res.code){
                case 0:
                    this.setState({
                        isLogin:true,
                        userInfo:res.userInfo
                    })
                    break;
                case 5000:
                    this.setState({
                        isLogin:false,
                        userInfo:{}
                    })
                    break;
                default:
                    this.setState({
                        isLogin:false,
                        userInfo:{}
                    })
                    break;
            }
        })
    }
    loginOut = () => {
        localStorage.removeItem('token')
        this.setState({
            isLogin: false,
            userInfo: {}
        })
    }
    toPCTR = () => {
        this.props.history.push('/PCTR');
    }
    render() {
        const responsive = {
            responsiveLeft: { xs: 20, sm: 20, md: 6, lg: 6, xl: 5, xxl: 4 },
            responsiveRight: { xs: 0, sm: 0, md: 18, lg: 18, xl: 19, xxl: 20 },
            responsiveRList: { xs: 4, sm: 4, md: 0, lg: 0, xl: 0, xxl: 0 },
        }
        const content = (
            <div>
                <p>Content</p>
                <p>Content</p>
            </div>
        )
        return (
            <Header className="nHeader">
                <Row>
                    <Col {...responsive.responsiveLeft}>
                        <Left />
                    </Col>
                    <Col {...responsive.responsiveRight}>
                        <Right isLogin={this.state.isLogin} loginOut={this.loginOut} toPCTR={this.toPCTR} userInfo={this.state.userInfo}/>
                    </Col>
                    <Col {...responsive.responsiveRList} style={{ 'textAlign': 'center' }}>
                        <Popover placement="bottomRight" content={content} title="Title" trigger="click" arrowPointAtCenter>
                            <UnorderedListOutlined />
                        </Popover>
                    </Col>
                </Row>
            </Header>
        )
    }
}

export default nHeader;