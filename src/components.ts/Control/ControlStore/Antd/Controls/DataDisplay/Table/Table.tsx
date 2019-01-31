import * as React from 'react';
import {Table} from 'antd';
import { ControlData } from '../../../../../types';
import { LinkedTree } from '../../../../../../Utils/index';

export type ColumnInfo={
    layoutData?:LinkedTree<ControlData>,
    
};

const TableRender=(columns:any[])=>{
    columns.map((col)=>{
        
    });
}

export default (props:ControlData)=>{
    let columns=(props.PropData||{columns:[]}).columns;
    

    return <Table columns={columns}/>
}