import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ValidationTokenComponent } from './validation-token/validation-token.component';
import { BusinessesComponent } from './business/components/businesses/businesses.component';
import { BusinessComponent } from './business/components/business/business.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { BrandsComponent } from './brands/brands.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ValidationTokenComponent,
    BusinessesComponent,
    BrandsComponent,
    BusinessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    CoreModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
