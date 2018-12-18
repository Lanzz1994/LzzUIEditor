import update from 'immutability-helper'
import LinkedTree from '../components/utils/LinkedTree'

//let partTree=new LinkedTree({});

// let child=new LinkedTree({Info:{Key:'Antd.ButtonGroup'},PropData:{}},partTree);
// let btn1=new LinkedTree({Info:{Key:'Antd.Button'},PropData:{}},child);
// let btn2=new LinkedTree({Info:{Key:'Antd.Button'},PropData:{}},child);
// new LinkedTree({Info:{Key:'Html.Text'},PropData:{text:'按钮1'}},btn1);
// new LinkedTree({Info:{Key:'Html.Text'},PropData:{text:'按钮2'}},btn2);

// let child2=new LinkedTree({name:'2'},partTree);
// new LinkedTree({name:'2-1'},child2);
// new LinkedTree({name:'2-2'},child2);

export default {
    namespace: 'LayoutCore',//LayoutCore
    state: {
        //a random number for force updateing deep fields in Model
        ResetRenderSign:'',

        //a instance of data structure for describing component layout
        PartTreeCore:new LinkedTree({Info:{}}),

        //describes current node handler type (AddNode,RemoveNode,MoveNode,CopyNode,PasteNode)
        CurrentHandler:null,

        //current node with mouse hovering 
        CurrentNode:null,

        //selected node by mouse clicks
        SelectedNode:null,
        
        //the specified instance within PartTreeCore
        CopyNode:null,

        //current node with mouse draging 
        DragNode:null,

        //the node after mouse upping to drop
        DropNode:null
    },
    reducers: {
        'ResetRender'(state){
            const ResetRenderSign=Math.random();
            return {...state,ResetRenderSign};
        },
        'UpdateStates'(state,{updateStates}){
            return {...state,...updateStates}
        },
        'SetNode'(state,{updateStates}){
            let {CurrentNode,SelectedNode,DragingNode}=updateStates;
            if(CurrentNode!==undefined)state.CurrentNode=CurrentNode;
            if(SelectedNode!==undefined)state.SelectedNode=SelectedNode;
            if(DragingNode!==undefined)state.DragingNode=DragingNode;
            state.ResetRender=Math.random();
            return state;
        },

        'AddNode'(state){},
        'CopyNode'(state){},
        'RemoveNode'(state){},
        'AdMoveNodedNode'(state){},
    }
};