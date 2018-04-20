import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PlogService} from '../plog.service'
@Component({
  selector: 'app-single-plog',
  templateUrl: './single-plog.component.html',
  styleUrls: ['./single-plog.component.css']
})
export class SinglePlogComponent implements OnInit {


  articleID:number;

  title:string;
  urlToImage:string;
  description:string;
  singleArticle:object;
  
  constructor(private _actv:ActivatedRoute , private _service:PlogService) { 

    this.articleID =   this._actv.snapshot.params['id'];
    
    this._service.getSinglePlog(this.articleID).subscribe(data => this.singleArticle = data)
    
    this._service.getPlog().subscribe(data =>{
      
   this.title=   data.articles[this.articleID].title;
    this.description = data.articles[this.articleID].description;
    this.urlToImage =  data.articles[this.articleID].urlToImage;
    })
  }

  ngOnInit() {
  }

}
