import React from 'react';
import {LayoutComponent} from '../components/Layout/index';

export default class LayoutComponentIframe extends React.PureComponent{
    constructor(props){
        super(props);
        this.state={ResetRenderSign:''};
        window.parent.LayoutComponentIframe=this;
    }

    ResetRender=()=>{
        this.setState({ResetRenderSign:Math.random()});
    }

    render(){
        return <LayoutComponent layoutData={window.parent.PartTreeCore}/>;
    }
}