import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-booking-summary',
  templateUrl: './booking-summary.component.html',
  styleUrls: ['./booking-summary.component.css']
})
export class BookingSummaryComponent implements OnInit {

  constructor(private sharedService: SharedService) { console.log('this.data', this.sharedService) }

  sourceData = [];
  public basicfee;
  public totalfee;
  ngOnInit(): void {

    // push the getDataSource from shared service

    this.sourceData.push(this.sharedService.getDataSource())

    console.log('this.data', this.sourceData)

    // Booking charges calculate 10% on doctor fee 
    this.sourceData.forEach(element => {
      
      this.basicfee = ((element.fee * 10) / 100)
      this.totalfee = Number(this.basicfee) + Number(element.fee)
    

    })
  }

 

}
