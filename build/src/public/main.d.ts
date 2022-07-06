import { Socket } from 'socket.io-client';
declare global {
    interface Window {
        __SOCKET__: Socket;
    }
}
