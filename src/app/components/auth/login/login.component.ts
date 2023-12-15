import { Component, OnInit } from '@angular/core';
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
export class LoginComponent implements OnInit {



  public loginForm!: FormGroup;



  private _destroySub$ = new Subject<void>();

  constructor(
    private fb:FormBuilder,
    private _route: ActivatedRoute,
    private _router: Router,
    private _authService: AuthService
  ) {
  }

  public ngOnInit() {

    this.loginForm = new FormGroup({
      email: new FormControl('bhanbish@gmail.com', [Validators.required, Validators.email]),
      password: new FormControl('Hello12345%', [Validators.required, Validators.minLength(8)])
    })
  
  }

  public ngOnDestroy(): void {
    this._destroySub$.next();
  }

  public onSubmit(): any {
    console.log("obsubmit", this.loginForm.value)
    this._authService.login(this.loginForm.value).subscribe(
      next => {
        this._router.navigate(['/']);

      },
      error => {
        console.error('Error during login', error.error);
        alert(error.error)

      }
    );
  }
}
