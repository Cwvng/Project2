import { Component } from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {FormControl, FormGroup} from "@angular/forms";
import {SharedService} from "../../service/shared/shared.service";
import {UsersService} from "../../service/users/users.service";
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {
  user:any
  constructor(public activeModal: NgbActiveModal,
              private sharedService: SharedService,
              private userService: UsersService) {
    this.user = this.sharedService.user;}
  updateForm =new FormGroup({
    username: new FormControl(this.sharedService.user.username),
    email: new FormControl(this.sharedService.user.email),
    password: new FormControl(this.sharedService.user.password),
  })

  async update(){
    let body = {
      // user_id: this.sharedService.user.id,
      username: this.updateForm.value.username,
      password: this.updateForm.value.password,
      email: this.updateForm.value.email
    }
    console.log(body);
    await this.userService.updateUser(body).toPromise().then(
      res=>
        //@ts-ignore
        alert(res.detail)
    )
  }
}
