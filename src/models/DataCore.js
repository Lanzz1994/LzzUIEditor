import update from 'immutability-helper'
import LinkedTree from '../utils/LinkedTree'

let partTree=new LinkedTree({allowChild:true,name:'根'});

let child=new LinkedTree({},partTree);
let child1=new LinkedTree({},child);

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