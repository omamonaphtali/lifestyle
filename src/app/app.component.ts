import { Component, HostListener, ElementRef } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  navbarOpen = false;
  menOpen = false;
  womenOpen = false;
  kidsOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
  toggleMen() {
    this.menOpen = !this.menOpen;
  }
  toggleWomen() {
    this.womenOpen = !this.womenOpen;
  }
  toggleKids() {
    this.kidsOpen = !this.kidsOpen;
  }
  title = 'ng-lifestyle';
}
