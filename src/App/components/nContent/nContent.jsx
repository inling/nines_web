import React from 'react';
import './nContent.less'

import { Link } from 'react-router-dom';
import { Layout, Carousel } from 'antd';
import Listbox from './listbox/listbox';

const { Content } = Layout;
class nContent extends React.Component {
    render() {
        const publc_url = process.env.PUBLIC_URL;
        return (
            <Content className='nContent'>
                <div className="indexCarousel">
                    <Carousel effect="fade" dots={false}>
                        <div>
                            <Link to="http://image.baidu.com">
                                <img src={publc_url + '/125722eh9nj87bq20eq2e8.jpg'} alt="" />
                            </Link>
                        </div>
                    </Carousel>
                </div>
                <Listbox />
            </Content>
        )
    }
}
export default nContent;