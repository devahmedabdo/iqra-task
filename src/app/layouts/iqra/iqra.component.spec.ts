import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IqraComponent } from './iqra.component';

describe('IqraComponent', () => {
  let component: IqraComponent;
  let fixture: ComponentFixture<IqraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IqraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IqraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
