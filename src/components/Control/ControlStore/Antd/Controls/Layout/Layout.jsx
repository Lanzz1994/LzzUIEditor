import * as React from 'react';
import * as Antd from 'antd';
//Layout
//Grid
const Row = (props, children) => <Antd.Row {...props}>{children}</Antd.Row>;
const Col = (props, children) => <Antd.Col {...props}>{children}</Antd.Col>;
//Layout
const Layout = (props, children) => <Antd.Layout {...props}>{children}</Antd.Layout>;
const LayoutHeader = (props, children) => <Antd.Layout.Header {...props}>{children}</Antd.Layout.Header>;
const LayoutContent = (props, children) => <Antd.Layout.Content {...props}>{children}</Antd.Layout.Content>;
const LayoutFooter = (props, children) => <Antd.Layout.Footer {...props}>{children}</Antd.Layout.Footer>;
const LayoutSider = (props, children) => <Antd.Layout.Sider {...props}>{children}</Antd.Layout.Sider>;
const AntdControls = {
    Row, Col, Layout, LayoutHeader, LayoutContent, LayoutFooter, LayoutSider
};
export default AntdControls;
