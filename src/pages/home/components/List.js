import React,{ PureComponent } from 'react';
import { ListItem, ListInfo, LoadMore } from "../style";
import { connect } from 'react-redux';
import * as actionCreators from "../store/actionCreators";
import { Link } from 'react-router-dom';




class List extends PureComponent {

    render() {
        const { article, articlePage, getMoreList }  = this.props;
        return (
            <div>
                {
                    article.map((item,index) => {
                        return (
                            <Link key={index} to={ '/detail/' + item.get('id')}>
                                <ListItem key={item.get('id')}>
                                    <img className="pic" src={item.get('imgUrl')} alt=''/>
                                    <ListInfo>
                                        <h3 className="title">{item.get('title')}</h3>
                                        <p className="desc">{item.get('desc')}</p>
                                    </ListInfo>
                                </ListItem>
                            </Link>

                        );
                    })
                }

                <LoadMore onClick={() => getMoreList(articlePage) }>加载更多</LoadMore>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return({
        article: state.getIn(['home','articleList']),
        articlePage: state.getIn(['home','articlePage'])
    });
};
const mapDispatchToProps = (dispatch) => ({
    getMoreList(page){
        dispatch(actionCreators.getMoreList(page))
    }
});

export default connect(mapStateToProps,mapDispatchToProps)(List);