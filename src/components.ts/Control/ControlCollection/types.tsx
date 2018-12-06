import * as React from 'react';
import {Description,ControlInfo} from '../types';

export type ControlInfoBlockType={
    Key:string,
    Introduction?:Description
}

export type ControlCategoryItem={
    Key:string,
    Title?:string|React.ReactNode,
    Types?:ControlInfoBlockType[],
    Infos?:ControlInfo[]
}