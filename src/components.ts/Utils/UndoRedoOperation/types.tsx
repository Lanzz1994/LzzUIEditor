export type UndoOperationStack=[];
export type RedoOperationStack=[];

export type ControlOperation={
    Key:'',
    Name:'',

};

export type OperationType='';

export type OperationStatus={};

export interface IUndoableOperation{
    execute:()=>OperationStatus,
    undo:()=>OperationStatus,
    redo:()=>OperationStatus
}

function addHandle(){

    let undolist=[];
    let redolist=[];

}