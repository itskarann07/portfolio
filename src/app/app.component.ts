import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { Title, Meta } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'resume-ui';

  constructor(
    private titleService: Title,
    private metaService: Meta,
    private translateService: TranslateService,
    private location: Location,
    ){
    }
  ngOnInit(): void{
        this.titleService.setTitle( "Karan Sharma | Developer" );

    this.metaService.addTags([
      {name: 'keywords', content: 'Full, Stack, developer'},
      {name: 'description', content: 'I have 1+ years of experience developing Frontend, Interfaces and Technological solutions to make the web a better place.'},
    ]);


    AOS.init();

  }
}
