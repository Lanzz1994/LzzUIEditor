import * as React from 'react';
import {Collapse,Divider} from 'antd';
import {ControlCategoryItem,ControlInfoBlockType} from './types';
import ControlInfoBlock from './ControlInfoBlock';
const Panel=Collapse.Panel;

export interface ControlCategoryProps{
    data?:ControlCategoryItem[];
    defaultActiveKey?:string[];
}

export default class ControlCategory extends React.PureComponent<ControlCategoryProps>{

    render(){
        const {data=[],defaultActiveKey}=this.props;
        const panels=data.map((category:ControlCategoryItem)=>{
            const {Key,Title,Infos=[],Types} = category;
            let infoBlocks;
            if(Types&&Types.length>0){
                const notype_blocks=Infos.filter((info)=>!info.Type).map((item)=><ControlInfoBlock key={item.Key} {...item}/>);
                const blocks=Types.map((type:ControlInfoBlockType)=>{
                    const {Key,Introduction={}} = type;
                    const blocks=Infos.filter((info)=>info.Type===Key).map((item)=><ControlInfoBlock key={item.Key} {...item}/>);
                    return <React.Fragment><Divider>{Introduction.Name||Key}</Divider>{blocks}</React.Fragment>
                });
                infoBlocks=<React.Fragment>{notype_blocks}{blocks}</React.Fragment>;
            }else{ 
                infoBlocks=Infos.map((item)=><ControlInfoBlock key={item.Key} {...item}/>) 
            }

            return (
                <Panel key={Key} header={Title}>{infoBlocks}</Panel>
            );
        });
        return <Collapse bordered={false} defaultActiveKey={defaultActiveKey} className="lz-control-list-panel">{panels}</Collapse>;
    }
}