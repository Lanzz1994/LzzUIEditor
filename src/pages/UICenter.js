import React from 'react';
import { connect } from 'dva';
import {LayoutFramework,LayoutContextTool,UpdateFrameworkLayout} from '../components/Layout/index';
import {HoverLayoutControl,DragingHoverLayoutControl,DropLayoutControl,
    ClickLayoutControl,ClickExcludeLayoutControl,HoverExcludeLayoutControl,DragingHoverExcludeFramework} from './Utils';
import './UICenter.less';

class UICenter extends React.PureComponent{
    constructor(props){
        super(props);
        window.UICenter=this;
    }

    onHoverFramework=(tree)=>{
        HoverLayoutControl(this.props,tree);
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
    
    render(){
        const {onHoverFramework,onClickFramework,onDropFramework,onDragingHoverFramework,
            onHoverExcludeFramework,onClickExcludeFramework,onDragingHoverExcludeFramework}=this;
        const {InterfaceConfig,LayoutCore}=this.props;
        const {PartTreeCore,ResetRenderSign,StaticState,StaticLayout,HoverState,HoverLayout,DragState,DragLayout}=LayoutCore;
        return (
            <React.Fragment>
                <iframe className="lz-layout-component-iframe" src="#/LayoutComponentIframe" style={InterfaceConfig.LayoutAreaSetting} onLoad={()=>UpdateFrameworkLayout(LayoutCore.PartTreeCore,window.frames[0].document)}></iframe>
                <LayoutFramework layoutData={PartTreeCore} interfaceConfig={InterfaceConfig.LayoutAreaSetting} 
                    onHoverFramework={onHoverFramework} onClickFramework={onClickFramework}
                    onDropFramework={onDropFramework} onDragingHoverFramework={onDragingHoverFramework}
                    onHoverExcludeFramework={onHoverExcludeFramework} onClickExcludeFramework={onClickExcludeFramework}
                    onDragingHoverExcludeFramework={onDragingHoverExcludeFramework}/>

                <LayoutContextTool staticState={StaticState} staticLayout={StaticLayout} 
                                hoverState={HoverState} hoverLayout={HoverLayout}
                                dragState={DragState} dragLayout={DragLayout}
                                interfaceConfig={InterfaceConfig.LayoutAreaSetting}/>
                <div style={{display:'none'}}>{ResetRenderSign}</div>
            </React.Fragment>
        );
    }
}

export default connect((state)=>state)(UICenter);