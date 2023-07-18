import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RoomsService {
  private URL = "http://localhost:8000/api/v1"
  constructor(private http: HttpClient) { }
  getAllRooms(page: any) {
    return this.http.get(`${this.URL}/rooms?page=${page}`)
  }
  getSingleRoom(id:any) {
    return this.http.get(`${this.URL}/room/${id}`);
  }
  getRoomByFilter(children:any, adults:any, city:any) {
    return this.http.get(`${this.URL}/find_hotel?city=${city}&adults=${adults}&children=${children}`);
  }
  placeOrder(body:any) {
    return this.http.post(`${this.URL}/register_room`, body);

  }
}
