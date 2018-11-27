import {ControlGenerate} from './types'
import Antd from './Antd/index';
import Html from './Html/index';
import Others from './Others/index';

const Controls={Antd:Antd,Html:Html,Others:Others};

//indexing and generating special control, example 'Antd.Button'
export function GenerateControl(key:string,props?:any,children?:any){
    let result=null;
    const path:string[]=key.split('.');
    if(path.length>1){
        let ctrls:string= Controls[path[0]];
        if(ctrls){
            let getCtrl:ControlGenerate=ctrls[path[1]];
            if(getCtrl)result=getCtrl(props,children);
        }
    }
    return result;
}