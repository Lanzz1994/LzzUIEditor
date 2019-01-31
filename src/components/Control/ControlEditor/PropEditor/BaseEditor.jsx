import * as React from 'react';
import MonacoEditor from 'react-monaco-editor';
import { Tree, Button } from 'antd';
const TreeNode = Tree.TreeNode;
class JsonEditor extends React.PureComponent {
    render() {
        let editorProps = Object.assign({ options: { minimap: { enabled: false } } }, this.props);
        return (<MonacoEditor language="json" {...editorProps}/>);
    }
}
export class TreeDataEditor extends React.PureComponent {
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
        const { treeData, CustomNode } = this.props;
        const treeView = treeData.ForEachStartLeaf((current, children) => {
            return <TreeNode key={current.ID} title={<React.Fragment>
                    <div className="tree-data-panel">
                        <div className="tree-data-header"><Button size="small">子节点</Button></div>
                        <div className="tree-data-body"></div>
                    </div>
                </React.Fragment>} selectable={false}>{children}</TreeNode>;
        });
        return (<div className="lz-control-editor--tree-data">

                <Tree defaultExpandAll>{treeView}</Tree>
                <div style={{ display: 'none' }}>{this.state.ResetRender}</div>
            </div>);
    }
}
