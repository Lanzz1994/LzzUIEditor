import * as React from 'react';
import { connect } from 'dva';
import {FrameworkElement} from '../../components/LayoutSystem/index';
import  './LayoutComponent.less'

class LayoutComponent extends React.Component{
    
    render(){
        const { PartTreeCore } = this.props.DataCore;
        const frames = PartTreeCore.eachChilds(function (node, siblings) {

            

            return (<FrameworkElement key={node.ID()} tree={node}>{siblings}</FrameworkElement>);
        });
        return (<div className="lz-layout-component">{frames}</div>);
    }
}

export default connect((state) => ({ DataCore: state.DataCore }))(LayoutComponent);
