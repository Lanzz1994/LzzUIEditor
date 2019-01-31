import * as React from 'react';
import { LinkedTree } from '../Utils/index';
import {LayoutTreeData} from '../Layout/index';

export type Description = {
    Name?:string|React.ReactNode,
    ShortName?:string|React.ReactNode,
    Icon?:string|React.ReactNode,
    
    //markdown string
    Detail?:string
}

export type ControlMotionInfo={
    Support
};

export type ControlInfo= {
    Key:string,
    Type?:string,
    DefaultProps?:any,
    NoID?:boolean,
    Props?:ControlProp[],
    Children?:ControlInfo[],
    Introduction?:Description,
    IsLeaf?:boolean,
    Solts?:{[propName:string]:LinkedTree<any>},
    Limit?:()=>string[]
}

export type ControlProp={
    PropName:string,
    Name?:string|React.ReactNode,
    //this field uses to show default value in component editor when value of PropData[PropName] is undefined
    DefaultValue?:any,
    Description?:string,
    EditorInfo?:PropEditorInfo
}

export type ControlData={
    Info:ControlInfo,
    PropData?:any,
}

export type ControlCategoryCollection={
    [propName:string]:ControlInfo[]
}

export type ControlGenerate=(props:any,children:any,solts?:{[propName:string]:LinkedTree<LayoutTreeData>})=>any;
export type ControlGenerateCollection={
    [propName:string]:ControlGenerate
}

export type PropUpdateInfo={updateValue:any,updateState:any};
export type PropEditorInfo={
    Key:string,
    Config?:any,
    Style?:any,
    States?:any,
    InitProp?:(value:any)=>void,
    SetProp?:(updateInfo:PropUpdateInfo,eidtorProps:any)=>PropUpdateInfo
}

export type PropEditorLoader=(prop:string,editorStates:any,editorInfo:PropEditorInfo,onPropChange:(value:any,editorProps?:any)=>void)=>React.ReactNode;

export type PropEditorCollection=PropEditorLoader[];