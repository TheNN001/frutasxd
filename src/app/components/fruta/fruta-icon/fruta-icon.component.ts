import { ViewportScroller } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Fruta } from 'src/app/frutas/fruta';

@Component({
  selector: 'app-fruta-icon',
  templateUrl: './fruta-icon.component.html',
  styleUrls: ['./fruta-icon.component.scss']
})
export class FrutaIconComponent {
  @Input() frutaInfo: Fruta | undefined;
  constructor(private scroller : ViewportScroller) { }

  frutaScroll(frutaId : number | undefined) : void {
    this.scroller.scrollToAnchor('frutaScrn' + frutaId);
  }
}
