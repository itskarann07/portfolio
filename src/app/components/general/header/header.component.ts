import { Component, OnInit, ViewChild, HostListener, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import {trigger, style, query, transition, stagger, animate } from '@angular/animations'
import { TranslateService } from '@ngx-translate/core';
import { FormControl } from '@angular/forms';
import { ThisReceiver } from '@angular/compiler';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations:[
    trigger("animateMenu",[
      transition(":enter",[
        query("*", [
          style({opacity: 0, transform: "translateY(-50%)"}),
          stagger(50,[
            animate(
              "250ms cubic-bezier(0.35, 0, 0.25, 1)",
              style({opacity: 1, transform: "none"}))
          ])
        ])
      ])
    ])
  ]
})



export class HeaderComponent implements OnInit {

  responsiveMenuVisible: Boolean = false;
  pageYPosition: any;
  languageFormControl: FormControl= new FormControl();
  cvName: string = "";

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {



  }

  scroll(el:any) {
    let ele:any = document.getElementById(el);

    if(ele) {
      ele.scrollIntoView({behavior: 'smooth'});
    } else{
      this.router.navigate(['/home']).then(()=> ele.scrollIntoView({behavior: 'smooth'}) );
    }
    this.responsiveMenuVisible=false;
  }

  downloadCV(){
      this.cvName = 'Karan_resume.pdf'
      
      let url = window.location.href;

      // Open a new window with the CV
      let newurl = url + "/../assets/cv/Karan_resume.pdf";
      newurl = newurl.replace('karan/','');
      window.open(newurl, "_blank");

  }

  @HostListener('window:scroll', ['getScrollPosition($event)'])
    getScrollPosition(event:any) {
        this.pageYPosition=window.pageYOffset
    }

    changeLanguage(language: string) {
      this.languageFormControl.setValue(language);
    }
}
