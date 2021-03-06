import React from 'react';
import { connect } from 'dva';
import LinkedTree from '../components/Utils/LinkedTree'
import {ControlCollection} from '../components/Control/index';
import {LeaveRootFramework} from './Utils';
import './UILeft.less';

class UILeft extends React.PureComponent{

    beginDragControl=(Info)=>{
        const {dispatch} = this.props;
        dispatch({type:'LayoutCore/UpdateStates',updateStates:{
            CurrentHandler:'AddLast',
            DragNode:new LinkedTree({Info:Info,PropData:Info.DefaultProps||{}})}
        });
    }

    endDragControl=(Info)=>{
        LeaveRootFramework(this.props);
    }

    render(){
        const {beginDragControl,endDragControl}=this;
        return(
            <ControlCollection beginDragControl={beginDragControl} endDragControl={endDragControl} />
        );
    }
}

export default connect((state)=>state)(UILeft);