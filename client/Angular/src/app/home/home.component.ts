import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  myimage1 = '../assets/img/image1.jpg';
  myimage2 = '../assets/img/image2.jpg';
  myimage3 = '../assets/img/image3.jpg';
  myimage4 = '../assets/img/image4.jpg';

  constructor() { }

  ngOnInit() {
  }

}
