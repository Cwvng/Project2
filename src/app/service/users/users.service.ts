import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private URL = "http://localhost:8000/api/v1"

  constructor(private http: HttpClient) {
  }

  signIn(body: any) {
    return this.http.post(`${this.URL}/signin`, body);
  }

}
