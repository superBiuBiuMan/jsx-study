import { SlotsType } from "@vue/runtime-core";

export interface Props {
    text:string,//按钮文本
    modelValue:number,//点击次数
}

export type Emits = {
    selfClick:() => void,
    'update:modelValue':(value:number) => void;
}

export interface Slots extends SlotsType{
    default:any,
}
