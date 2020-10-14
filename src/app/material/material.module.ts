import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCheckboxModule,
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatInputModule
  ],
  exports: [
    MatCheckboxModule,
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatInputModule

  ]
})
export class MaterialModule { }
