import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries/countries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styleUrl: './by-country-page.component.css'
})
export class ByCountryPageComponent {

  public countries: Country[] = [];

  constructor( private countriesService: CountriesService ) {};

  public searchByCountry( term: string ): void {
    this.countriesService.searchByCountry( term )
    .subscribe( countries => {
      this.countries = countries;
    } );
  }

}
