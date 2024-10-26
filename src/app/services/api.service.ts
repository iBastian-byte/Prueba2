import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Root {
  userId: number
  id: number
  title: string
  body: string
}

@Injectable({
  providedIn: 'root'
})
export class APIService {
  private url = 'https://jsonplaceholder.typicode.com/posts/'

  constructor(
    private http : HttpClient
  ) { }

  obtenerInfo(): Observable <Root[]>{
    return this.http.get<Root[]>(this.url);
  }
}
