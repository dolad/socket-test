// TODO: more examples
import {app} from './src/app';
import * as http from 'http';
import {Server} from 'socket.io';
import {hashCalculationService} from './src/libs/services';
import {initHashCalculationHandlers} from './src/libs/services/HashCalc/calcEventHandler';

export const server = http.createServer(app);
const io = new Server(server);
server.listen(3003);

io.on('connection', socket => {
  initHashCalculationHandlers(socket, hashCalculationService);
});
