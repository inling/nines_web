import React from 'react';
import { Layout } from 'antd';
import NHeader from '../../components/nHeader/nHeader';
import NSetting from '../../components/nSetting/nSetting';
class personalCenter extends React.Component{
    render(){
        return(
            <Layout>
                <NHeader history={this.props.history}/>
                <NSetting />
            </Layout>
        )
    }
}
export default personalCenter;