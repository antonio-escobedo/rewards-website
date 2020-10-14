import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { NegocioService } from '../../../core/services/negocio/negocio.service';
import { Negocio, NegocioDetail } from '../../../core/models/negocio/negocio.model';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-negocios',
  templateUrl: './negocios.component.html',
  styleUrls: ['./negocios.component.scss']
})
export class NegociosComponent implements OnInit {

  param0Form: FormGroup;
  showFiller = false;
 

  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  // Function de inicio de sesion
  updateParameter(event: Event){
    event.preventDefault();
    if (this.param0Form.valid) {
       console.log(this.param0Form);
  }
}

  iIdNegocio: number;
  negocio: Negocio;
  nombrePersona: string = 'Usuario';
  negocioDetail: NegocioDetail[];
  userName: string;

  check0: boolean = false;
  checked = false;
  colorInput = 'primary';

  constructor(
    private route: ActivatedRoute,
    private negocioService: NegocioService,
    private formBuilder: FormBuilder,
  ) {
    this.buildForm0();
  }

   // Creación del formulario desde un json
   private buildForm0() {
    this.param0Form = this.formBuilder.group({
        bIsAppConfig0: new FormControl(''),
        sData0: new FormControl(''),
        sParametro0: new FormControl('')
    });
  }

  ngOnInit(): void {
    this.iIdNegocio = (Number(this.route.snapshot.paramMap.get('idNegocio')));
    this.userName = this.route.snapshot.paramMap.get('userName');
    this.negocioService.getNegocio(this.iIdNegocio).subscribe(negocio => {
      this.negocio = negocio;
      this.negocioDetail = this.negocio.detalle;
      this.param0Form.patchValue({
        bIsAppConfig0: this.negocioDetail[0].bIsAppConfig,
        sData0: this.negocioDetail[0].sData,
        sParametro0: this.negocioDetail[0].sParametro,
      });
      this.check0 = this.negocioDetail[0].bIsAppConfig;
      console.log('Tamaño de configuracion: ' + this.negocio.detalle.length);
      console.log('Array detalles: ' + JSON.stringify(this.negocioDetail.length));
      console.log(JSON.stringify(this.negocioDetail));
    });
  }

}

/*  {
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
*/
