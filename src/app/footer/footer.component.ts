import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  goToImprint() {
    console.log('going to imprint')
    this._router.navigateByUrl('/imprint');
  }

}
