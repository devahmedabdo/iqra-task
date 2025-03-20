import { Directive, ElementRef, HostListener, input } from '@angular/core';

@Directive({
  selector: '[appPhone]',
  standalone: true,
})
export class PhoneDirective {
  constructor(private el: ElementRef) {}
  appPhone = input<boolean>()
  @HostListener('input', ['$event'])
  onInputChange(event: Event) {
    if(this.appPhone()){ // because i am using sa-control
      let input = this.el.nativeElement.value.replace(/\D/g, '');  
  
      // +1 (XXX) XXX-XXXX
      if (input.length > 10) {
        input = `+${input.slice(0, 1)} (${input.slice(1, 4)}) ${input.slice(
          4,
          7
        )}-${input.slice(7, 11)}`;
      } else if (input.length > 6) {
        input = `(${input.slice(0, 3)}) ${input.slice(3, 6)}-${input.slice(6)}`;
      } else if (input.length > 3) {
        input = `(${input.slice(0, 3)}) ${input.slice(3)}`;
      }
      this.el.nativeElement.value = input;
    }
  }
}