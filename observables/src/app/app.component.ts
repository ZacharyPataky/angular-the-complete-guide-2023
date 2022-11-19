import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  userActivated: boolean = false;
  private activatedSub: Subscription;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.activatedSub = this.userService.activatedEmitter
      .subscribe(
        didActivate => {
          this.userActivated = didActivate;
        }
      );
  }

  ngOnDestroy() {
    this.activatedSub.unsubscribe();
  }

}
