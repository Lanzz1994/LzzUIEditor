import * as React from 'react';
import {Tabs} from 'antd';
import { ControlData } from '../../../../../types';
import {LayoutTreeData} from '../../../../../../Layout/index';
import { LinkedTree } from '../../../../../../Utils/index';

const TabsRender = (props:any,children:any)=>{

    return (
        <Tabs {...props}>{children}</Tabs>
    );
}

const TabPane=(props:any,children:any,solts?:{[propName:string]:LinkedTree<LayoutTreeData>})=>{
    let tabData:LinkedTree<LayoutTreeData>=(solts||{})['tab'];
    let tab;
    if(tabData){
        tab=<div>custom</div>;
    }

    return (
        <Tabs.TabPane {...props} tab={tab||props['tab']}>{children}</Tabs.TabPane>
    );
}

export default {Tabs:TabsRender,TabPane}