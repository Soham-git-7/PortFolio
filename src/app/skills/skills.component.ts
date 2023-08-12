import { Component } from '@angular/core';
import { Skill } from '../models/models';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skills: Skill[] = [
    {
      name: 'Angular, Angular UI',
      level: 'Expert',
      rating: 80
    },
    {
      name: 'TypeScript, JavaScript',
      level: 'Proficient',
      rating: 75
    },
    {
      name: 'HTML5, CSS3',
      level: 'Expert',
      rating: 80
    },
    {
      name: 'Azure',
      level: 'Proficient',
      rating: 70
    },
    {
      name: 'MySQL',
      level: 'Proficient',
      rating: 75
    },
    {
      name: 'OOP, Data Structures',
      level: 'proficient',
      rating: 70
    },
    {
      name: 'UI/UX',
      level: 'Intermediate',
      rating: 60
    },
    {
      name: 'NodeJs, ExpressJS',
      level: 'Intermediate',
      rating: 55
    },
    {
      name: 'Jasmine-Karma, Unit Testing',
      level: 'Intermediate',
      rating: 50
    }
  ]
}
