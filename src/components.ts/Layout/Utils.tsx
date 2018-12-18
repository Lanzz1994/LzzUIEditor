import LinkedTree from '../Utils/LinkedTree';
import {ElementSize,ElementPosition,LayoutTreeData} from './types';

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
            if(dom){
                let pos:ElementPosition=offset(dom,'root');
                let size:ElementSize={width:dom.offsetWidth,height:dom.offsetHeight};
                current.Data.Position=pos;
                current.Data.Size=size;
            }
        }
    });
}

export {UpdateFrameworkLayout}