import {Keccak} from 'sha3';

export class HashCalculationService {
  private generateNounceValue(): number {
    return Math.floor(Math.random() * 1000);
  }
  calculateHash(inputHash: string): Promise<IResponse> {
    return wait(inputHash, this.generateNounceValue());
  }
}

// wait till its deliver
export interface IResponse {
  result: string;
  nounce: number;
}
const wait = (val: string, nounce: number): Promise<IResponse> =>
  new Promise(res => {
    const sumHash = val + nounce;
    const newHash = new Keccak(256);
    newHash.update(sumHash);
    const result = newHash.digest('hex');
    res({result, nounce});
  });
