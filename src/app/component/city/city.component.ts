import {Component} from '@angular/core';
import {RoomsService} from "../../service/rooms/rooms.service";
import {Router} from "@angular/router";
import {SharedService} from "../../service/shared/shared.service";

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent {
  constructor(private roomsService: RoomsService,
              private router: Router,
              private sharedService: SharedService) {
  }


  async searchBy(city: any) {
    await this.roomsService.getRoomByFilter(0, 0, city).toPromise().then(
      res =>{
        this.sharedService.resultSeacrh = res;
        this.router.navigateByUrl('/result')
      }
    )

  }

}
