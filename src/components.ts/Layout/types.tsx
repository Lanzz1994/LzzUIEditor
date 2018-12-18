import LinkedTree from '../Utils/LinkedTree';
import {ControlData} from '../Control/index';

const framework_id_prefix='framework_';
export {framework_id_prefix}

export type ElementSize={width:number,height:number};
export type ElementPosition={left:number,top:number};
export type LayoutTreeData=ControlData&{
    Size:ElementSize,
    Position:ElementPosition
};

export type InterfaceConfig={}&ElementSize&ElementPosition;

export type LayoutBaseProps = {
    layoutData:LinkedTree<LayoutTreeData>;
    interfaceConfig?:InterfaceConfig;
}

export type LayoutHandler={
    
}