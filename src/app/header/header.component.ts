import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private scroller: ViewportScroller, private router: Router) { }

  ngOnInit(): void {
  }

  scroll(id) {
    
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  }


}


