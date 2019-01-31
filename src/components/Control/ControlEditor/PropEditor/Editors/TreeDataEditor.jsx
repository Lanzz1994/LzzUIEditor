import * as React from 'react';
//import MonacoEditor from 'react-monaco-editor';
import { Tree, Button, Form } from 'antd';
import { LinkedTree } from '../../../../Utils/index';
import { GeneratePropsEditor } from '../Utils';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const TreeNode = Tree.TreeNode;
const BaseTreeEditor = (WraperComponent) => class extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            ResetRender: ''
        };
        this.Change = () => {
            this.setState({ ResetRender: Math.random() });
        };
    }
    render() {
        const { Change } = this;
        const { treeData, ctrlProps } = this.props;
        const treeView = treeData.ForEachStartLeaf((current, children) => {
            return <TreeNode key={current.ID} title={<React.Fragment>
                    <div className="tree-data-panel">
                        <div className="tree-data-header"><Button size="small">子节点</Button></div>
                        <div className="tree-data-body">
                            <WraperComponent treeData={current} change={this.Change} {...this.props}/>
                        </div>
                    </div>
                </React.Fragment>} selectable={false}>{children}</TreeNode>;
        });
        return (<div className="lz-control-editor--tree-data">
                <Tree defaultExpandAll>{treeView}</Tree>
                <div style={{ display: 'none' }}>{this.state.ResetRender}</div>
            </div>);
    }
};
let TreeControlPropsEditor = class TreeControlPropsEditor extends React.PureComponent {
    render() {
        const { ctrlProps, treeData } = this.props;
        const editors = GeneratePropsEditor(ctrlProps, treeData, (upddateInfo) => {
        });
        return (<Form>{editors}</Form>);
    }
};
TreeControlPropsEditor = __decorate([
    BaseTreeEditor
], TreeControlPropsEditor);
export default (props, propData, editorInfo, onPropChange) => {
    return <TreeControlPropsEditor treeData={new LinkedTree({})} ctrlProps={props}/>;
};
