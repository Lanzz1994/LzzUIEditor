import {Tooltip,Icon} from 'antd';

export function TipTitle(props){
    return (<Tooltip placement="top" title={props.title}><i className={"iconfont "+props.icon}></i></Tooltip>);
}

export const IconFont=Icon.createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_603247_f7wehwx41hw.js', // 在 iconfont.cn 上生成
});