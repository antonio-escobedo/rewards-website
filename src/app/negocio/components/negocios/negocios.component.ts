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
  checked = false;
  colorInput = 'primary';

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


/*
{
    "detalle": [
        {
            "bIsAppConfig": true,
            "iIdNegocio": 2,
            "sData": "1",
            "sParametro": "B_MUESTRAMONTOPESOS"
        },
        {
            "bIsAppConfig": false,
            "iIdNegocio": 2,
            "sData": "1",
            "sParametro": "B_NOTIFCADUCIDADPUNTOS"
        },
        {
            "bIsAppConfig": true,
            "iIdNegocio": 2,
            "sData": "1",
            "sParametro": "B_PEDIRPASSWORD"
        },
        {
            "bIsAppConfig": true,
            "iIdNegocio": 2,
            "sData": "1",
            "sParametro": "B_VALIDARMAIL"
        },
        {
            "bIsAppConfig": true,
            "iIdNegocio": 2,
            "sData": "0",
            "sParametro": "B_VALIDARTELEFONO"
        },
        {
            "bIsAppConfig": true,
            "iIdNegocio": 2,
            "sData": "#RRGGBB",
            "sParametro": "COLOR_FONDO"
        },
        {
            "bIsAppConfig": false,
            "iIdNegocio": 2,
            "sData": "5",
            "sParametro": "DIASNOTIFCADUCIDADPUNTOS"
        },
        {
            "bIsAppConfig": false,
            "iIdNegocio": 2,
            "sData": "0",
            "sParametro": "DIASVIGENCIA"
        },
        {
            "bIsAppConfig": false,
            "iIdNegocio": 2,
            "sData": "Tus puntos estan por caducar, usalos ahora",
            "sParametro": "MENSAJENOTIFCADUCIDAD"
        },
        {
            "bIsAppConfig": false,
            "iIdNegocio": 2,
            "sData": ".1",
            "sParametro": "PESOSXPUNTOS"
        },
        {
            "bIsAppConfig": false,
            "iIdNegocio": 2,
            "sData": "10",
            "sParametro": "PUNTOSXPESOS"
        },
        {
            "bIsAppConfig": true,
            "iIdNegocio": 2,
            "sData": "1",
            "sParametro": "REGISTRO_CODIGOPOSTAL"
        },
        {
            "bIsAppConfig": true,
            "iIdNegocio": 2,
            "sData": "1",
            "sParametro": "REGISTRO_CORREO"
        },
        {
            "bIsAppConfig": true,
            "iIdNegocio": 2,
            "sData": "0",
            "sParametro": "REGISTRO_DIRECCION"
        },
        {
            "bIsAppConfig": true,
            "iIdNegocio": 2,
            "sData": "1",
            "sParametro": "REGISTRO_ESTADO"
        },
        {
            "bIsAppConfig": true,
            "iIdNegocio": 2,
            "sData": "0",
            "sParametro": "REGISTRO_NOMBRE"
        },
        {
            "bIsAppConfig": true,
            "iIdNegocio": 2,
            "sData": "1",
            "sParametro": "REGISTRO_TELEFONO"
        },
        {
            "bIsAppConfig": true,
            "iIdNegocio": 2,
            "sData": "Principal",
            "sParametro": "SNOMBRE_MENU_X"
        },
        {
            "bIsAppConfig": true,
            "iIdNegocio": 2,
            "sData": "http://automatizate.mx/aviso-de-privacidad/",
            "sParametro": "URL_AVISOPRIVACIDAD"
        },
        {
            "bIsAppConfig": true,
            "iIdNegocio": 2,
            "sData": "http://automatizate.mx/wp-content/uploads/2018/07/automatizate_logo_final.png",
            "sParametro": "URL_DISENO_TARJETA"
        },
        {
            "bIsAppConfig": true,
            "iIdNegocio": 2,
            "sData": "http://automatizate.mx/wp-content/uploads/2018/07/automatizate_logo_final.png",
            "sParametro": "URL_LOGOTIPO"
        }
    ],
    "resultDto": {
        "iResultado": "Ok",
        "sDetalle": "Consulta exitosa"
    }
}
*/
