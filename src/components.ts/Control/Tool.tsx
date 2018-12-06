import {ControlGenerate, ControlData} from './types'
//import Antd from './Antd/index';
import Html from './ControlStore/Html/index';
import Others from './ControlStore/Others/index';

//const Controls={Antd:Antd,Html:Html,Others:Others};
const Controls={Html:Html,Others:Others};

//indexing and generating special control, example 'Antd.Button'
export function GenerateControl(data:ControlData,children?:any){
    const {Info,PropData}= data;
    let result=null;
    const path:string[]=Info.Key.split('.');
    if(path.length>1){
        let ctrls:string= Controls[path[0]];
        if(ctrls){
            let getCtrl:ControlGenerate=ctrls[path[1]];
            if(getCtrl)result=getCtrl(PropData,children);
        }
    }
    return result;
}