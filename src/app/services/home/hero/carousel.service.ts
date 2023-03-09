import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarouselService {
  url:string = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) { }

  getSlides() {
    return this.http.get(this.url + '/images');
  }
}
