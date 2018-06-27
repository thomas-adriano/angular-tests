import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  trigger,
  style,
  animate,
  transition,
  query,
  state,
  group
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('flyInOut', [
      transition('* => *', [
        // The query function has three params.
        // First is the event, so this will apply on entering or when the element is added to the DOM.
        // Second is a list of styles or animations to apply.
        // Third we add a config object with optional set to true, this is to signal
        // angular that the animation may not apply as it may or may not be in the DOM.
        query(
          ':enter',
          [
            style({
              transform: 'translateX(-100%)',
              opacity: 0
            })
          ],
          {
            optional: true
          }
        ),
        query(
          ':leave',
          [
            style({
              transform: 'translateX(0)',
              opacity: 1
            }),
            group([
              animate(
                '0.133s ease-out',
                style({ transform: 'translateX(100%)' })
              ),
              animate('0.133s ease-out', style({ opacity: 0 }))
            ])
          ],
          { optional: true }
        ),
        query(
          ':enter',
          [
            style({
              transform: 'translateX(-100%)',
              opacity: 0
            }),
            group([
              animate(
                '0.233s ease-in',
                style({
                  transform: 'translateX(0)'
                })
              ),
              animate(
                '0.233s ease-in',
                style({
                  opacity: 1
                })
              )
            ])
          ],
          { optional: true }
        )
      ])
      // state('in', style({ transform: 'translateX(0)' })),
      // transition(':enter', [
      //   style({ transform: 'translateX(-100%)' }),
      //   animate(225)
      // ]),
      // transition(':leave', [
      //   animate(225, style({ transform: 'translateX(100%)' }))
      // ])
    ])
  ]
})
export class AppComponent implements AfterViewInit {
  title = 'app';

  constructor(private router: Router) {}

  ngAfterViewInit() {
    console.log('app');
  }
}
