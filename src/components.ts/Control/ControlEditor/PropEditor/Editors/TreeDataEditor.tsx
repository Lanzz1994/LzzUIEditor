import * as React from 'react';
//import MonacoEditor from 'react-monaco-editor';
import {Tree,Icon, Button, Form} from 'antd';
import { LinkedTree } from '../../../../Utils/index';
import { ControlInfo,ControlProp, PropUpdateInfo,PropEditorLoader,PropEditorInfo } from '../../../types';
import {GeneratePropsEditor} from '../Utils';
import BaseEditors from './BaseEditor';
const TreeNode=Tree.TreeNode;

// class JsonEditor extends React.PureComponent{
//     render(){
//         let editorProps={options:{minimap:{enabled:false}},...this.props};
//         return (<MonacoEditor language="json" {...editorProps}/>);
//     }
// }

export interface BaseTreeEditorProps{
    treeData:LinkedTree;
}
const BaseTreeEditor=(WraperComponent)=> class extends React.PureComponent<BaseTreeEditorProps&any>{
    state={
        ResetRender:''
    };
    constructor(props){
        super(props);
    }

    Change=()=>{
        this.setState({ResetRender:Math.random()})
    }

    render(){
        const {Change}=this;
        const {treeData,ctrlProps}=this.props;
        const treeView=treeData.ForEachStartLeaf((current:LinkedTree,children:any[])=>{
            return <TreeNode key={current.ID} title={
                <React.Fragment>
                    <div className="tree-data-panel">
                        <div className="tree-data-header"><Button size="small">子节点</Button></div>
                        <div className="tree-data-body">
                            <WraperComponent treeData={current} change={this.Change} {...this.props}/>
                        </div>
                    </div>
                </React.Fragment>
            } selectable={false}>{children}</TreeNode>;
        });

        return(
            <div className="lz-control-editor--tree-data">
                <Tree defaultExpandAll>{treeView}</Tree>
                <div style={{display:'none'}}>{this.state.ResetRender}</div>
            </div>
        );
    }
}

export interface TreeControlPropsEditorProps{
    ctrlProps:ControlProp[];
    treeData:LinkedTree;
}
@BaseTreeEditor
class TreeControlPropsEditor extends React.PureComponent<any>{
    render(){
        const {ctrlProps,treeData} =this.props;
        const editors = GeneratePropsEditor(ctrlProps,treeData,(upddateInfo:PropUpdateInfo)=>{

        });
        return (
            <Form>{editors}</Form>
        );
    }
    
}
export default (props:ControlProp[],propData:any,editorInfo:PropEditorInfo,onPropChange:(updateInfo:PropUpdateInfo)=>void)=>{

    return <TreeControlPropsEditor treeData={new LinkedTree({})} ctrlProps={props}/>
};