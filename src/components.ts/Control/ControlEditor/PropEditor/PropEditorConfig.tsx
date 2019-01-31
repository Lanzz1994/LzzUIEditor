import * as React from 'react';
//BaseFieldConfig
type Options={label:string|React.ReactNode,value:any}[];

export type OptionsConfig={
    options:Options,
    [propName:string]:any,
};

export type ResponseValues = { xs:any, sm:any, md:any, lg:any, xl:any, xxl:any };

export enum ResponsePoint { xs='xs', sm='sm', md='md', lg='lg', xl='xl', xxl='xxl' };