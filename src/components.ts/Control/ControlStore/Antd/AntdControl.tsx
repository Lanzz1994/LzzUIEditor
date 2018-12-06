import * as Antd from 'antd';
import {ControlGenerate} from '../../types';

const temp:ControlGenerate=(props:any,children:any)=>{};

//General
const Button:ControlGenerate=(props:any,children:any)=><Antd.Button {...props}>{children}</Antd.Button>;
const ButtonGroup:ControlGenerate=(props:any,children:any)=><Antd.Button.Group {...props}>{children}</Antd.Button.Group>;
const Icon:ControlGenerate=(props:any)=><Antd.Icon {...props}/>

//Layout
//Grid
const Row:ControlGenerate=(props:any,children:any)=><Antd.Row {...props}>{children}</Antd.Row>;
const Col:ControlGenerate=(props:any,children:any)=><Antd.Col {...props}>{children}</Antd.Col>;
//Layout
const Layout:ControlGenerate=(props:any,children:any)=><Antd.Layout {...props}>{children}</Antd.Layout>;
const Header:ControlGenerate=(props:any,children:any)=><Antd.Layout.Header {...props}>{children}</Antd.Layout.Header>;
const Content:ControlGenerate=(props:any,children:any)=><Antd.Layout.Content {...props}>{children}</Antd.Layout.Content>;
const Footer:ControlGenerate=(props:any,children:any)=><Antd.Layout.Footer {...props}>{children}</Antd.Layout.Footer>;
const Sider:ControlGenerate=(props:any,children:any)=><Antd.Layout.Sider {...props}>{children}</Antd.Layout.Sider>;

export default {
    //General
    "Button":Button,
    "ButtonGroup":ButtonGroup,
    "Icon":Icon,

    //把这些整理完后，衔接整个流程看看，Control,Info,Assemble 直接要怎么衔接定义
    //Layout
    //Grid
    "Row":Row,
    "Col":Col,
    //Layout
    "Layout":Layout,
    "Header":Header,
    "Content":Content,
    "Footer":Footer,
    "Sider":Sider,

    //Tabs 对于内嵌的自定义块要用什么处理比较合适？

    //Navigation

    //DataEntry

    //DataDisplay

    //Feedback

    //Other
};