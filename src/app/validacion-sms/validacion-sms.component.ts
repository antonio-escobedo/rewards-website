import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { TokenService } from '../core/services/token/token.service';
import { Token } from '../core/models/token/token.model';
import { LoginService } from '../core/services/login/login.service';
import { Login } from '../core/models/login/login.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-validacion-sms',
  templateUrl: './validacion-sms.component.html',
  styleUrls: ['./validacion-sms.component.scss']
})
export class ValidacionSmsComponent implements OnInit {
  token: Token;
  login: Login;
  tokenForm: FormGroup;
  userName: string;
  userPassword: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private tokenService: TokenService,
    private loginService: LoginService,
    private formBuilder: FormBuilder
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.userName = this.route.snapshot.paramMap.get('user');
    this.userPassword = this.route.snapshot.paramMap.get('userPassword');
    console.log('User: ' + this.userName + ' UserPass: ' + this.userPassword);

    this.tokenService.getToken(this.userName).subscribe(token => {
      this.token = token;
      console.log(this.token);
      });
  }

    // Creación del formulario desde un json
    private buildForm() {
      this.tokenForm = this.formBuilder.group({
        userToken: ['', [Validators.required]]
      });
    }

    validateSession(event: Event) {
      if (this.tokenForm.value.userToken === this.token.detalle) {
        this.loginService.getSession(this.userName, this.userPassword, this.tokenForm.value.userToken).subscribe(login => {
          this.login = login;
          if (this.login.resultDto.iResultado === 'Ok') {
            this.router.navigate(['negocios', { idNegocio: this.login.detalle.iIdNegocio, userName:  this.userName }]);
          }
          });
      }
  }

}
