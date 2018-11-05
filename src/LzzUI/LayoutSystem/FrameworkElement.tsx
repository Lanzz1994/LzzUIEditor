import * as React from 'react';
import classNames from 'classnames';


export interface FrameworkElementProps{

    width?:number;
    height?:number;
    left?:number;
    top?:number;

    states?:any;
}

export default class FrameworkElement extends React.PureComponent<FrameworkElementProps>{

    render(){
        const {width=0,height=0,left=0,top=0,states=null,children=null}=this.props;

        const feCls=classNames('lz-framework-element',states);

        return (
            <div className={feCls}>
                {children}
            </div>
        );
    }
}