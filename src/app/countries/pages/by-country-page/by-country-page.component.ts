import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries/countries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styleUrl: './by-country-page.component.css'
})
export class ByCountryPageComponent implements OnInit {

  public countries: Country[] = [];
  public initialValue: string = '';
  public isLoading: boolean = false;

  constructor( private countriesService: CountriesService ) {}

  public ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCountry.countries;
    this.initialValue = this.countriesService.cacheStore.byCountry.term;
  }

  public searchByCountry( term: string ): void {
    this.isLoading = true;
    this.countriesService.searchByCountry( term )
    .subscribe( countries => {
      this.countries = countries;
      this.isLoading = false;
    } );
  }

}
