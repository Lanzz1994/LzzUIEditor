import Antd from './Antd/index';
import Html from './Html/index';
import Others from './Others/index';
const Controls = { Antd: Antd, Html: Html, Others: Others };
//indexing and generating special control, example 'Antd.Button'
export function GenerateControl(key, props, children) {
    let result = null;
    const path = key.split('.');
    if (path.length > 1) {
        let ctrls = Controls[path[0]];
        if (ctrls) {
            let getCtrl = ctrls[path[1]];
            if (getCtrl)
                result = getCtrl(props, children);
        }
    }
    return result;
}
