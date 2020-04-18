import React from 'react';
import './recentArticles.less';
import { Divider, List } from 'antd';
import {
    FireFilled
} from '@ant-design/icons';
class recentArticles extends React.Component {
    render() {
        const data = [
            'Racing car sprays burning fuel into crowd.',
            'Japanese princess to wed commoner.',
            'Australian walks 100km after outback crash.',
            'Man charged over missing wedding girl.',
            'Los Angeles battles huge wildfires.',
        ];
        return (
            <div className="recentArticles">
                <Divider orientation="left" style={{ fontSize: '14px' }}>
                    <FireFilled style={{ color: '#eb2f96' }} />
                    <span style={{ marginLeft: '5px' }}>最近文章</span>
                </Divider>
                <List
                    size="small"
                    style={{
                        padding: '0 8px 0 32px'
                    }}
                    bordered={false}
                    dataSource={data}
                    renderItem={item =>
                        <List.Item ><p
                            style={{
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                whiteSpace: "nowrap"
                            }}
                        >{item}</p></List.Item>
                    } />
            </div>
        )
    }
}
export default recentArticles;