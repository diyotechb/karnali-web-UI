import { Component } from '@angular/core';
import { Business } from 'src/app/interfaces/business.model';
import { AuthService } from 'src/app/services/auth.service';
import { BusinessService } from 'src/app/services/business.service';

@Component({
  selector: 'app-business-list',
  templateUrl: './business-list.component.html',
  styleUrls: ['./business-list.component.css']
})
export class BusinessListComponent {

  businesses: any[] = [];
  searchTerm: string = '';
   isLoggedIn:boolean=false;
   filteredBusiness:any[] =[];

  constructor(private businessService: BusinessService, private _authService:AuthService) { }

  ngOnInit(): void {
    this.businessService.getBusinesses().subscribe((data) => {
        this.businesses = data;
        this.filteredBusiness=this.businesses;
      });
    this.isLoggedIn = this._authService.checkToken();

  }

  applyFilter(): void {
   
    this.filteredBusiness = this.filterBusinesses(this.searchTerm);
  }

  filterBusinesses(searchTerm: string): Business[] {
    searchTerm = searchTerm.toLowerCase();
    return this.businesses.filter(
      (business) =>
        business.name.toLowerCase().includes(searchTerm) ||
        business.address.postalCode.includes(searchTerm)
    );
  
  }


  registerBusiness(){

  }
}
