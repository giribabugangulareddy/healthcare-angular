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
    this.sourceData.push(this.sharedService.getDataSource())
    console.log('this.data', this.sourceData)

    this.sourceData.forEach(element => {
      console.log('element', element)
      this.basicfee = ((element.fee * 10) / 100)
      this.totalfee = Number(this.basicfee) + Number(element.fee)
      console.log('showfee', this.basicfee, this.totalfee)

    })
  }

  calculation() {

  }

}
