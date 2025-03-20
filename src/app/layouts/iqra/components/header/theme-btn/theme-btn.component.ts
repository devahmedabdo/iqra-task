import { Component, ViewEncapsulation } from '@angular/core';
import { BtnComponent } from '../../../../../modules/shared/components/btn/btn.component';
import { IconComponent } from '../../../../../modules/shared/components/icon/icon.component';

@Component({
  selector: 'theme-btn',
  standalone: true,
  imports: [BtnComponent, IconComponent],
  templateUrl: './theme-btn.component.html',
  styleUrl: './theme-btn.component.scss',
  encapsulation:ViewEncapsulation.None
})
export class ThemeBtnComponent {
  changeTheme() {
    let isDark: boolean = document.body.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'light' : 'dark');
    document.body.classList.toggle('dark');
  }
}
