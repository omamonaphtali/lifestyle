import { Component } from '@angular/core';

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
