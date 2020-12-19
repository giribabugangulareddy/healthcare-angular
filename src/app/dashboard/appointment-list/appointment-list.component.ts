import { Component, OnInit } from '@angular/core';

// declaration table header name
export interface PeriodicElement {
  sno:number;
  Doctor: string;
  Patient: string;
  Date: string;
  Timing: string;
  Contact:number;
}

// static data of appoinment table 
const ELEMENT_DATA: PeriodicElement[] = [
  {sno:1,Patient: 'Lily Wozniak', Doctor: 'Alfie Wood', Date: '12 Sep 2020', Timing: '10:30 AM', Contact:98765432},
  {sno:2,Patient: 'Samuel Path', Doctor: 'Dr.Nwoye', Date: '18 Sep 2020', Timing: '11:00 AM',Contact:98765432},
  {sno:3,Patient: 'Mia Mai', Doctor: ' Dr.Kita Chihoko', Date: '18 Feb 2020', Timing: '11:30 AM',Contact:98765432},
  {sno:4,Patient: 'Herman Beck', Doctor: 'Beryllium', Date: '12 Sep 2020', Timing: '09:00 AM', Contact:98765432},
  {sno:5,Patient: 'Nik Jordan', Doctor: 'Dr.Herman Beck', Date:'17 Sep 2020', Timing: '11:00 AM', Contact:98765432},
  {sno:6,Patient: 'Mia Mai', Doctor: 'Alfie Wood', Date:'18 Aug 2020', Timing: '12:00 PM', Contact:98765432},
  {sno:7,Patient: 'Herman Beck', Doctor: 'Beryllium', Date: '28 Sep 2020', Timing: '05:15 PM', Contact:98765432},
  {sno:8,Patient: 'Nik Jordan', Doctor: 'Dr.Boron', Date: '12 Sep 2020', Timing: '02:30 PM', Contact:98765432},
  {sno:9,Patient: 'Herman Beck', Doctor: ' Dr.Nwoye', Date: '09 May 2020', Timing: '10:00 AM', Contact:98765432},
  {sno:10,Patient: 'Nik Jordan', Doctor: 'Dr.Herman Beck', Date: '18 Sep 2020', Timing: '12:45 PM', Contact:98765432},
];
@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})

  
export class AppointmentListComponent implements OnInit {
  // Appointments teble headers name in columns
  displayedColumns: string[] = ['sno','Patient', 'Doctor', 'Date', 'Timing', 'Contact'];
  dataSource = ELEMENT_DATA;


  
  constructor() { }

  ngOnInit(): void {}

}
