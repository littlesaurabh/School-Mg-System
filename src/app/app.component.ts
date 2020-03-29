import { Component } from '@angular/core';
import { FormControl } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SchoolManagement';
   myControl = new FormControl();
   states;
   constructor(public snackBar: MatSnackBar){
      this.loadStates();
   }
   //build list of states as map of key-value pairs
   loadStates() {
      var allStates = 'gmail.com, rediffmail.com, hotmail.com , outlook.com , yahoo.co.in'
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
}
