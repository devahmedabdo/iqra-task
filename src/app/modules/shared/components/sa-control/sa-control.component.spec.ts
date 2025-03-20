import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaControlComponent } from './sa-control.component';

describe('SaControlComponent', () => {
  let component: SaControlComponent;
  let fixture: ComponentFixture<SaControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SaControlComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SaControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
