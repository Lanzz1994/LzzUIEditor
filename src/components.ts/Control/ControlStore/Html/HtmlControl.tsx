import {ControlGenerate,ControlGenerateCollection} from '../../types';

const Text:ControlGenerate=(props:any)=><span {...props}>{props.Text}</span>;

const HtmlControls:ControlGenerateCollection={
    Text
}

export {HtmlControls}