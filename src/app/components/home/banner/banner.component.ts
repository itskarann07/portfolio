import { Component, OnInit, AfterViewInit } from '@angular/core';

import {trigger, state, style, animate, transition, stagger, query } from "@angular/animations";

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  animations: [
    trigger('bannerTrigger', [
      transition(":enter", [
        query("*", [
          style({ opacity: 0, transform: "translateX(-50px)" }),
          stagger(50, [
            animate(
              "250ms cubic-bezier(0.35, 0, 0.25, 1)",
              style({ opacity: 1, transform: "none" })
            )
          ])
        ])
      ])
    ])
  ]
})
export class BannerComponent implements OnInit {
  experience: string='';

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

    this.experience = (years.toString() + (years>1 ? ' years ' : ' year ' ))+ (months.toString() + (months>1 ? ' months ' : ' month ' ));

  }
  

}
