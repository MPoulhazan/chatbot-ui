import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuiButtonComponent } from './fui-button.component';

describe('FuiButtonComponent', () => {
  let component: FuiButtonComponent;
  let fixture: ComponentFixture<FuiButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuiButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuiButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
