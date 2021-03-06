import * as React from 'react';
import { GenerateControl } from '../Control/index';
export default class LayoutComponent extends React.Component {
    render() {
        const { layoutData } = this.props;
        const controls = layoutData.ForEachStartLeaf((current, children) => {
            if (current.HasParent) {
                let data = current.Data;
                if (!data.PropData)
                    data.PropData = {};
                data.PropData.key = current.ID;
                data.PropData.id = current.ID;
                if (data.Info.NoID) {
                    data.PropData.className = (data.PropData.className || '') + ' ' + current.ID;
                }
                return GenerateControl(data, children);
            }
            else {
                return children;
            }
        });
        return controls;
    }
}
