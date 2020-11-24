import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Business, BusinessDetail, BusinessConfig } from '../../models/business/business.model';
import { ConstantesConexion, ConstantesMetodos } from '../../../shared/utils/utils';


@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getBusinessConfig(iIdNegocio: number){
    return this.httpClient.get<Business>(`${ConstantesConexion.PROTOCOL}://${ConstantesConexion.HOST_URL}/${ConstantesConexion.CTXTFAC}/${ConstantesMetodos.CONFIG_NEGOCIO_APP}?iIdNegocio=${iIdNegocio}`);
  }

  setBusinessConfig(businessDetail: BusinessDetail){
    return this.httpClient.put<BusinessConfig>(`${ConstantesConexion.PROTOCOL}://${ConstantesConexion.HOST_URL}/${ConstantesConexion.CTXTFAC}/${ConstantesMetodos.CONFIG_NEGOCIO}?bIsAppConfig=${businessDetail.bIsAppConfig}&idNegocio=${businessDetail.iIdNegocio}&valor=${businessDetail.sData}&nombreParametro=${businessDetail.sParametro}`, {});
  }
}
