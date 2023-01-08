import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserService, DataService]
})
export class UserComponent implements OnInit {

  user: {
    name: string,
  };
  isLoggedIn: boolean = false;
  data: string;

  constructor(
    private userService: UserService,
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.user = this.userService.user;
    this.dataService.getDetails().then((data: string) => this.data = data);
  }

}
