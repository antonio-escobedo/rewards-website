import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Token } from '../../models/token/token.model';
import { ConstantesConexion, ConstantesMetodos } from 'src/app/shared/utils/utils';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getToken(sUsuario: string){
    return this.httpClient.get<Token>(`${ConstantesConexion.PROTOCOL}://${ConstantesConexion.HOST_URL}/${ConstantesConexion.CTXTFAC}/${ConstantesMetodos.TOKEN}?sUsuarioNegocio=${sUsuario}`);
  }
}
