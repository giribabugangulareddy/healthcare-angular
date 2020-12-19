import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { SharedService } from '../shared/shared.service';


@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.component.html',
  styleUrls: ['./create-appointment.component.css']
})
export class CreateAppointmentComponent implements OnInit {

  public appoinmentForm: FormGroup
  constructor(private formBuilder: FormBuilder,private _snackBar: MatSnackBar,private router : Router, public sharedService : SharedService) { }

// static data for form-select fields
  service=['Diabetes','Cardiology','Gynaecology', 'Pediatric']
  doctors =['Dr.Freddy','Dr.Kita Chihoko','Dr.Nwoye','Dr.Richard','Dr.Herman Beck']
  dates =['01/01/2020','31/01/2020','01/02/20120','01/03/20120','11/03/20120']
  times =['10.30 AM', '11:00 AM','11.30AM','12:00 PM']

  public submitted: Boolean = false;

  public messagedata="appoinment create data"
  ngOnInit(): void {
    

    this.appoinmentForm = this.formBuilder.group({
      patientName: ['', Validators.required],
      service: ['', Validators.required],
      mobile: ['', Validators.required],
      doctors:['', Validators.required],
      dates: ['', Validators.required],
      times:['', Validators.required],
      fee:['', Validators.required],
    })
    
  }

  // form submitting funtion
  create(){
    this.submitted=true
    if(this.appoinmentForm.valid){
      
      this.openSnackBar('Login Successfuly Submitted','success')

      this.sharedService.setDataSource(this.appoinmentForm.value)

      this.router.navigate(['/dash/booking'])

      console.log(this.appoinmentForm.value)
    }else{
      
      this.openSnackBar('invalid field', 'error')
    }

  }
  // alert message funtion
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

// form validation
  getErrMsg(formControl, msg) {
    console.log('formControl, msg',formControl, msg, this.submitted)
    if (this.appoinmentForm.get(formControl).touched || this.submitted) {
      return this.appoinmentForm.get(formControl).hasError('required') ? 'You must enter ' + msg :'';
    }
  }
}
