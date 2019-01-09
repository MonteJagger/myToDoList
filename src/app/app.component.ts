import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'to-do';

  printDate(date: Date) {
    console.log("parent component");
    console.log(date);
  }
}
