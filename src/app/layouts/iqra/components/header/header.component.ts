import { Component } from '@angular/core';
import { ThemeBtnComponent } from './theme-btn/theme-btn.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports:[ThemeBtnComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {

}
