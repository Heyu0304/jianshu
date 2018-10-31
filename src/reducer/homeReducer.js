/*import * as actionCanstans from "../actions/Contants/canstants";*/
import { fromJS } from 'immutable';

const defaultState = fromJS({
    topicList: [{
        id: 1,
        title: "读书",
        imgUrl: "//upload.jianshu.io/admin_banners/web_images/4448/d9a0fd8f0622d2323161b68d2123c7f28837d28f.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
    },{
        id: 2,
        title: "@IT·互联网",
        imgUrl: "//upload.jianshu.io/collections/images/14/6249340_194140034135_2.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
    },{
        id: 3,
        title: "摄影",
        imgUrl: "//upload.jianshu.io/collections/images/83/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
    }],
    article: [{
        id: 1,
        desc: "\"凤九，滚滚是不是还没正式的去拜见你父母和家人啊？\" \"对啊!我都忘了，要赶快回去青丘，不然我的狐狸爪子就要被我爹打烂了!快快，我整理一下啊！\"...",
        title: "提亲(1)",
        img: "//upload-images.jianshu.io/upload_images/12914814-3a107fa3def6a4cc.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"
    },{
        id: 2,
        desc: "\"凤九，滚滚是不是还没正式的去拜见你父母和家人啊？\" \"对啊!我都忘了，要赶快回去青丘，不然我的狐狸爪子就要被我爹打烂了!快快，我整理一下啊！\"...",
        title: "提亲(1)",
        img: "//upload-images.jianshu.io/upload_images/12914814-3a107fa3def6a4cc.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"
    },{
        id: 3,
        desc: "\"凤九，滚滚是不是还没正式的去拜见你父母和家人啊？\" \"对啊!我都忘了，要赶快回去青丘，不然我的狐狸爪子就要被我爹打烂了!快快，我整理一下啊！\"...",
        title: "提亲(1)",
        img: "//upload-images.jianshu.io/upload_images/12914814-3a107fa3def6a4cc.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"
    },{
        id: 4,
        desc: "\"凤九，滚滚是不是还没正式的去拜见你父母和家人啊？\" \"对啊!我都忘了，要赶快回去青丘，不然我的狐狸爪子就要被我爹打烂了!快快，我整理一下啊！\"...",
        title: "提亲(1)",
        img: "//upload-images.jianshu.io/upload_images/12914814-3a107fa3def6a4cc.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"
    },{
        id: 5,
        desc: "\"凤九，滚滚是不是还没正式的去拜见你父母和家人啊？\" \"对啊!我都忘了，要赶快回去青丘，不然我的狐狸爪子就要被我爹打烂了!快快，我整理一下啊！\"...",
        title: "提亲(1)",
        img: "//upload-images.jianshu.io/upload_images/12914814-3a107fa3def6a4cc.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"
    }]
});

const homeReducer=  (state = defaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default homeReducer;