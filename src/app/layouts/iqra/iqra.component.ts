import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-iqra',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './iqra.component.html',
  styleUrl: './iqra.component.scss',
})
export class IqraComponent {}
