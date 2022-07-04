import {Keccak} from 'sha3';

export class HashCalculationService {
  calculateHash(inputHash: string): Promise<string> {
    const nounce = new Date().getTime();
    const sumHash = inputHash + nounce;
    return wait(sumHash);
  }
}

// wait till its deliver
const wait = (val: any): Promise<string> =>
  new Promise(res => {
    const hash = new Keccak(256);
    hash.update(val);
    const result = hash.digest('hex');
    res(result);
  });
