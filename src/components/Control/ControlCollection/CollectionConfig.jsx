import { HtmlControlInfoCategory, AntdControlInfoCategory } from '../ControlStore/index';
const General = {
    Key: 'General',
    Title: '通用',
    Infos: AntdControlInfoCategory.General.concat(HtmlControlInfoCategory.General)
};
const Layout = {
    Key: 'Layout',
    Title: '布局',
    Infos: HtmlControlInfoCategory.Layout
};
const Navigation = {
    Key: 'Navigation',
    Title: '导航'
};
const DataEntry = {
    Key: 'DataEntry',
    Title: '数据录入'
};
const DataDisplay = {
    Key: 'DataDisplay',
    Title: '数据展示'
};
const Feedback = {
    Key: 'Feedback',
    Title: '反馈'
};
const Other = {
    Key: 'Other',
    Title: '其他'
};
const category = [General, Layout, Navigation, DataEntry, DataDisplay, Feedback, Other];
export default category;
