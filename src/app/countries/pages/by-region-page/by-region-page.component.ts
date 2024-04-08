import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries/countries.service';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrl: './by-region-page.component.css'
})
export class ByRegionPageComponent {

  public countries: Country[] = [];

  constructor( private countriesService: CountriesService ) {}

  public searchByRegion( region: string ): void {
    this.countriesService.searchByRegion( region )
      .subscribe( countries => {
        this.countries = countries;
      } );
  }

}
