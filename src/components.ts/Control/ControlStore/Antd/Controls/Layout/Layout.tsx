import * as React from 'react';
import * as Antd from 'antd';
import {ControlGenerate,ControlGenerateCollection} from '../../../../types';

//Layout
//Grid
const Row:ControlGenerate=(props:any,children:any)=><Antd.Row {...props}>{children}</Antd.Row>;
const Col:ControlGenerate=(props:any,children:any)=><Antd.Col {...props}>{children}</Antd.Col>;
//Layout
const Layout:ControlGenerate=(props:any,children:any)=><Antd.Layout {...props}>{children}</Antd.Layout>;
const LayoutHeader:ControlGenerate=(props:any,children:any)=><Antd.Layout.Header {...props}>{children}</Antd.Layout.Header>;
const LayoutContent:ControlGenerate=(props:any,children:any)=><Antd.Layout.Content {...props}>{children}</Antd.Layout.Content>;
const LayoutFooter:ControlGenerate=(props:any,children:any)=><Antd.Layout.Footer {...props}>{children}</Antd.Layout.Footer>;
const LayoutSider:ControlGenerate=(props:any,children:any)=><Antd.Layout.Sider {...props}>{children}</Antd.Layout.Sider>;

const AntdControls:ControlGenerateCollection={
    Row,Col,Layout,LayoutHeader,LayoutContent,LayoutFooter,LayoutSider
};

export default AntdControls;