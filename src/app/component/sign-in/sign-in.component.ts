import {Component, Input} from '@angular/core';
import {NgbActiveModal, NgbAlert} from "@ng-bootstrap/ng-bootstrap";
import {FormControl, FormGroup} from '@angular/forms';
import {UsersService} from "../../service/users/users.service";
import {Router} from "@angular/router";
import {SharedService} from "../../service/shared/shared.service";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  bgColor = 'lightblue';
  constructor(
              private usersService: UsersService,
              private route: Router,
              public sharedService: SharedService) {}
  signInForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  signIn() {
    this.usersService.signIn(this.signInForm.value).subscribe(
      res => {
        // @ts-ignore
        this.sharedService.setUser(res.user);
        // @ts-ignore
        this.sharedService.user = res.details;
        this.route.navigateByUrl("");
      },
      err => {
        alert("Đăng nhập không thành công")
      }
    )

  }
}
