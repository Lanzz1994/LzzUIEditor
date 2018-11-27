import * as React from 'react';
import classNames from 'classnames';
import DragDropBlock from '../DragDrop/DragDropBlock';

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

export type FrameworkElementSize={width:number,height:number};
export type FrameworkElementPosition={left:number,top:number};
export type FrameworkElementStore={size:FrameworkElementSize,position:FrameworkElementPosition}&{};

export interface FrameworkElementProps{
    //size?:FrameworkElementSize;
    //position?:FrameworkElementPosition;
    //elementState?:FrameworkElementState;
    //isSelected?:boolean;
    
    tree?:any;
    onMouseOver?:(e:React.MouseEvent,tree:any)=>void;
    onClick?:(e:React.MouseEvent,tree:any)=>void;
}

export default class FrameworkElement extends React.PureComponent<FrameworkElementProps>{
    
    constructor(props:FrameworkElementProps){
        super(props);
    }

    // componentWillReceiveProps(nextProps:FrameworkElementProps){
    //     const currentIsSelected=this.props.isSelected
    //     const {isSelected,elementState}=nextProps;
    //     if(currentIsSelected!==isSelected){
    //         this.setState({isSelected});
    //     }
    //     this.setState({elementState});
    // }

    beginDrag=(props:any,monitor:any,component:any)=>{

        console.log(props,monitor,component);

        return {};
    }

    hover=()=>{

    }

    // 两种操作：加上 hover 状态，去除 hover 状态
    onMouseOver=(e:React.MouseEvent)=>{
        if(typeof this.props.onMouseOver==='function'){
            this.props.onMouseOver(e,this.props.tree);
        }
        e.stopPropagation();
    }

    onClick=(e:React.MouseEvent)=>{
        if(typeof this.props.onClick==='function'){
            this.props.onClick(e,this.props.tree);
        }
        e.stopPropagation();
    }

    render(){
        const {size={width:10,height:10},position={left:10,top:10}}=this.props.tree.data||{};
        
        const {children} = this.props;
        const {hover,onMouseOver,onClick,beginDrag}=this;
        return (
            <DragDropBlock 
                className={classNames('lz-framework-element')} 
                style={{width:size.width,height:size.height,left:position.left,top:position.top}}
                hover={hover}
                onMouseOver={onMouseOver}
                onClick={onClick}
                beginDrag={beginDrag}
            >{children}</DragDropBlock>
        );
    }
}