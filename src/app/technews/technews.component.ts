import { Component, OnInit } from '@angular/core';
import {NewsapiserviceComponent} from '../services/newsapiservice/newsapiservice.component'
@Component({
  selector: 'app-technews',
  templateUrl: './technews.component.html',
  styleUrls: ['./technews.component.css']
})
export class TechnewsComponent implements OnInit {

  constructor(private _services:NewsapiserviceComponent) { }
  techHeading:any=[]

  ngOnInit(): void {
    this._services.techNews().subscribe((result)=>{
      console.log(result)
this.techHeading = result.articles;
    });
  }

}
