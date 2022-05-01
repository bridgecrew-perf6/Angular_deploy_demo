import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { TopheadingComponent } from '../../topheading/topheading.component';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-newsapiservice',
  templateUrl: './newsapiservice.component.html',
  styleUrls: ['./newsapiservice.component.css']
})
export class NewsapiserviceComponent implements OnInit {

  constructor(private _http:HttpClient) { }
newsapi = "https://newsapi.org/v2/top-headlines?country=us&apiKey=fbf0d2dbfe79410a9d6d603a81535081";
//techapiurl
techapiurl =  "https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=fbf0d2dbfe79410a9d6d603a81535081";
  ngOnInit(): void {
  }
  //topHeading()
topHeading():Observable<any>
{
return this._http.get(this.newsapi)
}
techNews():Observable<any>
{
  return this._http.get(this.techapiurl)
}
}
