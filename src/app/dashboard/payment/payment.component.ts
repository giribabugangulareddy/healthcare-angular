import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  paytemForm: FormGroup;

  constructor(private fb: FormBuilder, private router:Router, private _snackBar: MatSnackBar) { }

  submitted = false;


  ngOnInit(): void {
    this.paytemForm = this.fb.group({
      cardName: ['', Validators.required],
      cardNumber: ['', Validators.required],
      cvc: ['', Validators.required],
      month: ['', Validators.required],
      year: ['', Validators.required],
    })
  }

  // set formcontrol to foem fields for validation

  get paytemFormControl() {
    return this.paytemForm.controls;
  }

  // form submitinf funtion

  onSubmit() {
    this.submitted = true;
    if (this.paytemForm.valid) {
      this.router.navigate(['/dash/home'])
      console.table(this.paytemForm.value);
      this.openSnackBar(' Successfuly Booked appointment','success')
    }
  }

  // form validation
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
