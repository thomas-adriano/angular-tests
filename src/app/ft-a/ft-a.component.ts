import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-ft-a',
  templateUrl: './ft-a.component.html',
  styleUrls: ['./ft-a.component.css']
})
export class FtAComponent implements AfterViewInit {
  constructor() {}

  ngAfterViewInit() {
    console.log('fta');
  }
}
