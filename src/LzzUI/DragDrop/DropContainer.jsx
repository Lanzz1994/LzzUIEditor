import * as React from 'react';
import DragDropType from './DragDropType';
import { DropTarget } from 'react-dnd';
const TargetEvents = {
    drop: (props, monitor, component) => {
        if (props.drop) {
            props.drop(props, monitor, component);
        }
    },
    hover: (props, monitor, component) => {
        if (props.hover) {
            props.hover(props, monitor, component);
        }
    }
};
// 放置容器的外壳
// 提供拖拽时 放置流程入口，不参与样式
export default DropTarget(DragDropType.DragDrop, TargetEvents, (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    isOverCurrent: monitor.isOver({ shallow: true }),
}))(class DropContainer extends React.PureComponent {
    render() {
        const { connectDropTarget, children } = this.props;
        const html = (<div className="lz-drop-container">{children}</div>);
        return connectDropTarget ? connectDropTarget(html) : html;
    }
});
