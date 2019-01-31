import {LayoutTreeData} from '../Layout/index'
import {ControlGenerate} from './types'
import {AntdControls,HtmlControls} from './ControlStore/index';
import { LinkedTree } from '../Utils/index';
// import Others from './ControlStore/Others/index';

//const Controls={Antd:AntdControls,Html:Html,Others:Others};
const Controls={Antd:AntdControls,Html:HtmlControls};

//indexing and generating special control, example 'Antd.Button'
export function GenerateControl(data:LayoutTreeData,children?:any){
    const {Info,PropData}= data;
    let result=null;
    const path:string[]=Info.Key.split('.');
    if(path.length===2){
        let ctrls:string=Controls[path[0]];
        if(ctrls){
            let getCtrl:ControlGenerate=ctrls[path[1]];
            if(getCtrl)result=getCtrl(PropData,children,{...Info.Solts,...data.Solts});
        }
    }
    return result;
}