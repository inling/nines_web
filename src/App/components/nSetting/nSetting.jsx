import React from 'react';
import './nSetting.less';
import { Row, Col } from 'antd';
import SettingMenu from './settingMenu/settingMenu';
import SettingContent from './settingContent/settingContent';
class nSetting extends React.Component {
    render() {
        return (
            <div className="nSetting">
                <Row style={{height:'100%'}}>
                    <Col span={5}>
                        <SettingMenu />
                    </Col>
                    <Col span={19}>
                        <SettingContent />
                    </Col>
                </Row>
            </div>
        )
    }
}
export default nSetting;