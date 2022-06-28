import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  scrollToPortfolio() {
    let pageHeight = window.innerHeight;
    window.scrollBy({
      top: pageHeight*2,
      left: 0,
      behavior: 'smooth'
    });
  }

}
