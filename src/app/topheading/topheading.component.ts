import { Component, OnInit } from '@angular/core';
import {NewsapiserviceComponent} from '../services/newsapiservice/newsapiservice.component'
@Component({
  selector: 'app-topheading',
  templateUrl: './topheading.component.html',
  styleUrls: ['./topheading.component.css']
})
export class TopheadingComponent implements OnInit {

  constructor(private _services:NewsapiserviceComponent) { }
  topHeadingDisplay:any=[];

  ngOnInit(): void {
    this._services.topHeading().subscribe((result)=>{
console.log(result);
this.topHeadingDisplay = result.articles;
    });
  }

}
