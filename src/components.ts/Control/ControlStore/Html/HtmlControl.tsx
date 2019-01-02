import * as React from 'react';
import {ControlGenerate,ControlGenerateCollection} from '../../types';

const Text:ControlGenerate=(props:any)=><span {...props}>{props.text}</span>;
const Div:ControlGenerate=(props:any,children:any)=><div {...props}>{children}</div>;

const HtmlControls:ControlGenerateCollection={
    Text,Div
}

export {HtmlControls}