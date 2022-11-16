import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  @Input() users: string[];
  @Output() userSetToActive = new EventEmitter<number>();

  onSetToActive(id: number) {
    this.userSetToActive.emit(id);
  }
}
