import * as React from 'react';
import  {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import classNames from 'classnames';

// 提供 可拖拽组件 的容器，拖拽组件只能在容器里拖拽
@DragDropContext(HTML5Backend)
export default class DragDropBoard extends React.PureComponent<any>{
    public render(){
        const {className,...otherProps} = this.props;
        return (
            <div className={classNames("lz-dragdrop-borad",className)} {...otherProps}>{this.props.children}</div>
        );
    }
}