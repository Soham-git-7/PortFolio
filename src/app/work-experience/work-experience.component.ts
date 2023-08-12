import { Component } from '@angular/core';
import { WorkExperience } from '../models/models';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent {
  workExpList: WorkExperience[] = [
    {
      role: 'Software Engineer',
      company: 'CitiusTech Pvt Ltd',
      duration: 'Aug 2022 - June 2023',
      description: [
        'Developed responsive and visually appealing user interfaces using Angular',
        'delivering exceptional web applications that surpassed client expectations in a fast-paced environment'
      ]
    },
    {
      role: 'Intern',
      company: 'Mythos Technology',
      duration: 'June 2018 - July 2018',
      description: [
        "During my internship, I adeptly utilized Python and diverse modules for impactful contributions to company projects.",
        "I displayed a strong aptitude for rapid skill acquisition and implementation in real-world projects."      
      ]
    }
  ]
}
