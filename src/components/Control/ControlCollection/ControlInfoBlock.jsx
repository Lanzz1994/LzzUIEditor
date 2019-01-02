import * as React from 'react';
import { PureComponent } from 'react';
import { DragContainer } from '../../DragDrop/index';
import { IconFont } from '../../Tool/index';
export default class ControlInfoBlock extends PureComponent {
    constructor() {
        super(...arguments);
        this.beginDrag = () => {
            const { beginDrag, Info } = this.props;
            if (beginDrag)
                beginDrag(Info);
            return {};
        };
        this.endDrag = (props) => {
            const { endDrag, Info } = this.props;
            if (endDrag)
                endDrag(Info);
        };
    }
    render() {
        const { beginDrag, endDrag } = this;
        const { Introduction = {} } = this.props.Info;
        const icon = typeof Introduction.Icon === "string" ?
            <IconFont type={Introduction.Icon}/> : Introduction.Icon;
        return (<DragContainer className="lz-control-info-block" beginDrag={beginDrag} endDrag={endDrag}>
                {icon}
                <span>{Introduction.ShortName}</span>
                <span className="lz-control-info-introduce">?</span>
                
                
            </DragContainer>);
    }
}
