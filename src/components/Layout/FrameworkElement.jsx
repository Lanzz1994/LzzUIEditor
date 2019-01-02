import * as React from 'react';
import classNames from 'classnames';
import DragDropBlock from '../DragDrop/DragDropBlock';
export default class FrameworkElement extends React.PureComponent {
    constructor(props) {
        super(props);
        // 两种操作：加上 hover 状态，去除 hover 状态
        this.onMouseOver = (e) => {
            const { onHoverFramework } = this.props;
            if (onHoverFramework) {
                onHoverFramework(this.props.tree);
            }
            e.stopPropagation();
        };
        this.onClick = (e) => {
            const { onClickFramework } = this.props;
            if (onClickFramework) {
                onClickFramework(this.props.tree);
            }
            e.stopPropagation();
        };
        this.onBeginDragFramework = () => {
            const { onBeginDragFramework } = this.props;
            if (onBeginDragFramework) {
                onBeginDragFramework(this.props.tree);
            }
            return {};
        };
        this.onDragingHoverFramework = (props, monitor) => {
            const { onDragingHoverFramework } = this.props;
            if (onDragingHoverFramework && monitor.isOver({ shallow: true })) {
                onDragingHoverFramework(this.props.tree);
            }
        };
        this.onDropFramework = (props, monitor) => {
            const { onDropFramework } = this.props;
            if (onDropFramework && !monitor.didDrop()) {
                onDropFramework(this.props.tree);
            }
        };
        this.onEndDragFramework = () => {
            const { onEndDragFramework } = this.props;
            if (onEndDragFramework) {
                onEndDragFramework(this.props.tree);
            }
        };
    }
    render() {
        const { id, children, size = { width: 0, height: 0 }, position = { left: 0, top: 0 } } = this.props;
        const { onMouseOver, onClick, onBeginDragFramework, onDragingHoverFramework, onDropFramework, onEndDragFramework } = this;
        return (<DragDropBlock id={id} className={classNames('lz-framework-element')} style={{ width: size.width, height: size.height, left: position.left, top: position.top }} onClick={onClick} onMouseOver={onMouseOver} beginDrag={onBeginDragFramework} hover={onDragingHoverFramework} drop={onDropFramework} endDrag={onEndDragFramework}>{children}</DragDropBlock>);
    }
}
