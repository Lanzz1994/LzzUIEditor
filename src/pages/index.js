import React from 'react';
import { connect } from 'dva';
import {Layout,Button} from 'antd';
import {DragDropBoard} from '../components/DragDrop/index';
import {UpdateFrameworkLayout} from '../components/Layout/index';
import {scrollToCenter} from '../utils/dom';
import UICenter from './UICenter';
import UILeft from './UILeft';
import UIRight from './UIRight';
import './index.less';
const {Header,Sider,Content}=Layout;

class LzzUIEditor extends React.PureComponent{

  constructor(props){
    super(props);
    this.LzzUICenter=React.createRef();
  }

  componentDidMount(){
    var center_wraper=this.LzzUICenter.current.parentNode;
    setTimeout(function() {
      scrollToCenter(center_wraper);
    }, 500);

    const {LayoutCore}=this.props;
    window.PartTreeCore=LayoutCore.PartTreeCore;
  }

  updateLayout(method){
    this.props.dispatch({type:'LayoutCore/UndoRedo',method:method});
    setTimeout(()=>{
      //window.PartTreeCore 如果在模型中更换了 PartTreeCore 的实例，这里将会失效，要注意个这个问题
      window.PartTreeCore=this.props.LayoutCore.PartTreeCore;
      window.LayoutComponentIframe.ResetRender();
      UpdateFrameworkLayout(this.props.LayoutCore.PartTreeCore,window.frames[0].document);
    },200);
  }

  render(){
    const {LzzUICenter}=this;
    const {LayoutAreaSetting} = this.props.InterfaceConfig;
    
    return(
      <Layout className="lz-ui-wraper">
          <Header className="lz-ui-header">
            <Button onClick={()=>{this.updateLayout('Undo')}}>撤消</Button>&nbsp;
            <Button onClick={()=>{this.updateLayout('Redo')}}>恢复</Button>
          </Header>
          <DragDropBoard>
              <Layout className="lz-ui-work-area">
                  <Sider className="lz-ui-left">
										<UILeft/>
                  </Sider>
                  <Layout>
                      <Content className="lz-ui-center-wraper">
                        <div className="lz-ui-center" ref={LzzUICenter}>
                          <UICenter interfaceConfig={LayoutAreaSetting}/>
                          <div>Grid-Rule</div>
                        </div>
                      </Content>
                  </Layout>
                  <Sider className="lz-ui-right" width="294">
                      <UIRight/>
                  </Sider>
              </Layout>
          </DragDropBoard>
      </Layout>
    );
  }
}

export default connect((state)=>state)(LzzUIEditor);
