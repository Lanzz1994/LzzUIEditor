import * as React from 'react';
import { Form } from 'antd';
import PropEditorCollection from './PropEditorCollection';
function GenerateEditor(data) {
    return (data.Info.Props || []).map((prop) => {
        let editor = null;
        let loader = PropEditorCollection[prop.PropName];
        if (loader) {
            let main = loader.Loader();
            editor = (<Form.Item key={prop.PropName} label={prop.Name}>{main}</Form.Item>);
        }
        return editor;
    });
}
export default class PropEditor extends React.PureComponent {
    constructor(props) {
        super(props);
    }
    render() {
        const { editorSource, onPropChange } = this.props;
        let editors = editorSource ? GenerateEditor(editorSource.Data) : [];
        return (<Form className="lz-control-prop-editor" layout="inline">
                {editors}
            </Form>);
    }
}
