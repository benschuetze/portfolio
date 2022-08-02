import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from './models/message.class';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  private api = 'https://mailthis.to/BenjaminSchuetze'
  constructor(private _http: HttpClient) { }

  PostMessage(input: any) {
    return this._http.post(this.api, input, {responseType: 'text'}).pipe(
      map(
        (response) => {
          if (response) {
            return response;
          } else {
            return
          }
        },
        (error: any) => {
          return error;
        }
      )
    );
  }
}
