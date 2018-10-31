import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrapper,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoList,
    SearchInfoItem
} from "./style";
import * as actions from "./store/actionCreators";
import { actionCreators as loginActionCreators } from '../../pages/login/store'


class Header extends Component{
    getListArea(){
        const {
            focused, list, page, mouseIn, totalPage,
            handleMouseEnter, handleMouseLeave,handleChangePage } = this.props;
        const newList = list.toJS();
        const  pageList = [];
        if (newList.length){
            for (let i = ((page - 1)* 10); i < page * 10 && i < newList.length; i++){
                pageList.push(
                    <SearchInfoItem key={ newList[i] }>{newList[i]}</SearchInfoItem>
                )
            }
        }

        if(focused || mouseIn){
            return (
                <SearchInfo
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch onClick={() => handleChangePage(page, totalPage, this.spinIcon)}>
                            <i ref={(icon) => {this.spinIcon = icon }} className="iconfont spin">&#xe851;</i>
                            换一批
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {pageList}
                    </SearchInfoList>
                </SearchInfo>
            );
        }else {
            return null;
        }
    }
    render(){
        const { focused, handleInputFocus, handleInputBlur,list, login, logout } = this.props;
        return(
            <div>
                <HeaderWrapper>
                    <Link to="/">
                        <Logo/>
                    </Link>
                    <Nav>
                        <NavItem className="left active">首页</NavItem>
                        <NavItem className="left">下载APP</NavItem>
                        {
                            login ?
                                <NavItem  oncClick={logout} className="right">退出</NavItem> :
                                <Link to="/login"><NavItem className="right">登录</NavItem></Link>
                        }
                        <NavItem className="right">
                            <i className="iconfont">&#xe636;</i>
                        </NavItem>
                        <SearchWrapper>
                            <CSSTransition
                                classNames="slide"
                                in={focused}
                                timeout={200}
                            >
                                <NavSearch
                                    className={focused ? 'focused': ''}
                                    onFocus={() => handleInputFocus(list)}
                                    onBlur={handleInputBlur}
                                >
                                </NavSearch>
                            </CSSTransition>
                            <i className={focused ? 'focused iconfont zoom': 'iconfont zoom'}>&#xe617;</i>
                            {this.getListArea()}
                        </SearchWrapper>
                    </Nav>
                    <Addition>
                        <Button className="writting">
                            <i className="iconfont">&#xe624;</i>
                            写文章
                        </Button>
                        <Button className="reg">注册</Button>
                    </Addition>
                </HeaderWrapper>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return({
        focused: state.getIn(['header', 'focused']),
        list: state.getIn(['header','list']),
        page: state.getIn(['header', 'page']),
        mouseIn: state.getIn(['header', 'mouseIn']),
        totalPage: state.getIn(['header','totalPage']),
        login: state.getIn(['login','login'])
    });
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus(list){
            (list.size === 0) && dispatch(actions.getList());

            dispatch(actions.focusInput());
        },

        handleInputBlur(){
            dispatch(actions.blurInput());
        },
        handleMouseEnter(){
            dispatch(actions.mouseEnter());
        },
        handleMouseLeave(){
            dispatch(actions.mouseLeave());
        },
        handleChangePage(page, totalPage, spin){
            let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
            if (originAngle){
                originAngle = parseInt(originAngle, 10);
            }else {
                originAngle = 0;
            }
            spin.style.transform = 'rotate(' + (originAngle+ 360) + 'deg)';

            if(page < totalPage){
                dispatch(actions.changePage(page + 1));
            }else{
                dispatch(actions.changePage(1));
            }
        },
        logout(){
            dispatch(loginActionCreators.logout());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);