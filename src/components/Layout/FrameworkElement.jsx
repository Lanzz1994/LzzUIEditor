import * as React from 'react';
import classNames from 'classnames';
import DragDropBlock from '../DragDrop/DragDropBlock';
export default class FrameworkElement extends React.PureComponent {
    constructor(props) {
        super(props);
        // componentWillReceiveProps(nextProps:FrameworkElementProps){
        //     const currentIsSelected=this.props.isSelected
        //     const {isSelected,elementState}=nextProps;
        //     if(currentIsSelected!==isSelected){
        //         this.setState({isSelected});
        //     }
        //     this.setState({elementState});
        // }
        this.beginDrag = (props, monitor, component) => {
            console.log(props, monitor, component);
            return {};
        };
        this.hover = () => {
        };
        // 两种操作：加上 hover 状态，去除 hover 状态
        this.onMouseOver = (e) => {
            if (typeof this.props.onMouseOver === 'function') {
                this.props.onMouseOver(e, this.props.tree);
            }
            e.stopPropagation();
        };
        this.onClick = (e) => {
            if (typeof this.props.onClick === 'function') {
                this.props.onClick(e, this.props.tree);
            }
            e.stopPropagation();
        };
    }
    render() {
        const { size = { width: 10, height: 10 }, position = { left: 10, top: 10 } } = this.props.tree.data || {};
        const { children } = this.props;
        const { hover, onMouseOver, onClick, beginDrag } = this;
        return (<DragDropBlock className={classNames('lz-framework-element')} style={{ width: size.width, height: size.height, left: position.left, top: position.top }} hover={hover} onMouseOver={onMouseOver} onClick={onClick} beginDrag={beginDrag}>{children}</DragDropBlock>);
    }
}
