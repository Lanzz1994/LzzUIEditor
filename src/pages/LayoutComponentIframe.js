import React from 'react';
import {LayoutComponent} from '../components/Layout/index';
import '../style/global.less';
import './LayoutComponentIframe.less';

export default class LayoutComponentIframe extends React.PureComponent{
    constructor(props){
        super(props);
        this.state={ResetRenderSign:''};
        window.parent.LayoutComponentIframe=this;
    }

    ResetRender=()=>{
        this.setState({ResetRenderSign:Math.random()});
    }

    SetScrollPosition=(e)=>{
        window.scrollTo(e.target.scrolLeft,e.target.scrollTop);
    }

    render(){
        return <LayoutComponent layoutData={window.parent.PartTreeCore}/>;
    }

    
}