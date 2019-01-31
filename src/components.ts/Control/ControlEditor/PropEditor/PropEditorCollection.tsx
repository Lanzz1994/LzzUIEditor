import * as React from 'react';
import {Divider,Select,Input,Switch,Button,Radio,InputNumber, Form} from 'antd';
import {PropEditorLoader,PropEditorInfo} from '../../types';
import {OptionsConfig,ResponseValues,ResponsePoint} from './PropEditorConfig';
import {TreeDataEditor} from './BaseEditor';
import { LinkedTree } from '../../../Utils/index';

//editor state name rule: PropName + editor target prop name, align > disabled > alignDisabled

//const DividerEditor=(props)=>(<Divider key={props.key}>{props.label}</Divider>);

const TextEditor:PropEditorLoader=(prop:string,editorStates:any,editorInfo:PropEditorInfo,onPropChange)=>{
    let config=(editorInfo.Config||{});
    return <Input value={editorStates[prop]} disabled={editorStates[prop+'Disabled']} placeholder={config.placeholder} style={editorInfo.Style} onChange={(e)=>{
        onPropChange(e.target.value);
    }}/>;
};

const NumberInputEditor:PropEditorLoader=(prop:string,editorStates:any,editorInfo:PropEditorInfo,onPropChange)=>{
    let config=(editorInfo.Config||{});
    return <InputNumber value={editorStates[prop]} disabled={editorStates[prop+'Disabled']} placeholder={config.placeholder} style={{width:'100%',...editorInfo.Style}} onChange={(e)=>{
        onPropChange(e);
    }}/>;
};

const SelectEditor:PropEditorLoader=(prop:string,editorStates:any,editorInfo:PropEditorInfo,onPropChange)=>{
    let config=(editorInfo.Config||{}) as OptionsConfig;
    let opts=(config.options||[]).map((opt)=><Select.Option key={opt.value} value={opt.value}>{opt.label}</Select.Option>);
    return (<Select value={editorStates[prop]} disabled={editorStates[prop+'Disabled']} placeholder={config.placeholder} style={{width:'174px',...editorInfo.Style}} onChange={(value)=>{
        onPropChange(value);
    }}>{opts}</Select>);
};

const SwitchEditor:PropEditorLoader=(prop:string,editorStates:any,editorInfo:PropEditorInfo,onPropChange)=>{
    return <Switch checked={editorStates[prop]} disabled={editorStates[prop+'Disabled']} onChange={((value)=>{
        onPropChange(value);
    })}/>;
};

const RadioButtonGroupEditor:PropEditorLoader=(prop:string,editorStates:any,editorInfo:PropEditorInfo,onPropChange)=>{
    let config=editorInfo.Config as OptionsConfig;
    let opts=(config.options||[]).map((opt)=><Radio.Button key={opt.value} value={opt.value}>{opt.label}</Radio.Button>);
    return (<Radio.Group style={editorInfo.Style} value={editorStates[prop]} onChange={(e)=>{
        onPropChange(e.target.value);
    }}>{opts}</Radio.Group>);
};

const ResponseValueEditor:PropEditorLoader=(prop:string,editorStates:any,editorInfo:PropEditorInfo,onPropChange)=>{
    let responsevals=(editorStates[prop]||{}) as ResponseValues;
    return(
        <React.Fragment>
            <div className="response-value-editor">
                <div className="prop-label">xs</div><InputNumber value={responsevals.xs} style={{width:80}} onChange={(v)=>{onPropChange({...responsevals,xs:v});}}/>
                <div className="prop-label">sm</div><InputNumber value={responsevals.sm} style={{width:80}} onChange={(v)=>{onPropChange({...responsevals,sm:v});}}/>
                <div className="prop-label">md</div><InputNumber value={responsevals.md} style={{width:80}} onChange={(v)=>{onPropChange({...responsevals,md:v});}}/>
                <div className="prop-label">lg</div><InputNumber value={responsevals.lg} style={{width:80}} onChange={(v)=>{onPropChange({...responsevals,lg:v});}}/>
                <div className="prop-label">xl</div><InputNumber value={responsevals.xl} style={{width:80}} onChange={(v)=>{onPropChange({...responsevals,xl:v});}}/>
                <div className="prop-label">xxl</div><InputNumber value={responsevals.xxl} style={{width:80}} onChange={(v)=>{onPropChange({...responsevals,xxl:v});}}/>
            </div>
        </React.Fragment>
    );
}

const TableEditor:PropEditorLoader=(prop:string,editorStates:any,editorInfo:PropEditorInfo,onPropChange)=>{
    const root= new LinkedTree({ Number: 'root' });
    const one=new LinkedTree({ Number: 'number-1' },root);
    new LinkedTree({ Number: 'number-1-1' },one);
    new LinkedTree({ Number: 'number-1-2' },one);

    const two=new LinkedTree({ Number: 'number-2' },root);
    new LinkedTree({ Number: 'number-2-1' },two);
    new LinkedTree({ Number: 'number-2-2' },two);

    const three=new LinkedTree({ Number: 'number-3' },root);
    new LinkedTree({ Number: 'number-3-1' },three);
    new LinkedTree({ Number: 'number-3-2' },three);

    return  <TreeDataEditor CustomNode={(props,Change)=>(<div>
        <div className="form-control">
            <div className="item">列宽</div>
            <div className="item">
                <Input value={props.Data.Number} onChange={(e)=>{
                    props.Data["Number"]=e.target.value;
                    Change();
                }}/>
            </div>
        </div>
        <div className="ant-form-item-control-wrapper">
            <span>列宽</span><Input value={props.Data.Number} onChange={(e)=>{
                props.Data["Number"]=e.target.value;
                Change();
            }}/>
        </div>
    </div>)} treeData={new LinkedTree({Number:'number'})}/>
}

const PropEditorCollection:{[propName:string]:PropEditorLoader}={
    TextEditor,
    NumberInputEditor,
    SelectEditor,
    SwitchEditor,
    RadioButtonGroupEditor,
    ResponseValueEditor,
    TableEditor
}

export default PropEditorCollection;