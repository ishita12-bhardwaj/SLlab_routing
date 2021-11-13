import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodolistComponent } from './todolist/todolist.component';
import { TododetailsComponent } from './tododetails/tododetails.component';
import { TodoserviceService } from './todoservice.service';
import { HttpClientModule } from '@angular/common/http';
import { SpaceXComponent } from './space-x/space-x.component';


@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    TododetailsComponent,
    SpaceXComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
