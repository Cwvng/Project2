import { Component } from '@angular/core';
import {RoomsService} from "../../service/rooms/rooms.service";

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.scss']
})
export class TypeComponent {
  constructor(private roomsService: RoomsService) {
  }
  result:any;
  searchBy(city:any) {
    this.roomsService.getRoomByFilter(0,0,city).subscribe(
      res=> this.result = res
    )
  }
}
