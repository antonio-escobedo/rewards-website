import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Login } from '../../models/login/login.model';
import { Token } from '../../models/token/token.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getSession(sUsuario: string, sPassword: string, s2Factor: string){
    return this.httpClient.get<Login>(`http://34.234.225.159:8080/RestFull_Rewards-1.0/rest/rewards/loginNegocio?sUsuario=${sUsuario}&sPassword=${sPassword}&s2Factor=${s2Factor}`);
  }

  getToken(sUsuario: string){
    return this.httpClient.get<Token>(`http://34.234.225.159:8080/RestFull_Rewards-1.0/rest/rewards/token2Factores?sUsuarioNegocio=${sUsuario}`);
  }
}
