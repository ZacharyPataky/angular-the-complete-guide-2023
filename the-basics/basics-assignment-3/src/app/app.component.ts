import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'basics-assignment-3';

  showSecret: boolean = false;
  log: Date[] = []

  onToggleDetails() {
    this.showSecret = !this.showSecret;
    this.log.push(new Date());
  }
}
