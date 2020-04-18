import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
const ELEMENT_DATA=[
  {day:"Monday",period1:"Hindi",period2:"English-II",period3:"English-I",period4:"Hindi",period5:"Maths",period6:"Chemistry",period7:"G.K.",period8:"Games"},
  {day:"Tuesday",period1:"Maths",period2:"Moral Science",period3:"Maths",period4:"English-II",period5:"English-I",period6:"Chemistry",period7:"Maths",period8:"Maths"},
  {day:"Wednesday",period1:"P.T.",period2:"Science",period3:"Maths",period4:"Maths",period5:"Hindi",period6:"Biology",period7:"Maths",period8:"English-II"},
  {day:"Thursday",period1:"Maths",period2:"Hindi",period3:"G.K.",period4:"S.U.P.W",period5:"English-I",period6:"Maths",period7:"Biology",period8:"English-II"},
  {day:"Friday",period1:"Maths",period2:"Hindi",period3:"G.K.",period4:"Moral Science",period5:"English-II",period6:"Biology",period7:"Maths",period8:"English-I"},
  {day:"Saturday",period1:"Hindi",period2:"Maths",period3:"Games",period4:"P.T.",period5:"English-II",period6:"English-I",period7:"Chemistry",period8:"Maths"}
  // {period1:"Maths",period2:"Maths",period3:"Maths",period4:"Maths",period5:"Maths",period6:"Maths",period7:"Maths",period8:"Maths"}
    ]
@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.css']
})

export class TimetableComponent implements OnInit {
  displayedColumns: string[] = [ 'day','period1','period2','period3','period4','Lunch','period5','period6'
  ,'period7','period8','actions'];
  constructor() { }
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


  ngOnInit(): void {
  }
  dataSource = new MatTableDataSource(ELEMENT_DATA);
}
