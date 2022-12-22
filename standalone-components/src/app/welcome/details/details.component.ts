import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from 'src/app/shared/analytics/analytics.service';
import { HighlightDirective } from 'src/app/shared/highlight/highlight.directive';

@Component({
  standalone: true,
  imports: [HighlightDirective],
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor(private analyticsService: AnalyticsService) {}

  ngOnInit(): void { }

  onClick() {
    this.analyticsService.registerClick();
  }

}
