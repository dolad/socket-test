import {Socket} from 'socket.io';
import {Done, IMessage} from '../../socket';
import {SocketState} from '../../socket/states';
import {HashCalculationService} from '.';

export const initHashCalculationHandlers = async (
  socket: Socket,
  hashCalcService: HashCalculationService
) => {
  socket.on(SocketState.LOADING, async (eventData: IMessage<string>) => {
    socket.emit(SocketState.RECEIVED);
    socket.emit(SocketState.PROCESSING);
    const data = await hashCalcService.calculateHash(eventData.data);
    const event = Done(data);
    console.log(event);
    socket.emit(event.state, event);
  });
};
