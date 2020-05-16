import { Component, OnInit } from '@angular/core';
import { logging } from 'protractor';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  // src = "https://erp.psit.in/assets/Notice/b826f43fedb32c6d99a0f39ec38b4ac5.pdf";
  constructor() { }
  showMe:boolean=true;
  ngOnInit(): void {
 this.login()
  }

login() {
console.log("Hi")
       setTimeout(() => {
  this.showMe=false;
       }, 5000)
  
}
}
