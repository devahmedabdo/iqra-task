import { Component, input } from '@angular/core';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss',
})
export class IconComponent {
  path = input<string>('icons/icons.svg#');
  icon = input.required<string>();
  size = input<number>(24);
  width = input<number>(24);
  height = input<number>(24);
}
