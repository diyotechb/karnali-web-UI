import { Injectable, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, from, map, tap, catchError } from 'rxjs';
import { User } from '../interfaces/user.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnDestroy {



  private apiUrl='http://localhost:5000';

  private _authSub$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public get isAuthenticated$(): Observable<boolean> {
    return this._authSub$.asObservable();
  }

  constructor(private _router: Router, private http:HttpClient) {
  
  }

  public ngOnDestroy(): void {
    this._authSub$.next(false);
    this._authSub$.complete();
  }

  public login(user:any): Observable<any> {
    
    const url = `${this.apiUrl}/auth/login`;
    return this.http.post(url, user);
  }

  public logout(redirect: string): Observable<void> {
    return  new Observable();

  }

  public signup(user:User): Observable<any> {
      
    const url = `${this.apiUrl}/auth/register`;
    return this.http.post(url, user);
  }



}
