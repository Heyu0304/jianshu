import React, { Component } from 'react';
import {
    WriterWrapper,
    WriterItem,
    WriterInfoTitle,
    WriterInfoSwitch,
    WriterList
} from "../style";

class Writer extends Component{
    render(){
        return (
            <WriterWrapper>
                <WriterInfoTitle>
                    推荐作者
                    <WriterInfoSwitch>
                        <i ref={(icon) => {this.spinIcon = icon }} className="iconfont spin">&#xe851;</i>
                        换一批
                    </WriterInfoSwitch>
                </WriterInfoTitle>
                <WriterList>
                   <WriterItem>
                       <img className="pic" src="//upload.jianshu.io/users/upload_avatars/1835526/9bc600ce-7672-42b8-b03b-1a779593dd45.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp" alt=""/>
                       <h3>作者</h3>
                       <p>写了多少字</p>
                   </WriterItem>
                </WriterList>
            </WriterWrapper>
        );
    }
}

export default Writer;

