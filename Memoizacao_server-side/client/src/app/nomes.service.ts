import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NomesService {

  constructor(private http: HttpClient) { }

  getNomes(): Observable<string[]>{
    return <Observable<string[]>>this.http
      .get('http://localhost:3000/nomes');
  }
}
