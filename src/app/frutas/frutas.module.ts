import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrutaScreenComponent } from '../components/fruta/fruta-screen/fruta-screen.component';
import { FrutaIconComponent } from '../components/fruta/fruta-icon/fruta-icon.component';



@NgModule({
  declarations: [
    FrutaScreenComponent,
    FrutaIconComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FrutaScreenComponent,
    FrutaIconComponent
  ]
})
export class FrutasModule { }
