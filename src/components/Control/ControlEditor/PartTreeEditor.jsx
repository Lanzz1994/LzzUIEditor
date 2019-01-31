import * as React from 'react';
import { Tree } from 'antd';
import { IconFont } from '../../Tool/index';
const TreeNode = Tree.TreeNode;
export default class PartTreeEditor extends React.Component {
    constructor() {
        super(...arguments);
        //这样子的判断空执行太丑了，看看有没有更简洁的写法
        this.onHoverTreeNode = (e, tree) => {
            if (this.props.onHoverTreeNode) {
                this.props.onHoverTreeNode(tree);
            }
            e.stopPropagation();
        };
        this.onDragingHoverTreeNode = (tree) => {
            if (this.props.onDragingHoverTreeNode) {
                this.props.onDragingHoverTreeNode(tree);
            }
        };
        this.onBeginDragTreeNode = (tree) => {
            if (this.props.onBeginDragTreeNode) {
                this.props.onBeginDragTreeNode(tree);
            }
        };
        this.onDropTreeNode = (tree) => {
            if (this.props.onDropTreeNode) {
                this.props.onDropTreeNode(tree);
            }
        };
        this.onLeaveTree = (e) => {
            if (this.props.onLeaveTree) {
                this.props.onLeaveTree;
            }
            e.stopPropagation();
        };
        this.onHoverTree = (e) => {
            if (this.props.onHoverTree) {
                this.props.onHoverTree(this.props.layoutData);
            }
            e.stopPropagation();
        };
    }
    render() {
        const { layoutData } = this.props;
        const { onHoverTreeNode, onDragingHoverTreeNode, onBeginDragTreeNode, onDropTreeNode, onHoverTree, onLeaveTree } = this;
        const treeView = layoutData.ForEachStartLeaf((current, children) => {
            const introduction = current.Data.Info.Introduction || {};
            const icon = typeof introduction.Icon === 'string' ?
                <IconFont type={introduction.Icon}/> : introduction.Icon;
            return current.HasParent ?
                <TreeNode key={current.ID} title={<div className="lz-part-tree-title" onMouseOver={(e) => { onHoverTreeNode(e, current); }}>{icon}<span>{introduction.Name}</span></div>} treeNodeData={current}>{children}</TreeNode>
                : children;
        });
        return (<div className="lz-control-editor--part-tree" onMouseOver={(e) => { onHoverTree(e); }} onMouseLeave={(e) => { onLeaveTree(e); }}>
                <Tree defaultExpandAll draggable onDragStart={(e) => { onBeginDragTreeNode(e.node.props.treeNodeData); }} onDragOver={(e) => { console.log('over', e); onDragingHoverTreeNode(e.node.props.treeNodeData); }} onDragEnter={(e) => { console.log('enter', e); }} onDragLeave={(e) => { console.log('end', e); }} onDrop={(e) => { onDropTreeNode(e.node.props.treeNodeData); }}>
                    {treeView}
                </Tree>
            </div>);
    }
}
