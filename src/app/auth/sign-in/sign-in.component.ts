import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  signInForm!: FormGroup;
  submitted: boolean = false;
  emailPattern = '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$';

  constructor(
    private fb: FormBuilder
  ){}

    ngOnInit(): void {
      this.signInForm = this.fb.group({
        email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
        password: ['', [Validators.required, Validators.minLength(6)]],
      })
    }

    signInFormSubmit() {
      this.submitted = true;
      if (this.signInForm.valid) {

      }
    }

}
