import { Component, OnInit } from '@angular/core';
import AOS from "aos";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})


export class SkillsComponent implements OnInit {


  images = [
    'assets/img/java-script.png',
    'assets/img/angular.png',
    'assets/img/html.png',
    'assets/img/scrum.png',
    'assets/img/git.png',
    'assets/img/pencil.png',
    'assets/img/api.png',
    'assets/img/test-automation.png',
    'assets/img/database.png'
  ];

  skills = [
    'Javascript',
    'Angular',
    'HTML/CSS',
    'Scrum',
    'Git',
    'Design Thinking',
    'Rest API',
    'Test Automation',
    'Databases'
  ];

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

}
