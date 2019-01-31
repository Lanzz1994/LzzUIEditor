import {ControlCategoryItem,ControlInfoBlockType} from './types';
import {HtmlControlInfoCategory,AntdControlInfoCategory} from '../ControlStore/index';

const General:ControlCategoryItem={
    Key:'General',
    Title:'通用',
    Infos:[...AntdControlInfoCategory.General,...HtmlControlInfoCategory.General]
};
const Layout:ControlCategoryItem={
    Key:'Layout',
    Title:'布局',
    Infos:[...HtmlControlInfoCategory.Layout,...AntdControlInfoCategory.Layout]
};
const Navigation:ControlCategoryItem={
    Key:'Navigation',
    Title:'导航'
};
const DataEntry:ControlCategoryItem={
    Key:'DataEntry',
    Title:'数据录入',
};
const DataDisplay:ControlCategoryItem={
    Key:'DataDisplay',
    Title:'数据展示',
    Infos:[...AntdControlInfoCategory.DataDisplay]
};
const Feedback:ControlCategoryItem={
    Key:'Feedback',
    Title:'反馈'
};
const Other:ControlCategoryItem={
    Key:'Other',
    Title:'其他'
};

const category:ControlCategoryItem[]=[General,Layout,Navigation,DataEntry,DataDisplay,Feedback,Other];
export default category;





















