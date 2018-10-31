import * as constants from "../../../actions/Contants/canstants";
import { fromJS } from 'immutable';

const defaultState = fromJS({
    musicList: []
});


const musicReducer=  (state = defaultState, action) => {
    switch (action.type) {
        case constants.CHANGE_MUSIC_LIST :
            return state.set('musicList', fromJS(action.musicList));
        default:
            return state;
    }
};

export default musicReducer;