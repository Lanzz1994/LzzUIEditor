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

export function ChangeLayoutControl(props,updateStates,handle){
    const {LayoutCore,dispatch}=props;
    let oldVal=LayoutCore.PartTreeCore.ToLinkedTreeJSON();
    if(handle)updateStates={...updateStates,...(handle()||{})};
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

export function BeginDragLayoutControl(props,tree){
    props.dispatch({type:'LayoutCore/UpdateStates',updateStates:{
        DragNode:tree,
        CurrentHandler:'MoveToLast'
    }});
}

export function DragingHoverLayoutControl(props,tree){
    const {LayoutCore,dispatch}=props;
    if(!LayoutCore.HoverNode||LayoutCore.HoverNode.ID!==tree.ID){
        let canDrop=(!tree.Data.Info.IsLeaf&&tree.ID!==LayoutCore.DragNode.ID
            &&!tree.ContainsParent(LayoutCore.DragNode.ID));
        dispatch({type:'LayoutCore/UpdateStates',updateStates:{
            HoverNode:tree,
            HoverState:'normal',
            DragState:canDrop?'draging-hover':'no-allow',
            DragLayout:{...tree.Data.Size,...tree.Data.RootPosition}
        }});
    }
}

export function DropLayoutControl(props,tree){
    const {LayoutCore}=props;
    if(tree.Data&&tree.Data.Info.IsLeaf){
        const {Introduction}=tree.Data.Info;
        message.info(<React.Fragment><strong>{Introduction.ShortName}</strong> 无法作为容器放置子控件</React.Fragment>);
        ClearDragState(props);
    }else if(tree.ID===LayoutCore.DragNode.ID||tree.ContainsParent(LayoutCore.DragNode.ID)){
        message.info(<React.Fragment>无法将节点放置自身内部</React.Fragment>);
        ClearDragState(props);
    }else{
        ChangeLayoutControl(props,{
            ResetRenderSign:Math.random(),
            DragState:'normal',
            DragNode:null,
            CurrentHandler:null
        },()=>{
            const handle=LayoutHandler[LayoutCore.CurrentHandler];
            if(handle){handle(LayoutCore,tree)}
        });
    }
}

function ClearDragState(props){
    props.dispatch({type:'LayoutCore/UpdateStates',updateStates:{
        HoverNode:null,
        DragNode:null,
        HoverState:'normal',
        DragState:'normal',
        CurrentHandler:null
    }});
}

export function ClickLayoutControl(props,tree){
    const {dispatch} = props;
    dispatch({type:'LayoutCore/UpdateStates',updateStates:{
        SelectedNode:tree,
        StaticState:'selected',
        StaticLayout:{...tree.Data.Size,...tree.Data.RootPosition},
        ControlEditorActive:'prop-editor'
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
    if(LayoutCore.HoverNode){//this code ensureing dispath method only is called once,because react-dnd draging-hover event exists high frequency calling.
        dispatch({type:'LayoutCore/UpdateStates',updateStates:{
            HoverNode:null,
            HoverState:'normal',
            DragState:'normal'
        }});
    }
}

export function LeaveRootFramework(props){
    props.dispatch({type:'LayoutCore/UpdateStates',updateStates:{
        HoverNode:null,
        DragNode:null,
        hiddenToolbar:true,
        HoverState:'normal',
        DragState:'normal'
    }});
}