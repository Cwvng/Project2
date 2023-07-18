import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {RoomsService} from "../../service/rooms/rooms.service";
import {formatCurrency} from "@angular/common";
import {SharedService} from "../../service/shared/shared.service";

@Component({
  selector: 'app-room-detail',
  templateUrl: './room-detail.component.html',
  styleUrls: ['./room-detail.component.scss']
})
export class RoomDetailComponent implements OnInit{
  room: any;
  roomId:any;
  constructor(private route: ActivatedRoute,
              private roomsService: RoomsService,
              private sharedService: SharedService) {
  }
  ngOnInit() {
    this.getSingleRoom();

  }
  getSingleRoom() {
    // @ts-ignore
    const id = +this.route.snapshot.paramMap.get('id');
    this.roomsService.getSingleRoom(id).subscribe(
      res =>
          this.room = res,
    )
  }
  formatPrice(price:number) {
      return Intl.NumberFormat('en-US', {
        style:"currency",
        currency:"VND",
      })
  }

  async placeOrder(id:any) {
    let body ={
      room_id:id,
      checkin:"2030-2-2T20:46",
      checkout:"2030-4-2T20:46",
      nights: 0,
      duty: true,
      user_id: this.sharedService.user.id
    }
    await this.roomsService.placeOrder(body).toPromise().then(
      // @ts-ignore
      res=> alert(res.service_id),
      error => {
        alert(error)
      }
    )
    console.log(body);
  }

  protected readonly formatCurrency = formatCurrency;
}
