import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  public message:string;

  constructor() { }

  // 
  setDataSource(data){
    console.log('dataaaaaa', data)
    this.message = data
  }


  getDataSource(){

    return this.message
  }
}
