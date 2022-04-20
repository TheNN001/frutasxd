import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrutaScreenComponent } from '../components/fruta/fruta-screen/fruta-screen.component';
import { FrutaIconComponent } from '../components/fruta/fruta-icon/fruta-icon.component';
import { FrutaDescComponent } from '../components/fruta/fruta-desc/fruta-desc.component';

@NgModule({
  declarations: [
    FrutaScreenComponent,
    FrutaIconComponent,
    FrutaDescComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FrutaScreenComponent,
    FrutaIconComponent,
    FrutaDescComponent
  ]
})
export class FrutasModule { }
