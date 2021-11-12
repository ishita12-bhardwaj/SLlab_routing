import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoserviceService {
  tododetails=[
    {"name":"Ishita" ,"rollno":42, "age":20},
    {"name":"Ankit" ,"rollno":12, "age":22},
    {"name":"Priyanshi" ,"rollno":30, "age":16}
  ]
  getlist(){
    return this.tododetails
  }

  constructor() { }
}
