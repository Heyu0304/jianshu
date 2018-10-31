import React from 'react';
import {
    Button,
    Select,
    Input,
    DatePicker,
} from "antd";
import {
    SearchBarWrapper
} from "./style";

const {  RangePicker } = DatePicker;


export default class SearchBar extends React.Component{

    getInputField = (field) => (<Input placeholder="输入内容"/>);

    getSelectField = (field) => (<Select placeholder="请选择" className="selectLua">
        <Select.Option value="Chinese">中文</Select.Option>
        <Select.Option value="English">English</Select.Option>
        <Select.Option value="Jpan">日语</Select.Option>
    </Select>);

    getPickerField = (field) => (<RangePicker/>);

    getDatePickerField = (field) => (<DatePicker/>);

    generateInput(fields){
        const components =[];
        let i = 0;
        for(const field of fields){
            let items = [];
            if ( field.item) {
                items = field.item();
            }

            let component = null;
            switch (field.type) {
                case 'input':
                default:{
                    component = this.getInputField(field);
                    break;
                }
                case 'select':
                    component = this.getSelectField(field);
                    break;
                case 'rangePicker':
                    component = this.getPickerField(field);
                    break;
                case 'datetime':
                    component = this.getDatePickerField(field);

            }

            components.push(<div key={i++} className="field">
                <div className="input">
                    {field.type}
                    {component}
                </div>
            </div>);
        }

        return components;

    }
    render(){
        const { fields } = this.props;
        return (<SearchBarWrapper>
            <div className="inputWrapper">
                {this.generateInput(fields)}
            </div>

            <div className="buttonGroup">
                <Button className="reset" icon="reload">重置</Button>
                <Button className="search" icon="search">搜索</Button>
            </div>
        </SearchBarWrapper>)
    }
}

