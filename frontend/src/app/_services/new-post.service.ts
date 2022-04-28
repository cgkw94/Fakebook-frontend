import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NewPostService {
  PATH_OF_API = 'http://localhost:8082';

  constructor(private httpclient: HttpClient) {}
}
