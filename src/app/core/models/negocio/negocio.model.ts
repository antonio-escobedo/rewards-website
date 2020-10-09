import { Result } from '../result/result.model';

export interface Negocio {
    detalle: NegocioDetail[];
    resultadoDto: Result;
}

export interface NegocioDetail {
    bIsAppConfig: boolean;
    iIdNegocio: number;
    sData: string;
    sParametro: string;
}
