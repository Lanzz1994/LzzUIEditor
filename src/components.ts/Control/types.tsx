import * as React from 'react';

export type Description = {
    Name?:string|React.ReactNode,
    ShortName?:string|React.ReactNode,
    Icon?:string|React.ReactNode,
    
    //markdown string
    Detail?:string
}

export type ControlInfo= {
    Key:string,
    Type?:string,
    Props?:ControlProp[],
    Introduction?:Description,
}

export type ControlProp={
    PropName:string,
    Name?:string,
    Description?:string,
    EditorName?:string,
    Default?:any
}

export type ControlData={
    Info:ControlInfo,
    PropData:any,
    [propName:string]:any
}

export type ControlGenerate=(props:any,children:any)=>any;