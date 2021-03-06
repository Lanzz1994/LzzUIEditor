import * as React from 'react';
import {ControlInfo,ControlCategoryCollection} from '../../types';
import {OptionsConfig} from '../../ControlEditor/index'
import LayoutInfo from './Controls/Layout/LayoutInfo';
import {DataDisplayInfo} from './Controls/DataDisplay/index';

//Button
const ButtonThemeConfig:OptionsConfig={
    options:[{value:'default',label:'默认'},{value:'primary',label:'主要'},{value:'dashed',label:'虚线'},{value:'danger',label:'危险'}]
};
const ButtonSizeConfig:OptionsConfig={
    options:[{value:'default',label:'默认'},{value:'small',label:'小'},{value:'large',label:'大'}]
};
const ButtonInfo:ControlInfo={
    Key:'Antd.Button',
    Introduction:{
        Name:'按钮',
        ShortName:'按钮',
        Icon:'icon-button-component',
        Detail:'按钮用于开始一个即时操作'
    },
    Props:[
        {PropName:'text',Name:'文本',EditorInfo:{Key:'TextEditor'}},
        {PropName:'type',Name:'类型',DefaultValue:'default',EditorInfo:{Key:'SelectEditor',Config:ButtonThemeConfig}},
        {PropName:'size',Name:'尺寸',DefaultValue:'default',EditorInfo:{Key:'RadioButtonGroupEditor',Config:ButtonSizeConfig}},
        {PropName:'icon',Name:<span style={{paddingRight:'2px'}}>Icon</span>,EditorInfo:{Key:'TextEditor'}},
        {PropName:'disabled',Name:'禁用',EditorInfo:{Key:'SwitchEditor'}},
        {PropName:'loading',Name:'加 载 中 ',EditorInfo:{Key:'SwitchEditor'}},
        {PropName:'shape',Name:'圆形',EditorInfo:{Key:'SwitchEditor'}},
        {PropName:'ghost',Name:'幽灵效果',EditorInfo:{Key:'SwitchEditor'}},
        {PropName:'href',Name:'链接',EditorInfo:{Key:'TextEditor'}},
        //{PropName:'name',Name:'链接',EditorInfo:{Key:'TreeControlPropsEditor'}},
    ],
    DefaultProps:{text:'按钮'},
    IsLeaf:true
};

//ButtonGroup
const ButtonGroupInfo:ControlInfo={
    Key:'Antd.ButtonGroup',
    Introduction:{
        Name:'按钮组',
        ShortName:'按钮组',
        Icon:'icon-anniuzu',
    },
    Props:[{PropName:'size',Name:'尺寸',EditorInfo:{Key:'SelectEditor',Config:ButtonSizeConfig}}],
};



const General:ControlInfo[]=[ButtonInfo,ButtonGroupInfo];
const Layout:ControlInfo[]=LayoutInfo;
const DataDisplay:ControlInfo[]=DataDisplayInfo;
const AntdControlInfoCategory:ControlCategoryCollection={General,Layout,DataDisplay};

export {AntdControlInfoCategory}