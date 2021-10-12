/** Angular Modules */
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AddUserComponent } from "./add-user/add-user.component";
import { ViewUserComponent } from "./add-user/view-user/view-user.component";
import { EditUserComponent } from "./add-user/edit-user/edit-user.component";

const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "home", component: HomeComponent },
    { path: "add-user", component: AddUserComponent },
    { path: "view-user", component: ViewUserComponent },
    { path: "edit-user", component: EditUserComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
