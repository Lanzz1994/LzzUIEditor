import React,{PureComponent} from 'react';
import { connect } from 'dva';
import {Layout} from 'antd';
import {DragDropBoard} from '../components/DragDrop/index';
import {ControlCollection} from '../components/Control/index';
import {LayoutFramework} from '../components/Layout/index';
import {scrollToCenter} from '../utils/dom';
import './index.less';
const {Header,Sider,Content}=Layout;

class LzzUIEditor extends PureComponent{

  constructor(props){
    super(props);
    this.LzzUICenter=React.createRef();
  }

  componentDidMount(){
    var center_wraper=this.LzzUICenter.current.parentNode;
    setTimeout(function() {
      scrollToCenter(center_wraper);
    }, 500);
  }

  generateInterfaceConfig({LayoutAreaSize,LayoutAreaSizeRatio,LayoutAreaPosition}){
    return Object.assign({},LayoutAreaSize,LayoutAreaPosition);
  }

  render(){
    const {LzzUICenter}=this;
    const {generateInterfaceConfig}=this;
    const {PartTreeCore}=this.props.DataCore;
    const interfaceConfig = generateInterfaceConfig(this.props.InterfaceConfig);
    
    return(
      <Layout className="lz-ui-wraper">
          <Header className="lz-ui-header">
            Header
          </Header>
          <DragDropBoard>
              <Layout className="lz-ui-work-area">
                  <Sider className="lz-ui-left">
										<ControlCollection />
                  </Sider>
                  <Layout>
                      <Content className="lz-ui-center-wraper">
                        <div className="lz-ui-center" ref={LzzUICenter}>
                          <iframe className="lz-layout-component-iframe" src="./LayoutComponent" style={interfaceConfig}></iframe>
                          <LayoutFramework layoutData={PartTreeCore} interfaceConfig={interfaceConfig}/>
                          <div>Grid-Rule</div>
                        </div>
                      </Content>
                  </Layout>
                  <Sider className="lz-ui-right" width="294">
                      PartEditor
                  </Sider>
              </Layout>
          </DragDropBoard>
      </Layout>
    );
  }
}

export default connect((state)=>state)(LzzUIEditor);
