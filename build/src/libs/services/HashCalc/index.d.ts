export declare class HashCalculationService {
    calculateHash(inputHash: string): Promise<IResponse>;
}
export interface IResponse {
    result: string;
    nounce: number;
}
