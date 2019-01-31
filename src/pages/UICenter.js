import React from 'react';
import { connect } from 'dva';
import {LayoutFramework,LayoutContextTool,UpdateFrameworkLayout} from '../components/Layout/index';
import {HoverLayoutControl,DragingHoverLayoutControl,DropLayoutControl,
    ClickLayoutControl,ClickExcludeLayoutControl,HoverExcludeLayoutControl,DragingHoverExcludeFramework,LeaveRootFramework,BeginDragLayoutControl} from './Utils';
import './UICenter.less';

class UICenter extends React.PureComponent{
    constructor(props){
        super(props);
        window.UICenter=this;
    }

    onHoverFramework=(tree)=>{
        HoverLayoutControl(this.props,tree);
    }

    onBeginDragFramework=(tree)=>{
        BeginDragLayoutControl(this.props,tree);
    }

    onDragingHoverFramework=(tree)=>{
        DragingHoverLayoutControl(this.props,tree);
    }

    onDropFramework=(tree)=>{
        DropLayoutControl(this.props,tree);
    }

    onClickFramework=(tree)=>{
        ClickLayoutControl(this.props,tree);
    }

    onHoverExcludeFramework=()=>{
        HoverExcludeLayoutControl(this.props);
    }

    onClickExcludeFramework=()=>{
        ClickExcludeLayoutControl(this.props);
    }

    onDragingHoverExcludeFramework=(tree)=>{
        DragingHoverExcludeFramework(this.props,tree);
    }

    onLeaveRootFramework=()=>{
        LeaveRootFramework(this.props);
    }

    onEnterRootFramework=()=>{
        this.props.dispatch({type:'LayoutCore/UpdateStates',updateStates:{HiddenToolbar:false}});
    }

    onScroll=(e)=>{
        window.LayoutComponentIframe.SetScrollPosition(e);
    }
    
    render(){
        const {onHoverFramework,onClickFramework,onDropFramework,onDragingHoverFramework,
            onHoverExcludeFramework,onClickExcludeFramework,onDragingHoverExcludeFramework,onLeaveRootFramework,onBeginDragFramework,onEnterRootFramework,onScroll}=this;
        const {InterfaceConfig,LayoutCore}=this.props;
        const {PartTreeCore,StaticState,ResetRenderSign,StaticLayout,HoverState,HoverLayout,DragState,DragLayout,HiddenToolbar}=LayoutCore;
        return (
            <React.Fragment>
                <iframe className="lz-layout-component-iframe" src="#/LayoutComponentIframe" style={InterfaceConfig.LayoutAreaSetting} onLoad={()=>UpdateFrameworkLayout(LayoutCore.PartTreeCore,window.frames[0].document)}></iframe>
                <LayoutFramework layoutData={PartTreeCore} interfaceConfig={InterfaceConfig.LayoutAreaSetting} 
                    onHoverFramework={onHoverFramework}
                    onClickFramework={onClickFramework}
                    onBeginDragFramework={onBeginDragFramework}
                    onDragingHoverFramework={onDragingHoverFramework}
                    onDropFramework={onDropFramework} 
                    onHoverExcludeFramework={onHoverExcludeFramework} 
                    onClickExcludeFramework={onClickExcludeFramework}
                    onDragingHoverExcludeFramework={onDragingHoverExcludeFramework}
                    onEnterRootFramework={onEnterRootFramework}
                    onLeaveRootFramework={onLeaveRootFramework}
                    onScroll={onScroll}
                    >
                        <LayoutContextTool staticState={StaticState} staticLayout={StaticLayout} 
                        hoverState={HoverState} hoverLayout={HoverLayout}
                        dragState={DragState} dragLayout={DragLayout}
                        hiddenToolbar={HiddenToolbar}
                        interfaceConfig={{width:0,height:0,left:0,top:0}} />
                    </LayoutFramework>
                <div style={{display:'none'}}>{ResetRenderSign}</div>
            </React.Fragment>
        );
    }
}

export default connect((state)=>state)(UICenter);