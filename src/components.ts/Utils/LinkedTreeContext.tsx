import LinkedTree from './LinkedTree';

class LinkedTreeContext{

    private _rootTree:LinkedTree;
    readonly OperationProcess:LinkedTreeProcess=new LinkedTreeProcess();

    constructor(rootTree:LinkedTree){
        this._rootTree=rootTree;

    }

    
    
}

class LinkedTreeProcess{

    Params?:any;
    Operation?:(...props)=>void;

    StartProcess(params):void{
        
    }

    ExecuteProcess():void{

    }
}

let linkedTreeContext={
    //beginLinkedTreeProcess:(params:any,handle:()=>any)=>{}

};

function beingDrag(){
    let params={},handle=()=>{}
    //linkedTreeContext.beginLinkedTreeProcess(params,handle);
}

function drop(){

}

function move(){

}



//所有入口统一发起一个流程，所有操作都在这个全局的流程里，要分发到界面上的具体交互里