import * as React from 'react';
import LinkedTree from '../Utils/LinkedTree'
import FrameworkElement,{FrameworkElementStore,FrameworkElementSize,FrameworkElementPosition} from './FrameworkElement';

interface LayoutFrameworkProps{
    layoutData:LinkedTree;
    interfaceConfig?:any;
};

// 布局容器
export default class LayoutFramework extends React.Component<LayoutFrameworkProps>{

    onHoverFrameworkElement=(e:React.MouseEvent,tree:any)=>{
        // const {dispatch} = this.props;
        // dispatch({type:'DataCore/ChangeNode',updateStates:{CurrentNode:tree}});
    }

    onClickFrameworkElement=(e:React.MouseEvent,tree:any)=>{
        //const {dispatch} = this.props;
        
    }


    // 在把选中，经过 单独提取出来成为一个套件，让布局专心辅助数据操作，不要参与到页面的输入交互中来

    render(){
        const {layoutData,interfaceConfig}=this.props;
        const {onHoverFrameworkElement}=this;

        const frames=layoutData.ForEachStartLeaf((current:LinkedTree,children:any[])=>{
            return current.HasParent?
                (<FrameworkElement key={current.ID} onMouseOver={onHoverFrameworkElement} tree={current}>{children}</FrameworkElement>)
                :children;
        });

        return (
            <div className="lz-layout-framework" style={interfaceConfig}>{frames}</div>
        );
    }
}