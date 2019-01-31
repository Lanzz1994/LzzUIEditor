import * as React from 'react';
import classNames from 'classnames';
import DragDropType from './DragDropType';
import { DropTarget } from 'react-dnd';
;
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
    isOverCurrent: monitor.isOver({ shallow: true })
}))(class extends React.PureComponent {
    render() {
        const { id, className, style, connectDropTarget, children, onMouseOver, onClick, onMouseEnter, onMouseLeave, onScroll } = this.props;
        const html = (<div className={classNames("lz-drop-container", className)} id={id} style={style} onClick={onClick} onMouseOver={onMouseOver} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onScroll={onScroll}>{children}</div>);
        return connectDropTarget ? connectDropTarget(html) : html;
    }
});
