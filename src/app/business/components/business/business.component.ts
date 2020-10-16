import { Component, OnInit, Input, NgModule } from '@angular/core';
import { BusinessDetail } from '../../../core/models/business/business.model';


@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.scss']
})

export class BusinessComponent implements OnInit {

  @Input() businessDetail: BusinessDetail;
  constructor() { }

  ngOnInit(): void {
  }


}
