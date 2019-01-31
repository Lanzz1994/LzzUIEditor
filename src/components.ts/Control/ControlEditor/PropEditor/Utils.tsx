import * as React from 'react';
import {Form} from 'antd';
import {ControlProp,PropEditorLoader,PropUpdateInfo} from '../../types';
import PropEditorCollection from './Editors/index';

export function GeneratePropsEditor(props:ControlProp[],propData:any,onPropChange:(updateInfo:PropUpdateInfo)=>void):React.ReactNodeArray{
    const editor=props.map((prop)=>{
        const {EditorInfo}=prop;
        if(EditorInfo){
            let loader:PropEditorLoader=PropEditorCollection[EditorInfo.Key];
            if(loader){
                let main=loader(prop.PropName,propData,EditorInfo,(value:any,editorProps:any)=>{
                    let updateInfo:PropUpdateInfo={updateValue:{},updateState:{}};
                    updateInfo.updateValue[prop.PropName]=value;
                    if(EditorInfo.SetProp){
                        updateInfo=EditorInfo.SetProp(updateInfo,editorProps);
                    }
                    onPropChange(updateInfo);
                });
                return <Form.Item key={prop.PropName} label={prop.Name}>{main}</Form.Item>;
            }
        }
    });
    return editor;
}