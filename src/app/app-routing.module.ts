import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ValidationTokenComponent } from './validation-token/validation-token.component';
import { AdminGuard } from './admin.guard';
import { BusinessesComponent } from './business/components/businesses/businesses.component';
import { BrandsComponent } from './brands/brands.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'validacion',
    component: ValidationTokenComponent
  },
  {
    path: 'negocios',
    canActivate: [AdminGuard],
    component: BusinessesComponent
  },
  { path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  { path: 'marcas',
    component: BrandsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
