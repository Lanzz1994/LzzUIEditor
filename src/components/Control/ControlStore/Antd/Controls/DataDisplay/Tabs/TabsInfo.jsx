import { LinkedTree } from '../../../../../../Utils/index';
const Tabs = {
    Key: 'Antd.Tabs',
    Introduction: {
        Name: '标签页',
        ShortName: '标签页',
        Icon: 'icon-button-component',
        Detail: '栅格的一行'
    },
    NoID: true
};
const TabPane = {
    Key: 'Antd.TabPane',
    Introduction: {
        Name: '标签子页',
        ShortName: '标签子页',
        Icon: 'icon-button-component',
        Detail: '栅格的一行'
    },
    DefaultProps: {
        tab: 'tab',
        style: {
            height: 100
        }
    },
    Solts: {
        tab: new LinkedTree({})
    }
};
export default [Tabs, TabPane];
