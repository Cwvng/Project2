import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {SignInComponent} from "../sign-in/sign-in.component";
import {SharedService} from "../../service/shared/shared.service";
import {UsersService} from "../../service/users/users.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{
  @Input() bgColor:any;
  @Input() user:any;
  constructor(private modalService: NgbModal,
              public sharedService: SharedService,
              private usersService: UsersService,
              public route: Router) {
  }




  ngOnInit() {
  }

  signOut() {
    this.sharedService.user = [];
    localStorage.removeItem("user");
    this.route.navigateByUrl("/signin");
  }
}
