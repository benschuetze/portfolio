import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  steps:object[] = [
    {
      text: 'As a music producer I got into developing small plug-ins with tools like Max 4 Live.',
      image: '../assets/img/walk-line.png'
    },
    {
      text: 'Doing that I discovered my love for coding and developing.',
      image: '../assets/img/heart-line.png'
    },
    {
      text: 'I looked for the best opportunity to learn web development in Germany and found the Developer Akademie.',
      image: '../assets/img/search-line.png'
    },
    {
      text: 'I started with learning the basics of HTML, CSS and Javascript and got to developing a Jump and Run Game and single page web apps with Angular.',
      image: '../assets/img/flight-takeoff-line.png'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
