import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Negocio } from '../../models/negocio/negocio.model';
import { ConstantesConexion, ConstantesMetodos } from '../../../shared/utils/utils';

@Injectable({
  providedIn: 'root'
})
export class NegocioService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getNegocio(iIdNegocio: number){
    console.log('Negocio: ' + (iIdNegocio));
    return this.httpClient.get<Negocio>(`${ConstantesConexion.PROTOCOL}://${ConstantesConexion.HOST_URL}/${ConstantesConexion.CTXTFAC}/${ConstantesMetodos.CONFIG_NEGOCIO}?idNegocio=${iIdNegocio}`);
  }
}
