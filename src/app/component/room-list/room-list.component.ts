import {Component, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {RoomsService} from "../../service/rooms/rooms.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss']
})
export class RoomListComponent implements OnInit, OnChanges{
  constructor(private roomsService: RoomsService,
              private  router: Router,
              private  route: ActivatedRoute) {
  }
  roomList:any= [];
  @Output() loading= false;
  @Input() page: any;
  ngOnInit() {
    this.getAllRooms(2);
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.getAllRooms(this.page);
  }

  getAllRooms(page:any) {
    this.loading=true;
    this.roomsService.getAllRooms(page).subscribe(
      res => {
        // @ts-ignore
        this.roomList =res;
        this.loading=false;
      }
    )
  }
  viewRoomDetail(id:any) {
    this.router.navigateByUrl(`/room/${id}`)
  }



}
