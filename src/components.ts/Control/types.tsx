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
    DefaultProps?:any,
    Props?:ControlProp[],
    Children?:ControlInfo[],
    Introduction?:Description,
    IsLeaf?:boolean
}

export type ControlProp={
    PropName:string,
    Name?:string|React.ReactNode,
    Description?:string,
    EditorInfo?:PropEditorInfo
}

export type ControlData={
    Info:ControlInfo,
    PropData?:any,
    [propName:string]:any
}

export type ControlCategoryCollection={
    [propName:string]:ControlInfo[]
}

export type ControlGenerate=(props:any,children:any)=>any;
export type ControlGenerateCollection={
    [propName:string]:ControlGenerate
}

export type PropEditorInfo={
    Key:string,
    Config?:any
}

export type PropEditorLoader={
    Loader:()=>React.ReactNode
    InitProp?:()=>void,
    SetProp?:()=>void,
    onPropChange?:()=>void
}

export type PropEditorCollection=PropEditorLoader[];