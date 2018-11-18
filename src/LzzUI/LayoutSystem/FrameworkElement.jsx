import * as React from 'react';
import classNames from 'classnames';
import DragDropBlock from '../DragDrop/DragDropBlock';
// 元素当前的状态：默认（无操作），选中，鼠标经过，鼠标点击准备拖拽，拖拽中，放下（这些状态是互斥的，同时只能存在一个）
// export type FrameworkElementStateType='normal'|'hover'|'drag'|'draging'|'draging-hover'|'drop';
export var FrameworkElementState;
(function (FrameworkElementState) {
    FrameworkElementState["Normal"] = "normal";
    FrameworkElementState["Hover"] = "hover";
    FrameworkElementState["Drag"] = "drag";
    FrameworkElementState["Draging"] = "draging";
    FrameworkElementState["DragingHover"] = "draging-hover";
    FrameworkElementState["Drop"] = "drop";
})(FrameworkElementState || (FrameworkElementState = {}));
export default class FrameworkElement extends React.Component {
    constructor() {
        // state={
        //     elementState:FrameworkElementState.Normal,
        //     isSelected:false
        // };
        super(...arguments);
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
            // 判断是否存在拖拽操作
            // let {elementState} =this.state;
            // if(elementState===FrameworkElementState.Normal){
            //     elementState=FrameworkElementState.Hover;
            //     this.setState({elementState});
            // }
        };
        // 两种操作：加上 hover 状态，去除 hover 状态
        this.onMouseOver = (e) => {
            // let {ElementState} =this.state;
            // if(ElementState===FrameworkElementState.Hover){
            //     ElementState=FrameworkElementState.Normal;
            //     this.setState({ElementState});
            // }
            // let {elementState} =this.state;
            // if(elementState===FrameworkElementState.Normal){
            //     elementState=FrameworkElementState.Hover;
            //     this.setState({elementState});
            // }
            if (typeof this.props.onHoverFrameworkElement === 'function') {
                this.props.onHoverFrameworkElement(e);
            }
            e.stopPropagation();
        };
        this.onClick = (e) => {
            const size = { width: 10, height: 10 };
            const prop = { "size": size };
            this.setState(prop);
            e.stopPropagation();
        };
    }
    render() {
        const { size = { width: 0, height: 0 }, position = { left: 0, top: 0 }, elementState = FrameworkElementState.Normal, isSelected = false, children } = this.props;
        const { hover, onMouseOver, onClick, beginDrag } = this;
        return (<DragDropBlock className={classNames('lz-framework-element', elementState, { 'selected': isSelected })} style={{ width: size.width, height: size.height, left: position.left, top: position.top }} hover={hover} onMouseOver={onMouseOver} onClick={onClick} beginDrag={beginDrag}>{children}</DragDropBlock>);
    }
}
