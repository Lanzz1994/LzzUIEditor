import * as React from 'react';
import { connect } from 'dva';
import {DragDropBoard} from '../components/DragDrop/index';
import {FrameworkElement} from '../components/LayoutSystem/index';
// 布局容器
class LayoutPanel extends React.Component {
    constructor(props) {
        super(props);
        this.onHoverFrameworkElement = (e, tree) => {
            const { dispatch } = this.props;
            dispatch({ type: 'DataCore/ChangeNode', updateStates: { CurrentNode: tree } });
        };
        this.onClickFrameworkElement = (e, tree) => {
            const { dispatch } = this.props;
        };
    }
    // 在把选中，经过 单独提取出来成为一个套件，让布局专心辅助数据操作，不要参与到页面的输入交互中来
    render() {
        const { onHoverFrameworkElement } = this;
        const { PartTreeCore } = this.props.DataCore;
        console.log(this.props.DataCore);
        const frames = PartTreeCore.eachChilds(function (node, siblings) {
            return (<FrameworkElement key={node.ID()} onMouseOver={onHoverFrameworkElement} tree={node}>{siblings}</FrameworkElement>);
        });
        return (<DragDropBoard>
                {frames}
            </DragDropBoard>);
    }
}
export default connect((state) => ({ DataCore: state.DataCore }))(LayoutPanel);
