import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatIconModule, MatInputModule, MatTableModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppBroadCastService } from './app.broadcast.service';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './add-user/edit-user/edit-user.component';
import { ViewUserComponent } from './add-user/view-user/view-user.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddUserComponent,
    EditUserComponent,
    ViewUserComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    GooglePlaceModule,
    MatTableModule,
    MatIconModule,
  ],
  providers: [
    AppBroadCastService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
