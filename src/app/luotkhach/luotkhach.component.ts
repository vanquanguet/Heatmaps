import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http'
import 'rxjs/add/operator/toPromise'
import { Jsonp } from '@angular/http/src/http';

@Component({
  selector: 'app-luotkhach',
  templateUrl: './luotkhach.component.html',
  styleUrls: ['./luotkhach.component.css']
})
export class LuotkhachComponent{
  luotkhach: Jsonp;
	constructor(private http: Http){
		this.http.get('http://localhost:4231/luotkhach')
		.toPromise()
		.then( res => res.json())
		.then( resjson => this.luotkhach = resjson)
		.catch(err=>console.log(err));
	}

}
