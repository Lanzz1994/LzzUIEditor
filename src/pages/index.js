import React from 'react';
import { connect } from 'dva';
import {Layout} from 'antd';
import {DragDropBoard} from '../components/DragDrop/index';
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

  render(){
    const {LzzUICenter}=this;
    const {LayoutAreaSetting} = this.props.InterfaceConfig;
    
    return(
      <Layout className="lz-ui-wraper">
          <Header className="lz-ui-header">
            Header
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
