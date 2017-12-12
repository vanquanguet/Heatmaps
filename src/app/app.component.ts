import { Component } from '@angular/core';
import { Http, Response } from '@angular/http'
import { Jsonp } from '@angular/http/src/http';
import 'rxjs/add/operator/map'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private apiURL = 'http://localhost:4231/heatmap';
  data: any ={};

  constructor (private http: Http){
    this.getContacts();
    this.getData();
  }
  getData(){
    return this.http.get(this.apiURL)
    .map( (res: Response) => res.json())
  }
  getContacts(){
    this.getData().subscribe(data => {
      this.data = data
    })
  }
}
