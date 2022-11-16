import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  constructor() { }

  logStatusChange(status: string) {
    console.log(`A server status changed, new status: ${status}`);
  }

}
