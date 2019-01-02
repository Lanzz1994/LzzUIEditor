import LinkedTree from '../Utils/LinkedTree';
import {ElementSize,ElementPosition,LayoutTreeData,framework_id_prefix} from './types';

function offset(target:any, rootOffsetParent:string):ElementPosition {
    var top = 0, left = 0;
    while (target&&target.id != rootOffsetParent) {
        top += target.offsetTop
        left += target.offsetLeft
        target = target.offsetParent
    }
    return { top: top, left: left };
}

const UpdateFrameworkLayout=(tree:LinkedTree<LayoutTreeData>,target:any):void=>{
    tree.ForEach((current:LinkedTree<LayoutTreeData>)=>{
        if(current.HasParent){
            let dom=target.getElementById(current.ID);
            let framework=document.getElementById(framework_id_prefix+current.ID);
            if(dom&&framework){
                let domPos:ElementPosition=offset(dom,'root');
                let frameworkPos:ElementPosition=offset(framework.offsetParent,framework_id_prefix+tree.ID);
                let size:ElementSize={width:dom.offsetWidth,height:dom.offsetHeight};
                current.Data.Position={left:domPos.left-frameworkPos.left,top:domPos.top-frameworkPos.top};
                current.Data.RootPosition=domPos;
                current.Data.Size=size;
            }
        }
    });
}

export {UpdateFrameworkLayout}