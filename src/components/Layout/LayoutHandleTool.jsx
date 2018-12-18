import * as React from 'react';
export default class LayoutHandleTool extends React.PureComponent {
    render() {
        const { interfaceConfig } = this.props;
        return (<div className="lz-layout-handle-tool" style={interfaceConfig}>
                <div className="lz-layout-handle-block normal-block"></div>
                <div className="lz-layout-handle-block active-block"></div>
            </div>);
    }
}
