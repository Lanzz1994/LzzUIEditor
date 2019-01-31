import {ControlInfo,ControlCategoryCollection} from '../../types';

const Span:ControlInfo={
    Key:'Html.Span',
    Introduction:{
        Name:'文本',
        ShortName:'文本',
        Icon:'icon-wenben',
        Detail:''
    },
    Props:[
        {PropName:'text'},
    ],
    DefaultProps:{
        text:'文本'
    },
    IsLeaf:true
};
const Div:ControlInfo={
    Key:'Html.Div',
    Introduction:{
        Name:'div',
        ShortName:'div',
        Icon:'icon-shixian',
        Detail:''
    },
    DefaultProps:{
        style:{
            width:'100%',
            height:'100px',
            border:'1px solid #dddddd'
        }
    }
};

const General:ControlInfo[]=[Span];
const Layout:ControlInfo[]=[Div];
const HtmlControlInfoCategory:ControlCategoryCollection={General,Layout};

export {HtmlControlInfoCategory}