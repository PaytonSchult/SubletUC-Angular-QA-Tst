import { Component } from '@angular/core';
import { Router } from '@angular/router';

// eslint-disable-next-line @angular-eslint/prefer-standalone
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: false
})
export class HomeComponent {
    constructor(private router: Router) {}
}
