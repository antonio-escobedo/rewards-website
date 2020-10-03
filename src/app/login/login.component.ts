import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { LoginService } from '../core/services/login/login.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Login } from '../core/models/login/login.model';
import { Token } from '../core/models/token/token.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  login: Login;
  loginToken: Token;
  sToken: string;
  loginForm: NgForm;

  constructor(
    private route: ActivatedRoute,
    private loginService: LoginService) {
    }

    ngOnInit() {
  }

  login1(form: NgForm){
    this.getTokenClient(form.value.usuario, form.value.contrasenia);
  }

  getSesionClient(sUsuario: string, sPassword: string, s2Factor: string) {
    this.loginService.getSession(sUsuario, sPassword, s2Factor).subscribe(login => {
    this.login = login;
    console.log('Result:  ' + JSON.stringify(this.login.detalle.iIdNegocio) + ' - ' + JSON.stringify(this.login));
    });
  }

  getTokenClient(sUsuario: string, sPassword: string) {
    this.loginService.getToken(sUsuario).subscribe(loginToken => {
    this.loginToken = loginToken;
    this.getSesionClient(sUsuario, sPassword, this.loginToken.detalle);
    });
  }
}
