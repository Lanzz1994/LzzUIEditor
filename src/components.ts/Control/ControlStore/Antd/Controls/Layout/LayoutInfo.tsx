import * as React from 'react';
import {ControlInfo, PropUpdateInfo} from '../../../../types';
import {OptionsConfig,ResponsePoint} from '../../../../ControlEditor/index'

//Grid
const RowAlignConfig:OptionsConfig={
    placeholder:'align',
    options:[{value:'top',label:'顶部'},{value:'middle',label:'中间'},{value:'bottom',label:'底部'}]
};
const RowJustifyConfig:OptionsConfig={
    placeholder:'justify',
    options:[{value:'start',label:'头部--start'},{value:'end',label:'尾部--end'},{value:'space-around',label:'四周--space-around'},{value:'space-between',label:'左右--space-between'}]
};
const Row:ControlInfo={
    Key:'Antd.Row',
    Introduction:{
        Name:'行',
        ShortName:'行',
        Icon:'icon-button-component',
        Detail:'栅格的一行'
    },
    Props:[
        {PropName:'gutter',Name:'栅格间隔',EditorInfo:{Key:'NumberInputEditor',Config:{placeholder:'gutter'}}},
        {PropName:'type',Name:'Flex 布局',EditorInfo:{Key:'SwitchEditor',
            Config:{placeholder:'type'},
            InitProp:(value)=>{return value==='flex'; },
            SetProp:(updateInfo:PropUpdateInfo)=>{
                updateInfo.updateState['alignDisabled']=!updateInfo.updateValue['type'];
                updateInfo.updateState['justifyDisabled']=!updateInfo.updateValue['type'];
                updateInfo.updateState['type']=updateInfo.updateValue['type'];
                updateInfo.updateValue['type']=updateInfo.updateValue['type']?'flex':undefined;
                return updateInfo;
        }}},
        //editor state name rule: PropName + editor target prop name, align + disabled = alignDisabled
        {PropName:'align',Name:'垂直对齐',EditorInfo:{Key:'SelectEditor',States:{'alignDisabled':true},Config:RowAlignConfig}},
        {PropName:'justify',Name:'水平对齐',EditorInfo:{Key:'SelectEditor',States:{'justifyDisabled':true},Config:RowJustifyConfig}},
    ],
    DefaultProps:{
        style:{
            minHeight:50
        }
    }
};

const Col:ControlInfo={
    Key:'Antd.Col',
    Introduction:{
        Name:'列',
        ShortName:'列',
        Icon:'icon-button-component',
        Detail:'栅格的一列'
    },
    Props:[
        {PropName:'span',Name:'占栅格数',EditorInfo:{Key:'NumberInputEditor',Config:{placeholder:'span'}}},
        {PropName:'offset',Name:'左侧间隔',EditorInfo:{Key:'NumberInputEditor',Config:{placeholder:'offset'}}},
        {PropName:'pull',Name:'左偏移数',EditorInfo:{Key:'NumberInputEditor',Config:{placeholder:'pull'}}},
        {PropName:'push',Name:'右偏移数',EditorInfo:{Key:'NumberInputEditor',Config:{placeholder:'push'}}},
    ],
    DefaultProps:{
        style:{
            minHeight:50
        }
    }
};

//Layout
const Layout:ControlInfo={
    Key:'Antd.Layout',
    Introduction:{
        Name:'布局容器',
        ShortName:'布局容器',
        Icon:'icon-button-component'
    },
    DefaultProps:{
        style:{width:'998px',height:'768px'}
    }
};

const LayoutHeader:ControlInfo={
    Key:'Antd.LayoutHeader',
    Introduction:{
        Name:'头部',
        ShortName:'头部',
        Icon:'icon-button-component',
    }
};

const LayoutSiderBreakPointConfig:OptionsConfig={
    placeholder:'选择断点',
    options:[{value:ResponsePoint.xs,label:'xl <480px'},{value:ResponsePoint.sm,label:'sm <576px'},{value:ResponsePoint.md,label:'md <768px'},{value:ResponsePoint.lg,label:'lg <992px'},{value:ResponsePoint.xl,label:'xl <1200px'},{value:ResponsePoint.xxl,label:'xxl <1600px'}]
};
const LayoutSider:ControlInfo={
    Key:'Antd.LayoutSider',
    Introduction:{
        Name:'侧边栏',
        ShortName:'侧边栏',
        Icon:'icon-button-component',
    },
    Props:[
        {PropName:'breakpoint',Name:'响应式断点',EditorInfo:{Key:'SelectEditor',Style:{width:160},Config:LayoutSiderBreakPointConfig}},
        {PropName:'width',Name:'展开宽度',EditorInfo:{Key:'NumberInputEditor'}},
        {PropName:'collapsedWidth',Name:'收起宽度',EditorInfo:{Key:'NumberInputEditor'}},
        {PropName:'collapsible',Name:'开启收起',EditorInfo:{Key:'SwitchEditor'}},
        {PropName:'collapsed',Name:'是否收起',EditorInfo:{Key:'SwitchEditor'}},
        // {PropName:'defaultCollapsed',Name:'默认收起',EditorInfo:{Key:'SwitchEditor'}},
        {PropName:'reverseArrow',Name:'箭头方向',EditorInfo:{Key:'SwitchEditor'}},
        {PropName:'theme',Name:'亮色主题',EditorInfo:{Key:'SwitchEditor',
            InitProp:(value)=>{return value==='light'},
            SetProp:(updateInfo:PropUpdateInfo)=>{
                updateInfo.updateValue['theme']=updateInfo.updateValue['theme']?'light':'dark';
                return updateInfo;
            }
        }},
    ],
};

const LayoutContent:ControlInfo={
    Key:'Antd.LayoutContent',
    Introduction:{
        Name:'内容',
        ShortName:'内容',
        Icon:'icon-button-component',
    }
};

const LayoutFooter:ControlInfo={
    Key:'Antd.LayoutFooter',
    Introduction:{
        Name:'底部',
        ShortName:'底部',
        Icon:'icon-button-component',
    }
};

export default [Row,Col,Layout,LayoutHeader,LayoutSider,LayoutContent,LayoutFooter];