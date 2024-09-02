import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  imgUrl = "../../assets/myPhoto.jpg";
  recommendations : any = [
    "../../assets/shalem-review.png",
    "../../assets/gokul-review.png",
    "../../assets/vishwa-review.png",
    "../../assets/roopesh-review.png"
    

  ];
 

  constructor() { }

  ngOnInit(): void {
    
 
  }

}
