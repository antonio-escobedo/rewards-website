import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Business } from '../../models/business/business.model';
import { ConstantesConexion, ConstantesMetodos } from '../../../shared/utils/utils';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getNegocio(iIdNegocio: number){
    console.log('Negocio: ' + (iIdNegocio));
    return this.httpClient.get<Business>(`${ConstantesConexion.PROTOCOL}://${ConstantesConexion.HOST_URL}/${ConstantesConexion.CTXTFAC}/${ConstantesMetodos.CONFIG_NEGOCIO}?idNegocio=${iIdNegocio}`);
  }
}
