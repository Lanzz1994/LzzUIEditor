import * as React from 'react';
import { Tree } from 'antd';
const TreeNode = Tree.TreeNode;
export default class PartTreeEditor extends React.Component {
    render() {
        const { layoutData } = this.props;
        const treeView = layoutData.ForEachStartLeaf((current, children) => {
            const introduction = current.Data.Info.Introduction || {};
            return current.HasParent ?
                <TreeNode icon={introduction.Icon} title={introduction.Name}>{children}</TreeNode>
                : children;
        });
        return (<div className="lz-control-editor--part-tree">
                <Tree showIcon defaultExpandAll draggable>
                    {treeView}
                </Tree>
            </div>);
    }
}
