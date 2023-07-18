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
    email: new FormControl(''),
    password: new FormControl(''),
  });
  signIn() {
    console.warn(this.signInForm.value.password);
    this.usersService.signIn(this.signInForm.value).subscribe(
      res => {
        // @ts-ignore
        this.sharedService.setUser(res.user);
        // @ts-ignore
        this.sharedService.user = res.user;
        this.route.navigateByUrl("");
        alert("Đăng nhập thành công")
      },
      err => {
        alert("Đăng nhập không thành công")
      }
    )

  }
}
