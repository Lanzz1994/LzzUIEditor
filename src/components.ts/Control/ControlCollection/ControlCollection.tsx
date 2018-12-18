import * as React from 'react';
import {Tabs} from 'antd';
import {ControlInfo} from '../types';
import ControlCategory from './ControlCategory';
import CollectionData from './CollectionConfig';
const TabPane=Tabs.TabPane;

export interface ControlCollectionProps{
    beginDragControl?:(Info:ControlInfo)=>void,
    endDragControl?:(info:ControlInfo)=>void
}

export default class ControlCollection extends React.PureComponent<ControlCollectionProps> {

    render(){
        const {beginDragControl,endDragControl}=this.props;
        return (
            <div className="lz-control-collection">
                <Tabs defaultActiveKey="1" tabPosition="left">
                    <TabPane tab="组件" key="1" className="lz-control-list">
                        <ControlCategory data={CollectionData} defaultActiveKey={["General"]} 
                        beginDragControl={beginDragControl} endDragControl={endDragControl}/>
                    </TabPane>
                    <TabPane tab="图标" key="2">
                        Icons
                    </TabPane>
                    <TabPane tab="动效" key="3">
                        Motions
                    </TabPane>
                    <TabPane tab="图表" key="4">
                        Charts
                    </TabPane>
                    <TabPane tab="组合" key="5">
                        AssambleControls
                    </TabPane>
                </Tabs>
            </div>
        );
    }
}