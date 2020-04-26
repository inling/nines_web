import { push } from 'react-router-redux';
import API from '../../common/api/api';
import Key from '../../common/utils/key';
import { LOGIN_STATUS, CHECK_STATUS, GET_USER_INFO } from '../actionTypes';
export function logoutAction() {
    localStorage.removeItem('token');
    return {
        type: LOGIN_STATUS,
        data: {
            isLogin: false
        }
    }
}

export function loginAction(params) {
    return async (dispatch) => {
        let pk = await API.user_api.pk(params, (res) => {
            return res.code === 0 ? res.pk : undefined;
        })
        if (!pk) {
            dispatch({
                type: CHECK_STATUS,
                data: {
                    checkStatus: '登录失败'
                }
            })
        }
        let userInfo = {
            phone: params.phone,
            password: Key.encrypt(pk, params.password)
        }
        await API.user_api.login(userInfo, res => {
            if (res.code === 0) {
                localStorage.setItem('token', res.token);
                dispatch({
                    type: LOGIN_STATUS,
                    data: {
                        isLogin: true
                    }
                });
                dispatch(push('/'));
            }
        })
    }
}

export function getUserInfoAction() {
    return async (dispatch) => {
        await API.user_api.getUserInfo(res => {
            if (res.code === 0) {
                dispatch({
                    type: LOGIN_STATUS,
                    data: {
                        isLogin: true
                    }
                })
                dispatch({
                    type: GET_USER_INFO,
                    data: {
                        userInfo: res.userInfo
                    }
                })
            }
        })
    }
}

export function redirectAction(params) {
    return async (dispatch)=>{
        let { path } = params
        dispatch(push(path));
    }
}