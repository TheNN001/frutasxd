import { Component, Input, OnInit } from '@angular/core';
import { Fruta } from 'src/app/frutas/fruta';

@Component({
  selector: 'app-fruta-screen',
  templateUrl: './fruta-screen.component.html',
  styleUrls: ['./fruta-screen.component.scss']
})
export class FrutaScreenComponent implements OnInit {
  @Input() frutaInfo : Fruta | undefined; 
  constructor() { }

  ngOnInit(): void {
  }
}
