import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppBroadCastService } from '../app.broadcast.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  public personDetailForm: FormGroup;

  public userInformation = [];

  public olduserInfo = "";

  constructor(public router: Router, private fb: FormBuilder, private appbroadCastService: AppBroadCastService) {}

  ngOnInit() {
    console.log("parent");
    this.createForm();
    this.getUserInfo();
  }

  public createForm() {
    this.personDetailForm = this.fb.group({
      userName: new FormControl("", Validators.required),
      email: new FormControl("", [Validators.required, Validators.email]),
      mobile: new FormControl("", Validators.required),
      address: new FormControl("", Validators.required),
      lattitude: new FormControl(12.34, Validators.required),
      longitude: new FormControl(11.56, Validators.required),
    });
  }

  public getUserInfo() {
    this.appbroadCastService.editUserInfo.subscribe((result) => {
      if (result !== undefined) {
        this.userInformation = result.userInfoArray;
        this.olduserInfo = result.currentObject;
        this.personDetailForm.patchValue({
          userName: result.currentObject.userName,
          email: result.currentObject.email,
          mobile: result.currentObject.mobile,
          address: result.currentObject.address,
        });
      }
    })
  }

  public backToHome() {
    this.router.navigate(["/home"]);
  }

  public onSaveClick() {
    this.router.navigate(["/view-user"]);
    const object = {
      currentObject: this.personDetailForm.getRawValue(),
      userInfoArray: this.userInformation
    }
    if (this.olduserInfo !== "") {
      object.currentObject['id'] = this.olduserInfo['id'];
    }
    this.appbroadCastService.pubUserInfo(object);
  }

}
