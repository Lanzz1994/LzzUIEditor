import * as React from 'react';
import classNames from 'classnames';
import LinkedTree from '../Utils/LinkedTree';
import DragDropBlock from '../DragDrop/DragDropBlock';
import {ElementSize,ElementPosition} from './types';

// 元素当前的状态：默认（无操作），选中，鼠标经过，鼠标点击准备拖拽，拖拽中，放下（这些状态是互斥的，同时只能存在一个）
// export type FrameworkElementStateType='normal'|'hover'|'drag'|'draging'|'draging-hover'|'drop';
// export enum FrameworkElementState {
//     Normal = 'normal',
//     Hover='hover',
//     Drag='drag',
//     Draging='draging',
//     DragingHover='draging-hover',
//     Drop='drop'
// }

export interface FrameworkElementProps{
    id:string,
    tree:LinkedTree,
    size?:ElementSize,
    position?:ElementPosition,
    onHoverFramework?:(tree:any)=>void,
    onClickFramework?:(tree:any)=>void,

    onBeginDragFramework?:(tree:any)=>any,
    onDragingHoverFramework?:(tree:any)=>void
    onDropFramework?:(tree:any)=>void,
    onEndDragFramework?:(tree:any)=>void
}

export default class FrameworkElement extends React.PureComponent<FrameworkElementProps>{
    
    constructor(props:FrameworkElementProps){
        super(props);
    }

    // 两种操作：加上 hover 状态，去除 hover 状态
    onMouseOver=(e:React.MouseEvent)=>{
        const {onHoverFramework}=this.props;
        if(onHoverFramework){
            onHoverFramework(this.props.tree);
        }
        e.stopPropagation();
    }

    onClick=(e:React.MouseEvent)=>{
        const {onClickFramework}=this.props;
        if(onClickFramework){
            onClickFramework(this.props.tree);
        }
        e.stopPropagation();
    }

    onBeginDragFramework=()=>{
        const {onBeginDragFramework}=this.props;
        if(onBeginDragFramework){
            onBeginDragFramework(this.props.tree);
        }
        return {};
    }
    onDragingHoverFramework=(props:any,monitor:any)=>{
        const {onDragingHoverFramework}=this.props;
        if(onDragingHoverFramework&&monitor.isOver({shallow:true})){
            onDragingHoverFramework(this.props.tree);
        }
    }
    onDropFramework=(props:any,monitor:any)=>{
        const {onDropFramework}=this.props;
        if(onDropFramework&&!monitor.didDrop()){
            onDropFramework(this.props.tree);
        }
    }
    onEndDragFramework=()=>{
        const {onEndDragFramework}=this.props;
        if(onEndDragFramework){
            onEndDragFramework(this.props.tree);
        }
    }

    render(){        
        const {id,children,size={width:0,height:0},position={left:0,top:0}} = this.props;
        const {onMouseOver,onClick,onBeginDragFramework,onDragingHoverFramework,onDropFramework,onEndDragFramework}=this;
        return (
            <DragDropBlock
                id={id}
                className={classNames('lz-framework-element')} 
                style={{width:size.width,height:size.height,left:position.left,top:position.top}}
                onClick={onClick}
                onMouseOver={onMouseOver}
                
                beginDrag={onBeginDragFramework}
                hover={onDragingHoverFramework}
                drop={onDropFramework}
                endDrag={onEndDragFramework}

            >{children}</DragDropBlock>
        );
    }
}