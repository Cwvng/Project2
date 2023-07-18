import {Component, OnInit, ViewChild} from '@angular/core';
import {CityComponent} from "../../component/city/city.component";
import {SharedService} from "../../service/shared/shared.service";

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.scss']
})
export class ResultPageComponent implements OnInit{
  ngOnInit() {
    this.result = this.sharedService.resultSeacrh;
  }
  constructor(private sharedService: SharedService) {
  }
  result:any;
  protected readonly JSON = JSON;
}
