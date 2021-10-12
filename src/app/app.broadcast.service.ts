/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types */

/** Angular Modules */
import { Injectable } from "@angular/core";

/** rxjs */
import { BehaviorSubject, Subject } from "rxjs";

@Injectable()
export class AppBroadCastService {
    public personalDetail = new BehaviorSubject(undefined);
    public personalDetailFromChild = new BehaviorSubject(undefined);

    public userInfo = new BehaviorSubject(undefined);
    
    public viewUserInfo = new BehaviorSubject(undefined);
    
    public editUserInfo = new BehaviorSubject(undefined);

    public pubUserInfo(value): void {
        this.userInfo.next(value);
    }

    public pubViewUserInfo(value): void {
        this.viewUserInfo.next(value);
    }

    public pubEditUserInfo(value): void {
        this.editUserInfo.next(value);
    } 

    public pubPersonalDetail(value): void {
        this.personalDetail.next(value);
    }

    public pubPersonalDetailFromChild(value): void {
        this.personalDetailFromChild.next(value);
    }
}
