import { Injectable } from '@angular/core';
import {Http} from '@angular/http'
import 'rxjs/add/operator/map'

@Injectable()
export class NewsService {

  constructor(private _http:Http){
    
  } 

  getNews(){
    return this._http.get("https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=78fb5a2bba054763a1bde88d86198c51")
    .map( _data=>_data.json() )

  }

  getUser():object[]{

    return[
      {name:"ahmed",age:25,collage:"CS"},
      {name:"ahmed",age:25,collage:"CS"},
      {name:"ahmed",age:25,collage:"CS"},
      {name:"ahmed",age:25,collage:"CS"}
    ]
  }



}
