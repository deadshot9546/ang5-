
import { Injectable } from '@angular/core';

import {Http} from '@angular/http'
import "rxjs/add/operator/map"
@Injectable()
export class PlogService {

  constructor(private _http:Http ) { }

getPlog() 
{
  return this._http.get("https://newsapi.org/v2/top-headlines?country=eg&category=sports&apiKey=d34d49ce3a794aca80d1ae821239b0eb")
  .map( data => data.json() )
}  
getSinglePlog(id:number)
{

  return this._http.get("https://jsonplaceholder.typicode.com/posts/"+id)
  .map( data => data.json() )
}

getUsers()
{
  return [
      {name:'mai',age:25,id:'656560', salar:22656},
      {name:'ali',age:25,id:'656560', salar:22656},
      {name:'ali',age:25,id:'656560', salar:22656},
      {name:'ali',age:25,id:'656560', salar:22656},
      {name:'ali',age:25,id:'656560', salar:22656},
      {name:'ali',age:25,id:'656560', salar:22656},
      {name:'ali',age:25,id:'656560', salar:22656},
      
    ]
}



}
