import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() {

  }
  resultSeacrh: any;
  isLogin:any;
  user:any;
  setUser(user:any) {
    localStorage.setItem("user",JSON.stringify(user));
    this.isLogin= true;
   }
  removeUser() {
    localStorage.removeItem("user");
    this.isLogin=false;
  }
}
