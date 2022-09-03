import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.scss']
})
export class MyWorkComponent implements OnInit {

  projects = [
    {
      title: 'Portfolio',
      description: 'My personal Portfolio Site built with Angular',
      image: 'assets/img/portfolio.jpg',
      category: 'angular',
      githubLink: 'https://github.com/benschuetze/portfolio',
      projectLink: '#'
    },
    {
      title: 'El Pollo Loco',
      description: 'Jump and Run made with Javascript (OOP)',
      image: 'assets/img/pollo-loco.jpg',
      category: 'javascript',
      githubLink: 'https://github.com/benschuetze/elpolloloco',
      projectLink: 'http://benjaminschuetze.de/pollo'
    },
    {
      title: 'Pokedex',
      description: 'Restful API based Pokemon viewer',
      image: 'assets/img/pokedex.jpg',
      category: 'javascript',
      githubLink: 'https://github.com/benschuetze/pokedex',
      projectLink: 'http://benjaminschuetze.de/pokedex'
    },
    {
      title: 'Join',
      description: 'Kanban built with Javascript as a group project',
      image: 'assets/img/join.jpg',
      category: 'javascript',
      githubLink: 'https://github.com/TobiasMatthies/Join',
      projectLink: 'http://gruppe-208.developerakademie.net/Join2/pages/addATask.html'
    },
    {
      title: 'KanBaneasy',
      description: 'Simple Kanban built with Angular and Firebase',
      image: 'assets/img/kanbaneasy.jpg',
      category: 'angular',
      githubLink: 'https://github.com/benschuetze/Kanbaneasy',
      projectLink: 'https://join-7cee9.web.app/'
    }, 
    {
      title: 'Ring of Fire',
      description: 'Web app version of the popular drinking game',
      image: 'assets/img/ringoffire.jpg',
      category: 'angular',
      githubLink: 'https://github.com/benschuetze/ringoffire',
      projectLink: 'http://benjaminschuetze.de/ringoffire'
    }
  ]; 


  typesOfProjects = {
    all : true,
    angular : false,
    javascript : false
  };
  


  filteredProjects = this.projects; 

  constructor() { }

  showProjects(category) {
    this.toggleButtons(category);
    if (category != 'all') {
      this.filteredProjects = this.projects.filter((p) => p.category == category);
    } else {
      this.filteredProjects = this.projects;
    }
    
  }

  toggleButtons(category) {
    for(let type in this.typesOfProjects) {
      if(type.toString() == category) {
        this.typesOfProjects[type] = true;
      } else {
        this.typesOfProjects[type] = false;
      }
    }
  }

  ngOnInit(): void {
  }

}
