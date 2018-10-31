import styled from 'styled-components';

export const DetailWrapper = styled.div`
    overflow: hidden;
    width: 620px;
    margin: 0 auto;
`;

export const Header = styled.div`
    margin: 50px 0 20px 0;
    line-height: 44px;
    font-size: 34px;
    color: #333;
    font-weight: bold;
`;

export const Content = styled.div`
    color: #2f2f2f;
    img {
        width: 100%;
    }
    
    p {
        margin: 0 0 25px 0;
        font-size: 18px;
        line-height: 27.2px;
        font-weight: 400;
        display: block;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        text-size-adjust: 100%;
    }
    
    b {
        font-weight: bold;
    }
`;