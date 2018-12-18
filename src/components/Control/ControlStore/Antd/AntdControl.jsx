import * as Antd from 'antd';
//General
const Button = (props) => { return <Antd.Button {...props}>{props.text}</Antd.Button>; };
const ButtonGroup = (props, children) => <Antd.Button.Group {...props}>{children}</Antd.Button.Group>;
const Icon = (props) => <Antd.Icon {...props}/>;
//Layout
//Grid
const Row = (props, children) => <Antd.Row {...props}>{children}</Antd.Row>;
const Col = (props, children) => <Antd.Col {...props}>{children}</Antd.Col>;
//Layout
const Layout = (props, children) => <Antd.Layout {...props}>{children}</Antd.Layout>;
const Header = (props, children) => <Antd.Layout.Header {...props}>{children}</Antd.Layout.Header>;
const Content = (props, children) => <Antd.Layout.Content {...props}>{children}</Antd.Layout.Content>;
const Footer = (props, children) => <Antd.Layout.Footer {...props}>{children}</Antd.Layout.Footer>;
const Sider = (props, children) => <Antd.Layout.Sider {...props}>{children}</Antd.Layout.Sider>;
const AntdControls = {
    //General
    Button,
    ButtonGroup,
    Icon,
    //把这些整理完后，衔接整个流程看看，Control,Info,Assemble 直接要怎么衔接定义
    //Layout
    //Grid
    Row,
    Col,
    //Layout
    Layout,
    Header,
    Content,
    Footer,
    Sider,
};
export { AntdControls };
