import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpRequest,
  HttpHeaders,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class UploadFileService {
  private baseUrl = 'http://localhost:8082';
  constructor(private http: HttpClient) {}

  upload(file: File, content: string, hyperlink: string, userName: string) {
    const formData: FormData = new FormData();

    formData.append('file', file);
    formData.append('content', content);
    formData.append('hyperlink', hyperlink);

    const req = new HttpRequest(
      'POST',
      `${this.baseUrl}/user/${userName}/upload`,
      formData,
      {
        responseType: 'json',
      }
    );
    return this.http.request(req);
  }

  getFiles(): Observable<any> {
    return this.http.get(`${this.baseUrl}/files`);
  }
}
