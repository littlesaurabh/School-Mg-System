import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  myControl = new FormControl();
   states;

   errorMessage: string;
  successMessage: string;
  constructor(private router: Router,private fb: FormBuilder,public snackBar: MatSnackBar) {
     this.loadStates(); }
  loginForm = this.fb.group({
    userName: ["", Validators.required],
    pass: ["", Validators.required],
  })
   ngOnInit(): void {
  }

   loadStates() {
      var allStates = 'admin, admin@irs.com'
      this.states =  allStates.split(/, +/g).map( function (state) {
         return {
            value: state,
            display: state
         };
      });
   }
   openSnackBar(message: string, action: string) {
      this.snackBar.open(message, action, {
         duration: 5000,
         verticalPosition: 'top' ,
         horizontalPosition: 'center' ,

      });
   } 
 
   login() {
     
      this.errorMessage = null;
      this.successMessage = null;
      // if(this.loginForm.userName.value&&)
      // this.router.navigate(['/dashboard']);
      console.log(this.loginForm.value)
      if((this.loginForm.value.userName=="admin"||this.loginForm.value.userName=="admin@irs.in")&&this.loginForm.value.pass=="admin")
      this.router.navigate(['/dashboard']);
      else
      this.errorMessage="Wrong Username or Password"
    }
}
