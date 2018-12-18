import React from 'react';
import { connect } from 'dva';
import {PropEditor} from '../components/Control/index';
import './UIRight.less';

class UIRight extends React.PureComponent{
    
    onPropChange(){
        console.log('prop-change');
    }

    render(){
        const {onPropChange}=this;
        const {LayoutCore}=this.props;
        return(
            <PropEditor editorSource={LayoutCore.CurrentNode} onPropChange={onPropChange}/>
        );
    }
}

export default connect((state)=>state)(UIRight);

