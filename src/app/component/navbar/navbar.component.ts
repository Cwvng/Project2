import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {SharedService} from "../../service/shared/shared.service";
import {UsersService} from "../../service/users/users.service";
import {Router} from "@angular/router";
import {EditComponent} from "../edit/edit.component";

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
  edit() {
    const modalRef = this.modalService.open(EditComponent);
  }
  signOut() {
    this.sharedService.user = [];
    localStorage.removeItem("user");
    this.route.navigateByUrl("/signin");
  }
}
