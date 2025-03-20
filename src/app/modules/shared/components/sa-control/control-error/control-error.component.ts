import { CommonModule, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'control-error',
  templateUrl: './control-error.component.html',
  styleUrls: ['./control-error.component.scss'],
  standalone: true,
  imports: [NgIf ],
})
export class ControlErrorComponent {
  @Input() apiError: string = '';
  @Input() control: any;
  @Input() errors: any = {};
  @Input() patternMessage!: string;
}
