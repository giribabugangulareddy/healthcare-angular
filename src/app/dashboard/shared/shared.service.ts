import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  public message:string;

  constructor() { }

  // data recived from create appointment component 
  setDataSource(data){
    console.log('dataaaaaa', data)
    this.message = data
  }


  // send the data to booking - summary component
  getDataSource(){

    return this.message
  }
}
