import { Select, Input, Switch } from 'antd';
//const DividerEditor=(props)=>(<Divider key={props.key}>{props.label}</Divider>);
const TextEditor = {
    Loader: () => {
        return <Input />;
    },
};
const SelectEditor = {
    Loader: () => {
        return (<Select>
                
            </Select>);
    }
};
const SwtichEditor = {
    Loader: () => {
        return <Switch />;
    }
};
const PropEditorCollection = {
    TextEditor,
    SelectEditor,
    SwtichEditor
};
export default PropEditorCollection;
