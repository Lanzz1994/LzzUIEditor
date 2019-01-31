import * as React from 'react';
import { Form } from 'antd';
import { GeneratePropsEditor } from './Utils';
export default class PropEditor extends React.PureComponent {
    constructor(props) {
        super(props);
        this.InitStates = (editorSource) => {
            const { PropData, Info } = editorSource.Data;
            let newStates = {};
            (Info.Props || []).map((prop) => {
                const { EditorInfo } = prop;
                if (EditorInfo) {
                    if (PropData[prop.PropName] === undefined) {
                        newStates[prop.PropName] = prop.DefaultValue;
                    }
                    else {
                        newStates[prop.PropName] = EditorInfo.InitProp ? EditorInfo.InitProp(PropData[prop.PropName]) : PropData[prop.PropName];
                    }
                    newStates = Object.assign({}, newStates, EditorInfo.States);
                }
            });
            return newStates;
        };
        this.onPropChange = (updateInfo) => {
            this.setState(Object.assign({}, updateInfo.updateValue, updateInfo.updateState));
            this.props.onPropChange(updateInfo.updateValue);
        };
        this.GenerateEditor = () => {
            let editor = [];
            if (this.props.editorSource) {
                editor = GeneratePropsEditor(this.props.editorSource.Data.Info.Props || [], this.state, this.onPropChange);
            }
            return editor;
        };
        if (props.editorSource) {
            this.state = this.InitStates(props.editorSource);
        }
    }
    componentWillReceiveProps(props) {
        const { editorSource } = this.props;
        if (props.editorSource) {
            if (!(editorSource && props.editorSource.ID === editorSource.ID)) {
                this.setState(this.InitStates(props.editorSource));
            }
        }
        else {
            this.setState((prevState) => { if (prevState)
                Object.keys(prevState).map((key) => { delete prevState[key]; }); });
        }
    }
    render() {
        let editors = this.GenerateEditor();
        return (<div className="lz-control-prop-editor">
                <Form layout="inline">{editors}</Form>
            </div>);
    }
}
