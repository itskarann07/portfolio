import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.scss']
})
export class ProyectsComponent implements OnInit {

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    navSpeed: 700,
    items: 1,
    autoplay: true, 
    autoplayTimeout: 3000
  }

  @ViewChild('imgContainer') imgContainer!: ElementRef;

  projects: any = [];
  slide:any;

  constructor(
  ) { }

  ngOnInit(): void {

    this.projects = [
      // {
      //   "Title": "Portfolio Website",
      //   "Description": "Designed and developed a portfolio website using <span class='underline'>Angular 13</span>, showcasing a curated collection of projects and accomplishments. Leveraged Angular's powerful features to create a user-friendly and responsive platform that demonstrates technical skills, creativity, and a strong commitment to professionalism",
      //   "demoLink": "https://cafeweb.z13.web.core.windows.net/home",
      //   "date": "(Aug 2023 - Sept 2023)",
      //   "imgs": [
      //     "assets/images/portfolio/portfolio1.png",
      //     "assets/images/portfolio/portfolio2.png",
      //     "assets/images/portfolio/portfolio3.png",
      //   ],
      //   "Technologies": ["Angular", "SCSS", "Azure"]
      // },
      {
        "Title": "CRM (Candidate Relationship Management)",
        "Description": "Significantly contributed to the development of an <span class='underline'>in-house webapp</span> for <span class='underline'>TankhaPay</span>, a product of <span class='underline'>Akal Infosys</span>, which successfully secured funding of <span class='underline'>2.7 million</span> from Japanese investors. The platform efficiently manages employer and employee profiles, catering to a diverse workforce, including gig workers, blue-collar, and white-collar employees, streamlining the registration process and enhancing workforce management",
        "demoLink": "https://theprint.in/ani-press-releases/tankhapay-developed-by-akal-information-systems-ltd-gets-2-7-million-usd-funding-from-japanese-investors/1638984/",
        "date": "Aug 2022 - Present",
        "imgs": [
          // "assets/images/hands-game.png",
          "assets/images/crm-imgs/crm0.png",
          "assets/images/crm-imgs/crm01.png",
          "assets/images/crm-imgs/crm02.png",
          "assets/images/crm-imgs/crm03.png",
          "assets/images/crm-imgs/crm04.png",
          "assets/images/crm-imgs/crm05.png",
          "assets/images/crm-imgs/crm06.png",
          "assets/images/crm-imgs/crm07.png",
          "assets/images/crm-imgs/crm08.png",
          "assets/images/crm-imgs/crm09.png",
        ],
        // "ghLink": "https://github.com/andresjosehr/hands-game",
        "Technologies": ["Angular", "CSS", "Bootstrap", "JQuery", "NodeJs", "PostgreSQL"]
      },
      {
        "Title": "CMS(Content Management System)",
        "Description": "I worked on an Employee Management CMS using Angular, Node.js, and PostgreSQL. The system features user management, employee mapping, relieve employee functionality, advance salary processing, and salary change requests. Leveraging a responsive interface, the CMS enhances organizational efficiency by providing a centralized platform for HR tasks. My role included requirements analysis, system design, front-end development with Angular, back-end development with Node.js, and database management with PostgreSQL. The modular design ensures a seamless user experience for improved HR processes.",
        "demoLink": "",
        "date": "(Sept 2022 - Present)",
        "imgs": [
          "assets/images/cms-imgs/cms-1.png",
          "assets/images/cms-imgs/cms-2.png",
          "assets/images/cms-imgs/cms-3.png",
          "assets/images/cms-imgs/cms-4.png",
          "assets/images/cms-imgs/cms-5.png",
          "assets/images/cms-imgs/cms-6.png",
          
        ],
        "Technologies": ["Angular", "Bootstrap", "JQuery", "RxJS", "NodeJs", "PostgreSQL"]
      },
      {
        "Title": "Shree Shyam Techno Tools",
        "Description": "This is a personal project crafted using Angular and Bootstrap. This dynamic, static website showcases my ability to design a visually engaging platform. Users can explore the product catalog seamlessly and connect with me through an intuitive contact form. The absence of a backend ensures simplicity and efficient performance, underscoring my commitment to delivering a user-friendly experience.",
        "demoLink": "www.ssttools.co.in",
        "date": "(Sept 2022 - Oct -2022)",
        "imgs": [
          "assets/images/sstt-imgs/sstt-1.png",
          "assets/images/sstt-imgs/sstt-4.png",
          "assets/images/sstt-imgs/sstt-2.png",
          "assets/images/sstt-imgs/sstt-3.png",
          "assets/images/sstt-imgs/sstt-5.png",
        ],
        "Technologies": ["Angular", "Bootstrap", "JQuery"]
      },
      {
        "Title": "Billing System",
        "Description": "Demonstrating my proficiency in full-stack development, I engineered a comprehensive billing system utilizing Angular, Node.js, and PostgreSQL technologies. This project features dual logins: Billing Manager, facilitating invoice creation and credit note management, and Receivable login, dedicated to streamlined payment adjustments for invoices originated from the Billing Manager interface. This achievement highlights my capacity to deliver intricate, user-centric functionalities in a dynamic project environment.",
        "date": "June 2023 - Present",
        "imgs": [
          "assets/images/billing-imgs/billing-1.png",
          "assets/images/billing-imgs/billing-2.png",
          "assets/images/billing-imgs/billing-3.png",
          
        ],
        "demoLink": "",
        "Technologies": ["Angular", "Bootstrap", "JQuery", "RxJS", "NodeJs","PostgreSQL"]
      },
      {
        "Title": "Tankhapay",
        "Description": "At TankhaPay, I led Angular development, enhancing efficiency by 20% through an intuitive interface. I automated payroll processes, ensuring precise salary calculations. Additionally, I integrated robust RESTful APIs using Node.js, facilitating seamless communication between front end and back end. My focus was on streamlining operations and elevating overall platform performance.",
        "date": "Nov 2023 - Present",
        "imgs": [
          "assets/images/tankhpay-imgs/tankhapay_2.png",
          "assets/images/tankhpay-imgs/tankhapay_3.png",
          "assets/images/tankhpay-imgs/tankhapay_1.png",
          "assets/images/tankhpay-imgs/tankhapay_4.png",
          "assets/images/tankhpay-imgs/tankhapay_5.png"
        ],
        "demoLink": "",
        "Technologies": ["Angular", "Bootstrap", "JQuery", "RxJS", "NodeJs","PostgreSQL"]
      },
    ]

  }

  debug() {

    this.imgContainer.nativeElement.scroll({
      top: this.imgContainer.nativeElement.scrollHeight,
      left: 0,
      behavior: 'smooth',
    });
  }

}
