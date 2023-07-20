import {Component, OnInit, ViewChild} from '@angular/core';
import {CityComponent} from "../../component/city/city.component";
import {SharedService} from "../../service/shared/shared.service";
import {ActivatedRoute, Router} from "@angular/router";
import {RoomsService} from "../../service/rooms/rooms.service";

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.scss']
})
export class ResultPageComponent implements OnInit{
  ngOnInit() {
    let hotelId = this.route.snapshot.paramMap.get('id');
  }
  constructor(private sharedService: SharedService,
              private router: Router,
              private roomsService: RoomsService,
              private route: ActivatedRoute) {
  }
  roomList:any;

  viewHotelDetail(id:any) {
    this.router.navigateByUrl(`/room/${id}`)
  }
}
