import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Comment} from "../../model/comment/comment";
@Injectable({
  providedIn: 'root'
})
export class RoomsService {
  private URL = "http://localhost:8000/api/hotels"
  constructor(private http: HttpClient) { }
  getAllHotels() {
    return this.http.get(`${this.URL}/`)
  }


  viewHotelDetail(id:any) {
    return this.http.get(`${this.URL}/find/${id}`);
  }



  getRoomByFilter(children:any, adults:any, city:any) {
    return this.http.get(`${this.URL}/find_hotel?city=${city}&adults=${adults}&children=${children}`);
  }
  placeOrder(body:any) {
    return this.http.post(`${this.URL}/register_room`, body);

  }
  getRoomComment(id:any) {
    return this.http.get<Comment>(`${this.URL}/get_room_comment?room_id=${id}`);
  }
}
