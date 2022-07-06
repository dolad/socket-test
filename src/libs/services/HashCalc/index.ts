import {Keccak} from 'sha3';

export class HashCalculationService {
  calculateHash(inputHash: string): Promise<IResponse> {
    return wait(inputHash);
  }
}

// wait till its deliver
export interface IResponse {
  result: string;
  nounce: number;
}
const wait = (val: string): Promise<IResponse> =>
  new Promise(res => {
    const nounce = new Date().getTime();
    const sumHash = val + nounce;
    const hash = new Keccak(256);
    hash.update(sumHash);
    const result = hash.digest('hex');
    res({result, nounce});
  });
