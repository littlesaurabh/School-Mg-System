import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatTableDataSource} from '@angular/material/table';
import {ExcelService} from '../marks/excel.service'
// import {Sort} from '@angular/material';
import * as jspdf from 'jspdf';  
import html2canvas from 'html2canvas'; 
export interface Food {
   calories: number;
   carbs: number;
   fat: number;
   name: string;
   protein: number;
}

export interface Student {
   rollno: number;
   name: string;
   class: number;
   attendance: number;
   marks: number;
}

const ELEMENT_DATA:  Student[]=[
  {rollno:1,name:"Rahul Singh" ,class: 1,attendance: 69,marks: 100},
  {   rollno: 2,name: "Nishant Tebriwal",class: 1,attendance: 67,marks: 99},
  {   rollno: 3,name: "Riya Tekriwal",class: 1,attendance: 43,marks: 98},
  {   rollno: 4,name: "Priya Shahi",class: 1,attendance: 91,marks: 96},
  {   rollno: 5,name: "Shashank Besain",class: 1,attendance: 89,marks: 93},
  {   rollno: 6,name: "Pancham Kumar Gupt",class: 1,attendance: 87,marks: 91},
  {   rollno: 7,name: "Rahul Singh Sengar",class: 1,attendance: 60,marks: 56},
  {   rollno: 7,name: "Kashish Kr. Singh",class: 1,attendance: 78,marks: 91},
  {   rollno: 8,name: "Rahiot Ahuja",class: 1,attendance: 67,marks: 75},
  {   rollno: 9,name: "Ishita Kumar Singh",class: 1,attendance: 80,marks: 47},
  {   rollno: 10,name: "Babita Srivastava",class: 1,attendance: 90,marks:40}
]

@Component({
  selector: 'app-marks',
  templateUrl: './marks.component.html',
  styleUrls: ['./marks.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})

export class MarksComponent implements OnInit {
  
  //  dataSource: Food[] = [
  //     {name: 'Yogurt', calories: 159, fat: 6, carbs: 24, protein: 4},
  //     {name: 'Sandwich', calories: 237, fat: 9, carbs: 37, protein: 4},
  //     {name: 'Eclairs', calories: 262, fat: 16, carbs: 24, protein: 6},
  //     {name: 'Cupcakes', calories: 305, fat: 4, carbs: 67, protein: 4},
  //     {name: 'Gingerbreads', calories: 356, fat: 16, carbs: 49, protein: 4},
  //     {name: 'Yogurt', calories: 159, fat: 6, carbs: 24, protein: 4},
  //     {name: 'Sandwich', calories: 237, fat: 9, carbs: 37, protein: 4},
  //     {name: 'Eclairs', calories: 262, fat: 16, carbs: 24, protein: 6},
  //     {name: 'Cupcakes', calories: 305, fat: 4, carbs: 67, protein: 4},
  //     {name: 'Gingerbreads', calories: 356, fat: 16, carbs: 49, protein: 4},
  //  ]; 
  exportAsXLSX():void {
    this.excelService.exportAsExcelFile(ELEMENT_DATA, 'Student Data');
 }
 captureScreen()  
 {  
   var data = document.getElementById('contentToConvert');  
   html2canvas(data).then(canvas => {  
     // Few necessary setting options  
     var imgWidth = 208;   
     var pageHeight = 295;    
     var imgHeight = canvas.height * imgWidth / canvas.width;  
     var heightLeft = imgHeight;  
 
     const contentDataURL = canvas.toDataURL('image/png')  
     let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF  
     var position = 0;  
     pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)  
     pdf.save('MYPdf.pdf'); // Generated PDF   
   });  
 }  
   displayedColumns: string[] = [ 'rollno','name','class','attendance','marks','actions1','actions','actions2'];
  classes = [
    {value: 'class 1', viewValue: 'class1'},
    {value: 'class 2', viewValue: 'class2'},
    {value: 'class 3', viewValue: 'class3'},
    {value: 'class 4', viewValue: 'class4'},
    {value: 'class 5', viewValue: 'class5'},
    {value: 'class 6', viewValue: 'class6'},
    {value: 'class 7', viewValue: 'class7'},
    {value: 'class 8', viewValue: 'class8'},
    {value: 'class 9', viewValue: 'class9'},
    {value: 'class 10', viewValue: 'class10'},
    {value: 'class 11', viewValue: 'class11'},
    {value: 'class 12', viewValue: 'class12'},
   
  ];
  exams=[
    {value:'Unit test 1', viewValue:'ut1'},
    {value:'Half Yearly', viewValue:'hf'},
    {value:'Unit test 2', viewValue:'ut2'},
    {value:'Final Exam', viewValue:'final'},
  ]
  constructor(private excelService:ExcelService) { }
  ngOnInit(): void {
  }
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
