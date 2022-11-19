import { Component, OnDestroy, OnInit } from '@angular/core';

import { interval, Observable, Subscription } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private firstObsSubscription: Subscription;

  constructor() { }

  ngOnInit(): void {
    // this.firstObsSubscription = interval(1000)
    //   .subscribe(
    //     (count: number) => {
    //       console.log(count);
    //     }
    //   );

    // DEPRECATED
    const customIntervalObservable = Observable.create(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if (count === 2) {
          observer.complete();
        }
        if (count > 3) {
          observer.error(new Error('Count is greater than 3!'));
        }
        count++;
      }, 1000);
    });

    this.firstObsSubscription = customIntervalObservable
      .pipe(
        filter((data: number) => {
          return data > 0;
        }),
        map((data: number) => {
          return `Round: ${(data + 1)}`;
        })
      )
      .subscribe(
        data => {
          console.log(data);
        },
        error => {
          console.log(error);
          alert(error.message);
        },
        () => {
          console.log('Completed!');
        }
      );

    // MODERN
    // const customIntervalObservable = new Observable(
    //   observer => {
    //     let count = 0;
    //     setInterval(() => {
    //       observer.next(count++);
    //       if (count === 2) { observer.complete(); }
    //       if (count > 3) { observer.error(new Error('Count is greater than 3!')); }
    //     }, 1000);
    //   }
    // )

    // this.firstObsSubscription = customIntervalObservable
    //   .subscribe({
    //     next: next => {
    //       console.log(next);
    //     },
    //     error: error => {
    //       console.log(error);
    //       alert(error.message);
    //     },
    //     complete: () => {
    //       console.log('Completed!');
    //     }
    //   });

  }

  ngOnDestroy(): void {
    this.firstObsSubscription.unsubscribe();
  }

}
