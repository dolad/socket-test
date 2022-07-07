import {createServer} from 'http';
import {Server, Socket as ServerSocket} from 'socket.io';
// eslint-disable-next-line node/no-extraneous-import
import {io as ClientIO, Socket} from 'socket.io-client';
import {app} from '../../src/app';
jest.mock('../libs/services');
jest.setTimeout(10000);
describe('should connect to the sever', () => {
  let io: Server, serverSocket: ServerSocket, clientSocket: Socket;
  beforeAll(done => {
    const server = createServer(app);
    io = new Server(server);
    server.listen(() => {
      const address: any = server.address();
      const port = address['port'];
      clientSocket = ClientIO(`http://localhost:${port}`);
      io.on('connection', socket => {
        serverSocket = socket;
      });
      clientSocket.on('connect', done);
    });
  });

  afterAll(() => {
    io.close();
    clientSocket.close();
  });

  test('client should send response to server', done => {
    const mockEvent = {
      state: 'Loading',
      data: 'somehash1',
    };
    clientSocket.on('Loading', arg => {
      expect(arg).toStrictEqual(mockEvent);
      done();
    });
    serverSocket.emit('Loading', mockEvent);
  });

  test('server should send done response to client', done => {
    const mockEvent = 'somehash';
    clientSocket.emit('Loading', mockEvent);
    setTimeout(() => {
      serverSocket.on('Done', arg => {
        expect(arg).toStrictEqual(mockEvent);
      });
      done();
    }, 500);
  });
});
