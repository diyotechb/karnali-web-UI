import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Business } from 'src/app/interfaces/business.model';
import { User } from 'src/app/interfaces/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register-business',
  templateUrl: './register-business.component.html',
  styleUrls: ['./register-business.component.css']
})
export class RegisterBusinessComponent {

  public registerBusinessForm!: FormGroup;

   business: Business = {
    name: 'testtest',
    street:'',
    city: '',
    state: '',
    zipCode: '',
    country:'',
    type: ''
  };

 
  public ngOnInit() {

    this.registerBusinessForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      street: new FormControl('', []),
      city: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required, Validators.email]),
      zipCode: new FormControl('', [Validators.required]),
      country: new FormControl('', [Validators.required]),
      type: new FormControl('', [Validators.required]),
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
    this._authService.registerBusiness(this.business).subscribe(
      next => {
        console.log('register business successful', next);
        this._router.navigate(['/business']);

      },
      error => {
        console.error('Error during signup', error);
        alert(error.error)

      }
    );
  }

  
}
