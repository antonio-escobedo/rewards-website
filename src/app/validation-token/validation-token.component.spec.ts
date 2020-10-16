import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationTokenComponent } from './validation-token.component';

describe('ValidationTokenComponent', () => {
  let component: ValidationTokenComponent;
  let fixture: ComponentFixture<ValidationTokenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidationTokenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidationTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
