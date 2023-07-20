import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private URL = "http://localhost:8000/api/auth"

  constructor(private http: HttpClient) {
  }

  signIn(body: any) {
    return this.http.post(`${this.URL}/login`, body);
  }
  updateUser(body:any) {
    return this.http.post(`${this.URL}/update_user`, body);
  }
}
