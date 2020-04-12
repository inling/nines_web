import React from 'react';
import './settingMenu.less';
import { Menu } from 'antd';
import {
    HomeOutlined
  } from '@ant-design/icons';
class settingMenu extends React.Component{
    render(){
        return (
            <div className="settingMenu">
                <div className="menuTitle">个人中心</div>
                <Menu mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1">
                        <HomeOutlined />
                        我的信息
                    </Menu.Item>
                </Menu>
            </div>
        )
    }
}

export default settingMenu;