import * as React from 'react';
import { DropContainer } from '../DragDrop/index';
import { framework_id_prefix } from './types';
import FrameworkElement from './FrameworkElement';
export default class LayoutFramework extends React.Component {
    constructor() {
        super(...arguments);
        this.onEnterRootFramework = (e) => {
            const { onEnterRootFramework } = this.props;
            if (typeof onEnterRootFramework === 'function') {
                onEnterRootFramework();
            }
            e.stopPropagation();
        };
        this.onLeaveRootFramework = (e) => {
            const { onLeaveRootFramework } = this.props;
            if (typeof onLeaveRootFramework === 'function') {
                onLeaveRootFramework();
            }
            e.stopPropagation();
        };
        this.onHoverRootFramework = (e) => {
            const { onHoverExcludeFramework, layoutData } = this.props;
            if (typeof onHoverExcludeFramework === 'function') {
                onHoverExcludeFramework(layoutData);
            }
            e.stopPropagation();
        };
        this.onClickRootFramework = (e) => {
            const { onClickExcludeFramework, layoutData } = this.props;
            if (typeof onClickExcludeFramework === 'function') {
                onClickExcludeFramework(layoutData);
            }
            e.stopPropagation();
        };
        this.onDropRootFramework = (props, monitor) => {
            const { onDropFramework, layoutData } = this.props;
            if (typeof onDropFramework === 'function' && !monitor.didDrop()) {
                onDropFramework(layoutData);
            }
        };
        this.onDragingHoverRootFramework = (props, monitor) => {
            const { onDragingHoverExcludeFramework, layoutData } = this.props;
            if (typeof onDragingHoverExcludeFramework === 'function' && monitor.isOver({ shallow: true })) {
                onDragingHoverExcludeFramework(layoutData);
            }
        };
    }
    render() {
        const { layoutData, interfaceConfig, onHoverFramework, onClickFramework, onDropFramework, onDragingHoverFramework, onBeginDragFramework, onEndDragFramework, onScroll } = this.props;
        const { onHoverRootFramework, onClickRootFramework, onDropRootFramework, onDragingHoverRootFramework, onEnterRootFramework, onLeaveRootFramework } = this;
        const frames = layoutData.ForEachStartLeaf((current, children) => {
            const id = framework_id_prefix + current.ID;
            const data = current.Data;
            return current.HasParent ?
                <FrameworkElement id={id} key={id} tree={current} size={data.Size} position={data.Position} onHoverFramework={onHoverFramework} onClickFramework={onClickFramework} onBeginDragFramework={onBeginDragFramework} onDragingHoverFramework={onDragingHoverFramework} onDropFramework={onDropFramework} onEndDragFramework={onEndDragFramework}>{children}</FrameworkElement>
                : children;
        });
        return (<DropContainer id={framework_id_prefix + layoutData.ID} className="lz-layout-framework" style={interfaceConfig} hover={onDragingHoverRootFramework} drop={onDropRootFramework} onClick={onClickRootFramework} onMouseOver={onHoverRootFramework} onMouseEnter={onEnterRootFramework} onMouseLeave={onLeaveRootFramework} onScroll={onScroll}>{frames}{this.props.children}</DropContainer>);
    }
}
