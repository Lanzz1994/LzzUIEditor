import * as React from 'react';
import LinkedTree from '../Utils/LinkedTree';
import {GenerateControl,ControlData} from '../Control/index'

interface LayoutComponentProps{
    layoutData:LinkedTree;
}

export default class LayoutComponent extends React.Component<LayoutComponentProps>{

    render(){
        const {layoutData}=this.props;

        const controls=layoutData?layoutData.ForEachStartLeaf((current:LinkedTree,children:any[])=>{
            if(current.HasParent){
                let data=current.Data as ControlData;
                return GenerateControl(data,children);
            }else{
                return children;
            }
        }):null;

        return <React.Fragment>{controls}</React.Fragment>;
    }
}