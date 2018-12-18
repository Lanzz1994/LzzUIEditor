import * as React from 'react';
import {InterfaceConfig} from './types';

//type HandleState='normal'|'hover'|'draging-hover';

export interface LayoutHandleToolProps{
    interfaceConfig:InterfaceConfig
}

export default class LayoutHandleTool extends React.PureComponent<LayoutHandleToolProps>{


    render(){
        const {interfaceConfig}=this.props;
        
        return (
            <div className="lz-layout-context-tools" style={interfaceConfig}>
                <div className="lz-context-tool top-bar"></div>
                <div className="lz-context-tool"></div>
            </div>
        );
    }
}