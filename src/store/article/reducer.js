import state from './state';
import { PIC_NUM } from '../actionTypes';
let initState = state;
const article = (state = initState, action) => {
    switch (action.type) {
        case PIC_NUM:
            let { pic_num } = action.data;
            return Object.assign({}, state, { pic_num })
        default:
            return state;
    }
}
export default article;