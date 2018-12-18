import { AntdControls, HtmlControls } from './ControlStore/index';
// import Others from './ControlStore/Others/index';
//const Controls={Antd:AntdControls,Html:Html,Others:Others};
const Controls = { Antd: AntdControls, Html: HtmlControls };
//indexing and generating special control, example 'Antd.Button'
export function GenerateControl(data, children) {
    const { Info, PropData } = data;
    let result = null;
    const path = Info.Key.split('.');
    if (path.length === 2) {
        let ctrls = Controls[path[0]];
        if (ctrls) {
            let getCtrl = ctrls[path[1]];
            if (getCtrl)
                result = getCtrl(PropData, children);
        }
    }
    return result;
}
