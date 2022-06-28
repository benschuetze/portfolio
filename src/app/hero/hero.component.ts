import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  scroll() {
    let pageHeight = window.innerHeight;
    window.scrollBy({
      top: pageHeight,
      left: 0,
      behavior: 'smooth'
    });
  }

}
