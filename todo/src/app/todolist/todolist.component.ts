import { Component, OnInit } from '@angular/core';
import { TodoserviceService } from '../todoservice.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  todo: any=[]


  constructor(private t:TodoserviceService) { }

  ngOnInit(): void {
    this.todo=this.t.getlist()
  }

}
