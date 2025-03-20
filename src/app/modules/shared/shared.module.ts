import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnComponent } from './components/btn/btn.component';
import { IconComponent } from './components/icon/icon.component'; 
import { SaControlComponent } from './components/sa-control/sa-control.component';
import { SelectionComponent } from './components/selection/selection.component';
import { LoadingComponent } from './components/loading/loading.component'; 

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BtnComponent,
    LoadingComponent,
    IconComponent, 
    SaControlComponent,
    SelectionComponent, 
  ],
  exports: [
    BtnComponent,
    IconComponent,
    LoadingComponent,
    SaControlComponent,
    SelectionComponent,
  ],
})
export class SharedModule {}
