import { IResponse } from '../services/HashCalc';
import { SocketState } from './states';
export interface IMessage<T> {
    state: SocketState;
    data: T;
}
export declare const Loading: (val: string) => IMessage<string>;
export declare const ProcessingHash: (val: void) => IMessage<void>;
export declare const Failed: (val: string) => IMessage<string>;
export declare const Done: (val: IResponse) => IMessage<IResponse>;
