import { Component, OnInit  } from '@angular/core';
import { BusinessService } from 'src/app/services/business.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  businesses: any[] = [];

  constructor(private businessService: BusinessService) { }

  ngOnInit(): void {
    this.businessService.getBusinesses().subscribe((data) => {
        this.businesses = data;
      });
  }
}
