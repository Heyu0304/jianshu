import * as cantants from "../../../actions/Contants/canstants";
import axios from 'axios';
import { fromJS } from 'immutable';

/*改变搜索下的数组*/
const changeList = (data) => {
    return {
        type: cantants.CHANGE_LIST,
        data: fromJS(data),
        totalPage: Math.ceil(data.length/10)
    }
};

/*点击搜索框的时候*/
export const focusInput = () =>{
    return {
        type: cantants.FOCUS_INPUT,
    }
};

export const blurInput = () => {
    return {
        type : cantants.BLUR_INPUT,
    }
};


/* 获取搜索框下的小列表*/
export const getList = () => {
    return (dispatch) => {
        axios.get('/api/headerList.json').then((res) => {
            const data = res.data;
            dispatch(changeList(data.data));
        }).catch(() =>{
            console.log("error");
        })
    }
};

export const mouseEnter = () => {
    return {
        type: cantants.MOUSE_ENTER
    }
};

export const mouseLeave = () => {
    return {
        type: cantants.MOUSE_LEAVE
    }
};

export const changePage = (nextpage) =>{
    return {
        type: cantants.CHANGE_PAGE,
        page: nextpage
    }
};


