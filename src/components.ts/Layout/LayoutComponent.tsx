import * as React from 'react';
import LinkedTree from '../Utils/LinkedTree';
import {GenerateControl,ControlData} from '../Control/index';
import {LayoutBaseProps} from './types';

export default class LayoutComponent extends React.Component<LayoutBaseProps>{    

    render(){
        const {layoutData}=this.props;

        const controls=layoutData.ForEachStartLeaf((current:LinkedTree,children:any[])=>{
            if(current.HasParent){
                let data=current.Data as ControlData;
                if(!data.PropData)data.PropData={};
                data.PropData.key=current.ID;
                data.PropData.id=current.ID;
                return GenerateControl(data,children);
            }else{
                return children;
            }
        });

        return controls;
    }
}