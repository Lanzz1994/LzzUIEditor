import { PureComponent } from 'react';
import { DragContainer } from '../../DragDrop/index';
export default class ControlInfoBlock extends PureComponent {
    render() {
        const { Introduction = {} } = this.props;
        const icon = typeof Introduction.Icon === "string" ?
            <i className={"iconfont icon-" + Introduction.Icon}/> : Introduction.Icon;
        return (<DragContainer className="lz-control-info-block">
                {icon}
                <span>{Introduction.ShortName}</span>
                <span className="lz-control-info-introduce">?</span>
                
                
            </DragContainer>);
    }
}
