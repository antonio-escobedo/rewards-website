import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Login } from '../../models/login/login.model';
import { Token } from '../../models/token/token.model';
import { ConstantesConexion, ConstantesMetodos } from 'src/app/shared/utils/utils';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getSession(sUsuario: string, sPassword: string, s2Factor: string){
    return this.httpClient.get<Login>(`${ConstantesConexion.PROTOCOL}://${ConstantesConexion.HOST_URL}/${ConstantesConexion.CTXTFAC}/${ConstantesMetodos.LOGIN_NEGOCIO}?sUsuario=${sUsuario}&sPassword=${sPassword}&s2Factor=${s2Factor}`);
  }
}
