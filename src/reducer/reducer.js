import { reducer as headerReducer } from "../common/Header/store/index";
import { reducer as homeReducer } from "../pages/home/store/index";
import { reducer as detailReducer } from "../pages/detail/store/index";
import { reducer as loginReducer } from "../pages/login/store/index";
import { reducer as musicReducer } from  "../pages/music/store/index";
import { combineReducers } from 'redux-immutable';


const todoApp = combineReducers({
    header: headerReducer,
    home: homeReducer,
    detail: detailReducer,
    login: loginReducer,
    music: musicReducer
});

export default todoApp;