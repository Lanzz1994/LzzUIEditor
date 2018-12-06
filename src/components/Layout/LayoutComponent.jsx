import * as React from 'react';
import { GenerateControl } from '../Control/index';
export default class LayoutComponent extends React.Component {
    render() {
        const { layoutData } = this.props;
        const controls = layoutData ? layoutData.ForEachStartLeaf((current, children) => {
            if (current.HasParent) {
                let data = current.Data;
                return GenerateControl(data, children);
            }
            else {
                return children;
            }
        }) : null;
        return <React.Fragment>{controls}</React.Fragment>;
    }
}
