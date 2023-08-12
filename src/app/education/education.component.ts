import { Component } from '@angular/core';
import { Education } from '../models/models';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  educationList: Education[] = [
    {
      institute: 'College Of Engineering, Pune',
      course: 'MTech',
      duration: '2020-2022',
      score: '7.94'
    },
    {
      institute: 'Sihnagad College Of Engineering, Pune',
      course: 'BE',
      duration: '2015-2019',
      score: '7.23'
    },
    {
      institute: 'Yashwant Mahavidyalaya',
      course: 'HSC',
      duration: '2014-2015',
      score: '80.15%'
    },
    {
      institute: 'Rashtramata Madhyamic Vidyalaya',
      course: 'SSC',
      duration: '2012-2013',
      score: '83.27%'
    }
  ]
}
