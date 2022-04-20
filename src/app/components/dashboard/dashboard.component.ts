import { Component, OnInit } from '@angular/core';
import { catchError, EMPTY, tap } from 'rxjs';
import { FrutasService } from 'src/app/frutas/frutas.service';

@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  errorMessage = '';
  frutas$ = this.frutasService.frutas$;
  frutaHover: boolean = false;
  constructor(private frutasService: FrutasService) { }

  ngOnInit(): void {
    this.frutaHover = false;
  }
}
