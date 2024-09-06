import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {

  active = 0;
  jobs:any=[];

  constructor( ) { }

  ngOnInit(): void {

    this.jobs = [
      // {
      // "Tab": "Talent Monk",
      // "Title": "Backend Developer",
      // "Date": "May 2023 - Present",
      // "Description": [
      //   "Proficient in building scalable and robust server-side applications using Node.js and TypeScript.",
      //   "Experienced in designing and implementing database schemas using Prisma and PostgreSQL.",
      //   "Strong understanding of authentication, authorization, and security principles.",
      //   "Familiar with cloud platforms like Azure for deploying and managing applications."
      // ]
      // },
      {
      "Tab": "Akal Infosys",
      "Title": "Fullstack Developer",
      "Date": "March 2022 - Present",
      "Description": [
        "Spearheaded the frontend development efforts for the TankhaPay project using Angular, resulting in user-friendly and responsive interfaces that significantly improved the application's overall user experience.",
        "Integrated frontend components, optimizing performance and maintainability.",
        "Demonstrated expertise in designing, developing, and maintaining robust REST APIs utilizing Node.js and Express, while also contributing to the optimization of PostgreSQL functions to reduce server load, resulting in improved application performance and efficiency.",
        // "Creation and maintenance of Platforms Done in Angular, Node, PostgreSQL, RxJS, CSS with responsiveness, and user management and configuration of general parameters."
      ]
  },
  // {
  //     "Tab": "Belivable",
  //     "Title": "FrontEnd Game Designer(Intern)",
  //     "Date": "March 2021 – April 2021",
  //     "Description": [
  //       "Implementing continuous improvements, working on frontend Unity Arena.",
  //       "Developent of Game Area(Boards) using Unity.",
  //       "Develope and Design board Games with common Functionality."
  //     ]
  // },
  // {
  //     "Tab": "Mumbai First",
  //     "Title": "UI / UX Designer(Intern)",
  //     "Date": "August 2020 – Nov. 2020",
  //     "Description": [
  //       "Assisting with the design and development of basic web pages and interfaces, using HTML, CSS, and JavaScript.",
  //       "Working with Adobe Creative Suite to modify images and create engaging visual content for web and social media platforms.",
  //       "Assisting with video editing, including trimming, cutting, and adding visual effects to create engaging video content.",
  //       "Conducting user research and testing to gather feedback on designs, and using this feedback to iterate and improve designs."
  //     ]
  // }
]
  }

}
