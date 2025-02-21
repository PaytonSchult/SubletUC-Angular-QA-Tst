// ---------------------------------------
// Email: quickapp@ebenmonney.com
// Templates: www.ebenmonney.com/templates
// (c) 2024 www.ebenmonney.com/mit-license
// ---------------------------------------

import { Component, inject, Renderer2 } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import {  ToastaModule } from 'ngx-toasta';
import { NgbCollapseModule, NgbPopover } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeModule } from './modules/home/home.module';
import { HomeComponent } from "./modules/home/home/home.component";


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [
    ToastaModule, RouterLink, RouterLinkActive, NgbCollapseModule, NgbPopover,
    RouterOutlet, TranslateModule, NavbarComponent, FooterComponent, HomeModule,
    HomeComponent
]
})
export class AppComponent {
  isAppLoaded = false;

  ngOnInit(): void {
    setTimeout(() => this.isAppLoaded = true, 1000);

  }

  router = inject(Router);
  renderer = inject(Renderer2);
}
