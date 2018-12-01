import * as React from 'react';
import { connect } from 'dva';
import {DragDropBoard} from '../../components/DragDrop/index';
import {FrameworkElement} from '../../components/Layout/index';
import  './LayoutComponent.less'

class LayoutComponent extends React.Component{
    render(){
        const { PartTreeCore } = this.props.DataCore;
        let frames=PartTreeCore.ForEachStartLeaf(function(current,children){
            return current._parent?(<FrameworkElement key={current.ID} tree={current}>{children}</FrameworkElement>):children;
        });

        return (<DragDropBoard><div className="lz-layout-component">{frames}</div></DragDropBoard>);
    }
}

export default connect((state) => ({ DataCore: state.DataCore }))(LayoutComponent);
