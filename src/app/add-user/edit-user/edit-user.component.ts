import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppBroadCastService } from  '../../app.broadcast.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  @Input() public userInformation;

  public personDetailForm: FormGroup;

  constructor(public router: Router, private fb: FormBuilder, private appbroadCastService: AppBroadCastService) {}

  ngOnInit() {
    console.log("parent");
    this.createForm();
    this.getUserInfo();
  }

  public getUserInfo() {
    this.appbroadCastService.viewUserInfo.subscribe((result) => {
      this.personDetailForm.patchValue({
        userName: result.userName,
        email: result.email,
        mobile: result.mobile,
        address: result.address,
      });
    })
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

  public backToHome() {
    this.router.navigate(["/view-user"]);
  }

}
