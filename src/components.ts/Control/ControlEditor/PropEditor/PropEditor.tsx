import * as React from 'react';
import {Form} from 'antd';
import LinkedTree from '../../../Utils/LinkedTree';
import {ControlData,PropEditorLoader} from '../../types';
import PropEditorCollection from './PropEditorCollection';

export interface PropEditorProps{
    editorSource?:LinkedTree<ControlData>,
    onPropChange?:()=>void
}

function GenerateEditor(data:ControlData):React.ReactNodeArray{
    return (data.Info.Props||[]).map((prop)=>{
        let editor:React.ReactNode=null;
        let loader:PropEditorLoader=PropEditorCollection[prop.PropName];
        if(loader){
            let main=loader.Loader();
            editor=(<Form.Item key={prop.PropName} label={prop.Name}>{main}</Form.Item>);
        }
        return editor;
    });
}

export default class PropEditor extends React.PureComponent<PropEditorProps>{

    constructor(props){
        super(props);
        
    }

    render(){
        const {editorSource,onPropChange}=this.props;
        let editors:React.ReactNodeArray=editorSource?GenerateEditor(editorSource.Data):[];
        return (
            <Form className="lz-control-prop-editor" layout="inline">
                {editors}
            </Form>
        );
    }

}