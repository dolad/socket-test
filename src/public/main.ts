// eslint-disable-next-line node/no-extraneous-import
import {io, Socket} from 'socket.io-client';
import {Loading} from '../libs/socket';
import {initHashCalculationHandlers} from './events/calc';

declare global {
  interface Window {
    __SOCKET__: Socket;
  }
}

const socket = io();

window.__SOCKET__ = socket;

const userHashContent = document.getElementById('userHash') as HTMLInputElement;
const hashResult = document.getElementById('hashResult') as HTMLInputElement;
const submitHash = document.getElementById('submitHandler') as Element;

submitHash.addEventListener('click', (e: Event) => {
  if (!userHashContent.value) {
    hashResult.value = 'hash cannot be empty';
    hashResult.style.borderColor = 'red';
    console.log('hash cannot be empty');
    return;
  }
  const event = Loading(userHashContent.value);
  window.__SOCKET__.emit(event.state, event);
  hashResult.value = event.state;
});

initHashCalculationHandlers(hashResult);
