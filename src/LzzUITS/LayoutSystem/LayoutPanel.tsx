import * as React from 'react';
import { connect } from 'dva'
import DragDropBoard from '../DragDrop/DragDropBoard';
import FrameworkElement from './FrameworkElement';

interface LayoutPanelProps{
    DataCore?:any
}

// 布局容器
class LayoutPanel extends React.PureComponent<LayoutPanelProps>{

    state={
        currentFrameworkElement:null
    }

    onHoverFrameworkElement=()=>{
        return '';
    }

    render(){
        const {onHoverFrameworkElement}=this;
        const {DataCore}=this.props;

        return (
            <DragDropBoard>
                <FrameworkElement size={{width:100,height:100}} position={{left:10,top:10}} onHoverFrameworkElement={onHoverFrameworkElement}/>
                <FrameworkElement size={{width:100,height:100}} position={{left:150,top:150}} onHoverFrameworkElement={onHoverFrameworkElement} >
                    <FrameworkElement size={{width:50,height:50}} position={{left:10,top:10}} onHoverFrameworkElement={onHoverFrameworkElement}/>
                </FrameworkElement>
                {DataCore}
            </DragDropBoard>
        );
    }
}

export default connect((DataCore:any) =>DataCore)(LayoutPanel);