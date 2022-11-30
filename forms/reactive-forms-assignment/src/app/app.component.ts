import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from './custom-validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  projectForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.projectForm = new FormGroup({
      'projectName': new FormControl(
        null, 
        [Validators.required, 
          CustomValidators.invalidProjectName, 
          CustomValidators.asyncInvalidProjectName]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'projectStatus': new FormControl('critical')
    });  
  }

  onSaveSubmit(): void {
    console.log(this.projectForm.value);
  }

}
