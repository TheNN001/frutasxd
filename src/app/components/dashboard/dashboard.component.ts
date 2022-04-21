import { Component, OnInit } from '@angular/core';
import { catchError, EMPTY, tap } from 'rxjs';
import { Fruta } from 'src/app/frutas/fruta';
import { FrutasService } from 'src/app/frutas/frutas.service';

@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  errorMessage = '';
  frutaSel: Fruta[] | undefined
  frutas$ = this.frutasService.frutas$;
  frutaHoverBool: boolean = false;
  selectedFrutaNomb : string | undefined;
  selectedFrutaDesc : string | undefined;
  constructor(private frutasService: FrutasService) { }

  ngOnInit(): void {
    this.frutaHoverBool = false;
  }

  frutaHover(frutaId : number) {
    this.frutaHoverBool = !this.frutaHoverBool;
    this.frutaSel = this.frutas$.filter(frutaUni => frutaUni.fruta_id === frutaId)
  }
}
