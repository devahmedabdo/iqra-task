import { Subscription } from 'rxjs';
import { CommonModule, NgClass } from '@angular/common';
import {
  Component,
  EventEmitter,
  forwardRef,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
  FormControl,
  Validators,
} from '@angular/forms';

import { ControlErrorComponent } from './control-error/control-error.component';
import { IconComponent } from '../icon/icon.component';
import { LoadingComponent } from "../loading/loading.component";
import { PhoneDirective } from '../../directives/phone.directive';

@Component({
  selector: 'sa-control',
  templateUrl: './sa-control.component.html',
  styleUrls: ['./sa-control.component.scss'],

  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SaControlComponent),
      multi: true,
    },
  ],
  standalone: true,
  imports: [ NgClass, FormsModule, ControlErrorComponent, IconComponent, LoadingComponent,PhoneDirective],
  encapsulation:ViewEncapsulation.None
})
export class SaControlComponent
  implements ControlValueAccessor, OnInit, OnDestroy
{
  @Input() control: any;
  get controlInput(): FormControl {
    return this.control as FormControl;
  }
  // errors
  @Input() errors: any = {};
  @Input() apiError: string = '';
  @Input() patternMessage!: string;
  // lable
  @Input() lable!: string;
  @Input() hint!: string;
  //
  @Input() transformer!: (value: any) => string;
  //
  @Input() name!: string;
  @Input() placeholder!: string;
  @Input() type: string = 'text';
  @Input() required: boolean = false;
  @Input() readonly!: boolean;
  @Input() autocomplete: string = 'off';
  @Input() min: any;
  @Input() max: any;
  @Input() rows: string = '2';
  @Output() focus = new EventEmitter<any>();
  //
  @Input() extra: boolean = false;
  @Output() extraClicked = new EventEmitter<any>();
  //
  @Input() external: boolean = false;

  @Input() extraClass: any = '';

  public value: string = '';
  public disabled!: boolean;

  subscription: Subscription[] = [];
  random: number = Math.trunc(Math.random() * 10000);

  ngOnInit(): void {
    setTimeout(() => {
      if (this.min !== undefined) {
        this.controlInput?.addValidators(Validators.min(this.min));
      }
      if (this.max !== undefined) {
        this.controlInput?.addValidators(Validators.max(this.max));
      }
      if (this.external && this.controlInput) {
        this.subscription.push(
          this.controlInput.valueChanges.subscribe((value: any) => {
            this.removeError();
          })
        );
      }
    });
  }

  writeValue(obj: any): void {
    this.value = obj || '';
  }
  public changed!: (value: string) => void;
  public touched!: () => void;

  onChange(event: any) {
    let value = event.target.value;
    if (this.transformer) {
      value = this.transformer(value);
    }
    this.value = value || '';
    this.changed(value);

    this.removeError();
  }
  removeError() {
    if (this.errors?.[this.apiError]) {
      this.errors[this.apiError] = null;
    }
  }
  registerOnChange(fn: any): void {
    this.changed = fn;
  }
  registerOnTouched(fn: any): void {
    this.touched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
  ngOnDestroy(): void {
    this.subscription.forEach((sub) => {
      sub.unsubscribe();
    });
  }
}
