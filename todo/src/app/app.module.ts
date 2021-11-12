import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodolistComponent } from './todolist/todolist.component';
import { TododetailsComponent } from './tododetails/tododetails.component';
import { TodoserviceService } from './todoservice.service';

@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    TododetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
