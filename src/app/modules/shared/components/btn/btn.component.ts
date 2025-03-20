import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LoadingComponent } from '../loading/loading.component';

@Component({
  selector: 'btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.scss'],
  standalone: true,
  imports: [LoadingComponent],
})
export class BtnComponent {
  @Input() classes: string = 'orange';
  @Input() role: string = 'button';
  @Input() loading: boolean = false;
  @Input() disabled: boolean | null = false;
  @Output() clicked: EventEmitter<any> = new EventEmitter<any>();
}
