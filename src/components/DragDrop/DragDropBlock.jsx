import * as React from "react";
import classNames from "classnames";
import { default as DragContainer } from "./DragContainer";
import { default as DropContainer } from "./DropContainer";
// 可以用 markdown 的形式直接写出业务组件？
// 关于操作流程的思考：组件应该只是提供交互和操作类型的入库，而不应该去涉及具体的数据，通过一个工作流集成上下文，所有流程都来这里取，尝试去设计看看是否能都打通这个数据壁垒，让数据从组件中脱离出来
// 提供拖拽 和 放置 的容器
export default class DragDropContainer extends React.PureComponent {
    render() {
        const { id, className, style, hover, onMouseOver, onClick, beginDrag, endDrag, drop } = this.props;
        const dragdropCls = classNames("lz-dragdrop-container", className);
        return (<div id={id} className={dragdropCls} style={style} onMouseOver={onMouseOver} onClick={onClick}>
        <DragContainer beginDrag={beginDrag} endDrag={endDrag}>
            <DropContainer drop={drop} hover={hover}>{this.props.children}</DropContainer>
        </DragContainer>
      </div>);
    }
}
