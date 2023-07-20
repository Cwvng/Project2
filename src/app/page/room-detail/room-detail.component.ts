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
  comments: any;
  constructor(private route: ActivatedRoute,
              private roomsService: RoomsService,
              private sharedService: SharedService) {
  }
  ngOnInit() {
    // @ts-ignore
    this.roomId = this.route.snapshot.paramMap.get('id');
    this.getRoomComment();

  }

  getRoomComment(){
    this.roomsService.getRoomComment(this.roomId).subscribe(
      res => {
        this.comments= res
      }
    )

  }
  formatPrice(price:number) {
      return Intl.NumberFormat('en-US', {
        style:"currency",
        currency:"VND",
      })
  }

  placeOrder(id:any) {
    if (!this.sharedService.user) {
      alert("Đăng nhập để đặt phòng");
    }
    else{
      let body ={
        room_id:id,
        checkin:"2030-2-2T20:46",
        checkout:"2030-4-2T20:46",
        nights: 0,
        duty: true,
        user_id: this.sharedService.user?.id
      }
      this.roomsService.placeOrder(body).subscribe(
        // @ts-ignore
        res=> alert(res.service_id),
        error => {
          alert("Xảy ra lỗi khi đặt phòng")
        }
      )
    }

  }

  protected readonly formatCurrency = formatCurrency;
}
