import * as React from 'react';
import * as Antd from 'antd';
import Layout from './Controls/Layout/Layout';
import { DataDisplay } from './Controls/DataDisplay/index';
//General
const Button = (props) => { return <Antd.Button {...props}>{props.text}</Antd.Button>; };
const ButtonGroup = (props, children) => <Antd.Button.Group {...props}>{children}</Antd.Button.Group>;
const Icon = (props) => <Antd.Icon {...props}/>;
const AntdControls = Object.assign({ 
    //General
    Button,
    ButtonGroup,
    Icon }, Layout, DataDisplay);
export { AntdControls };
