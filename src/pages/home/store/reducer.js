import * as contants from "../../../actions/Contants/canstants";
import { fromJS } from 'immutable';

const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList:[],
    articlePage: 1,
    showScroll: false
});

const changeHomeData = (state, action) => {
    return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList)
    });
};

const addArticleList = (state, action) => {
    return state.merge({
        'articleList': state.get('articleList').concat(action.list),
        'articlePage': action.nextPage
    });
};

const toggleShowScroll = (state, action) => {
    return state.set('showScroll', action.show);
};

const homeReducer=  (state = defaultState, action) => {
    switch (action.type) {
        case contants.CHANGE_HOME_DATA:
            return changeHomeData(state, action);
        case contants.ADD_ARTICLE_LIST:
            return addArticleList(state, action);
        case contants.TOGGLE_SCROLL_TOP:
            return toggleShowScroll(state, action);
        default:
            return state;
    }
};

export default homeReducer;