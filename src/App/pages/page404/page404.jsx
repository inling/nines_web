import React from 'react';
import './page404.less';

const page404 = (props) => {
    const publc_url = process.env.PUBLIC_URL;
    return (
        <div className="page404">
            <img src={publc_url + '/404.jpg'} alt="404" />           
        </div>
    )
}

export default page404;