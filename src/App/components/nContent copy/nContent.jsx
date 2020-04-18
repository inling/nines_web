import React  from 'react';
import './nContent.less'
import { Layout, Row, Col, Divider,Affix  } from 'antd';
import Identity from './identity/identity';
import RecentArticles from './recentArticles/recentArticles';
import UserTag from './userTag/userTag';
//import ArticleText from './articleText/articleText';
import ArticleList from './articleList/articleList';

const { Content } = Layout;
class nContent extends React.Component {
    render() {
        const responsive = {
            responsiveLeft: { xs: 0, sm: 0, md: 6, lg: 6, xl: 5, xxl: 4 },
            responsiveRight: { xs: 24, sm: 24, md: 18, lg: 18, xl: 19, xxl: 20 }
        }
        const responsiveContent = {
            responsiveLeft: { xs: 0, sm: 0, md: 1, lg: 1, xl: 1, xxl: 1 },
            responsiveRight: { xs: 24, sm: 24, md: 23, lg: 23, xl: 23, xxl: 23 }
        }
        
        return (
            <Content className='nContent'>
                <Row>
                    <Col {...responsive.responsiveLeft}>
                        <Affix>
                            <div className = 'leftAffix'>
                                <Identity />
                                <RecentArticles />
                                <UserTag />
                            </div>           
                        </Affix>
                    </Col>
                    <Col {...responsive.responsiveRight}>
                        <Row style = {{height:'100%'}}>
                            <Col {...responsiveContent.responsiveLeft}>
                                <Divider type="vertical" style={{ 'height': '100%' }} />
                            </Col>
                            <Col {...responsiveContent.responsiveRight}>
                                <ArticleList />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Content>
        )
    }
}
export default nContent;