import { Component, Input, OnInit } from '@angular/core';
import { Fruta } from 'src/app/frutas/fruta';

@Component({
  selector: 'app-fruta-icon',
  templateUrl: './fruta-icon.component.html',
  styleUrls: ['./fruta-icon.component.scss']
})
export class FrutaIconComponent implements OnInit {
  @Input() frutaInfo: Fruta | undefined;
  constructor() { }

  ngOnInit(): void {

  }
}
