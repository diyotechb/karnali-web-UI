import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, filter, takeUntil, take } from 'rxjs';
import { User } from 'src/app/interfaces/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public loginValid = true;


  loginForm:FormGroup;



  private _destroySub$ = new Subject<void>();

  constructor(
    private fb:FormBuilder,
    private _route: ActivatedRoute,
    private _router: Router,
    private _authService: AuthService
  ) {
    this.loginForm = this.fb.group({
      email:['bhanbish@gmail.com', Validators.required],
      password:['Hello12345%', Validators.required]
    })
  }

  public ngOnInit(): void {
  
  }

  public ngOnDestroy(): void {
    this._destroySub$.next();
  }

  public onSubmit(): any {
    console.log("obsubmit", this.loginForm.value)
    this._authService.login(this.loginForm.value).subscribe(
      next => {
        console.log('login successful', next);

      },
      error => {
        console.error('Error during login', error.error);
        alert(error.error)

      }
    );
  }
}
