import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicComponent } from './dynamic.component';
import { ReactiveFormsModule, FormArray } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { EmailValidatorsService } from '../../core/validators/email.validators.';
import { StorageService } from '../../core/services/storage.service';

describe('DynamicComponent', () => {
  let component: DynamicComponent;
  let fixture: ComponentFixture<DynamicComponent>;
  let emailValidatorSpy: jasmine.SpyObj<EmailValidatorsService>;
  let storageSpy: jasmine.SpyObj<StorageService>;

  
 beforeEach(async () => {
   emailValidatorSpy = jasmine.createSpyObj('EmailValidatorService', [
     'userValidator',
   ]);
   storageSpy = jasmine.createSpyObj('StorageService', ['getItem','saveItem']);

   await TestBed.configureTestingModule({
     imports: [ReactiveFormsModule, DynamicComponent],
     providers: [
       { provide: emailValidatorSpy, useValue: emailValidatorSpy },
       { provide: storageSpy, useValue: storageSpy },
     ],
   }).compileComponents();
 });

 beforeEach(() => {
   fixture = TestBed.createComponent(DynamicComponent);
   component = fixture.componentInstance;
   fixture.detectChanges();
 });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should build the form dynamically based on JSON structure', () => {
    component.json = [
      {
        name: 'firstName',
        label: 'First Name',
        type: 'text',
        validations: { required: true },
      },
      {
        name: 'email',
        type: 'text',
        label: 'Email',
        validations: { required: true, async: 'email' },
      },
    ];
    component.ngOnInit();

    expect(component.form.contains('firstName')).toBeTrue();
    expect(component.form.contains('email')).toBeTrue();
  });

  it('should apply validation rules correctly', () => {
    component.json = [
      {
        name: 'email',
        label: 'Email',
        type: 'text',
        validations: { required: true, email: true },
      },
    ];
    component.ngOnInit();

    const emailControl = component.form.get('email');
    emailControl?.setValue('invalid-email');

    expect(emailControl?.valid).toBeFalse();
  });

  it('should handle repeatable fields correctly', () => {
    const field =  {
        name: 'addresses',
        type: 'repeatable',
        label: 'Email',
        fields: [{ name: 'street', label: 'Street', type: 'text' }],
      } 
    component.json = [field];
    component.ngOnInit();

    component.addRepeatableField(field);
    fixture.detectChanges();

    const formArray = component.getRepeatableField('addresses') as FormArray;
    expect(formArray.length).toBe(1);
  });

  it('should save and restore cache properly', () => {
    component.json = [
      {
        name: 'firstName',
        label: 'firstName',
        type: 'text',
      },
      {
        name: 'email',
        label: 'email',
        type: 'email',
      },
    ];
    const mockData = { firstName: 'John', email: 'john@example.com' };
    localStorage.setItem('cache', JSON.stringify(mockData));
    
    component.ngOnInit();
    component.ngAfterViewInit();

    expect(component.form.value).toEqual(mockData);
  });

  it('should disable the submit button when the form is invalid', () => {
    component.json = [
      { name: 'email',label:'Email', type: 'text', validations: { required: true } },
    ];
    component.ngOnInit();
    fixture.detectChanges();

    const submitButton = fixture.debugElement.query(By.css('button'));
    expect(submitButton.nativeElement.disabled).toBeTrue();
  });
});
