import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  status: boolean = true;
  logs = [];

  onClick() {
    this.status = !this.status;
    this.logs.push(this.logs.length + 1);
  }
}
