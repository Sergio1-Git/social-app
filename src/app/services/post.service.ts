import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../interfaces/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  apiUrl: string = "https://localhost:44327/api/post";

  constructor(private http: HttpClient) { }

  getArticulos(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }

  getArticulo(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  deleteArticulos(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  addArticulo(post: Post): Observable<Post[]> {
    return this.http.post<Post[]>(`${this.apiUrl}`, post);
  }

  updateArticulo(id: number, post: Post): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, post);
  }
}
