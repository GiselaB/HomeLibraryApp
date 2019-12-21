import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient) {
  }

  public getBook(id: number): Observable<any> {
    return this.http.get<any>(`https://localhost:44356/api/books/${id}`);
  }
}
