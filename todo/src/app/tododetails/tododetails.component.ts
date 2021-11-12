import { Component, OnInit } from '@angular/core';
import { TodoserviceService } from '../todoservice.service';

@Component({
  selector: 'app-tododetails',
  templateUrl: './tododetails.component.html',
  styleUrls: ['./tododetails.component.css']
})
export class TododetailsComponent implements OnInit {
todo: any=[]

  constructor(private t:TodoserviceService) { }

  ngOnInit(): void {
    this.todo=this.t.getlist()
  }

}
