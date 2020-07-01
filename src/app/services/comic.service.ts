import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Comic } from 'src/app/interfaz/comic.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComicService {

  backURL = 'http://localhost:3000/api/comics';

  constructor(private http: HttpClient) { }

  getComic(){
    return this.http.get(`/${Math.floor((Math.random() * 100) + 1)}/info.0.json`).pipe(res => res);
  }

  sendScore(QComic: Comic){
    let options = { headers: new HttpHeaders({ "Content-Type": "application/json" })};
    return this.http.post(`${this.backURL}/create`, QComic, options).pipe(res => res);
  }
}
