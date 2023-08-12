import { Component } from '@angular/core';
import { Project } from '../models/models';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'CPCTI - CitiusTech pvt ltd',
      technologies: 'Angular, Typescript, HTML5, CSS3, Bootstrap, Jasmine karma, MySQL',
      description: [
        'Demonstrated expertise in the Angular stack as an experienced software developer',
        'Collaborated with a front-end team on a client project, focusing on constructing Single Page Applications (SPAs) and showcasing a deep comprehension of SPA architecture',
        'Successfully devised and optimized Angular modules, skillfully employing lazy loading techniques for optimal web app performance',
        'Skilled in writing comprehensive test suites, employing the Jasmine and Karma frameworks for unit tests, integration tests, and end-to-end (E2E) tests' 
      ]
    },

    {
      title: 'Robotic Vision - COEP, Pune',
      technologies: 'Python, ML, AI, SLAM, YOLO',
      description: [
        'Spearheading the development of a comprehensive robotic vision system for precise point cloud mapping, the project leverages the fusion of LIDAR SLAM and visual sensor-based SLAM techniquesr',
        'Combining and integrating Scan Context++ and open-source LIDAR odometry techniques, the project constructs a modular LIDAR system, amplifying the efficiency and effectiveness of the front-end development',
        'Employing deep neural networks within the back-end infrastructure maximizes object identification and recognition, thereby elevating the SLAM performance',
        'Synergizing the strengths of both LIDAR and visual sensor-based approaches, the project aims to mitigate motion estimation errors and enhance object recognition, delivering breakthrough results' 
      ]
    },
  ];
}
