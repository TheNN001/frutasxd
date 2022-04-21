import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Fruta } from 'src/app/frutas/fruta';

@Component({
  selector: 'app-fruta-desc',
  templateUrl: './fruta-desc.component.html',
  styleUrls: ['./fruta-desc.component.scss']
})
export class FrutaDescComponent implements OnInit{
  @Input() frutaInfo: Fruta[] | undefined;
  frutaName : any;
  frutaDescription : any;
  constructor() { }

  ngOnInit(): void {
    this.frutaName = this.frutaInfo?.[0].fruta_name;
    this.frutaDescription = this.frutaInfo?.[0].fruta_desc;
  }
}
