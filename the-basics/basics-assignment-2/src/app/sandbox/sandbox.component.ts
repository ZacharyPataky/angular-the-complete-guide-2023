import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.scss']
})
export class SandboxComponent implements OnInit {

  username: string = '';

  constructor() { }

  ngOnInit(): void {
    // Empty
  }

  resetButton(): void {
    this.username = '';
  }

}
