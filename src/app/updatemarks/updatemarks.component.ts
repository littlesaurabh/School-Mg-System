import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-updatemarks',
  templateUrl: './updatemarks.component.html',
  styleUrls: ['./updatemarks.component.css']
})
export class UpdatemarksComponent implements OnInit {

  constructor() { }
  panelOpenState = false;
  exams=[
    {value:'Unit test 1', viewValue:'ut1'},
    {value:'Half Yearly', viewValue:'hf'},
    {value:'Unit test 2', viewValue:'ut2'},
    {value:'Final Exam', viewValue:'final'},
  ]
  ngOnInit(): void {
  }

}
