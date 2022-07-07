export declare class HashCalculationService {
    calculateHash(inputHash: string): Promise<IResponse>;
    private hexToDecimal;
    private keecakHash;
    private wait;
}
export interface IResponse {
    newHash: string;
    nounce: BigInt | number;
}
