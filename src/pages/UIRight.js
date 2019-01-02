import React from 'react';
import { connect } from 'dva';
import {Tabs} from 'antd';
import {TipTitle} from '../components/Tool/index'
import {PartTreeEditor} from '../components/Control/ControlEditor/index';
import './UIRight.less';

const TabPane=Tabs.TabPane;

class UIRight extends React.PureComponent{
    
    onPropChange(){
        console.log('prop-change');
    }

    render(){
        const {onPropChange}=this;
        const {LayoutCore}=this.props;
        return(
            <div className="lz-control-editor">
                <Tabs type="card" defaultActiveKey="1" animated>
                    <TabPane tab={<TipTitle icon="icon-tubiao-liucheng" title="部件--树"/>} key="1">
                        <PartTreeEditor layoutData={LayoutCore.PartTreeCore} />
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
            </div>
        );
    }
}

export default connect((state)=>state)(UIRight);

