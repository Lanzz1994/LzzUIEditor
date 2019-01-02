import * as React from 'react';
import {Divider,Select,Input,Switch} from 'antd';
import {PropEditorLoader} from '../../types';
import {SelectConfig} from './PropEditorConfig'

//const DividerEditor=(props)=>(<Divider key={props.key}>{props.label}</Divider>);

const TextEditor:PropEditorLoader={
    Loader:()=>{
        return <Input />;
    },
    
}

const SelectEditor:PropEditorLoader={
    Loader:()=>{
        return (
            <Select >
                
            </Select>
        )
    }
}

const SwtichEditor:PropEditorLoader={
    Loader:()=>{
        return <Switch />;
    }
}

const PropEditorCollection:{[propName:string]:PropEditorLoader}={
    TextEditor,
    SelectEditor,
    SwtichEditor
}

export default PropEditorCollection;