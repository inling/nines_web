import state from './state';
let initState = state;
const user = (state = initState, action) => {
    switch (action.type) {
        case 'LOGIN_STATUS':
            let { isLogin } = action.data;
            return Object.assign({}, state, { isLogin });
        case 'GET_USER_INFO':
            let { userInfo } = action.data;
            return Object.assign({}, state, { userInfo });
        case 'CHECK_STATUS':
            let { checkStatus } = action.data;
            return Object.assign({}, state, { checkStatus });
        default:
            return state;
    }
}
export default user;