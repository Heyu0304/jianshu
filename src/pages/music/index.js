import React from 'react';
import { FormModal } from "../../components/modalForm";
import { SearchBar } from "../../components/searchBar"
import {  musicKindList,languageKindList, publishCountry } from '../../utils/config'
import {
    Button,
    message,
    Table
} from "antd";
import { connect } from 'react-redux';

import * as actionCreators from "./store/actionCreators";


class FormDemo extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            modalShow: false
        };
    }

    componentDidMount(){
        this.props.getMusicList();
    }


    add = () => {
        this.setState( () => ({
            modalShow: true
        }));
    }

    onOk = (param) => {
        message.success('添加成功')
        this.onCancel()
    }

    onCancel = () => {
        this.setState({
            modalShow: false
        })
    }

    searchFields = () => {
        return [{
            title: '歌曲类型',
            key: 'type',
            type: 'select',
            defaultValue: 2,
            onChange: (value) => this.fetchTableData(value),
            items: () => musicKindList.map(ele => ({
                value: ele.value,
                mean: ele.mean,
            })),
        }, {
            title: '发行国家',
            key: 'country',
            type: 'select',
            defaultValue: '全部',
            items: () => publishCountry.map(ele => ({
                value: ele.value,
                mean: ele.mean,
            })),
        }, {
            title: '歌曲语种',
            key: 'language',
            type: 'select',
            defaultValue: '全部',
            items: () => languageKindList.map(ele => ({
                value: ele.value,
                mean: ele.mean,
            })),
        }, {
            title: '发行时间段',
            key: ['start', 'end'],
            type: 'rangePicker',
        }]
    }

    fields = () => {
        return [{
            label: '歌曲名',
            type: 'input',
            name: 'title',
            options: {
                rules: [{
                    required: true,
                    message: '歌曲名必输!',
                }]
            }
        }, {
            label: '歌手名',
            type: 'input',
            name: 'author',
            options: {
                rules: [{
                    required: true,
                    message: '歌手必输!',
                }]
            }
        }, {
            label: '发行国家',
            type: 'select',
            name: 'country',
            items: () => publishCountry.map(ele => ({
                key: ele.value,
                value: ele.mean
            })),
            options: {
                rules: [{
                    required: true,
                    message: '发行国家必输!',
                }]
            }
        }, {
            label: '歌曲语种',
            type: 'select',
            name: 'language',
            items: () => languageKindList.map(ele => ({
                key: ele.value,
                value: ele.mean
            })),
            options: {
                rules: [{
                    required: true,
                    message: '语种必输!',
                }]
            }
        }, {
            label: '发行时间',
            type: 'datetime',
            name: 'publishTime',
            options: {
                rules: [{
                    required: true,
                    message: '发行时间必输!',
                }]
            }
        }]
    };

    columns = () => {
        return [{
            dataIndex: 'title',
            title: '歌曲名',
            width: 200,
        },{
            dataIndex: 'author',
            title: '歌手',
            width: 200,
        },{
            dataIndex: 'language',
            title: '语种',
            width: 200,
        },{
            dataIndex: 'publishTime',
            title: '发行时间',
            width: 200,
        }
        ];
    };


    render (){
        const { musicList } = this.props;
        const music = musicList.toJS();

        return (<div id="wrap">
            <SearchBar fields={this.searchFields()}/>
            <div className="tableBox">
                <Button onClick={this.add}>
                    添加
                </Button>
                <Table
                    columns={this.columns()}
                    pageSize={10}
                    dataSource={music}
                />
            </div>
            <FormModal
                modelKey="add"
                visible={this.state.modalShow}
                title="添加音乐"
                fields={this.fields()}
                onOk={this.onOk}
                onCancel={this.onCancel}/>
        </div>)
    }
}

const mapStateToProps = (state) => ({
   musicList: state.getIn(['music','musicList'])
});

const mapDispatchToProps = (dispatch) => ({
   getMusicList(){
       dispatch(actionCreators.fetchMusicList());
   }
});


export default connect(mapStateToProps,mapDispatchToProps)(FormDemo);

