import { REG } from '../../assets/config/reg'
function checkPwd(password) {
    let reg1 = new RegExp(REG.NUM_SHORT);
    let res1 = reg1.test(password);
    if (res1) {
        return { code: 1, message: '密码不能小于6个字符' }
    }
    let reg2 = new RegExp(REG.NUM_LONG);
    let res2 = reg2.test(password);
    if (res2) {
        return { code: 1, message: '密码不能大于16个字符' }
    }
    return { code: 0 }
}

function securityLevel(password) {
    let level_boolean = false;
    REG.SEC_LEVEL.ONE.map(item => {
        let reg = new RegExp(item);
        let res = reg.test(password);
        if (res) {
            level_boolean = true;
        }
        return level_boolean;
    })
    if (level_boolean) {
        return 'LEVEL_ONE';
    }

    REG.SEC_LEVEL.TWO.map(item => {
        let reg = new RegExp(item);
        let res = reg.test(password);
        if (res) {
            level_boolean = true;
        }
        return level_boolean;
    })
    if (level_boolean) {
        return 'LEVEL_TWO';
    }

    REG.SEC_LEVEL.THREE.map(item => {
        let reg = new RegExp(item);
        let res = reg.test(password);
        if (res) {
            level_boolean = true;
        }
        return level_boolean;
    })
    if (level_boolean) {
        return 'LEVEL_THREE';
    }

    return 'LEVEL_NULL';

}

function checkPhone(phone) {
    let reg = new RegExp(REG.PHONE_CN);
    let res = reg.test(phone);
    return res
}

function checkVCode(code) {
    let reg = new RegExp(REG.VCODE);
    let res = reg.test(code);
    return res
}

let Tools = {
    checkPwd,
    securityLevel,
    checkPhone,
    checkVCode
}   

export default Tools;
