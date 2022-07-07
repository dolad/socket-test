/* eslint-disable node/no-unsupported-features/es-builtins */
import {hashCalculationService} from '../libs/services';
import {HashCalculationService, IResponse} from '../libs/services/HashCalc';

describe('HashCalculation Test', () => {
  let hashCalcService: HashCalculationService;

  beforeEach(() => {
    hashCalcService = hashCalculationService;
  });

  test('is should return an hashLower than the input hash and it nounce value', async () => {
    const sampleSHA3 =
      '592fa743889fc7f92ac2a37bb1f5ba1daf2a5c84741ca0e0061d243a2e6707ba';
    const result: IResponse = await hashCalcService.calculateHash(sampleSHA3);
    expect(result).toBeDefined();
    expect(result.nounce).toBeDefined();
    expect(result.newHash).toBeDefined();
    const check =
      BigInt(parseInt(sampleSHA3, 16)) > BigInt(parseInt(result.newHash, 16));
    expect(check).toBe(true);
  });
});
