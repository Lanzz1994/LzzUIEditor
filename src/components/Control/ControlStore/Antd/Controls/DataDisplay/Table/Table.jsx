import * as React from 'react';
import { Table } from 'antd';
const TableRender = (columns) => {
    columns.map((col) => {
    });
};
export default (props) => {
    let columns = (props.PropData || { columns: [] }).columns;
    return <Table columns={columns}/>;
};
