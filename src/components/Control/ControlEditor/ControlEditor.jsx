import * as React from 'react';
import { Tabs } from 'antd';
import { TipTitle } from '../../Tool/index';
import PartTreeEditor from './PartTreeEditor/PartTreeEditor';
const TabPane = Tabs.TabPane;
export default class ControlEditor extends React.Component {
    render() {
        return (<div className="lz-control-editor">
                <Tabs type="card" defaultActiveKey="1" animated>
                    <TabPane tab={<TipTitle icon="icon-tubiao-liucheng" title="部件--树"/>} key="1">
                        <PartTreeEditor />
                    </TabPane>
                    <TabPane tab={<TipTitle icon="icon-liebiaorongqi" title="部件选项"/>} key="2">
                        aosdfjads
                    </TabPane>
                    <TabPane tab={<TipTitle icon="icon-zidingyilie" title="样式编辑"/>} key="3">
                        asdf
                    </TabPane>
                    <TabPane tab={<TipTitle icon="icon-shijianzhou" title="动效编辑"/>} key="4">
                        a'psdfj
                    </TabPane>
                    <TabPane tab={<TipTitle icon="icon-lianjiekuai" title="数据模型"/>} key="5">
                        asdfj
                    </TabPane>
                </Tabs>
            </div>);
    }
}
