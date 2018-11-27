import {PropEditor} from '../ControlEditor/PropEditor/index'

export type ControlProp={
    PropName:string;
    Editor?:PropEditor;
};

export default class ComponentInfo{
    Key?:string;
    Name?:string;
    ShortName?:string;
    Icon?:string;
    Description?:string;

    Props?:ControlProp[];
    
}