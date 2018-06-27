import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { routeFlyInOut } from './shared/animations/route-fly-in-out';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [routeFlyInOut()]
})
export class AppComponent implements AfterViewInit {
  title = 'app';

  constructor(private router: Router) {}

  ngAfterViewInit() {
    console.log('app');
  }
}
