import {SocketState} from './states';

export interface IMessage<T> {
  state: SocketState;
  data: T;
}

const makeMessage =
  <T>(state: SocketState) =>
  (val: T): IMessage<T> => {
    return {
      state,
      data: val,
    };
  };

export const Loading = makeMessage<string>(SocketState.LOADING);
export const ProcessingHash = makeMessage<void>(SocketState.PROCESSING);
export const Failed = makeMessage<string>(SocketState.FAILED);
export const Done = makeMessage<string>(SocketState.DONE);
