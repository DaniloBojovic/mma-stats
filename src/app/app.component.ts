import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div style="text-align:center">
    <h1>{{title}}</h1>
    <app-fighter-list-component></app-fighter-list-component>
  </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MMA statistics';
}
