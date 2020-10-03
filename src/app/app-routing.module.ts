import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ValidacionSmsComponent } from './validacion-sms/validacion-sms.component';
import { AdminGuard } from './admin.guard';
import { NegociosComponent } from './negocios/negocios.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'validacion',
    component: ValidacionSmsComponent
  },
  {
    path: 'negocios',
    canActivate: [AdminGuard],
    component: NegociosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
