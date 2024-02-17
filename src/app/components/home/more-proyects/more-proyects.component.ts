import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-more-proyects',
  templateUrl: './more-proyects.component.html',
  styleUrls: ['./more-proyects.component.scss']
})
export class MoreProyectsComponent implements OnInit {
projects:any =[];
  constructor(
    private router: Router
    ) { }

    ngOnInit() {

      this.projects =  [{
        "Title": "Driver Awareness System",
        "Description": "Developed a Pyton Code to scan Face of Driver and find out if driver is asleep.Implemented Keras and CNN Methordology to read face postures and determine if driver is asleep as well as if the car is in Motion.",
        "ghLink": "",
        "demoLink": "",
        "Technologies": ["Python", "Machine-Learning", "Keras"]
    },
    {
        "Title": "Handwriting to Text Conversion",
        "Description": "Developed a Pyton Code to scan Handwriting and convert it into Text. Implemented Keras and CNN Methordology for Conversion of Scanned Material",
        "ghLink": "",
        "demoLink": "",
        "Technologies": ["Python", "Machine-Learning", "Keras"]
    },
    {
        "Title": "Smart Plant",
        "Description": "Developed a Chipset that can read the Moisture of soil.If Moisture is not at adequate level for a certain time. then supply it with water using motor and a prefilled water storage.",
        "ghLink": "",
        "demoLink": "",
        "Technologies": ["Embedded C", "Aurdino", "Chipset"]
    },
    {
        "Title": "Tic Tac Toe Game",
        "Description": "Personal project of a game that replicates tic tac toe",
        "ghLink": "https://mayank200/Tic-tac-toe-game-Angular",
        "demoLink": "",
        "Technologies": ["Angular", "CSS", "GIT", "JavaScript"]
    },
   
]


        this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0)
        });
    }
    redirect(route: string, event:any) {
      const id = event.target.id;
      if(id=='demoLink' || id=='ghLink' || route==''){
        return
      }
      window.open(route, '_blank');
    }

}
