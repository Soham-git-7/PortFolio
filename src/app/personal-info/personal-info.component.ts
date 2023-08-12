import { Component } from '@angular/core';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent {
  myData: string[][] = [
    ['Name', 'Soham Pendkar'],
    ['DOB', '07/01/1998'],
    ['Work Exp', '1 year+'],
    ['Education', 'MTech (2022)'],
    ['Interests', 'Web Technologies']
  ];

  aboutMe: string[] = [
    "I'm a highly motivated Angular UI Developer with a year of experience in crafting visually captivating and exceptionally functional user interfaces. My passion for front-end development enables me to go beyond client expectations, delivering web applications that seamlessly engage users. Utilizing state-of-the-art technologies like Angular, I create responsive designs that ensure compatibility across various devices and screen sizes. My ability to effectively collaborate across teams allows me to translate business needs into technical solutions, and my strong communication skills help me build strong relationships with stakeholders while ensuring timely project delivery.",
    "I thrive in dynamic environments, embracing challenges and quickly adapting to master new technologies. My continuous pursuit of knowledge keeps me at the forefront of industry trends and best practices. Driven by a passion for innovation and user-centered solutions, I'm committed to creating remarkable digital experiences."
  ];

}
