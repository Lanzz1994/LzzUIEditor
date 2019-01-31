import * as React from 'react';
import { Tabs } from 'antd';
const TabsRender = (props, children) => {
    return (<Tabs {...props}>{children}</Tabs>);
};
const TabPane = (props, children, solts) => {
    let tabData = (solts || {})['tab'];
    let tab;
    if (tabData) {
        tab = <div>custom</div>;
    }
    return (<Tabs.TabPane {...props} tab={tab || props['tab']}>{children}</Tabs.TabPane>);
};
export default { Tabs: TabsRender, TabPane };
