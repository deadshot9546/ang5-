import { Component, OnInit } from '@angular/core';

import {PlogService} from '../plog.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
})
export class HomeComponent implements OnInit {
hambozo:string ='web development';
salary:number = 65468548;
plog=[];
  constructor( private _service:PlogService) {
 this._service.getPlog()
 .subscribe( hambozo => this.plog = hambozo.articles )


   }

  ngOnInit() {
  }

}
