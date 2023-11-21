import { Component } from '@angular/core';
import { BusinessService } from 'src/app/services/business.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent {


  businesses: any[] = [];

  constructor(private businessService: BusinessService) { }

  ngOnInit(): void {
    this.businessService.getBusinesses().subscribe((data) => {
        this.businesses = data;
      });
  }
}
