import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectorRef, Component, forwardRef, inject, Input } from '@angular/core';
import {
  ControlValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

@Component({
  selector: 'selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectionComponent),
      multi: true,
    },
  ],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class SelectionComponent implements ControlValueAccessor, AfterViewInit {
  public value: any = '';
  @Input() type: 'switch' | 'checkbox' | 'radio' = 'switch';
  @Input() color: string = 'orange';
  @Input() colorOf: string = 'neutral-200';
  @Input() radio!: string;
  @Input() checked!: boolean;
  @Input() circle!: boolean;
  @Input() size: 'l' | 's' | 'xl' = 'l';
  @Input() name: string = 'slectionControl';
  random: number = Math.trunc(Math.random() * 10000);
  @Input() extraClass: string = '';  cdr = inject(ChangeDetectorRef);
  
  sizes: any = {
    s: '14',
    l: '18',
    xl: '22',
  };
  public disabled!: boolean;
  ngAfterViewInit(): void {
    if (
      (this.type === 'switch' || this.type === 'checkbox') &&
      this.value === ''
    ) {
      this.value = false;
      this.onChangeFn(this.value);
    }
      this.cdr.detectChanges();
  }

  writeValue(obj: any): void {
    this.value = obj;
  }
  public changed!: (value: any) => void;
  private onChangeFn: (value: any) => void = () => {};
  private onTouchedFn: () => void = () => {};

  touched(): void {
    this.onTouchedFn();
  }
  onChange(event: any) {
    let newValue;
    if (this.type === 'checkbox' || this.type === 'switch') {
      newValue = event.target.checked;
    } else if (this.type === 'radio') {
      newValue = this.radio;
    } else {
      newValue = event.target.value;
    }
    this.value = newValue;
    this.onChangeFn(newValue);
  }
  registerOnChange(fn: any): void {
    this.onChangeFn = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouchedFn = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
