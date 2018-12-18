import React from 'react';
import { connect } from 'dva';
import {message} from 'antd';
import {LayoutFramework,UpdateFrameworkLayout} from '../components/Layout/index';
import './UICenter.less';

class UICenter extends React.PureComponent{
    constructor(props){
        super(props);
        window.UICenter=this;
    }

    updateFrameworkLayout=()=>{
        let {LayoutCore,dispatch}=this.props;
        UpdateFrameworkLayout(LayoutCore.PartTreeCore,window.frames[0].document);
        dispatch({type:'LayoutCore/ResetRender'});
    }

    onHoverFramework=(tree)=>{
        const {dispatch} = this.props;
        dispatch({type:'LayoutCore/SetNode',updateStates:{CurrentNode:tree}});
    }

    onClickFramework=(tree)=>{
        const {dispatch} = this.props;
        dispatch({type:'LayoutCore/SetNode',updateStates:{SelectedNode:tree}});
    }

    onDropFramework=(tree)=>{
        const {LayoutCore}=this.props;
        if(tree.Data&&tree.Data.Info.IsLeaf){
            const {Introduction}=tree.Data.Info;
            message.info(<React.Fragment><strong>{Introduction.ShortName}</strong> 无法作为容器放置子控件</React.Fragment>);
        }else{
            tree.AddLast(LayoutCore.DragNode);
            window.LayoutComponentIframe.ResetRender();
            this.updateFrameworkLayout();
        }

        // tasks=[
        //     {
        //         key:'task1',
        //     },
        //     {
        //         key:'task2',
        //     }
        // ];
    }

    onDragingHoverFramework=(tree)=>{
        //console.log(tree);
    }

    onHoverExcludeFramework=()=>{
        const {dispatch} = this.props;
        dispatch({type:'LayoutCore/SetNode',updateStates:{CurrentNode:null}});
    }

    onClickExcludeFramework=()=>{
        const {dispatch} = this.props;
        dispatch({type:'LayoutCore/SetNode',updateStates:{SelectedNode:null}});
    }
    
    render(){
        const {updateFrameworkLayout,
            onHoverFramework,onClickFramework,onDropFramework,onDragingHoverFramework,
            onHoverExcludeFramework,onClickExcludeFramework}=this;
        const {InterfaceConfig,LayoutCore}=this.props;
        const {PartTreeCore,ResetRenderSign}=LayoutCore;
        return (
            <React.Fragment>
                <iframe className="lz-layout-component-iframe" src="#/LayoutComponentIframe" style={InterfaceConfig.LayoutAreaSetting} onLoad={updateFrameworkLayout}></iframe>
                <LayoutFramework layoutData={PartTreeCore} interfaceConfig={InterfaceConfig.LayoutAreaSetting} 
                    onHoverFramework={onHoverFramework} onClickFramework={onClickFramework}
                    onDropFramework={onDropFramework} onDragingHoverFramework={onDragingHoverFramework}
                    onHoverExcludeFramework={onHoverExcludeFramework} onClickExcludeFramework={onClickExcludeFramework}/>
                <div style={{display:'none'}}>{ResetRenderSign}</div>
            </React.Fragment>
        );
    }
}

export default connect((state)=>state)(UICenter);