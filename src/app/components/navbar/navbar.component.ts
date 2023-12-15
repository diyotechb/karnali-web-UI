import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isLoggedIn: boolean = false;


  constructor(private _authService:AuthService){}
  
  ngOnInit(): void {

    this.isLoggedIn = this._authService.checkToken();
  }
  signUp(){
    
  }
}
