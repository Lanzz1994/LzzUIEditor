import {ControlInfo,ControlCategoryCollection} from '../../types';

const Text:ControlInfo={
    Key:'Html.Text',
    Introduction:{
        Name:'文本',
        ShortName:'文本',
        Icon:'button',
        Detail:''
    },
    Props:[
        {PropName:'Text'},
    ]
};

const General:ControlInfo[]=[Text];
const HtmlControlInfoCategory:ControlCategoryCollection={General};

export {HtmlControlInfoCategory}