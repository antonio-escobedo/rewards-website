import { Result } from '../result/result.model';

export interface Business {
    detalle: BusinessDetail[];
    resultadoDto: Result;
}

export interface BusinessDetail {
    bIsAppConfig: boolean;
    iIdNegocio: number;
    sData: string;
    sParametro: string;
}
