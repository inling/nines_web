import React from 'react';
import './mainLayout.less';
import { Route } from 'react-router-dom';
import { Layout } from 'antd';
import NHeader from '../components/nHeader/nHeader';
import NFooter from '../components/nFooter/nFooter';
class mainLayout extends React.Component {
    render() {
        return (
            <Layout className = "nlayout">
                <NHeader history={this.props.history}/>
                {
                    this.props.routes.map((route, key) => {
                        if (route.exact) {
                            return <Route key={key} path={route.path} exact render={(props) => (
                                <route.component {...props} routes={route.routes} />
                            )} />
                        } else {
                            return <Route key={key} path={route.path} render={(props) => (
                                <route.component {...props} routes={route.routes} />
                            )} />
                        }
                    })
                }
                <NFooter />
            </Layout>
        )
    }
}
export default mainLayout;