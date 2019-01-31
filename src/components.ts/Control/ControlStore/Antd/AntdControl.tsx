import * as React from 'react';
import * as Antd from 'antd';
import {ControlGenerate,ControlGenerateCollection} from '../../types';
import Layout from './Controls/Layout/Layout';
import {DataDisplay} from './Controls/DataDisplay/index';

//General
const Button:ControlGenerate=(props:any)=>{return <Antd.Button {...props}>{props.text}</Antd.Button>};
const ButtonGroup:ControlGenerate=(props:any,children:any)=><Antd.Button.Group {...props}>{children}</Antd.Button.Group>;
const Icon:ControlGenerate=(props:any)=><Antd.Icon {...props}/>

const AntdControls:ControlGenerateCollection={
    //General
    Button,
    ButtonGroup,
    Icon,

    //把这些整理完后，衔接整个流程看看，Control,Info,Assemble 直接要怎么衔接定义
    //Layout
    ...Layout,
    ...DataDisplay,

    //Tabs 对于内嵌的自定义块要用什么处理比较合适？

    //Navigation

    //DataEntry

    //DataDisplay

    //Feedback

    //Other
};
export {AntdControls};