import {Component, ViewChild,OnInit} from '@angular/core';
import { findIndex, splice, remove } from 'lodash'
import {MatTableDataSource} from '@angular/material/table';
import { AppBroadCastService } from  '../../app.broadcast.service';
import { Router } from '@angular/router';
import { element } from 'protractor';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {

  displayedColumns = ['userName', 'email', 'mobile', 'address', 'edit', 'view', 'delete'];

  public isEditClicked = false;

  public isViewClicked = false;

  public userData;

  public userInformation: any = [
    {
      id: 1,
      userName: 'Poonkundran',
      email: 'poonkundran1997@gamil.com',
      mobile: '7904890627',
      address: 'xxx, 21, chennai',
    },
    {
      id: 2,
      userName: 'Nandhu',
      email: 'nandhu997@gamil.com',
      mobile: '7904890627',
      address: 'xxx, 21, chennai',
    },
  ];

  public dataSource = new MatTableDataSource(this.userInformation);

  constructor(private appbroadCastService: AppBroadCastService, public router: Router) { }

  ngOnInit() {
    this.dataSource = this.userInformation;
    this.getUserInfo();
  }

  public getUserInfo() {
    this.appbroadCastService.userInfo.subscribe((result) => {
      if (result !== undefined) {
        console.log(result, "result");
        if (result.currentObject && result.currentObject.id !== undefined) {
          this.userInformation = result.userInfoArray;
          this.userInformation.find((element, index) => {
            if (element.id === result.currentObject.id) {
              this.userInformation[index].id = result.currentObject.id;
              this.userInformation[index].userName = result.currentObject.userName;
              this.userInformation[index].email = result.currentObject.email;
              this.userInformation[index].mobile = result.currentObject.mobile;
              this.userInformation[index].address = result.currentObject.address;
            }
          });
          this.dataSource = this.userInformation;
        } else {
          result.currentObject.id = this.userInformation.length + 1;
          this.userInformation.push(result.currentObject);
          this.dataSource = this.userInformation;
        }
      }
    });
  }

  public backToEdit() {
    const emptyObj = {
      userName: '',
      email: '',
      mobile: '',
      address: '',
    };
    const object = {
      currentObject: emptyObj,
      userInfoArray: this.userInformation
    }
    this.router.navigate(["/add-user"]);
    this.appbroadCastService.pubEditUserInfo(object);
  }

  public onEditClick(data) {
    this.router.navigate(["/add-user"]);
    const object = {
      currentObject: data,
      userInfoArray: this.userInformation
    }
    this.appbroadCastService.pubEditUserInfo(object);
  }

  public onViewClick(data) {
    this.router.navigate(["/edit-user"]);
    this.appbroadCastService.pubViewUserInfo(data);
  }

  public onDelteClick(data) {
    const arr = this.dataSource;
    remove(arr, (element) => {
      return element.id === data.id;
    });
    this.userInformation = arr;
    this.dataSource = new MatTableDataSource(this.userInformation);
  }

}
