import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signUpForm!: FormGroup;
  submitted: boolean = false;
  emailPattern = '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$';
  user:any[]= []

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
        firstName: ['', [Validators.required]],
        lastName: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
        contact: ['', [Validators.required, Validators.minLength(10), Validators.pattern(/^[0-9]\d*$/)]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        iAgree: ['', [Validators.required]]
    });
  }

  signUpFormSubmit() {
    this.submitted = true;
    if(this.signUpForm.valid) {
      const newUser = this.signUpForm.value;
      this.saveUser(newUser);
      console.log(newUser, 'newUser');
      this.signUpForm.reset();
      this.router.navigate(['/sign-in']);
    } 
  }

  saveUser(userDetail: object) {
    this.user.push(userDetail);
    console.log('User data saved:', userDetail);
    
    // Optionally, store the users in localStorage (or use JSON)
    localStorage.setItem('users', JSON.stringify(this.user));
  }

}
