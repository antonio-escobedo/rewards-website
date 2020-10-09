import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ValidacionSmsComponent } from './validacion-sms/validacion-sms.component';
import { NegociosComponent } from './negocio/components/negocios/negocios.component';
import { NegocioComponent } from './negocio/components/negocio/negocio.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { MarcasComponent } from './marcas/marcas.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ValidacionSmsComponent,
    NegociosComponent,
    MarcasComponent,
    NegocioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    CoreModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
