import { SlotsType } from "@vue/runtime-core";

export interface Props {
    text:string,//按钮文本
}

export type Emits = {
    selfClick:() => void,
}

export interface Slots extends SlotsType{
    default:any,
}
