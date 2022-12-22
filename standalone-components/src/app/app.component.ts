import { Component } from '@angular/core';
import { WelcomeComponent } from './welcome/welcome.component';

@Component({
  standalone: true,
  imports: [WelcomeComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'standalone-components';
}
