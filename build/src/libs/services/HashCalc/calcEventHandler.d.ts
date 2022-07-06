import { Socket } from 'socket.io';
import { HashCalculationService } from '.';
export declare const initHashCalculationHandlers: (socket: Socket, hashCalcService: HashCalculationService) => Promise<void>;
