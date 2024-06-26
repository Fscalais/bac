import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatFormField} from "@angular/material/form-field";
import {MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormField,
    MatInput,
    MatButton,
    MatLabel
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent implements OnInit{
  signupForm!: FormGroup;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.signupForm = this.createFormGroup();
    };

  createFormGroup() {
    return new FormGroup({
      userFName: new FormControl('', [Validators.required, Validators.minLength(2)]),
      userLName: new FormControl('', [Validators.required, Validators.minLength(2)]),
      userBirth : new FormControl('', [Validators.required]),
      userPassword: new FormControl('', [Validators.required, Validators.minLength(7)]),
      email: new FormControl('', [Validators.required, Validators.email])

    });
  }
  signup() {
    this.authService.signup(this.signupForm.value).subscribe((msg)=>console.log(msg));
  }
}
