import { Component } from '@angular/core';
import { BusinessService } from 'src/app/services/business.service';
import { Business } from '../../interfaces/business.model';
@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent {


  businesses: any[] = [];
  searchTerm: string = '';

  constructor(private businessService: BusinessService) { }

  ngOnInit(): void {
    this.businessService.getBusinesses().subscribe((data) => {
        this.businesses = data;
        console.log(this.businesses)
      });
  }

  applyFilter(): void {
    console.log("apply filter", this.searchTerm)
    this.businesses = this.filterBusinesses(this.searchTerm);
  }

  filterBusinesses(searchTerm: string): Business[] {
    searchTerm = searchTerm.toLowerCase();
    return this.businesses.filter(
      (business) =>
        business.name.toLowerCase().includes(searchTerm) ||
        business.address.postalCode.includes(searchTerm)
    );
  }
}
