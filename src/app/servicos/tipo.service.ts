import { Tipo } from './../models/tipo.models';
import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TipoService {

  urlBase: string = "http://localhost:8080/api/movies/tipo/" ;

  constructor(private http: HttpClient) { }

  getAll(): Observable<Tipo[]> {
    const url = `${this.urlBase}${'findall'}`
    let tipp: Observable<Tipo[]>;
     tipp = this.http.get<Tipo[]>(url);
    return tipp;
  }




}
