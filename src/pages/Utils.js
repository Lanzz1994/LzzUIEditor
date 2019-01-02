import * as React from 'react';
import {message, Layout} from 'antd';
import {UpdateFrameworkLayout} from '../components/Layout/index';

const LayoutHandler={
    'AddLast'(LayoutCore,tree){
        tree.AddLast(LayoutCore.DragNode);
    },
    'MoveToLast'(LayoutCore,tree){
        LayoutCore.DragNode.MoveToLast(tree);
    },
    'CopyNode'(){

    },
    'RemoveNode'(state){
        
    }
};

function ChangeLayoutControl(props,updateStates,handle){
    const {LayoutCore,dispatch}=props;
    let oldVal=LayoutCore.PartTreeCore.ToLinkedTreeJSON();
    handle();
    LayoutCore.UndoContext.Execute(LayoutCore.PartTreeCore.ToLinkedTreeJSON(),oldVal);
    window.LayoutComponentIframe.ResetRender();
    dispatch({type:'LayoutCore/UpdateStates',updateStates});
    UpdateFrameworkLayout(LayoutCore.PartTreeCore,window.frames[0].document);
}

export function HoverLayoutControl(props,tree){
    const {LayoutCore,dispatch}=props;
    if(!LayoutCore.DragNode){
        dispatch({type:'LayoutCore/UpdateStates',updateStates:{
            HoverNode:tree,
            HoverState:'hover',
            HoverLayout:{...tree.Data.Size,...tree.Data.RootPosition}
        }});
    }
}

export function DragingHoverLayoutControl(props,tree){
    const {LayoutCore,dispatch}=props;
    if(!LayoutCore.HoverNode||LayoutCore.HoverNode.ID!==tree.ID){
        dispatch({type:'LayoutCore/UpdateStates',updateStates:{
            HoverNode:tree,
            HoverState:'normal',
            DragState:'draging-hover',
            DragLayout:{...tree.Data.Size,...tree.Data.RootPosition}
        }});
    }
}

export function DropLayoutControl(props,tree){
    const {LayoutCore}=props;
    if(tree.Data&&tree.Data.Info.IsLeaf){
        const {Introduction}=tree.Data.Info;
        message.info(<React.Fragment><strong>{Introduction.ShortName}</strong> 无法作为容器放置子控件</React.Fragment>);
    }else{
        ChangeLayoutControl(props,{
            ResetRenderSign:Math.random(),
            DragNode:null,
            DragState:'normal'
        },()=>{
            const handle=LayoutHandler[LayoutCore.CurrentHandler];
            if(handle){handle(LayoutCore,tree)}
        });
    }
}

export function ClickLayoutControl(props,tree){
    const {dispatch} = props;
    dispatch({type:'LayoutCore/UpdateStates',updateStates:{
        SelectedNode:tree,
        StaticState:'selected',
        StaticLayout:{...tree.Data.Size,...tree.Data.RootPosition}
    }});
}

export function HoverExcludeLayoutControl(props){
    const {LayoutCore,dispatch}=props;
    if(!LayoutCore.DragNode){
        dispatch({type:'LayoutCore/UpdateStates',updateStates:{
            HoverNode:null,
            HoverState:'normal'
        }});
    }
}

export function ClickExcludeLayoutControl(props){
    const {dispatch} = props;
    dispatch({type:'LayoutCore/UpdateStates',updateStates:{
        StaticState:'normal',
        SelectedNode:null,
    }});
}

export function DragingHoverExcludeFramework(props,tree){
    const {LayoutCore,dispatch}=props;
    if(!LayoutCore.HoverNode||LayoutCore.HoverNode.ID!==tree.ID){
        dispatch({type:'LayoutCore/UpdateStates',updateStates:{
            HoverNode:tree,
            HoverState:'normal',
            DragState:'normal'
        }});
    }
}