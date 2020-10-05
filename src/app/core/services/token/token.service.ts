import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Token } from '../../models/token/token.model';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getToken(sUsuario: string){
    return this.httpClient.get<Token>(`http://34.234.225.159:8080/RestFull_Rewards-1.0/rest/rewards/token2Factores?sUsuarioNegocio=${sUsuario}`);
  }
}
