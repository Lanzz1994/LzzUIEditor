import * as React from 'react';
import classNames from 'classnames';
import DragDropType from './DragDropType';
import { DragSource } from 'react-dnd';
// 定义事件处理
const SourceEvents = {
    beginDrag: (props, monitor, component) => {
        if (props.beginDrag) {
            return props.beginDrag(props, monitor, component);
        }
        return {};
    },
    endDrag: (props, monitor, component) => {
        if (props.endDrag) {
            props.endDrag(props, monitor, component);
        }
    }
};
// 拖拽内容的外壳
// 提供拖拽流程入口，不参与样式
export default DragSource(DragDropType.DragDrop, SourceEvents, (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging(),
}))(class DragContainer extends React.PureComponent {
    componentDidMount() {
        const { connectDragPreview, dragPreview } = this.props;
        if (dragPreview && connectDragPreview) {
            connectDragPreview(dragPreview);
        }
    }
    render() {
        const { id, className, style, connectDragSource, children } = this.props;
        const html = (<div id={id} className={classNames("lz-drag-container", className)} style={style}>{children}</div>);
        return connectDragSource ? connectDragSource(html) : html;
    }
});
