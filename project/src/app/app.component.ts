import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'project';
  loadedFeature: string = 'recipe';  // Default 'view'

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
