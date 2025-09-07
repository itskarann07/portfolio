import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {

  active = 0;
  jobs: any = [];

  constructor() { }

  ngOnInit(): void {

    this.jobs = [
      {
        "Tab": "WebileApps",
        "Title": "Backend Developer",
        "Date": "March 2025 - Present",
        "Description": [
          "Proficient in building scalable and robust server-side applications using Node.js and TypeScript.",
          "Utilized Sequelize ORM for database operations, optimizing queries and ensuring efficient interaction with relational databases.",
          "Strong understanding of authentication, authorization, and security principles.",
          "Developed and executed automated backend test cases using Jasmine, improving test coverage and reducing production defects.",
          "Provided training, mentorship, and conducted code reviews for interns, ensuring adherence to coding standards and best practices."
        ]
      },
      {
        "Tab": "Akal Infosys",
        "Title": "Fullstack Developer",
        "Date": "March 2022 - March 2025",
        "Description": [
          "Spearheaded the frontend development efforts for the TankhaPay project using Angular, resulting in user-friendly and responsive interfaces that significantly improved the application's overall user experience.",
          "Integrated frontend components, optimizing performance and maintainability.",
          "Demonstrated expertise in designing, developing, and maintaining robust REST APIs utilizing Node.js and Express, while also contributing to the optimization of PostgreSQL functions to reduce server load, resulting in improved application performance and efficiency.",
          // "Creation and maintenance of Platforms Done in Angular, Node, PostgreSQL, RxJS, CSS with responsiveness, and user management and configuration of general parameters."
        ]
      }
    ]
  }

}
