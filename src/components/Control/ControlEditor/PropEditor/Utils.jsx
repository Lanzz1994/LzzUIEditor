import * as React from 'react';
import { Form } from 'antd';
import PropEditorCollection from './Editors/index';
export function GeneratePropsEditor(props, propData, onPropChange) {
    const editor = props.map((prop) => {
        const { EditorInfo } = prop;
        if (EditorInfo) {
            let loader = PropEditorCollection[EditorInfo.Key];
            if (loader) {
                let main = loader(prop.PropName, propData, EditorInfo, (value, editorProps) => {
                    let updateInfo = { updateValue: {}, updateState: {} };
                    updateInfo.updateValue[prop.PropName] = value;
                    if (EditorInfo.SetProp) {
                        updateInfo = EditorInfo.SetProp(updateInfo, editorProps);
                    }
                    onPropChange(updateInfo);
                });
                return <Form.Item key={prop.PropName} label={prop.Name}>{main}</Form.Item>;
            }
        }
    });
    return editor;
}
