import * as actionCantans from "../../../actions/Contants/canstants";
import { fromJS } from 'immutable';



const defaultState = fromJS({
    focused: false,
    list: [],
    mouseIn: false,
    page: 1,
    totalPage: 1
});

const headerReducer=  (state = defaultState, action) => {
    switch (action.type) {
        case actionCantans.FOCUS_INPUT :
            return state.set('focused', true);
        case actionCantans.BLUR_INPUT :
            return state.set('focused', false);
        case actionCantans.CHANGE_LIST :
            return state.merge({
                list: action.data,
                totalPage:action.totalPage
            });
        case actionCantans.MOUSE_ENTER :
            return state.set('mouseIn', true);
        case actionCantans.MOUSE_LEAVE :
            return state.set('mouseIn', false);
        case actionCantans.CHANGE_PAGE :
            return state.set('page', action.page);
        default:
            return state;
    }
};

export default headerReducer;