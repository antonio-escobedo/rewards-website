import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidacionSmsComponent } from './validacion-sms.component';

describe('ValidacionSmsComponent', () => {
  let component: ValidacionSmsComponent;
  let fixture: ComponentFixture<ValidacionSmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidacionSmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidacionSmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
