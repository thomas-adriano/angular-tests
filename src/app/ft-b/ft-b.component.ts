import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-ft-b',
  templateUrl: './ft-b.component.html',
  styleUrls: ['./ft-b.component.css']
})
export class FtBComponent implements AfterViewInit {
  constructor() {}

  ngAfterViewInit() {
    console.log('ftb');
  }
}
