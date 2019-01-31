import LinkedTree from '../Utils/LinkedTree';
import {ElementSize,ElementPosition,LayoutTreeData,framework_id_prefix} from './types';

function offset(target:any, rootOffsetParent:string):ElementPosition {
    var top = 0, left = 0;
    while (target&&target.id != rootOffsetParent&&target.nodeName!=='BODY') {
        top += target.offsetTop
        left += target.offsetLeft
        target = target.offsetParent
    }
    return { top: top, left: left };
}

const UpdateFrameworkLayout=(tree:LinkedTree<LayoutTreeData>,target:any):void=>{
    tree.ForEach((current:LinkedTree<LayoutTreeData>,parent:LinkedTree<LayoutTreeData>)=>{
        if(current.HasParent){
            let dom=current.Data.Info.NoID?target.getElementsByClassName(current.ID)[0]:target.getElementById(current.ID);
            let framework=document.getElementById(framework_id_prefix+current.ID);
            if(dom&&framework){
                let domPos:ElementPosition=offset(dom,'root');
                let parentPos:ElementPosition = parent.Data.RootPosition||{left:0,top:0};
                let size:ElementSize={width:dom.offsetWidth,height:dom.offsetHeight};
                current.Data.Position={left:domPos.left-parentPos.left,top:domPos.top-parentPos.top};
                current.Data.RootPosition=domPos;
                current.Data.Size=size;
            }
        }
        return current;
    });
}

const RenderInLinkedTree=(tree:LinkedTree<LayoutTreeData>,handle:(current:LinkedTree<LayoutTreeData>,children:any[])=>any)=>{
    const renders=tree.ForEachStartLeaf((current:LinkedTree<LayoutTreeData>,children:any[])=>{
        if(current.HasParent){
            // if(current.Data.InsideRootData){
                
            // }
            return handle(current,children);
        }else{
            return children;
        }

        // const id=framework_id_prefix+current.ID;
        // const data=current.Data;

        // return current.HasParent?
        //     <FrameworkElement
        //         id={id}
        //         key={id}
        //         tree={current}
        //         size={data.Size}
        //         position={data.Position}
        //         onHoverFramework={onHoverFramework}
        //         onClickFramework={onClickFramework}
        //         onBeginDragFramework={onBeginDragFramework}
        //         onDragingHoverFramework={onDragingHoverFramework}
        //         onDropFramework={onDropFramework}
        //         onEndDragFramework={onEndDragFramework}
        //     >{children}</FrameworkElement>
        //     :children;
    });
}

export {UpdateFrameworkLayout}