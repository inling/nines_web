import { PIC_NUM } from '../actionTypes';
export function selectPicNumAction(params){
    return {
        type:PIC_NUM,
        data:{
            pic_num:params.pic_num
        }
    }
}