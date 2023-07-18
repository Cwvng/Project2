import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {RoomListComponent} from "../../component/room-list/room-list.component";
import {SharedService} from "../../service/shared/shared.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit{
  page = 1;
  constructor(private sharedService: SharedService) {
  }
  ngOnInit() {
    this.sharedService.user= localStorage.getItem("user");
  }

  nextPage() {
    this.page+=1;
  }
  backPage() {
    if(this.page > 1) this.page-=1;
  }
}
