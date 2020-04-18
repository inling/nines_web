import React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from 'antd';
import NHeader from '../components/nHeader/nHeader';
class mainLayout extends React.Component {
    render() {
        return (
            <Layout>
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
            </Layout>
        )
    }
}
export default mainLayout;