import {PureComponent} from 'react'
import {DragContainer} from '../../DragDrop/index';
import {ControlInfo} from '../types';

export default class ControlInfoBlock extends PureComponent<ControlInfo>{
    render(){
        const {Introduction={}}=this.props;

        const icon = typeof Introduction.Icon==="string"?
              <i className={"iconfont icon-" + Introduction.Icon} />:Introduction.Icon;

        return (
            <DragContainer className="lz-control-info-block">
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