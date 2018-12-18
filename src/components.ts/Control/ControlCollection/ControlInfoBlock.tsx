import {PureComponent} from 'react'
import {DragContainer} from '../../DragDrop/index';
import {ControlInfo} from '../types';

interface ControlInfoBlockProps{
    Info:ControlInfo,
    beginDrag?:(info:ControlInfo)=>void,
    endDrag?:(info:ControlInfo)=>void,
}

export default class ControlInfoBlock extends PureComponent<ControlInfoBlockProps>{

    beginDrag=()=>{
        const {beginDrag,Info}=this.props;
        if(beginDrag)beginDrag(Info);
        return {};
    }

    endDrag=(props)=>{
        const {endDrag,Info}=this.props;
        if(endDrag)endDrag(Info);
    }

    render(){
        const {beginDrag,endDrag}=this;
        const {Introduction={}}=this.props.Info;
        
        const icon = typeof Introduction.Icon==="string"?
              <i className={"iconfont icon-" + Introduction.Icon} />:Introduction.Icon;

        return (
            <DragContainer className="lz-control-info-block" beginDrag={beginDrag} endDrag={endDrag}>
                {icon}
                <span>{Introduction.ShortName}</span>
                <span className="lz-control-info-introduce">?</span>
                
                {/* <Popover title={props.fullName} content={<div>{props.desc}</div>} placement="right">
                    <span className={PartBlockCss.part_desc}>?</span>
                </Popover> */}
            </DragContainer>
        );
    }
}