import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ValidacionSmsComponent } from './validacion-sms/validacion-sms.component';
import { AdminGuard } from './admin.guard';
import { NegociosComponent } from './negocio/components/negocios/negocios.component';
import { MarcasComponent } from './marcas/marcas.component';

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
  },
  { path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  { path: 'marcas',
    component: MarcasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
