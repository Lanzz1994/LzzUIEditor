//import Antd from './Antd/index';
import Html from './ControlStore/Html/index';
import Others from './ControlStore/Others/index';
//const Controls={Antd:Antd,Html:Html,Others:Others};
const Controls = { Html: Html, Others: Others };
//indexing and generating special control, example 'Antd.Button'
export function GenerateControl(data, children) {
    const { Info, PropData } = data;
    let result = null;
    const path = Info.Key.split('.');
    if (path.length > 1) {
        let ctrls = Controls[path[0]];
        if (ctrls) {
            let getCtrl = ctrls[path[1]];
            if (getCtrl)
                result = getCtrl(PropData, children);
        }
    }
    return result;
}