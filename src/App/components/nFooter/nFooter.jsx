import React from 'react';
import './nFooter.less';
import { Layout } from 'antd';
const { Footer } = Layout;
class nFooter extends React.Component {
    render() {
        return (
            <Footer className="nFooter">
                <div className="width-limit">
                    <div style={{ textAlign: 'center' }}>&copy;2018&nbsp;-&nbsp;2019&nbsp;Copyright&nbsp;QingQian</div>
                    <div style={{ textAlign: 'center' }}>
                        <a href="http://www.beian.miit.gov.cn" >
                            <span style={{ color: 'gray', fontSize: '12px' }}>
                                浙ICP备18039541
                            </span>
                        </a>
                    </div>
                </div>
            </Footer>
        )
    }
}

export default nFooter;