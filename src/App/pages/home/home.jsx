import React from 'react';
import { Layout } from 'antd';
import './home.less';
import NHeader from '../../components/nHeader/nHeader';
import NContent from '../../components/nContent/nContent';

class home extends React.Component {
    render() {
        return (
            <Layout>
                <NHeader  history={this.props.history}/>
                <NContent />
            </Layout>
        )
    }
}

export default home;