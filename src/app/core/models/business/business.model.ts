import { Result } from '../result/result.model';

export interface Business {
    detalle: BusinessDetail[];
    resultDto: Result;
}

export interface BusinessDetail {
    bIsAppConfig: boolean;
    iIdNegocio: number;
    sData: string;
    sParametro: string;
}

export interface BusinessConfig {
    detalle: string;
    resultDto: Result;
}
