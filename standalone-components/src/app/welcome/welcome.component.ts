import { Component, OnInit } from '@angular/core';
import { DetailsComponent } from './details/details.component';

@Component({
  standalone: true,
  imports: [DetailsComponent],
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

}
