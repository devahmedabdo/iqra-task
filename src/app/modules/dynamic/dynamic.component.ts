import { AfterViewInit, ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { JsonPipe, NgTemplateOutlet } from '@angular/common';
import { Field, Validations } from '../../core/interfaces/schema';
import { EmailValidatorsService } from '../../core/validators/email.validators.';
import Swal from 'sweetalert2';
import { ApiService } from '../../core/services/api.service';
import { StorageService } from '../../core/services/storage.service';
@Component({
  selector: 'app-dynamic',
  standalone: true,
  imports: [SharedModule, ReactiveFormsModule, JsonPipe, NgTemplateOutlet],
  templateUrl: './dynamic.component.html',
  styleUrl: './dynamic.component.scss',
})
export class DynamicComponent implements OnInit, AfterViewInit {
  form: FormGroup = new FormGroup({});
  api = inject(ApiService);
  storage = inject(StorageService);
  cdr = inject(ChangeDetectorRef);
  fb = inject(FormBuilder);
  emailValidator = inject(EmailValidatorsService);
  json = this.api.json;
  ngOnInit(): void {
    this.form = this.buildForm(this.json);
    this.cdr.detectChanges()
  }
  ngAfterViewInit(): void {
    const cache = this.storage.getItem('cache');
    if (cache) {
      this.form.patchValue(cache);
      // Restore repeatable fields from storage
      Object.keys(cache).forEach((key) => {
        const control = this.form.get(key);
        if (control instanceof FormArray && Array.isArray(cache[key])) {
          this.restoreRepeatableField(key, cache[key]);
        }
      });
    }
  }
  setCashe() {
    this.storage.saveItem('cache', this.form.value);
  }
  buildForm(fields: Field[]): FormGroup {
    const group: any = {};
    fields.forEach((field) => {
      if (field.type === 'group') {
        group[field.name] = this.buildForm(field.fields!); // Recursively create nested group
      } else if (field.type === 'repeatable') {
        group[field.name] = this.fb.array([]);
      } else if (field.type === 'checkbox') {
        group[field.name] = this.fb.control(field.defaultValue || []);
      } else {
        group[field.name] = new FormControl(
          field.defaultValue,
          this.getValidators(field.validations),
          field.validations?.async ? this.emailValidator.userValidator() : []
        );
      }
    });
    return this.fb.group(group);
  }
  onCheckboxChange(
    event: Event,
    fieldName: string,
    value: string,
    group?: FormGroup
  ) {
    const checkbox = event.target as HTMLInputElement;
    const formGroup = group || this.form; // Use passed group if inside repeatable fields
    const selectedValues = formGroup.controls[fieldName].value as string[];
    if (checkbox.checked) {
      formGroup.controls[fieldName].setValue([...selectedValues, value]);
    } else {
      formGroup.controls[fieldName].setValue(
        selectedValues.filter((_value) => _value !== value)
      );
    }
  }
  restoreRepeatableField(fieldName: string, values: any[]): void {
    const formArray = this.getRepeatableField(fieldName);
    formArray.clear();
    values.forEach((value) => {
      const newGroup = this.fb.group({});
      Object.keys(value).forEach((subField) => {
        newGroup.addControl(subField, new FormControl(value[subField]));
      });
      formArray.push(newGroup);
    });
  }
  getValidators(validations: Validations = {}): any[] {
    const validators: any = [];
    if (validations?.required) validators.push(Validators.required);
    if (validations?.minLength)
      validators.push(Validators.minLength(validations.minLength));
    if (validations?.min) validators.push(Validators.min(validations.min));
    if (validations?.max) validators.push(Validators.max(validations.max));
    if (validations?.maxLength)
      validators.push(Validators.maxLength(validations.maxLength));
    if (validations?.email) validators.push(Validators.email);
    if (validations?.pattern)
      validators.push(Validators.pattern(validations?.pattern));
    return validators;
  }
  getRepeatableField(fieldName: string): any {
    return this.form.get(fieldName) as FormArray;
  }
  addRepeatableField(field: Field) {
    const fieldArray = this.getRepeatableField(field.name);
    const newGroup = this.fb.group({});
    field.fields?.forEach((subField) => {
      newGroup.addControl(
        subField.name,
        new FormControl(
          subField.defaultValue || '',
          this.getValidators(subField.validations)
        )
      );
    });
    fieldArray.push(newGroup);
    this.setCashe();
  }
  removeRepeatableField(fieldName: string, index: number) {
    this.getRepeatableField(fieldName).removeAt(index);
    this.setCashe();
  }
  onSubmit(): void {
    Swal.fire({
      title: 'Done',
      text: 'We recived your application',
      icon: 'success',
      confirmButtonColor: 'var(--orange-500)',
    });
  }
}
