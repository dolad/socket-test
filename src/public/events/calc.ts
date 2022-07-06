import {SocketState} from '../../libs/socket/states';
import {IMessage} from '../../libs/socket';
import {IResponse} from '../../libs/services/HashCalc';

export const initHashCalculationHandlers = (
  hashResult: HTMLInputElement,
  nounceValue: Element
) => {
  window.__SOCKET__.on(SocketState.RECEIVED, () => {
    hashResult.value = 'hashResult is being recieved';
  });
  window.__SOCKET__.on(SocketState.PROCESSING, () => {
    hashResult.value = 'hashResult is being Processed';
  });
  window.__SOCKET__.on(SocketState.DONE, (event: IMessage<IResponse>) => {
    hashResult.value = event.data.result;
    nounceValue.innerHTML = `NounceValue is ${event.data.nounce.toString()}`;
  });

  window.__SOCKET__.on(SocketState.FAILED, (event: IMessage<string>) => {
    hashResult.value = event.data;
  });
};
