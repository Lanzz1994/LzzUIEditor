import * as React from 'react';
import { Tree } from 'antd';
import { IconFont } from '../../Tool/index';
const TreeNode = Tree.TreeNode;
export default class PartTreeEditor extends React.Component {
    render() {
        const { layoutData } = this.props;
        const treeView = layoutData.ForEachStartLeaf((current, children) => {
            const introduction = current.Data.Info.Introduction || {};
            const icon = typeof introduction.Icon === 'string' ?
                <IconFont type={introduction.Icon}/> : introduction.Icon;
            return current.HasParent ?
                <TreeNode key={current.ID} icon={icon} title={introduction.Name}>{children}</TreeNode>
                : children;
        });
        return (<div className="lz-control-editor--part-tree">
                <Tree showIcon defaultExpandAll draggable onDragStart={() => { console.log('start'); }} onDragEnter={() => { console.log('enter'); }} onDragLeave={() => { console.log('leave'); }} onDrop={() => { console.log('drop'); }}>
                    {treeView}
                </Tree>
            </div>);
    }
}
