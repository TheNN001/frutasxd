import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Fruta } from './fruta';
import { catchError, Observable, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FrutasService {
  constructor(private http: HttpClient) { }

  frutas$ = [
    {
      "fruta_id": 1,
      "fruta_name": "Manzana",
      "fruta_img_link": "https://i.ibb.co/yqqQbjR/appl.png",
      "fruta_color": "#d56b5e",
      "fruta_desc": "Fruto del manzano, comestible, de forma redondeada y algo hundida por los extremos, piel fina, de color verde, amarillo o rojo, carne blanca y jugosa, de sabor dulce o ácido, y semillas en forma de pepitas encerradas en una cápsula de cinco divisiones."
    },
    {
      "fruta_id": 2,
      "fruta_name": "Banano",
      "fruta_img_link": "https://i.ibb.co/KKSJZGg/banana.png",
      "fruta_color": "#ffe883",
      "fruta_desc": "Fruto del bananero, comestible, de forma alargada y algo curvada, pulpa de color blanquecina y piel lisa de color amarillo que se desprende con facilidad."
    },
    {
      "fruta_id": 3,
      "fruta_name": "Kiwi",
      "fruta_img_link": "https://i.ibb.co/XVXzDQQ/kiwi.png",
      "fruta_color": "#b7cc66",
      "fruta_desc": "Fruto de este arbusto, comestible, de forma ovalada, piel delgada y vellosa, de color verde pardusco y pulpa jugosa, de color verde brillante y con diminutas semillas dispuestas en torno a un corazón blanco."
    },
    {
      "fruta_id": 4,
      "fruta_name": "Naranja",
      "fruta_img_link": "https://i.ibb.co/M703ZRg/orang.png",
      "fruta_color": "#E79726",
      "fruta_desc": "Fruto del naranjo, comestible, de forma redonda, cáscara gruesa y rugosa y pulpa dividida en gajos, agridulce y muy jugosa."
    },
    {
      "fruta_id": 5,
      "fruta_name": "Pera",
      "fruta_img_link": "https://i.ibb.co/D70nFRT/pear.png",
      "fruta_color": "#e3dd6c",
      "fruta_desc": "Fruto del peral, comestible, de color verde, amarillo o encarnado, ancho por la parte de abajo y delgado por la de arriba (donde tiene el pedúnculo), de piel fina y pulpa blanca, muy jugosa, sabor dulce y, en el centro, unas semillas pequeñas de color negro."
    },
    {
      "fruta_id": 6,
      "fruta_name": "Fresa",
      "fruta_img_link": "https://i.ibb.co/n8dCcdk/straw.png",
      "fruta_color": "#ef8b8e",
      "fruta_desc": "Fruto de esta planta, redondo, carnoso y dulce, de color rojo escarlata, con pequeñas semillas negras o amarillas en la superficie."
    }
  ]
  
  
  //this.http.get<Fruta[]>('/src/api/frutas.json').pipe(
  //  tap((data) => console.log('Frutas', JSON.stringify(data))),
  //  catchError(this.handleError)
  //)

  private handleError(err: HttpErrorResponse): Observable<never> {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.message}`;
    }
    console.error(err);
    return throwError(() => errorMessage);
  }
}
