import { Routes } from '@angular/router';
import { IqraComponent } from './layouts/iqra/iqra.component';

export const routes: Routes = [
  {
    path: '',
    component: IqraComponent,
    children: [
      {
        path: '',
        pathMatch:'full',
        redirectTo: 'dynamic',
      },
      {
        path: 'dynamic',
        loadComponent: () =>
          import('./modules/dynamic/dynamic.component').then(
            (m) => m.DynamicComponent
          ),
      },
    ],
  },
];
