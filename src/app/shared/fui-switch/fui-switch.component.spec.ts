import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuiSwitchComponent } from './fui-switch.component';

describe('FuiSwitchComponent', () => {
  let component: FuiSwitchComponent;
  let fixture: ComponentFixture<FuiSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuiSwitchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuiSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
