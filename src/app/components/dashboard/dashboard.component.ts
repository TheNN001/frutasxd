import { Component, OnInit } from '@angular/core';
import { catchError, EMPTY, tap } from 'rxjs';
import { FrutasService } from 'src/app/frutas/frutas.service';

@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  errorMessage = '';
  constructor(private frutasService: FrutasService) { }

  frutas$ = this.frutasService.frutas$;
}
