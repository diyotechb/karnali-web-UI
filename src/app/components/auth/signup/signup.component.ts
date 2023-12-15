import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs';
import { User } from 'src/app/interfaces/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { DatePipe } from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  public signupForm!: FormGroup;

   user: User = {
    firstName: 'testtest',
    middleName:'',
    lastName: 'test',
    dateOfBirth: '03/12/1993',
    email: 'bhanbish@gmail.com',
    userName:'test',
    password: 'Hello12345%'
  };

 
  public ngOnInit() {

    this.signupForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      middleName: new FormControl('', []),
      lastName: new FormControl('', [Validators.required]),

      email: new FormControl('', [Validators.required, Validators.email]),


      userName: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])
    })
  
  }

  public loginValid = true;
  
  constructor(
    private datePipe:DatePipe,
    private _route: ActivatedRoute,
    private _router: Router,
    private _authService: AuthService
  ) {
    
  }



  public onSubmit() {
    this._authService.signup(this.user).subscribe(
      next => {
        console.log('Signup successful', next);
        this._router.navigate(['/login']);

      },
      error => {
        console.error('Error during signup', error);
        alert(error.error)

      }
    );
  }

  

}
