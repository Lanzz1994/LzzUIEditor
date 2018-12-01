import update from 'immutability-helper'
import LinkedTree from '../components/utils/LinkedTree'

let partTree=new LinkedTree({allowChild:true,name:'0'});

let child=new LinkedTree({name:'1'},partTree);
new LinkedTree({name:'1-1'},child);
new LinkedTree({name:'1-2'},child);

let child2=new LinkedTree({name:'2'},partTree);
new LinkedTree({name:'2-1'},child2);
new LinkedTree({name:'2-2'},child2);

export default {
    namespace: 'DataCore',
    state: {
        //用来分发组件树数据
        PartTreeCore:partTree,

        //当前的节点
        CurrentNode:null,
        //选中的节点
        SelectedNode:null,
        //拖拽的节点
        DragingNode:null,
    },
    reducers: {
        'ChangeNode'(state,{updateStates}){
            let {CurrentNode,SelectedNode,DragingNode}=updateStates;
            if(CurrentNode)state.CurrentNode=CurrentNode;
            if(SelectedNode)state.SelectedNode=SelectedNode;
            if(DragingNode)state.DragingNode=DragingNode;
            return state;
        },
    }
};