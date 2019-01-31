import React from 'react';
import { connect } from 'dva';
import {Tabs} from 'antd';
import {TipTitle} from '../components/Tool/index';
import {PartTreeEditor,PropEditor} from '../components/Control/ControlEditor/index';
import {UpdateFrameworkLayout} from '../components/Layout/index';
import {HoverLayoutControl,DragingHoverLayoutControl,DropLayoutControl,
    ClickLayoutControl,ClickExcludeLayoutControl,HoverExcludeLayoutControl,DragingHoverExcludeFramework,LeaveRootFramework,BeginDragLayoutControl,ChangeLayoutControl} from './Utils';
import './UIRight.less';

const TabPane=Tabs.TabPane;

class UIRight extends React.PureComponent{
    
    onPropChange=(update)=>{
        let {SelectedNode}=this.props.LayoutCore;
        ChangeLayoutControl(this.props,{ResetRenderSign:Math.random()},()=>{
            SelectedNode.Data.PropData={...SelectedNode.Data.PropData,...update};
            SelectedNode.ResetID();
        });
        setTimeout(()=>{
            window.LayoutComponentIframe.ResetRender();
            UpdateFrameworkLayout(this.props.LayoutCore.PartTreeCore,window.frames[0].document);
            this.props.dispatch({type:'LayoutCore/UpdateStates',updateStates:{
                StaticLayout:{...SelectedNode.Data.Position,...SelectedNode.Data.Size}
            }});
        },500);
    }

    render(){
        const {onPropChange}=this;
        const {LayoutCore}=this.props;
        return(
            <div className="lz-control-editor">
                <Tabs type="card" activeKey={LayoutCore.ControlEditorActive} animated onTabClick={(e)=>{this.props.dispatch({type:'LayoutCore/UpdateStates',updateStates:{ControlEditorActive:e}});}}>
                    <TabPane tab={<TipTitle icon="icon-tubiao-liucheng" title="部件--树"/>} key="part-tree-editor">
                        <PartTreeEditor layoutData={LayoutCore.PartTreeCore}
                            onHoverTreeNode={(tree)=>{HoverLayoutControl(this.props,tree)}}
                            onBeginDragTreeNode={(tree)=>{BeginDragLayoutControl(this.props,tree)}}
                            onDragingHoverTreeNode={(tree)=>{DragingHoverLayoutControl(this.props,tree)}}
                            onDropTreeNode={(tree)=>{DropLayoutControl(this.props,tree)}}
                            onHoverTree={()=>{HoverExcludeLayoutControl(this.props)}}
                            onLeaveTree={()=>{LeaveRootFramework(this.props)}}
                        />
                    </TabPane>
                    <TabPane tab={<TipTitle icon="icon-liebiaorongqi" title="部件选项"/>} key="prop-editor">
                        <PropEditor onPropChange={onPropChange} editorSource={LayoutCore.SelectedNode} />
                    </TabPane>
                    <TabPane tab={<TipTitle icon="icon-zidingyilie" title="样式编辑"/>} key="css-editor">
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

