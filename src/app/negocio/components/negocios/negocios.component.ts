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

  paramForm0: FormGroup ;
  paramForm1: FormGroup;
  paramForm2: FormGroup;
  paramForm3: FormGroup;
  paramForm4: FormGroup;
  paramForm5: FormGroup;
  paramForm6: FormGroup;
  paramForm7: FormGroup;
  paramForm8: FormGroup;
  paramForm9: FormGroup;
  paramForm10: FormGroup;
  paramForm11: FormGroup;
  paramForm12: FormGroup;
  paramForm13: FormGroup;
  paramForm14: FormGroup;
  paramForm15: FormGroup;
  paramForm16: FormGroup;
  paramForm17: FormGroup;
  paramForm18: FormGroup;
  paramForm19: FormGroup;
  paramForm20: FormGroup;

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
  updateParameter(event: Event, form: FormGroup){
    event.preventDefault();
    if (form.valid) {
       alert(form.value.sData);
  }
}

  iIdNegocio: number;
  negocio: Negocio;
  nombrePersona: string = 'Usuario';
  negocioDetail: NegocioDetail[] = [
    {
      "bIsAppConfig": true,
      "iIdNegocio": 2,
      "sData": "1",
      "sParametro": "B_MUESTRAMONTOPESOS"
  },
  {
      "bIsAppConfig": false,
      "iIdNegocio": 2,
      "sData": "2",
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

  ];
  userName: string;

  check0: boolean = false;
  checked = false;
  colorInput = 'primary';

  constructor(
    private route: ActivatedRoute,
    private negocioService: NegocioService,
    private formBuilder: FormBuilder,
  ) {
    this.buildForm();
  }

   // Creación del formulario desde un json
   private buildForm() {
    this.paramForm0 = this.formBuilder.group({
        bIsAppConfig: new FormControl(''),
        sData: new FormControl(''),
        sParametro: new FormControl('')
    });

    this.paramForm1 = this.formBuilder.group({
      bIsAppConfig: new FormControl(''),
      sData: new FormControl(''),
      sParametro: new FormControl('')
    });

    this.paramForm2 = this.formBuilder.group({
        bIsAppConfig: new FormControl(''),
        sData: new FormControl(''),
        sParametro: new FormControl('')
    });

    this.paramForm3 = this.formBuilder.group({
      bIsAppConfig: new FormControl(''),
      sData: new FormControl(''),
      sParametro: new FormControl('')
    });

    this.paramForm4 = this.formBuilder.group({
      bIsAppConfig: new FormControl(''),
      sData: new FormControl(''),
      sParametro: new FormControl('')
    });

    this.paramForm5 = this.formBuilder.group({
      bIsAppConfig: new FormControl(''),
      sData: new FormControl(''),
      sParametro: new FormControl('')
    });

    this.paramForm6 = this.formBuilder.group({
      bIsAppConfig: new FormControl(''),
      sData: new FormControl(''),
      sParametro: new FormControl('')
    });

    this.paramForm7 = this.formBuilder.group({
      bIsAppConfig: new FormControl(''),
      sData: new FormControl(''),
      sParametro: new FormControl('')
    });

    this.paramForm8 = this.formBuilder.group({
      bIsAppConfig: new FormControl(''),
      sData: new FormControl(''),
      sParametro: new FormControl('')
    });

    this.paramForm9 = this.formBuilder.group({
      bIsAppConfig: new FormControl(''),
      sData: new FormControl(''),
      sParametro: new FormControl('')
    });

    this.paramForm10 = this.formBuilder.group({
      bIsAppConfig: new FormControl(''),
      sData: new FormControl(''),
      sParametro: new FormControl('')
    });

    this.paramForm11 = this.formBuilder.group({
      bIsAppConfig: new FormControl(''),
      sData: new FormControl(''),
      sParametro: new FormControl('')
    });

    this.paramForm12 = this.formBuilder.group({
      bIsAppConfig: new FormControl(''),
      sData: new FormControl(''),
      sParametro: new FormControl('')
    });

    this.paramForm13 = this.formBuilder.group({
      bIsAppConfig: new FormControl(''),
      sData: new FormControl(''),
      sParametro: new FormControl('')
    });

    this.paramForm14 = this.formBuilder.group({
      bIsAppConfig: new FormControl(''),
      sData: new FormControl(''),
      sParametro: new FormControl('')
    });

    this.paramForm15 = this.formBuilder.group({
      bIsAppConfig: new FormControl(''),
      sData: new FormControl(''),
      sParametro: new FormControl('')
    });

    this.paramForm16 = this.formBuilder.group({
      bIsAppConfig: new FormControl(''),
      sData: new FormControl(''),
      sParametro: new FormControl('')
    });

    this.paramForm17 = this.formBuilder.group({
      bIsAppConfig: new FormControl(''),
      sData: new FormControl(''),
      sParametro: new FormControl('')
    });

    this.paramForm18 = this.formBuilder.group({
      bIsAppConfig: new FormControl(''),
      sData: new FormControl(''),
      sParametro: new FormControl('')
    });

    this.paramForm19 = this.formBuilder.group({
      bIsAppConfig: new FormControl(''),
      sData: new FormControl(''),
      sParametro: new FormControl('')
    });

    this.paramForm20 = this.formBuilder.group({
      bIsAppConfig: new FormControl(''),
      sData: new FormControl(''),
      sParametro: new FormControl('')
    });
  }

  ngOnInit(): void {
    this.iIdNegocio = (Number(this.route.snapshot.paramMap.get('idNegocio')));
    this.userName = this.route.snapshot.paramMap.get('userName');
   /*/ this.negocioService.getNegocio(this.iIdNegocio).subscribe(negocio => {
      this.negocio = negocio;
      this.negocioDetail = this.negocio.detalle;
    });*/
    this.paramForm0.patchValue({
      bIsAppConfig: this.negocioDetail[0].bIsAppConfig,
      sData: this.negocioDetail[0].sData,
      sParametro: this.negocioDetail[0].sParametro,
    });

    this.paramForm1.patchValue({
      bIsAppConfig: this.negocioDetail[1].bIsAppConfig,
      sData: this.negocioDetail[1].sData,
      sParametro: this.negocioDetail[1].sParametro,
    });

    this.paramForm2.patchValue({
      bIsAppConfig: this.negocioDetail[2].bIsAppConfig,
      sData: this.negocioDetail[2].sData,
      sParametro: this.negocioDetail[2].sParametro,
    });

    this.paramForm3.patchValue({
      bIsAppConfig: this.negocioDetail[3].bIsAppConfig,
      sData: this.negocioDetail[3].sData,
      sParametro: this.negocioDetail[3].sParametro,
    });

    this.paramForm4.patchValue({
      bIsAppConfig: this.negocioDetail[4].bIsAppConfig,
      sData: this.negocioDetail[4].sData,
      sParametro: this.negocioDetail[4].sParametro,
    });

    this.paramForm5.patchValue({
      bIsAppConfig: this.negocioDetail[5].bIsAppConfig,
      sData: this.negocioDetail[5].sData,
      sParametro: this.negocioDetail[5].sParametro,
    });

    this.paramForm6.patchValue({
      bIsAppConfig: this.negocioDetail[6].bIsAppConfig,
      sData: this.negocioDetail[6].sData,
      sParametro: this.negocioDetail[6].sParametro,
    });

    this.paramForm7.patchValue({
      bIsAppConfig: this.negocioDetail[7].bIsAppConfig,
      sData: this.negocioDetail[7].sData,
      sParametro: this.negocioDetail[7].sParametro,
    });

    this.paramForm8.patchValue({
      bIsAppConfig: this.negocioDetail[8].bIsAppConfig,
      sData: this.negocioDetail[8].sData,
      sParametro: this.negocioDetail[8].sParametro,
    });

    this.paramForm9.patchValue({
      bIsAppConfig: this.negocioDetail[9].bIsAppConfig,
      sData: this.negocioDetail[9].sData,
      sParametro: this.negocioDetail[9].sParametro,
    });

    this.paramForm10.patchValue({
      bIsAppConfig: this.negocioDetail[10].bIsAppConfig,
      sData: this.negocioDetail[10].sData,
      sParametro: this.negocioDetail[10].sParametro,
    });

    this.paramForm11.patchValue({
      bIsAppConfig: this.negocioDetail[11].bIsAppConfig,
      sData: this.negocioDetail[11].sData,
      sParametro: this.negocioDetail[11].sParametro,
    });

    this.paramForm12.patchValue({
      bIsAppConfig: this.negocioDetail[12].bIsAppConfig,
      sData: this.negocioDetail[12].sData,
      sParametro: this.negocioDetail[12].sParametro,
    });

    this.paramForm13.patchValue({
      bIsAppConfig: this.negocioDetail[13].bIsAppConfig,
      sData: this.negocioDetail[13].sData,
      sParametro: this.negocioDetail[13].sParametro,
    });

    this.paramForm14.patchValue({
      bIsAppConfig: this.negocioDetail[14].bIsAppConfig,
      sData: this.negocioDetail[14].sData,
      sParametro: this.negocioDetail[14].sParametro,
    });

    this.paramForm15.patchValue({
      bIsAppConfig: this.negocioDetail[15].bIsAppConfig,
      sData: this.negocioDetail[15].sData,
      sParametro: this.negocioDetail[15].sParametro,
    });

    this.paramForm16.patchValue({
      bIsAppConfig: this.negocioDetail[16].bIsAppConfig,
      sData: this.negocioDetail[16].sData,
      sParametro: this.negocioDetail[16].sParametro,
    });

    this.paramForm17.patchValue({
      bIsAppConfig: this.negocioDetail[17].bIsAppConfig,
      sData: this.negocioDetail[17].sData,
      sParametro: this.negocioDetail[17].sParametro,
    });

    this.paramForm18.patchValue({
      bIsAppConfig: this.negocioDetail[18].bIsAppConfig,
      sData: this.negocioDetail[18].sData,
      sParametro: this.negocioDetail[18].sParametro,
    });

    this.paramForm19.patchValue({
      bIsAppConfig: this.negocioDetail[19].bIsAppConfig,
      sData: this.negocioDetail[19].sData,
      sParametro: this.negocioDetail[19].sParametro,
    });

    this.paramForm20.patchValue({
      bIsAppConfig: this.negocioDetail[20].bIsAppConfig,
      sData: this.negocioDetail[20].sData,
      sParametro: this.negocioDetail[20].sParametro,
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
