import {SocketState} from '../../libs/socket/states';
import {IMessage} from '../../libs/socket';

export const initHashCalculationHandlers = (hashResult: HTMLInputElement) => {
  window.__SOCKET__.on(SocketState.RECEIVED, () => {
    hashResult.value = 'hashResult is being recieved';
  });
  window.__SOCKET__.on(SocketState.PROCESSING, () => {
    hashResult.value = 'hashResult is being Processed';
  });
  window.__SOCKET__.on(SocketState.DONE, (event: IMessage<string>) => {
    hashResult.value = event.data;
  });

  window.__SOCKET__.on(SocketState.FAILED, (event: IMessage<string>) => {
    hashResult.value = event.data;
  });
};
