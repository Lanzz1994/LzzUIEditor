import LinkedTree from './LinkedTree';

export type UndoRedoStep={NewValue:string,OldValue:string};

export default class UndoRedoContext {

    private _undoList:UndoRedoStep[]=[];
    private _redoList:UndoRedoStep[]=[];
    //测试步数
    private _undoCount:number = 5;

    Undo():LinkedTree|undefined{
        if(this._undoList.length>0){
            let step:UndoRedoStep=this._undoList.pop() as UndoRedoStep;
            this._redoList.push(step);
            return new LinkedTree(step.OldValue);
        }
    }

    Redo():LinkedTree|undefined{
        if(this._redoList.length>0){
            let step=this._redoList.pop() as UndoRedoStep;
            this._undoList.push(step);
            return new LinkedTree(step.NewValue);
        }
    }
    
    Execute(NewValue:string,OldValue:string):void{
        this._undoList.push({NewValue,OldValue});
        if(this._undoList.length>this._undoCount){
            this._undoList.splice(0,1);
        }
        this._redoList=[];
    }
}

//我只负责记录操作，具体外部怎么操作是你的事物，通过抽象方法开放给外部使用
//这是针对 LinkedTree 的撤销重做，因为LinkedTree的数据结构比较特殊，不能单纯的靠存储数据来实现，需要针对操作步骤进行回滚