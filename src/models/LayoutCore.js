import {LinkedTree,UndoContext} from '../components/utils/index';

//因为页面集合是树形的，所以这个模型只是用来解决单个页面实例的布局操作
//激活其他页面时，这里需要重新加载一套数据

//撤消实例是有页面激活时实例化的，PartTreeCore也是
export default {
    namespace: 'LayoutCore',//LayoutCore
    state: {
        //UICenter
        //a random number for force updateing deep fields in Model
        ResetRenderSign:'',

        //undo and redo operations
        UndoContext:new UndoContext(),

        //a instance of data structure for describing component layout
        PartTreeCore:new LinkedTree({Info:{}}),

        //describes current node handler type (AddNode,RemoveNode,MoveNode,CopyNode,PasteNode)
        CurrentHandler:null,

        //current node with mouse hovering 
        HoverNode:null,

        //selected node by mouse clicks
        SelectedNode:null,
        
        //the specified instance within PartTreeCore
        CopyNode:null,

        //current node with mouse draging 
        DragNode:null,

        //the node after mouse upping to drop
        //DropNode:null

        //LayoutContextTool
        StaticState:'normal',
        HoverState:'normal',
        DragState:'normal',
        StaticLayout:{width:0,height:0,left:0,top:0},
        HoverLayout:{width:0,height:0,left:0,top:0},
        DragLayout:{width:0,height:0,left:0,top:0}
    },
    reducers: {
        'ResetRender'(state){
            state.ResetRenderSign=Math.random();
            return state;
        },
        'UpdateStates'(state,{updateStates}){
            return {...state,...updateStates};
        },
        'UndoRedo'(state,{method}){
            const {UndoContext}=state;
            let tree=(method==='Undo'?UndoContext.Undo():UndoContext.Redo());
            if(tree){
                state.PartTreeCore=tree;
                state.StaticState='normal';
                state.MoveState='normal';
            }
            return state;
        }
    }
};