import React from 'react';
import './personalCenter.less';
import { Route } from 'react-router-dom';
import { Row, Col } from 'antd';
import SettingMenu from '../../components/nSetting/settingMenu/settingMenu';
class personalCenter extends React.Component {
    render() {
        return (
            <div className="personalCenter">
                <Row style={{ height: '100%' }}>
                    <Col span={5}>
                        <SettingMenu />
                    </Col>
                    <Col span={19}>
                        {
                            this.props.routes.map((route, key) => {
                                if (route.exact) {
                                    return <Route key={key} exact path={route.path} render={props => (
                                        <route.component {...props} routes={route.routes} />
                                    )} />
                                } else {
                                    return <Route key={key} path={route.path} render={props => (
                                        <route.component {...props} routes={route.routes} />
                                    )} />
                                }
                            })
                        }
                    </Col>
                </Row>
            </div>
        )
    }
}
export default personalCenter;