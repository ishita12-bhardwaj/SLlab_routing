import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title='data'
  data:any
  link1="https://api.spacexdata.com/v3"
  linknew="https://api.spacexdata.com/v3/missions"

  constructor (private http:HttpClient) {

   }
   ngOnInit(): void {
     this.http.get(this.linknew).subscribe((responseData:any) =>{
       console.log(responseData)
       this.data=responseData;
     })
   }


}
