import React from 'react';
import { Avatar } from 'antd';
import { Link } from 'react-router-dom';

const publc_url = process.env.PUBLIC_URL;
class left extends React.Component {
    render() {
        let logo = publc_url + "/logo.png"
        return (
            <Link target="_blank" to="/" className="logo">
                <Avatar src={logo} alt="logo"></Avatar>
                <span>鹿角</span>
            </Link>
        )
    }
}

export default left;