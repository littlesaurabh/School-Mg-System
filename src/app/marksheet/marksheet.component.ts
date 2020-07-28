import { Component, OnInit } from '@angular/core';
import * as jsPDF from 'jspdf'
import * as jspdf from 'jspdf';  
import html2canvas from 'html2canvas'; 
import { JsonPipe } from '@angular/common';
import {MarksService }from './marks.service'
@Component({
  selector: 'app-marksheet',
  templateUrl: './marksheet.component.html',
  styleUrls: ['./marksheet.component.css']
})

export class MarksheetComponent implements OnInit {

  flag:boolean=false;
  constructor(private marks:MarksService) { }
 
  ngOnInit(): void {

  }
  print1(){
    this.marks.getData().subscribe(
      (success)=>{console.log(success,"bjhnvh")},
      (error)=>{console.log("hsrferfEi");
        console.log(error)}
    )
  }
  // ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    // window.print();
    // JSON.stringify(this.marksheet)
  // }
  marksheet=[
  {  sub:"ENGLISH I",m1:"100" , m2:"91.00", m3:"100" ,m4:"45.00" ,m5:"20" ,m6:"18.00" ,m7:"80",m8: "73.00",m9: "91.00" ,m10:"300", m11:"275.00"},
  {  sub:"HINDI I",m1:"100" , m2:"81.00", m3:"100" ,m4:"99.00" ,m5:"20" ,m6:"17.00" ,m7:"80",m8: "34.00",m9: "94.00" ,m10:"300", m11:"267.00"},
  {  sub:"ENGLISH I",m1:"100" , m2:"87.00", m3:"100" ,m4:"93.00" ,m5:"20" ,m6:"11.00" ,m7:"80",m8: "56.00",m9: "65.00" ,m10:"300", m11:"287.00"},
  {  sub:"HINDI II",m1:"100" , m2:"87.00", m3:"100" ,m4:"65.00" ,m5:"20" ,m6:"12.00" ,m7:"80",m8: "65.00",m9: "86.00" ,m10:"300", m11:"298.00"},
  {  sub:"SANSKRIT",m1:"100" , m2:"88.00", m3:"100" ,m4:"97.00" ,m5:"20" ,m6:"18.00" ,m7:"80",m8: "64.00",m9: "78.00" ,m10:"300", m11:"297.00"},
  {  sub:"MATHS",m1:"100" , m2:"92.00", m3:"100" ,m4:"56.00" ,m5:"20" ,m6:"15.00" ,m7:"80",m8: "51.00",m9: "98.00" ,m10:"300", m11:"234.00"},
  {  sub:"PHYSICS",m1:"100" , m2:"66.00", m3:"100" ,m4:"79.00" ,m5:"20" ,m6:"17.00" ,m7:"80",m8: "52.00",m9: "100.00" ,m10:"300", m11:"235.00"},
  {  sub:"CHEMISTRY",m1:"100" , m2:"75.00", m3:"100" ,m4:"84.00" ,m5:"20" ,m6:"18.00" ,m7:"80",m8: "65.00",m9: "98.00" ,m10:"300", m11:"255.00"},
  {  sub:"BIOLOGY",m1:"100" , m2:"73.00", m3:"100" ,m4:"69.00" ,m5:"20" ,m6:"11.00" ,m7:"80",m8: "76.00",m9: "43.00" ,m10:"300", m11:"175.00"},
  {  sub:"HISTORY",m1:"100" , m2:"89.00", m3:"100" ,m4:"100.00" ,m5:"20" ,m6:"10.00" ,m7:"80",m8: "76.00",m9: "76.00" ,m10:"300", m11:"275.00"},
  {  sub:" GEOGRAPHY",m1:"100" , m2:"98.00", m3:"100" ,m4:"84.00" ,m5:"20" ,m6:"18.00" ,m7:"80",m8: "79.00",m9: "89.00" ,m10:"300", m11:"205.00"},
  {  sub:"COMPUTER",m1:"100" , m2:"34.00", m3:"100" ,m4:"93.00" ,m5:"20" ,m6:"9.00" ,m7:"80",m8: "80.00",m9: "91.00" ,m10:"300", m11:"215.00"},
  {  sub:"GENERAL KNOWLEDGE",m1:"100" , m2:"30.00", m3:"100" ,m4:"89.00" ,m5:"20" ,m6:"13.00" ,m7:"80",m8: "80.00",m9: "72.00" ,m10:"300", m11:"205.00"}]
 // ENGLISH II 100 81.00 100 90.00 20 16.00 80 66.00 82.00 300 253.00
// HINDI I 100 70.00 100 82.00 20 18.00 80 62.00 80.00 300 232.00
// HINDI II 100 87.00 100 80.00 20 17.00 80 60.00 77.00 300 244.00
// SANSKRIT 100 87.00 100 83.00 20 17.00 80 49.00 66.00 300 236.00
// MATHS 100 88.00 100 98.00 20 18.00 80 75.00 93.00 300 279.00
// PHYSICS 100 92.00 100 91.00 20 18.00 80 70.00 88.00 300 271.00
// CHEMISTRY 100 66.00 100 97.00 20 20.00 80 71.00 91.00 300 254.00
// BIOLOGY 100 75.00 100 94.00 20 19.00 80 71.00 90.00 300 259.00
// HISTORY & CIVICS 100 73.00 100 95.00 20 16.00 80 67.00 83.00 300 251.00
// GEOGRAPHY 100 89.00 100 88.00 20 20.00 80 74.00 94.00 300 271.00
// COMPUTER 100 93.00 100 91.00 20 18.00 80 68.00 86.00 300 270.00
// GENERAL KNOWLEDGE 50 44.00 50 46.00 50 46.00 46.00 150 136.00
 



  // let dataUrl = this.barChart.nativeElement.toDataURL();
  // console.log(dataUrl)
  

  // let content = this.content.nativeElement;

  // doc.canvas
  // doc.addHTML(this.content.nativeElement.innerHTML)
  // doc.addImage(dataUrl, 'JPEG', 0, 0);
  // doc.addImage(dataUrl, 'JPEG', 15, 30,  width/2.5, 80,"abc","NONE")
  

  // doc.addImage(dataUrl, 'JPEG', width/2.5 + 40, 30,  width/2.5, 80,"abc","SLOW")
 

  // console.log(content.innerHTML)
 

captureScreen()  
 {  
  
   var data = document.getElementById('contentToConvert');  
   html2canvas(data).then(canvas => {  
     // Few necessary setting options  
     var imgWidth = 200;   
     var pageHeight = 295;    
     var imgHeight = canvas.height * imgWidth / canvas.width;  
     var heightLeft = imgHeight;  
 
     const contentDataURL = canvas.toDataURL('image/png')  
     let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF  
     var position = 0;  
     console.log(imgHeight,imgWidth)
     pdf.addImage(contentDataURL, 'PNG', 0, position, 200, 162,"abc","NONE")  
     pdf.save('MYPdf.pdf'); // Generated PDF   
   });  
 } 

}
