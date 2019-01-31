import * as React from 'react';
import classNames from 'classnames';
import DragDropType from './DragDropType';
import {CssBase} from './types';
import { DropTarget, DropTargetConnector, DropTargetMonitor, ConnectDropTarget } from 'react-dnd';

// 用于拖拽时 放置的容器
export interface DropContainerProps{
	connectDropTarget?: ConnectDropTarget,
    isOver?: boolean,
	isOverCurrent?: boolean,
	drop?:(props:any,monitor:any,component:any)=>void,
	hover?:(props:any, monitor:any, component:any)=>void,
	onMouseOver?:React.MouseEventHandler<HTMLDivElement>,
	onClick?:React.MouseEventHandler<HTMLDivElement>,
	onMouseEnter?:React.MouseEventHandler<HTMLDivElement>,
	onMouseLeave?:React.MouseEventHandler<HTMLDivElement>,
	onScroll?:React.UIEventHandler<HTMLDivElement>
};

const TargetEvents = {
	drop:(props:any,monitor:DropTargetMonitor,component:any)=>{
		if(props.drop){
			props.drop(props,monitor,component);
		}
	},
	hover:(props:any, monitor:DropTargetMonitor, component:any)=>{
		if(props.hover){
			props.hover(props,monitor,component);
		}
	}
}

// 放置容器的外壳
// 提供拖拽时 放置流程入口，不参与样式
export default DropTarget(DragDropType.DragDrop, TargetEvents, (connect:DropTargetConnector, monitor:DropTargetMonitor) => ({
	connectDropTarget: connect.dropTarget(),
	isOver: monitor.isOver(),
	isOverCurrent: monitor.isOver({ shallow: true })
}))(
class extends React.PureComponent<DropContainerProps&CssBase> {
	
    public render(){
		const {id,className,style,connectDropTarget,children,onMouseOver,onClick,onMouseEnter,onMouseLeave,onScroll} = this.props;
		const html=(<div className={classNames("lz-drop-container",className)} id={id} style={style} onClick={onClick} onMouseOver={onMouseOver} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onScroll={onScroll}>{children}</div>);
		return connectDropTarget?connectDropTarget(html):html;
	}
})