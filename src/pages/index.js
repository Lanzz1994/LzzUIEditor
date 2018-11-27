import React,{PureComponent} from 'react'
import {Layout,Icon,Button} from 'antd'
import {DragDropBoard} from '../components/DragDrop/index'
import LayoutComponent from './LayoutComponent/index'
import {scrollToCenter} from '../utils/dom'
import './index.less';
const {Header,Sider,Content}=Layout;

export default class LzzUIEditor extends PureComponent{

  constructor(props){
    super(props);
    this.LzzUICenter=React.createRef();
  }

  componentDidMount(){
    var center_wraper=this.LzzUICenter.current.parentNode;
    setTimeout(function() {
      scrollToCenter(center_wraper,80);
    }, 500);
  }

  render(){
    const {LzzUICenter}=this;
    
    return(
      <Layout className="lz-ui-wraper">
          <Header className="lz-ui-header">
              Header
          </Header>
          <DragDropBoard>
              <Layout className="lz-ui-work-area">
                  <Sider className="lz-ui-left">
                      PartCollection
                  </Sider>
                  <Layout>
                      <Content className="lz-ui-center-wraper">
                          <div className="lz-ui-center" ref={LzzUICenter}>
                            <LayoutComponent />
                            <div>Grid-Rule</div>
                            <div>Layout-Handle</div>
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

// 把 css module 开启，然后通用的业务组件通过 global 包起来，业务还是搬以前的
