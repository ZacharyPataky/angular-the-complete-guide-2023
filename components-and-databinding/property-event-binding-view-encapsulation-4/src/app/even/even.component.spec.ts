import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvenComponent } from './even.component';

describe('EvenComponent', () => {
  let component: EvenComponent;
  let fixture: ComponentFixture<EvenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
