import React from 'react';
import './nSider.less';
import { List, Avatar,Button } from 'antd';
import { Link } from 'react-router-dom';
import { SyncOutlined,PlusOutlined } from '@ant-design/icons';
class nSider extends React.Component {
    render() {
        const publc_url = process.env.PUBLIC_URL;
        const data = [
            'Racing car sprays burning fuel into crowd.',
            'Japanese princess to wed commoner.',
            'Australian walks 100km after outback crash.',
            'Man charged over missing wedding girl.',
            'Los Angeles battles huge wildfires.',
        ];
        const rec_user_header = (
            <div className="rec_user_header">
                <div className="rec_left">
                    推荐作者
                </div>
                <div className="rec_right">
                    <SyncOutlined className="re" />
                    换一批
                </div>
            </div>
        )
        return (
            <div className="nSider">
                <div className="board">
                    <Link to="/">
                        <div className="board-item qMember">
                            清浅会员
                            <div className="q-icon">
                                <img src={publc_url + "/member.png"} alt="" />
                            </div>
                        </div>
                    </Link>
                    <Link to="/">
                        <div className="board-item goodSelect">
                            优选文章
                            <div className="q-icon">
                                <img src={publc_url + "/article.png"} alt="" />
                            </div>
                        </div>
                    </Link>
                    <Link to="/">
                        <div className="board-item music">
                            音乐精选
                            <div className="q-icon">
                                <img src={publc_url + "/music.png"} alt="" />
                            </div>
                        </div>
                    </Link>
                    <Link to="/">
                        <div className="board-item open-community">
                            开源社区
                            <div className="q-icon">
                                <img src={publc_url + "/community.png"} alt="" />
                            </div>
                        </div>
                    </Link>
                </div>
                <Link to="/" className="download-qrbox">
                    <div style={{ float: 'left' }}>
                        <img src={publc_url + "/qrcode.png"} alt="" />
                    </div>

                    <span className="info">
                        <div className="title">下载清浅手机App</div>
                        <div className="description">随时随地发现和创作内容</div>
                    </span>
                </Link>
                <List
                    size="large"
                    split={false}
                    header={rec_user_header}
                    dataSource={data}
                    renderItem={item => (
                        <List.Item>
                            <List.Item.Meta
                                avatar={<Avatar size={48} src="https://c-ssl.duitang.com/uploads/item/201706/03/20170603233333_tkhvr.jpeg" />}
                                title={
                                    <div style={{ display:'flex',justifyContent:'space-between' }}>
                                        <Link to="https://ant.design" style={{fontSize: '14px', color: '#333'}}>飞翔得鱼</Link>
                                        <Link to="https://ant.design" style={{fontSize: '14px', color: '#42c02e'}}>
                                            <PlusOutlined />关注
                                        </Link>
                                    </div>
                                }
                                description={
                                    <span style={{ fontSize: '12px', color: ' #969696' }}>写了104.3k字 · 1.3k喜欢</span>
                                }
                            />
                        </List.Item>
                    )}
                />
                <Button block className="btn-theme-gray">查看全部</Button>
            </div>
        )
    }
}
export default nSider;