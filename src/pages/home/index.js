import React, {PureComponent} from 'react';
import {
    HomeWrapper,
    HomeLeft,
    HomeRight,
    BackTop,
} from "./style";
import Topic from "./components/Topic";
import List from "./components/List";
import Recommend from "./components/Recommend";
import Writer from "./components/Writer";
import { connect } from 'react-redux';
import * as actionCreators from "./store/actionCreators"

class Home extends PureComponent {
    componentDidMount(){
        this.props.changeHomeData();
        window.addEventListener("scroll", this.props.changeScrollTopShow);
    }

    componentWillUnmount(){
        window.removeEventListener("scroll", this.props.changeScrollTopShow);
    }

    handleScrollTop(){
        window.scrollTo(0, 0);
    }

    render (){
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className="banner-img" src="//upload.jianshu.io/admin_banners/web_images/4448/d9a0fd8f0622d2323161b68d2123c7f28837d28f.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="540" />
                    <Topic/>
                    <List/>
                </HomeLeft>
                <HomeRight>
                    <Recommend/>
                    <Writer/>
                </HomeRight>
                {this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>顶部</BackTop> : null}
            </HomeWrapper>
        );
    }
}

const mapStateToProps = (state) => ({
    showScroll: state.getIn(['home', 'showScroll']),
    articlePage: state.getIn(['home','articlePage'])
});

const mapDispatchToProps = (dispatch) => ({
    changeHomeData(){
        dispatch(actionCreators.getHomeInfo())
    },

    changeScrollTopShow(){
        if (document.documentElement.scrollTop > 100 ){
            dispatch(actionCreators.toggleTopShow(true));
        }else {
            dispatch(actionCreators.toggleTopShow(false));
        }
    }
});


export default connect(mapStateToProps, mapDispatchToProps)(Home);