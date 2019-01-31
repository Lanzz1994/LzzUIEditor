import {ControlInfo} from '../../../../types';
import TableInfo from './Table/TableInfo';
import Table from './Table/Table';
import TabsInfo from './Tabs/TabsInfo';
import Tabs from './Tabs/Tabs';


const DataDisplayInfo:ControlInfo[]= [TableInfo,...TabsInfo];
const DataDisplay={Table,...Tabs};

export {DataDisplayInfo,DataDisplay};