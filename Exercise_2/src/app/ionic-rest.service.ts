import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IonicRestService {

  constructor(private req: HttpClient ) { }

  http() {
    return this.req.get("https://jsonplaceholder.typicode.com/posts");
  }
}
