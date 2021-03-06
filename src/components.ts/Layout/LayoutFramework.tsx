import * as React from 'react';
import LinkedTree from '../Utils/LinkedTree';
import {DropContainer} from '../DragDrop/index';
import {framework_id_prefix,LayoutTreeData} from './types'
import FrameworkElement from './FrameworkElement';
import {LayoutBaseProps} from './types';

interface LayoutFrameworkProps{
    onHoverFramework?:(tree:LinkedTree<LayoutTreeData>)=>void,
    onClickFramework?:(tree:LinkedTree<LayoutTreeData>)=>void,
    onBeginDragFramework?:(tree:LinkedTree<LayoutTreeData>)=>void,
    onDragingHoverFramework?:(tree:LinkedTree<LayoutTreeData>)=>void,
    onDropFramework?:(tree:LinkedTree<LayoutTreeData>)=>void,
    onEndDragFramework?:(tree:LinkedTree<LayoutTreeData>)=>void,

    onHoverExcludeFramework?:(tree:LinkedTree<LayoutTreeData>)=>void,
    onClickExcludeFramework?:(tree:LinkedTree<LayoutTreeData>)=>void,
    onDragingHoverExcludeFramework?:(tree:LinkedTree<LayoutTreeData>)=>void,

    onEnterRootFramework?:()=>void,
    onLeaveRootFramework?:()=>void,
    onScroll?:(e:React.UIEvent)=>void,
}

export default class LayoutFramework extends React.Component<LayoutFrameworkProps&LayoutBaseProps>{

    onEnterRootFramework=(e:React.MouseEvent)=>{
        const {onEnterRootFramework}=this.props;
        if(typeof onEnterRootFramework==='function'){
            onEnterRootFramework();
        }
        e.stopPropagation();
    }
    onLeaveRootFramework=(e:React.MouseEvent)=>{
        const {onLeaveRootFramework}=this.props;
        if(typeof onLeaveRootFramework==='function'){
            onLeaveRootFramework();
        }
        e.stopPropagation();
    }

    onHoverRootFramework=(e:React.MouseEvent)=>{
        const {onHoverExcludeFramework,layoutData}=this.props;
        if(typeof onHoverExcludeFramework==='function'){
            onHoverExcludeFramework(layoutData);
        }
        e.stopPropagation();
    }
    onClickRootFramework=(e:React.MouseEvent)=>{
        const {onClickExcludeFramework,layoutData}=this.props;
        if(typeof onClickExcludeFramework==='function'){
            onClickExcludeFramework(layoutData);
        }
        e.stopPropagation();
    }
    onDropRootFramework=(props:any,monitor:any)=>{
        const {onDropFramework,layoutData}=this.props;
        if(typeof onDropFramework==='function'&&!monitor.didDrop()){
            onDropFramework(layoutData);
        }
    }
    onDragingHoverRootFramework=(props:any,monitor:any)=>{
        const {onDragingHoverExcludeFramework,layoutData}=this.props;
        if(typeof onDragingHoverExcludeFramework==='function'&&monitor.isOver({shallow:true})){
            onDragingHoverExcludeFramework(layoutData);
        }
    }

    render(){
        const {layoutData,interfaceConfig,onHoverFramework,onClickFramework,onDropFramework,onDragingHoverFramework,onBeginDragFramework,onEndDragFramework,onScroll}=this.props;
        const {onHoverRootFramework,onClickRootFramework,onDropRootFramework,onDragingHoverRootFramework,onEnterRootFramework,onLeaveRootFramework}=this;
        const frames=layoutData.ForEachStartLeaf((current:LinkedTree<LayoutTreeData>,children:any[])=>{
            const id=framework_id_prefix+current.ID;
            const data=current.Data;

            return current.HasParent?
                <FrameworkElement
                    id={id}
                    key={id}
                    tree={current}
                    size={data.Size}
                    position={data.Position}
                    onHoverFramework={onHoverFramework}
                    onClickFramework={onClickFramework}
                    onBeginDragFramework={onBeginDragFramework}
                    onDragingHoverFramework={onDragingHoverFramework}
                    onDropFramework={onDropFramework}
                    onEndDragFramework={onEndDragFramework}
                >{children}</FrameworkElement>
                :children;
        });
        return (<DropContainer
            id={framework_id_prefix+layoutData.ID} className="lz-layout-framework" style={interfaceConfig}
            hover={onDragingHoverRootFramework}
            drop={onDropRootFramework}
            onClick={onClickRootFramework}
            onMouseOver={onHoverRootFramework}
            onMouseEnter={onEnterRootFramework}
            onMouseLeave={onLeaveRootFramework}
            onScroll={onScroll}
            >{frames}{this.props.children}</DropContainer>);
    }
}