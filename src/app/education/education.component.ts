import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  lpuLogo:String="../assets/lpu.png";
  lambtonLogo:String="../assets/lambtonlogo.jpeg";
  stLogo:String = "../assets/st.png";
  stjs:String="../assets/stjs.jpeg";
  constructor() { }


  ngOnInit(): void {
  }

}
