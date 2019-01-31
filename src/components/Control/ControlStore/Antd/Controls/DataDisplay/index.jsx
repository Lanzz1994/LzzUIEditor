import TableInfo from './Table/TableInfo';
import Table from './Table/Table';
import TabsInfo from './Tabs/TabsInfo';
import Tabs from './Tabs/Tabs';
const DataDisplayInfo = [TableInfo, ...TabsInfo];
const DataDisplay = Object.assign({ Table }, Tabs);
export { DataDisplayInfo, DataDisplay };
