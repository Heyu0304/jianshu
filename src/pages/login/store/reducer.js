import * as constants from "../../../actions/Contants/canstants";
import { fromJS } from 'immutable';

const defaultState = fromJS({
    login: false
});


const loginReducer=  (state = defaultState, action) => {
    switch (action.type) {
        case constants.CHANGE_LOGIN:
            return state.set('login', action.value);
        case constants.LOGOUT:
            return state.set('login', action.value);
        default:
            return state;
    }
};

export default loginReducer;