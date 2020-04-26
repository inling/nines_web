const { protocol, ip, port } = require('../../../assets/config/server') 
/**
 * 登陆
 * @param {Object} userInfo - 用户账号密码
 * @param {String} userInfo.nickname - 用户名
 * @param {String} userInfo.upwd - 密码
 * @callback callback 回调函数
 */
exports.login = (userInfo, callback) => {
    return fetch(`${protocol}://${ip}:${port}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=UTF-8'
        },
        mode: 'cors',
        body: JSON.stringify(userInfo)
    }).then(response => response.json()).then(res => {
        return callback(res);
    })
}

/**
 * 注册
 * @param {Object} userInfo - 用户账号密码
 * @param {String} userInfo.nickname - 用户名
 * @param {String} userInfo.upwd - 密码
 * @callback callback 回调函数
 */
exports.register = (userObj, callback) => {
    return fetch(`${protocol}://${ip}:${port}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=UTF-8'
        },
        mode: 'cors',
        body: JSON.stringify(userObj)
    }).then(response => response.json()).then(res => {
        return callback(res)
    })
}

/**
 * 设置密码
 */
exports.setPassword = (userInfo, callback) => {
    return fetch(`${protocol}://${ip}:${port}/setPassword`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=UTF-8'
        },
        mode: 'cors',
        body: JSON.stringify(userInfo)
    }).then(response => response.json()).then(res => {
        return callback(res)
    })
}
/**
 * 验证用户名是否被注册
 * @param {String} nickname 用户名
 * @callback callback 回调函数
 */
exports.nickname = (nickname, callback) => {
    return fetch(`${protocol}://${ip}:${port}/nickname?nickname=${encodeURIComponent(nickname)}`, {
        method: 'GET',
        mode: 'cors'
    }).then(response => response.json()).then(res => {
        return callback(res);
    })
}

/**
 * 获取用户信息
 * @callback callback 回调函数
 */
exports.getUserInfo = (callback) => {
    let token = localStorage.getItem('token')
    return fetch(`${protocol}://${ip}:${port}/getUserInfo`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            'authorization': 'Bearer ' + token
        },
        mode: 'cors'
    }).then(response => response.json()).then(res => {
        return callback(res);
    })
}

/**
 * 获取公钥
 * @param {String} nickname 昵称
 * @callback callback
 */
exports.pk = ({ phone }, callback) => {
    let token = localStorage.getItem('token')
    return fetch(`${protocol}://${ip}:${port}/pk`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            'authorization': 'Bearer ' + token
        },
        body: JSON.stringify({ phone }),
        mode: 'cors'
    }).then(response => response.json()).then(res => {
        return callback(res);
    })
}

/**
 * 发送验证码
 * @callback callback
 */

exports.sendSMS = (phone, callback) => {
    return fetch(`${protocol}://${ip}:${port}/sendSMS`, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json;charset=UTF-8'
        },
        body: JSON.stringify({ phone }),
        mode: 'cors',
    }).then(response => response.json()).then(res => {
        return callback(res);
    })
}

/**
 * 验证验证码
 * @callback callback
 */
exports.checkSMS = (vCode, callback) => {
    return fetch(`${protocol}://${ip}:${port}/checkSMS`, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json;charset=UTF-8'
        },
        body: JSON.stringify({ vCode }),
        mode: 'cors',
    }).then(response => response.json()).then(res => {
        return callback(res);
    })
}

/**
 * 验证手机号
 * @callback callback
 */
exports.phoneIsExist = (phone, callback) => {
    return fetch(`${protocol}://${ip}:${port}/phoneIsExist?phone=${phone}`, {
        method: 'GET',
        mode: 'cors',
    }).then(response => response.json()).then(res => {
        return callback(res);
    })
}

/**
 * 修改身份信息
 * @callback callback
 */
exports.editUserInfo = (userInfo, callback) => {
    let token = localStorage.getItem('token')
    return fetch(`${protocol}://${ip}:${port}/editUserInfo`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            'authorization': 'Bearer ' + token
        },
        body: JSON.stringify(userInfo),
        mode: 'cors'
    }).then(response => response.json()).then(res => {
        return callback(res);
    })
}

/**
 * 获取用户文集
 * @callback callback
 */
exports.getAnthology = (callback) => {
    let token = localStorage.getItem('token')
    return fetch(`${protocol}://${ip}:${port}/getAnthology`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            'authorization': 'Bearer ' + token
        },
        body: JSON.stringify({}),
        mode: 'cors'
    }).then(response => response.json()).then(res => {
        return callback(res);
    })
}
/**
 * 添加文集
 * @callback callback
 */
exports.addAnthology = (anthologyName, callback) => {
    let token = localStorage.getItem('token')
    return fetch(`${protocol}://${ip}:${port}/addAnthology`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            'authorization': 'Bearer ' + token
        },
        body: JSON.stringify({ anthologyName }),
        mode: 'cors'
    }).then(response => response.json()).then(res => {
        return callback(res);
    })
}
/**
 * 删除文集
 * @callback callback
 */
exports.deleteAnthology = (anthologyId, callback) => {
    let token = localStorage.getItem('token')
    return fetch(`${protocol}://${ip}:${port}/deleteAnthology`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            'authorization': 'Bearer ' + token
        },
        body: JSON.stringify({ anthologyId }),
        mode: 'cors'
    }).then(response => response.json()).then(res => {
        return callback(res);
    })
}

/**
 * 添加文章
 * @callback callback
 */
exports.addArticle = (artInfo, callback) => {
    let token = localStorage.getItem('token')
    return fetch(`${protocol}://${ip}:${port}/addArticle`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            'authorization': 'Bearer ' + token
        },
        body: JSON.stringify(artInfo),
        mode: 'cors'
    }).then(response => response.json()).then(res => {
        return callback(res);
    })
}

/**
 * 获取文章
 * @callback callback
 */
exports.getArticle = (anthologyId, callback) => {
    let token = localStorage.getItem('token')
    return fetch(`${protocol}://${ip}:${port}/getArticle`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            'authorization': 'Bearer ' + token
        },
        body: JSON.stringify({ anthologyId }),
        mode: 'cors'
    }).then(response => response.json()).then(res => {
        return callback(res);
    })
}

/**
 * 获取文章文本
 * @callback callback
 */
exports.getArticleText = (articleId, callback) => {
    let token = localStorage.getItem('token')
    return fetch(`${protocol}://${ip}:${port}/getArticleText`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            'authorization': 'Bearer ' + token
        },
        body: JSON.stringify({ articleId }),
        mode: 'cors'
    }).then(response => response.json()).then(res => {
        return callback(res);
    })
}

/**
 * 设置文章文本
 * @callback callback
 */
exports.setArticleText = (artInfo, callback) => {
    let token = localStorage.getItem('token')
    return fetch(`${protocol}://${ip}:${port}/setArticleText`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            'authorization': 'Bearer ' + token
        },
        body: JSON.stringify(artInfo),
        mode: 'cors'
    }).then(response => response.json()).then(res => {
        return callback(res);
    })
}
/**
 * 删除文章文本
 * @callback callback
 */
exports.deleteArticle = (articleId, callback) => {
    let token = localStorage.getItem('token')
    return fetch(`${protocol}://${ip}:${port}/deleteArticle`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            'authorization': 'Bearer ' + token
        },
        body: JSON.stringify({ articleId }),
        mode: 'cors'
    }).then(response => response.json()).then(res => {
        return callback(res);
    })
}
/**v1.0.0 */
