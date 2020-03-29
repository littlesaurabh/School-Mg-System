import { Component } from '@angular/core';
import { FormControl } from "@angular/forms";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SchoolManagement';
   myControl = new FormControl();
   states;
   constructor(){
      this.loadStates();
   }
   //build list of states as map of key-value pairs
   loadStates() {
      var allStates = 'gmail.com, rediffmail.com, hotmail.com ,outlook.com,'
      this.states =  allStates.split(/, +/g).map( function (state) {
         return {
            value: state,
            display: state
         };
      });
   }
}
