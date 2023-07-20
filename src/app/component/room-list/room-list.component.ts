import {Component, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {RoomsService} from "../../service/rooms/rooms.service";
import {ActivatedRoute, Router} from "@angular/router";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {HotelInfoComponent} from "../hotel-info/hotel-info.component";

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss']
})
export class RoomListComponent implements OnInit, OnChanges{
  constructor(private roomsService: RoomsService,
              private  router: Router,
              private  route: ActivatedRoute,
              private modalService: NgbModal) {
  }
  roomList:any= [];
  selectedHotel: any;
  @Output() loading= false;
  @Input() page: any=0;
  ngOnInit() {
    this.getAllHotels();
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.getAllHotels();
  }

  getAllHotels() {
    this.loading=true;
    this.roomsService.getAllHotels().subscribe(
      res => {
        // @ts-ignore
        this.roomList =res.slice(this.page, this.page+4);
        this.loading=false;
      }
    )
  }
  viewHotelInfo(id:any) {
    this.roomsService.viewHotelDetail(id).subscribe(
      res => {
        const modalRef = this.modalService.open(HotelInfoComponent);
        modalRef.componentInstance.hotel = res;
      }
    )

  }



}
