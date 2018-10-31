import styled from 'styled-components';

export const HomeWrapper = styled.div`
    overflow: hidden;
    width: 960px;
    margin: 0 auto;
`;

export const HomeLeft = styled.div`
    float: left;
    width: 625px;
    margin-left:15px;
    padding-top: 30px;
    .banner-img {
        width: 100%;
        height: 270px;
    }
`;

export const HomeRight = styled.div`
    width: 280px;
    float: right;
`;

export const TopicWrapper = styled.div`
    overflow: hidden;
    border-bottom: 1px solid #dcdcdc;
    margin-top: 30px;
    border-boom: 1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
    float: left;
    height: 32px;
    line-height: 32px;
    margin 0 18px 18px 0;
    font-size: 14px;
    background: #f7f7f7;
    padding: 0 11px 0 6px;
    color: #000;
    border-radius: 4px;
    .topic-pic {
        display: block;
        float: left;
        width: 32px;
        height: 32px;
        margin-right: 10px;
    }
`;

export const ListItem = styled.div`
    overflow: hidden;
    padding: 20px 0;
    border-bottom: 1px solid #dcdcdc;
    .pic{
        display: block;
        width:125px;
        height: 100px;
        float: right;
        border-radius: 10px;
    }
`;

export const ListInfo = styled.div`
    width: 500px;
    float: left;
    .title {
        line-height: 27px;
        font-size: 18px;
        font-weight: bold;
    }
    .desc {
        line-height: 18px;
        font-size: 13px;
        color: #999;
    }
`;

export const RecommendWrapper = styled.div`
    margin: 25px 0;
    width: 280px;
`;

export const RecommendItem = styled.div`
    width: 280px;
    height: 50px;
    margin-bottom: 6px;
    background: url(${(props) => props.imgUrl});
    background-size: contain;
`;

export const LoadMore = styled.div`
    width: 100%;
    height: 40px;
    line-height: 40px;
    margin 30px 0;
    background: #a5a5a5;
    text-align: center;
    border-radius: 20px;
    color: #fff;
    cursor: pointer;
`;

export const BackTop = styled.div`
    position: fixed;
    right: 100px;
    bottom: 100px;
    width: 60px;
    height: 60px;
    line-height:60px;
    text-align: center;
    border: 1px solid #ccc;
    font-size: 14px;
    cursor: pointer;
`;

export const WriterWrapper = styled.div`
    width: 280px;
`;


export const WriterInfoTitle = styled.div`
    margin-top: 20px;
    margin-bottom: 15px;
    line-height: 16px;
    font-size: 16px;
    color: #969696;
`;

export const WriterInfoSwitch = styled.span`
    float: right;
    font-size: 16px;
    .spin {
        display: block;
        float: left;
        font-size: 16px;
        margin-right: 2px;
        transition: all .2s ease-in;
        transform-origin: center center;
    }
`;

export const WriterList= styled.div`
    width: 280px;
    overflow: hidden;
`;

export const WriterItem = styled.div`
    padding: 0 11px 0 6px;
    font-size: 16px;
    .pic{
        display: block;
        width: 48px;
        height:48px;
        border-radius: 24px;
        float: left;
    }
`;
