import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  collapsed: boolean = true;
  @Output() featureSelected = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    // Empty
  }

  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }

}
