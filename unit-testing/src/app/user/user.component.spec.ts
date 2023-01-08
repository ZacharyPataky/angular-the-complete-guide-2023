import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { DataService } from '../shared/data.service';

import { UserComponent } from './user.component';
import { UserService } from './user.service';

describe('UserComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserComponent]
    }).compileComponents();
  });

  it('should create the app', () => {
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should use user name from the service', () => {
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    let userService = fixture.debugElement.injector.get(UserService);
    fixture.detectChanges();
    expect(userService.user.name).toEqual(app.user.name);
  });

  it('should display the user name if user is not logged in', () => {
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    app.isLoggedIn = false;
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).not.toContain(app.user.name);
  });

  it('should not fetch data successfully if not called asynchronously', () => {
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    let dataService = fixture.debugElement.injector.get(DataService);
    let spy = spyOn(dataService, 'getDetails')
      .and.returnValue(Promise.resolve('Data'));
    fixture.detectChanges();
    expect(app.data).toBe(undefined);
  });

  it('should fetch data successfully if called asynchronously', async(() => {
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    let dataService = fixture.debugElement.injector.get(DataService);
    let spy = spyOn(dataService, 'getDetails')
      .and.returnValue(Promise.resolve('Data'));
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(app.data).toBe('Data');
    });
  }));

  it('should fetch data successfully if called asynchronously', fakeAsync(() => {
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    let dataService = fixture.debugElement.injector.get(DataService);
    let spy = spyOn(dataService, 'getDetails')
      .and.returnValue(Promise.resolve('Data'));
    fixture.detectChanges();
    tick();
    expect(app.data).toBe('Data');
  }))
});
