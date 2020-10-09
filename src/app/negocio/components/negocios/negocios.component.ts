import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { NegocioService } from '../../../core/services/negocio/negocio.service';
import { Negocio, NegocioDetail } from '../../../core/models/negocio/negocio.model';

@Component({
  selector: 'app-negocios',
  templateUrl: './negocios.component.html',
  styleUrls: ['./negocios.component.scss']
})
export class NegociosComponent implements OnInit {

  iIdNegocio: number;
  negocio: Negocio;
  negocioDetail: NegocioDetail[] = [];

  constructor(
    private route: ActivatedRoute,
    private negocioService: NegocioService
  ) { }

  ngOnInit(): void {
    this.iIdNegocio = (Number(this.route.snapshot.paramMap.get('idNegocio')));
    this.negocioService.getNegocio(this.iIdNegocio).subscribe(negocio => {
      this.negocio = negocio;
      this.negocioDetail = this.negocio.detalle;
      console.log('Tamaño de configuracion: ' + this.negocio.detalle.length);
      console.log('Array detalles: ' + JSON.stringify(this.negocioDetail.length));
    });
  }

}
