import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs';
import { User } from 'src/app/interfaces/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {


   user: User = {
    firstName: 'testtest',
    middleName:'',
    lastName: 'test',
    dateOfBirth: '03/12/1993',
    email: 'test@gmail.com',
    userName:'test',
    password: 'Hello12345%'
  };

  public loginValid = true;
  
  constructor(
    private datePipe:DatePipe,
    private _route: ActivatedRoute,
    private _router: Router,
    private _authService: AuthService
  ) {
    
  }



  public signup() {

    this._authService.signup(this.user).subscribe(
      next => {
        console.log('Signup successful', next);

      },
      error => {
        console.error('Error during signup', error);
        alert(error.error)

      }
    );
  }

  

}
