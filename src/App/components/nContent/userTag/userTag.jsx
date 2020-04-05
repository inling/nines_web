import React from 'react';
import './userTag.less';
import { Divider, Tag } from 'antd';
import {
    TagsFilled
} from '@ant-design/icons';
class userTag extends React.Component {
    render() {
        return (
            <div className="userTag">
                <Divider orientation="left" style={{ fontSize: '14px' }}>
                    <TagsFilled style={{ color: '#52c41a' }} />
                    <span style={{ marginLeft: '5px' }}>标签</span>
                </Divider>
                <div className="tagBox">
                    <Tag color="magenta">magenta</Tag>
                    <Tag color="red">red</Tag>
                    <Tag color="volcano">volcano</Tag>
                    <Tag color="orange">orange</Tag>
                    <Tag color="gold">gold</Tag>
                    <Tag color="lime">lime</Tag>
                    <Tag color="green">green</Tag>
                    <Tag color="cyan">cyan</Tag>
                    <Tag color="blue">blue</Tag>
                    <Tag color="geekblue">geekblue</Tag>
                    <Tag color="purple">purple</Tag>
                </div>
            </div>
        )
    }
}
export default userTag;