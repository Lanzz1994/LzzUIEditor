import * as React from 'react';
import classNames from 'classnames';
import DragDropType from './DragDropType';
import {CssBase} from './types';
import {DragSource, DragSourceConnector, DragSourceMonitor, ConnectDragSource, ConnectDragPreview} from 'react-dnd';

export interface DragContainerProps{
    connectDragSource?: ConnectDragSource,
	connectDragPreview?: ConnectDragPreview,
	dragPreview?:React.ReactElement<any>,
	isDragging?: boolean,
	beginDrag?:(props:any,monitor:any,component:any)=>{},
	endDrag?:(props:any, monitor:any, component:any)=>void,
	[propName:string]:any
}

// 定义事件处理
const SourceEvents = {
	beginDrag:(props:any,monitor:DragSourceMonitor,component:any)=>{
		if(props.beginDrag){
			return props.beginDrag(props,monitor,component);
		}
		return {};
	},
	endDrag:(props:any, monitor:DragSourceMonitor, component:any)=>{
		if(props.endDrag){
		   	props.endDrag(props,monitor,component);
		}
	}
};

// 拖拽内容的外壳
// 提供拖拽流程入口，不参与样式
export default DragSource(DragDropType.DragDrop,SourceEvents,
(connect:DragSourceConnector,monitor:DragSourceMonitor)=>({
	connectDragSource: connect.dragSource(),
	connectDragPreview: connect.dragPreview(),
	isDragging: monitor.isDragging(),
}))(
class DragContainer extends React.PureComponent<DragContainerProps&CssBase>{

	monitor:DragSourceMonitor;

    componentDidMount() {
		const {connectDragPreview,dragPreview} = this.props;
		if(dragPreview&&connectDragPreview){
			connectDragPreview(dragPreview);
		}
	}

    render(){
		const {id,className,style,connectDragSource,children}=this.props;
		const html=(<div id={id} className={classNames("lz-drag-container",className)} style={style}>{children}</div>);
        return connectDragSource?connectDragSource(html):html;
    }
})