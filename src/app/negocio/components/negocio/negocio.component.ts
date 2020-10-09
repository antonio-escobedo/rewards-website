import { Component, OnInit, Input, NgModule } from '@angular/core';
import { NegocioDetail } from '../../../core/models/negocio/negocio.model';


@Component({
  selector: 'app-negocio',
  templateUrl: './negocio.component.html',
  styleUrls: ['./negocio.component.scss']
})

export class NegocioComponent implements OnInit {

  @Input() negocioDetail: NegocioDetail;
  constructor() { }

  ngOnInit(): void {
  }


}
