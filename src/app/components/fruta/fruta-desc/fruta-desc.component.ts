import { Component, Input } from '@angular/core';
import { Fruta } from 'src/app/frutas/fruta';

@Component({
  selector: 'app-fruta-desc',
  templateUrl: './fruta-desc.component.html',
  styleUrls: ['./fruta-desc.component.scss']
})
export class FrutaDescComponent {
  @Input() frutaInfo: Fruta | undefined;
  constructor() { }
}
