import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
aboutme:any =[];

  constructor(
  ) { }

  ngOnInit(): void {

let startDate:any = new Date("2022-03-01");
let endDate:any = new Date();

const diffInMilliseconds = Math.abs(endDate - startDate);
const millisecondsInMonth = 1000 * 60 * 60 * 24 * 30.44;

  const diffInMonths = diffInMilliseconds / millisecondsInMonth;
  const years = Math.floor(diffInMonths / 12);
  const months = Math.floor(diffInMonths % 12)


  const experience = (years.toString() + (years>1 ? ' years ' : ' year ' ))+ (months.toString() + (months>1 ? ' months ' : 'month ' ));


    this.aboutme = [
      `In my <span class='underline'> ${experience} of experience as a developer</span>, I seek to train every day. I have worked writing <span class='underline'>clean and responsive codes</span>, <span class='underline'>performing continuous integration</span>, and covering backend developer roles with <span class='underline'>Node.js and Postgres</span>. I have led Frontend development, exercising motivation to partners, and setting plans and goals together.`,
      "My skills also include implementing system improvements, optimizing sites, standardizing patterns, and suggesting and executing ideas that add value to the project.",
      "Some of the technologies that I have trained and worked on include (but are not limited to):"
  ]
  }

}
