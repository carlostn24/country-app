import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrl: './by-capital-page.component.css'
})
export class ByCapitalPageComponent {

  public countries: Country[] = [];

  constructor( private countriesService: CountriesService ) {}

  public searchByCapital( term: string ): void {
    this.countriesService.searchByCapital( term )
      .subscribe( countries => {
        this.countries = countries;
      } );
  }

}
