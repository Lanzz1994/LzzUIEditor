import * as React from 'react';
import {Form} from 'antd';
import LinkedTree from '../../../Utils/LinkedTree';
import {ControlData,PropEditorLoader,PropUpdateInfo, ControlProp} from '../../types';
import PropEditorCollection from './PropEditorCollection';
import {GeneratePropsEditor} from './Utils';

export interface PropEditorProps{
    editorSource?:LinkedTree<ControlData>,
    onPropChange:(update:any)=>void
}

export default class PropEditor extends React.PureComponent<PropEditorProps>{
    constructor(props){
        super(props);
        if(props.editorSource){
            this.state=this.InitStates(props.editorSource);
        }
    }

    componentWillReceiveProps(props:PropEditorProps){
        const {editorSource}=this.props;
        if(props.editorSource){
            if(!(editorSource&&props.editorSource.ID===editorSource.ID)){
                this.setState(this.InitStates(props.editorSource));
            }
        }else{
            this.setState((prevState) =>{if(prevState)Object.keys(prevState).map((key)=>{delete prevState[key]})});
        }
    }

    InitStates=(editorSource:LinkedTree<ControlData>):any=>{
        const {PropData,Info}=editorSource.Data;
        let newStates={};
        (Info.Props||[]).map((prop)=>{
            const {EditorInfo} = prop;
            if(EditorInfo){
                if(PropData[prop.PropName]===undefined){
                    newStates[prop.PropName]=prop.DefaultValue;
                }else{
                    newStates[prop.PropName]=EditorInfo.InitProp?EditorInfo.InitProp(PropData[prop.PropName]):PropData[prop.PropName];
                }
                newStates={...newStates,...EditorInfo.States};
            }
        });
        return newStates;
    }

    onPropChange=(updateInfo:PropUpdateInfo)=>{
        this.setState({...updateInfo.updateValue,...updateInfo.updateState});
        this.props.onPropChange(updateInfo.updateValue);
    }

    GenerateEditor=():React.ReactNodeArray=>{
        let editor:React.ReactNodeArray=[];
        if(this.props.editorSource){
            editor = GeneratePropsEditor(this.props.editorSource.Data.Info.Props||[],this.state,this.onPropChange);
        }
        return editor;
    }

    render(){
        let editors:React.ReactNodeArray=this.GenerateEditor();
        return (
            <div className="lz-control-prop-editor">
                <Form layout="inline">{editors}</Form>
            </div>
        );
    }

}