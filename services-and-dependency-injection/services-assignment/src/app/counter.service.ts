import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  activeToInactiveCounter: number = 0;
  inactiveToActiveCounter: number = 0;

  constructor() { }

  incrementActiveToInactive() {
    this.activeToInactiveCounter++;
    console.log(`Active to Inactive: ${this.activeToInactiveCounter}`);
  }

  incrementInactiveToActive() {
    this.inactiveToActiveCounter++;
    console.log(`Inactive to Active: ${this.inactiveToActiveCounter}`);
  }

}
