import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  [x: string]: any;
  public loginForm: FormGroup;
  public submitted: Boolean = false;
  public passwordPassword

  constructor(private formBuilder: FormBuilder, private router: Router, private _snackBar: MatSnackBar) {

  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userEmail: ['', [Validators.required, Validators.pattern("^[a-z0-9_.+-]+@[a-z0-9-]+.[a-z0-9-.]+$")]],
      userPassword: ['', Validators.required],

    });
  }

  // form validation 

  getErrMsg(formControl, msg) {
    if (this.loginForm.get(formControl).touched || this.submitted) {
      return this.loginForm.get(formControl).hasError('required') ? 'You must enter ' + msg :
        this.loginForm.get(formControl).hasError('pattern') ? 'Not a valid your ' + msg : '';
    }
  }



  // form submit funtion
  login() {
    this.submitted = true

    if (this.loginForm.value.userEmail === 'admin@gmail.com' && this.loginForm.value.userPassword === 'admin') {
      
      this.openSnackBar('sucessfully Submitted', 'success')
      this.router.navigate(['/dash/appointment-list'])
    
    } else if (!this.loginForm.invalid) {
     
      this.passwordPassword = 'invalid credentials '
      this.openSnackBar('invalid credentials', 'error')
    }
  }

  // alert messages funtion
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
