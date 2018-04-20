import { Component, OnInit } from '@angular/core';

import {PlogService} from '../plog.service'

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {


  users=[];
  constructor(private _service:PlogService) { 


    this.users = this._service.getUsers();
  }

  ngOnInit() {
  }

}
