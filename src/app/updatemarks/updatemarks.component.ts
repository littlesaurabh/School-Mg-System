import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-updatemarks',
  templateUrl: './updatemarks.component.html',
  styleUrls: ['./updatemarks.component.css']
})
export class UpdatemarksComponent implements OnInit {
 
  constructor() { }
  panelOpenState = false;
  marksheet=[
    { rollno:1,name:"Rahul Singh" ,class: 1,attendance: 69,marks: 100, sub:"ENGLISH I",m1:"100" , m2:"91.00", m3:"100" ,m4:"45.00" ,m5:"20" ,m6:"18.00" ,m7:"80",m8: "73.00",m9: "91.00" ,m10:"300", m11:"275.00"},
    {   rollno: 2,name: "Nishant Tebriwal",class: 1,attendance: 67,marks: 99,sub:"HINDI I",m1:"100" , m2:"81.00", m3:"100" ,m4:"99.00" ,m5:"20" ,m6:"17.00" ,m7:"80",m8: "34.00",m9: "94.00" ,m10:"300", m11:"267.00"},
    {   rollno: 3,name: "Riya Tekriwal",class: 1,attendance: 43,marks: 98, sub:"ENGLISH I",m1:"100" , m2:"87.00", m3:"100" ,m4:"93.00" ,m5:"20" ,m6:"11.00" ,m7:"80",m8: "56.00",m9: "65.00" ,m10:"300", m11:"287.00"},
    {  rollno: 4,name: "Priya Shahi",class: 1,attendance: 91,marks: 96, sub:"HINDI II",m1:"100" , m2:"87.00", m3:"100" ,m4:"65.00" ,m5:"20" ,m6:"12.00" ,m7:"80",m8: "65.00",m9: "86.00" ,m10:"300", m11:"298.00"},
    {  rollno: 5,name: "Shashank Besain",class: 1,attendance: 89,marks: 93,sub:"SANSKRIT",m1:"100" , m2:"88.00", m3:"100" ,m4:"97.00" ,m5:"20" ,m6:"18.00" ,m7:"80",m8: "64.00",m9: "78.00" ,m10:"300", m11:"297.00"},
    {   rollno: 6,name: "Pancham Kumar Gupt",class: 1,attendance: 87,marks: 91, sub:"MATHS",m1:"100" , m2:"92.00", m3:"100" ,m4:"56.00" ,m5:"20" ,m6:"15.00" ,m7:"80",m8: "51.00",m9: "98.00" ,m10:"300", m11:"234.00"},
    {  rollno: 7,name: "Rahul Singh Sengar",class: 1,attendance: 60,marks: 56,sub:"PHYSICS",m1:"100" , m2:"66.00", m3:"100" ,m4:"79.00" ,m5:"20" ,m6:"17.00" ,m7:"80",m8: "52.00",m9: "100.00" ,m10:"300", m11:"235.00"},
    { rollno: 7,name: "Kashish Kr. Singh",class: 1,attendance: 78,marks: 91, sub:"CHEMISTRY",m1:"100" , m2:"75.00", m3:"100" ,m4:"84.00" ,m5:"20" ,m6:"18.00" ,m7:"80",m8: "65.00",m9: "98.00" ,m10:"300", m11:"255.00"},
    {  rollno: 8,name: "Rahiot Ahuja",class: 1,attendance: 67,marks: 75,sub:"BIOLOGY",m1:"100" , m2:"73.00", m3:"100" ,m4:"69.00" ,m5:"20" ,m6:"11.00" ,m7:"80",m8: "76.00",m9: "43.00" ,m10:"300", m11:"175.00"},
    {   rollno: 9,name: "Ishita Kumar Singh",class: 1,attendance: 80,marks: 47,sub:"HISTORY",m1:"100" , m2:"89.00", m3:"100" ,m4:"100.00" ,m5:"20" ,m6:"10.00" ,m7:"80",m8: "76.00",m9: "76.00" ,m10:"300", m11:"275.00"},
    {  rollno: 10,name: "Saurav Singh", sub:" GEOGRAPHY",m1:"100" , m2:"98.00", m3:"100" ,m4:"84.00" ,m5:"20" ,m6:"18.00" ,m7:"80",m8: "79.00",m9: "89.00" ,m10:"300", m11:"205.00"},
    {  rollno: 11,name: "Saurabh Singh", sub:"COMPUTER",m1:"100" , m2:"34.00", m3:"100" ,m4:"93.00" ,m5:"20" ,m6:"9.00" ,m7:"80",m8: "80.00",m9: "91.00" ,m10:"300", m11:"215.00"},
    {  rollno: 12,name: "Babita Srivastava",class: 1,attendance: 90,marks:40,sub:"GENERAL KNOWLEDGE",m1:"100" , m2:"30.00", m3:"100" ,m4:"89.00" ,m5:"20" ,m6:"13.00" ,m7:"80",m8: "80.00",m9: "72.00" ,m10:"300", m11:"205.00"}]
  
  exams=[
    {value:'Unit test 1', viewValue:'ut1'},
    {value:'Half Yearly', viewValue:'hf'},
    {value:'Unit test 2', viewValue:'ut2'},
    {value:'Final Exam', viewValue:'final'},
  ]
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

  sections=[
    "A","B","C","D"
  ]
 
  ngOnInit(): void {
  }
  hide:boolean=false;
  sec:boolean=false;
  exam:boolean=false;
 class:boolean=false;
  
  option(value){
   
    if(value.id=='Section')
    this.sec=true
    else if(value.id=='Class')
    this.class=true
    else if(value.id=='Exam')
    this.exam=true
    if(this.sec==true&&this.exam==true&&this.class==true)
    this.hide=true;
    console.log(this.hide)
  }

}
