import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('form') form: NgForm;
  subscriptions: string[] = ['Basic', 'Advanced', 'Pro'];
  defaultSubscription: string = "advanced";
  submitted = false;

  results = {
    emailAddress: '',
    password: '',
    subscription: ''
  };

  onSubmit(): void {
    console.log(this.form);

    this.submitted = true;
    this.results.emailAddress = this.form.value.email;
    this.results.password = this.form.value.password;
    this.results.subscription = this.form.value.subscription;

    this.form.reset();
  }

}
