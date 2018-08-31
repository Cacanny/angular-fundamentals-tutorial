import { Component } from '@angular/core';

@Component({
  selector: 'events-app-cmp',
  template: `
    <events-nav-bar></events-nav-bar>
    <router-outlet> </router-outlet>
  `
})
export class AppComponent {
  title = 'app';
}
