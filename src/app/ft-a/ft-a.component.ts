import { Component, AfterViewInit } from '@angular/core';
import { Hero } from '../core/hero';

@Component({
  selector: 'app-ft-a',
  templateUrl: './ft-a.component.html',
  styleUrls: ['./ft-a.component.css']
})
export class FtAComponent implements AfterViewInit {
  public heroes = [
    new Hero('name A', 'active'),
    new Hero('name B', 'inactive'),
    new Hero('name C', 'inactive'),
    new Hero('name D', 'inactive'),
    new Hero('name E', 'inactive')
  ];

  constructor() {}

  ngAfterViewInit() {
    console.log('fta');
  }
}
