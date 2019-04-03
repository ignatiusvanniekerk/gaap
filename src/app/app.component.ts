import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'Gaap Test';

  public toDisplay: number = 1;

  public changeQuestion(question: number): void {
    this.toDisplay = question;
  }
}
