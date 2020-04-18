import React from 'react';
import './nSider.less';
import { Link } from 'react-router-dom';
class nSider extends React.Component {
    render() {
        const publc_url = process.env.PUBLIC_URL;
        return (
            <div className="nSider">
                <div className="board">
                    <Link to="/">
                        <div className="board-item qMember">
                            清浅会员
                            <div className="q-icon">
                                <img src={publc_url+"/member.png"} alt=""/>
                            </div>
                        </div>
                    </Link>
                    <Link to="/">
                        <div className="board-item goodSelect">
                            优选文章
                            <div className="q-icon">
                                <img src={publc_url+"/article.png"} alt=""/>
                            </div>
                        </div>
                    </Link>
                    <Link to="/">
                        <div className="board-item music">
                            音乐精选
                            <div className="q-icon">
                                <img src={publc_url+"/music.png"} alt=""/>
                            </div>
                        </div>
                    </Link>
                    <Link to="/">
                        <div className="board-item open-community">
                            开源社区
                            <div className="q-icon">
                                <img src={publc_url+"/community.png"} alt=""/>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        )
    }
}
export default nSider;